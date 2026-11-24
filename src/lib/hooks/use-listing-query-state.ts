"use client"

import { PaginationState, Updater } from "@tanstack/react-table"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo } from "react"

type UseListingQueryStateOptions = {
  defaultTab?: string
  tabKey?: string
  pageKey?: string
  pageSizeKey?: string
  defaultPageIndex?: number
  defaultPageSize?: number
  defaultOrderby?: string
}

export function useListingQueryState({
  defaultTab = "all",
  tabKey = "tab",
  pageKey = "page",
  pageSizeKey = "pagesize",
  defaultPageIndex = 0,
  defaultPageSize = 10,
  defaultOrderby,
}: UseListingQueryStateOptions = {}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentTab = searchParams.get(tabKey) ?? defaultTab

  const pagination = useMemo<PaginationState>(
    () => ({
      pageIndex: Number(searchParams.get(pageKey) ?? defaultPageIndex),
      pageSize: Number(searchParams.get(pageSizeKey) ?? defaultPageSize),
    }),
    [searchParams, pageKey, pageSizeKey, defaultPageIndex, defaultPageSize],
  )

  const orderby = searchParams.get("orderby") ?? defaultOrderby ?? undefined
  const search = searchParams.get("search") ?? undefined

  const commitQuery = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(searchParams.toString())
      mutate(params)

      const nextQuery = params.toString()
      if (nextQuery === searchParams.toString()) return

      router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname)
    },
    [pathname, router, searchParams],
  )

  const setPagination = useCallback(
    (updater: Updater<PaginationState>) => {
      const next = typeof updater === "function" ? updater(pagination) : updater

      commitQuery((params) => {
        params.set(pageKey, String(next.pageIndex))
        params.set(pageSizeKey, String(next.pageSize))
      })
    },
    [commitQuery, pageKey, pageSizeKey, pagination],
  )

  const handleTabChange = useCallback(
    (nextTab: string) => {
      commitQuery((params) => {
        params.set(tabKey, nextTab)
        params.set(pageKey, "0")
      })
    },
    [commitQuery, tabKey, pageKey],
  )

  return {
    currentTab,
    handleTabChange,
    pagination,
    setPagination,
    searchParams,
    orderby,
    search,
  }
}