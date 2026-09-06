// Replace nulls only with owner-verified information.
export const business = {
  name: "Kafe Sərçə",
  instagram: "https://www.instagram.com/kafe.serche/",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://kafe-serche.bayramqulam.chatgpt.site",
  address: null as string | null,
  mapsUrl: null as string | null,
  phone: null as string | null,
  openingHours: null as string | null,
  founded: null as number | null,
  petFriendly: true,
  logo: null as string | null,
  phrase: "Qaranquş gəldi gedərdi, sən Sərçədən bərk yapış.",
  photosAreIllustrative: true,
};
