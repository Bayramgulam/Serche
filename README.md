# Kafe Sərçə

Azerbaijani café website and QR-friendly digital menu. Next.js App Router, strict TypeScript, Tailwind CSS, Framer Motion and Lucide. Static export with locally optimized responsive WebP images; no external image hotlinks or backend.

## Run

- `npm ci`
- `npm run dev` — local server
- `npm run lint`
- `npm run typecheck`
- `npm test` — browser tests against the running development server; uses installed Chrome
- `npm run build` — production static output in `out/`
- `npm run images` — regenerate responsive images after replacing the source JPGs

## Owner updates

- `src/config/business.ts`: centralized address, map URL, telephone, hours, coordinates and founding year. The official logo can be added there when supplied.
- `src/data/menu.ts`: categories and menu records. Replace the clearly marked demonstration dataset and set `isDemo` to false only after owner verification. Prices are numbers in AZN; null means pending. Variants, allergens, tags, images and availability are supported. Unavailable items stay visible.
- `src/types/menu.ts`: record structure.
- `src/components/brand.tsx`: isolated temporary text wordmark. The favicon and social card are also temporary branding.
- `src/app/globals.css`: shared tokens and responsive layouts.
- `NEXT_PUBLIC_SITE_URL`: optional canonical origin override at build time.

Business details were checked on 7 September 2026. The current 28 May location is shown because it agrees with the Instagram profile and current map listing. Current item names and availability are demonstrations, not an actual café menu. No demonstration prices are published. Featured products remain a friendly pending state.

## Photography

The real exterior and branded-cup photographs come from the current Kafe Sərçə Yandex Maps listing and are stored locally rather than hotlinked. Two atmospheric images remain clearly labeled Pexels stock photographs. Replace any third-party photograph with owner-supplied originals when available.

- Current place listing and real photos: https://yandex.az/maps/org/30006629847/
- Current address, phone and hours corroboration: https://yandex.az/maps/10253/baku/house/YEAYfgNjTEUOQFpqfX95dH5mZQ%3D%3D/
- Instagram profile: https://www.instagram.com/kafe.serche/

- Volkan Buyukvardar: https://www.pexels.com/photo/modern-green-interior-design-of-cafe-14614776/
- Ebahir: https://www.pexels.com/photo/vintage-coffee-and-books-on-wooden-table-28571292/

## Verification

Browser suite covers 360, 390, 768, 1024 and 1440px on homepage and menu; no horizontal overflow; search transliteration and description search; every category; direct category URLs and reload; unavailable/empty states; mobile focus trap and Escape restoration; reduced motion; axe WCAG A/AA checks; custom 404. Screenshots are generated in ignored `test-results/`. These automated checks do not replace owner review of business content.

The site has no cart, payment, authentication, reservations or admin dashboard. Phone and map actions appear when verified values are supplied. Deployment is owner-private until public release is explicitly requested.
