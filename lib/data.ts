// TODO(owner): items marked TODO are unconfirmed. Empty price/description fields are simply not rendered.
export const site = {
  name: "Bintang Cafe",
  instagram: "https://www.instagram.com/_bintangcafe/",
  address: "11/910 Albany Hwy, Victoria Park WA", // seen on Instagram profile — confirm full postal address
  phone: "" as string, // TODO
  hours: [] as { day: string; time: string }[], // TODO: "Open 6 days a week" is not a schedule — add each day
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("11/910 Albany Hwy, Victoria Park WA") +
    "&output=embed", // TODO confirm pin
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Bintang Cafe 910 Albany Hwy Victoria Park WA"),
};
export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];
// Hero + story copy = proposed copy from the brand guideline (confirm with owner)
export const hero = {
  eyebrow: "Authentic Indonesian food in Perth",
  script: "A taste of Bali in Perth",
  headline: "A Taste of Indonesia, Right Here in Victoria Park.",
  text: "Discover Indonesian favourites, comforting meals and welcoming café hospitality at Bintang Cafe.",
  video: {
    mp4: "/videos/hero.mp4",
    webm: "/videos/hero.webm",
    poster: "/images/hero-poster.jpg",
  }, // TODO real café footage (muted, 10–20s loop, <8MB)
  videoLabel: "Bintang Cafe dishes being served",
};
export const story = {
  eyebrow: "Our Café",
  title: "Familiar flavours, a warm welcome",
  text: [
    "Bintang Cafe brings Indonesian comfort food and familiar flavours to the Victoria Park community.",
    "Come in for breakfast, lunch and something delicious.",
  ], // TODO owner story
  image: "/images/story.jpg",
  imageAlt: "Inside Bintang Cafe", // TODO real interior photo
};
export type Dish = {
  id: string;
  name: string;
  category: "breakfast" | "soups" | "mains" | "snacks" | "drinks";
  image: string;
  alt: string;
  description?: string;
  price?: string;
};
// Names observed on Instagram posts — confirm spelling, availability, ingredients, prices.
export const dishes: Dish[] = [
  {
    id: "soto-betawi",
    name: "Soto Betawi",
    category: "soups",
    image: "/images/soto-betawi.jpg",
    alt: "Soto Betawi served with rice and fresh garnishes",
  },
  {
    id: "gulai-lamb-soup",
    name: "Gulai Lamb Soup",
    category: "soups",
    image: "/images/gulai-lamb-soup.jpg",
    alt: "Gulai lamb soup",
  },
  {
    id: "rawon",
    name: "Rawon",
    category: "soups",
    image: "/images/rawon.jpg",
    alt: "Rawon",
  },
  {
    id: "nasi-pecel-ayam",
    name: "Nasi Pecel Ayam",
    category: "mains",
    image: "/images/nasi-pecel-ayam.jpg",
    alt: "Nasi pecel ayam",
  },
  {
    id: "nasi-ayam-rujak",
    name: "Nasi Ayam Rujak",
    category: "mains",
    image: "/images/nasi-ayam-rujak.jpg",
    alt: "Nasi ayam rujak",
  },
  {
    id: "grilled-squid",
    name: "Grilled Squid with Jimbaran Sauce",
    category: "mains",
    image: "/images/grilled-squid.jpg",
    alt: "Grilled squid with Jimbaran sauce",
  },
  {
    id: "tahu-isi",
    name: "Tahu Isi",
    category: "snacks",
    image: "/images/tahu-isi.jpg",
    alt: "Tahu isi",
  },
  {
    id: "tape-singkong-madu",
    name: "Tape Singkong Madu",
    category: "snacks",
    image: "/images/tape-singkong-madu.jpg",
    alt: "Tape singkong madu",
  },
];
export const categories = [
  { id: "all", label: "All" },
  { id: "breakfast", label: "Breakfast Specials" },
  { id: "soups", label: "Soups" },
  { id: "mains", label: "Rice & Mains" },
  { id: "snacks", label: "Snacks & Treats" },
  { id: "drinks", label: "Drinks" },
] as const;
/** Only categories that actually contain dishes are shown as filters (no empty/invented sections). */
export const usedCategories = categories.filter(
  (c) => c.id === "all" || dishes.some((d) => d.category === c.id),
);
export const values = [
  { script: "Authentic", text: "Real, recognisable Indonesian dishes." },
  { script: "Warm", text: "A welcoming neighbourhood café." },
  { script: "Friendly", text: "Relaxed, approachable hospitality." },
  { script: "Generous", text: "Satisfying meals, made to be enjoyed." },
  { script: "Cultural", text: "Celebrating Indonesian food identity." },
];
// Easy to update: edit this array only. No dates until confirmed.
export const promos = [
  {
    id: "breakfast",
    label: "Breakfast",
    title: "Bintang Breakfast Special",
    text: "Start your day the Indonesian way.",
    image: "/images/promo-breakfast.jpg",
    alt: "Bintang breakfast special",
    cta: "See This Week's Special",
    href: site.instagram,
  },
  {
    id: "weekend",
    label: "Weekend",
    title: "Weekend Breakfast",
    text: "Details coming soon.",
    image: "/images/promo-weekend.jpg",
    alt: "Weekend breakfast offer",
    cta: "Follow for updates",
    href: site.instagram,
  },
];
export const gallery = [
  { src: "/images/g1.jpg", alt: "Signature dish, overhead" },
  { src: "/images/g2.jpg", alt: "Close-up of a soup" },
  { src: "/images/g3.jpg", alt: "Breakfast plate" },
  { src: "/images/g4.jpg", alt: "Snacks and treats" },
  { src: "/images/g5.jpg", alt: "Drinks" },
  { src: "/images/g6.jpg", alt: "Café storefront" },
]; // TODO real photography
