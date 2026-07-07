import { NextResponse, type NextRequest } from "next/server";

const apexDomain = "serveicat.com";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0];

  if (host === `www.${apexDomain}`) {
    url.hostname = apexDomain;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-serveicat-pathname", url.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand|images).*)"]
};
