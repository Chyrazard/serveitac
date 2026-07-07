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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand|images).*)"]
};
