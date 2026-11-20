import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server"

const publicRoutes = [
  {
    path: "/",
    whenAuthenticated: "redirect",
  },
  {
    path: "/login",
    whenAuthenticated: "redirect",
  },
  {
    path: "/login/esqueci-senha",
    whenAuthenticated: "redirect",
  },
  {
    path: "/login/resetar-senha",
    whenAuthenticated: "redirect",
  },
]

export const REDIRECT_WHEN_NOT_AUTHENTICATE_ROUTE = "/"
export const REDIRECT_WHEN_AUTHENTICATE_ROUTE = "/inicio"
export const TOKEN_LABEL_AUTH = "access_token"
export const TOKEN_LABEL_REFRESH = "refresh_token"

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find((route) => {
    return route.path === path
  })
  const authToken = request.cookies.get(TOKEN_LABEL_AUTH)

  if (path.startsWith("/sso/")) {
    return NextResponse.next()
  }

  if (!authToken && publicRoute) {
    return NextResponse.next()
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATE_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === "redirect"
  ) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATE_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !publicRoute) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}