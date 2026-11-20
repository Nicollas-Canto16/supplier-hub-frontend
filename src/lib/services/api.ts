import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface RetryQueueItem {
  resolve: (value?: any) => void
  reject: (error?: any) => void
  config: AxiosRequestConfig
}

export const BASE_URL = "http://localhost:5555/"

export function setupAPIClient(ctx: GetServerSidePropsContext | undefined = undefined){
    const refreshAndRetryQueue: RetryQueueItem=[]
}