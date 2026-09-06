import sharp from "sharp";
import { readdir } from "node:fs/promises";
const images = await readdir("public/images");
await Promise.all(
  images
    .filter((file) => file.endsWith(".jpg"))
    .flatMap((file) =>
      [384, 640, 1080, 1600].map((width) =>
        sharp(`public/images/${file}`)
          .resize(width)
          .webp({ quality: 78 })
          .toFile(`public/images/${file.replace(".jpg", `-${width}.webp`)}`),
      ),
    ),
);
console.log("Responsive WebP images generated.");
