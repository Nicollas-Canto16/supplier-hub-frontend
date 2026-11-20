import { GetServerSidePropsContext } from "next";
import axios, { AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";
import { TOKEN_LABEL_AUTH, TOKEN_LABEL_REFRESH } from "@/proxy";
import { refreshToken } from "../contexts/auth.provider";

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

export const BASE_URL = "http://localhost:5555/";

export function setupAPIClient(
  ctx: GetServerSidePropsContext | undefined = undefined,
) {
  const refreshAndRetryQueue: RetryQueueItem[] = [];
  let isRefreshing = false;

  const api = axios.create({ baseURL: BASE_URL });

  api.interceptors.request.use(
    (config) => {
      const cookies = parseCookies(ctx);
      const { [TOKEN_LABEL_AUTH]: token } = cookies;

      if (token) {
        config.headers!["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const cookies = parseCookies(ctx);
      const { [TOKEN_LABEL_REFRESH]: tokenRefresh } = cookies;

      const originalRequest: AxiosRequestConfig & { _retry?: boolean } =
        error.config;

      if (
        error.response &&
        error.response.status === 401 &&
        !!tokenRefresh &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const newAccessToken = await refreshToken(ctx);

            error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

            refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
              api
                .request(config)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
            });

            refreshAndRetryQueue.length = 0;
            return api(originalRequest);
          } catch (refreshError) {
            throw refreshError;
          } finally {
            isRefreshing = false;
          }
        }
        return new Promise<void>((resolve, reject) => {
          refreshAndRetryQueue.push({
            config: originalRequest,
            resolve,
            reject,
          });
        });
      }
      return Promise.reject(error);
    },
  );
  return api;
}

export const api = setupAPIClient();
