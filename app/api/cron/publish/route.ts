import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAllPosts } from "@/lib/blog";

/**
 * Bi-weekly "publish" trigger. Vercel Cron hits this every Wednesday (see
 * vercel.json). It revalidates the blog surfaces so any post whose publishDate
 * has arrived flips from hidden preview to live — added to the index, dropped
 * into the sitemap, and un-noindexed.
 *
 * The pages also carry a 6-hour ISR window, so this cron is the prompt reveal,
 * not the only safety net.
 */
export function GET(request: Request) {
  // Vercel automatically sends this header when CRON_SECRET is set in the
  // project env. If it's set, require it; if not, allow (revalidation is safe).
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }
  }

  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  for (const post of getAllPosts()) {
    revalidatePath(`/blog/${post.slug}`);
  }

  return NextResponse.json({ ok: true, revalidatedAt: new Date().toISOString() });
}
