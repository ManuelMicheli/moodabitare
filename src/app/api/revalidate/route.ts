import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    // Accept secret via Authorization header (preferred) or query param (legacy)
    const authHeader = req.headers.get("authorization");
    const headerSecret = authHeader?.startsWith("Bearer ")
      ? authHeader.slice(7)
      : null;
    const querySecret = req.nextUrl.searchParams.get("secret");
    const secret = headerSecret || querySecret;

    if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    const body = await req.json();
    const type = body?._type as string | undefined;

    // Revalidate relevant paths based on content type
    if (type) {
      switch (type) {
        case "productCategory":
        case "product":
          revalidatePath("/prodotti", "page");
          revalidatePath("/prodotti/[slug]", "page");
          break;
        case "project":
          revalidatePath("/progetti", "page");
          break;
        case "blogPost":
          revalidatePath("/blog", "page");
          revalidatePath("/blog/[slug]", "page");
          break;
        case "testimonial":
        case "heroSlide":
        case "service":
        case "brandPartner":
        case "siteSettings":
          revalidatePath("/", "page");
          break;
        default:
          revalidatePath("/", "layout");
      }
    }

    return NextResponse.json({ revalidated: true, type });
  } catch (error) {
    console.error("Revalidation error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
