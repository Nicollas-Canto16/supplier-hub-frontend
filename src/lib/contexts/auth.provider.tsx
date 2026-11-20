"use client";

import { BASE_URL, api } from "@/lib/services/api";
import { TOKEN_LABEL_AUTH, TOKEN_LABEL_REFRESH } from "@/proxy";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import nookies, { parseCookies, setCookie } from "nookies";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SignCredentials = {
  email: string;
  password: string;
};

type ResponseSignIn = {
  accessToken: string;
  refreshToken: string;
};

export type Me = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  isActive: boolean;
};

type AuthContextData = {
  signIn(credentials: SignCredentials): Promise<ResponseSignIn | void>;
  signOut: () => void;
  me: Me | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  onSetToken: (params: { accessToken: string; refreshToken: string }) => void;
  refreshMe: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export function signOut() {
  nookies.set({}, TOKEN_LABEL_AUTH, "", {
    maxAge: -1,
    path: "/",
  });
  nookies.set({}, TOKEN_LABEL_REFRESH, "", {
    maxAge: -1,
    path: "/",
  });

  window.location.reload();
}

export const AuthContext = createContext({} as AuthContextData);

export async function refreshToken(
  ctx: GetServerSidePropsContext | undefined = undefined,
): Promise<string | undefined> {
  const { [TOKEN_LABEL_REFRESH]: tokenRefresh } = parseCookies(ctx);

  try {
    const refreshTokenResponse = await axios.post<{
      refreshToken: string;
      accessToken: string;
    }>(`${BASE_URL}auth/refresh-token`, { token: tokenRefresh });

    setCookie(ctx, TOKEN_LABEL_AUTH, refreshTokenResponse.data.accessToken, {
      maxAge: 60 * 60 * 24 * 1,
      path: "/",
    });
    setCookie(
      ctx,
      TOKEN_LABEL_REFRESH,
      refreshTokenResponse.data.refreshToken,
      { maxAge: 60 * 60 * 24 * 1, path: "/" },
    );
    return refreshTokenResponse.data.accessToken;
  } catch {
    signOut();
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { [TOKEN_LABEL_AUTH]: tokenCookies } = parseCookies();
  const [token, setToken] = useState(tokenCookies);
  const [me, setMe] = useState<Me | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!token && !!me;

  async function signIn(credentials: SignCredentials) {
    const pathUrl = "/auth/session";
    const signReponse = await api.post<ResponseSignIn>(pathUrl, credentials);
    const { accessToken, refreshToken } = signReponse.data;
    setToken(accessToken);

    nookies.set(null, TOKEN_LABEL_AUTH, accessToken, {
      maxAge: 60 * 6 * 24 * 1,
      path: "/",
    });
    nookies.set(null, TOKEN_LABEL_REFRESH, refreshToken, {
      maxAge: 60 * 6 * 24 * 7,
      path: "/",
    });
  }

  async function getMe(token: string) {
    try {
      const response = await api.get<Me>("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMe({
        ...response.data,
      });
    } catch {
      signOut();
    } finally {
      setIsLoading(false);
    }
  }

  async function onSetToken({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    setToken(accessToken);

    nookies.set(null, TOKEN_LABEL_AUTH, accessToken, {
      maxAge: 60 * 60 * 24 * 1, //1 Days
      path: "/",
    });
    nookies.set(null, TOKEN_LABEL_REFRESH, refreshToken, {
      maxAge: 60 * 60 * 24 * 7, //7 Days
      path: "/",
    });
  }
  useEffect(() => {
    if (token) {
      getMe(token);
    } else {
      setIsLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        me,
        isAuthenticated,
        signOut,
        signIn,
        onSetToken,
        isLoading,
        refreshMe: () => getMe(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
