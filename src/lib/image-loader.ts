import type { ImageLoaderProps } from "next/image";
// Locally pre-generated WebP sizes preserve responsive optimization on static hosting.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.startsWith("/images/")) return src;
  const size = [384, 640, 1080, 1600].find((size) => size >= width) || 1600;
  return src.replace(".jpg", `-${size}.webp`);
}
