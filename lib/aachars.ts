export interface AacharJourneyStep {
  label: string;
  detail: string;
}

export interface Aachar {
  slug: string;
  name: string;
  edition: string;
  region: string;
  regionShort: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  accentPin: string;
  batchNo: string;
  bestBefore: string;
  ingredientName: string;
  ingredientStory: string;
  farmer: {
    name: string;
    place: string;
    years: string;
    quote: string;
  };
  landscape: string;
  journey: AacharJourneyStep[];
}

export const aachars: Aachar[] = [
  {
    slug: "bamboo-shoot",
    name: "Bamboo Shoot Aachar",
    edition: "Northeast Edition",
    region: "India's Northeast",
    regionShort: "Northeast",
    tagline: "Bold flavours from India's Eastern Hills",
    heroImage: "/images/regions/hero-bamboo-shoot.jpg",
    cardImage: "/images/regions/card-bamboo-shoot.jpg",
    accentPin: "22% from the top, 30% from the left",
    batchNo: "NE260801",
    bestBefore: "Aug 2027",
    ingredientName: "Bamboo Shoot",
    ingredientStory:
      "Young bamboo shoots are hand-harvested in the misty hill clusters of the Northeast, where bamboo has been part of the everyday kitchen for generations. The shoots are cleaned and fermented close to source before travelling to the Kissan facility for pickling.",
    farmer: {
      name: "Demo Farmer Profile",
      place: "Hill village cluster, Northeast India",
      years: "Illustrative — pending verified sourcing data",
      quote:
        "Bamboo grows fast here, but picking the right shoot at the right day is a skill passed down, not written down.",
    },
    landscape: "Green hills, winding rivers, stilt bamboo homes",
    journey: [
      { label: "Farm", detail: "Bamboo groves in Northeast hill clusters, hand-harvested young shoots" },
      { label: "Collection", detail: "Shoots gathered at a local collection centre within hours of harvest" },
      { label: "Processing", detail: "Cleaned, cut and slow-pickled with Northeast-style spice blend" },
      { label: "Distribution", detail: "Batch-coded jars dispatched across the Kissan distribution network" },
      { label: "Shelf", detail: "Reaches retail shelves and homes across India" },
      { label: "You", detail: "Now part of your table — batch traced end to end" },
    ],
  },
  {
    slug: "gongura",
    name: "Gongura Aachar",
    edition: "South Edition",
    region: "The Deccan",
    regionShort: "South India",
    tagline: "Tangy traditions from the Deccan",
    heroImage: "/images/regions/hero-gongura.jpg",
    cardImage: "/images/regions/card-gongura.jpg",
    accentPin: "55% from the top, 55% from the left",
    batchNo: "AP260801",
    bestBefore: "Aug 2027",
    ingredientName: "Gongura Leaf",
    ingredientStory:
      "Gongura — a sharply sour leafy green — is grown across small farm plots in Andhra Pradesh and Telangana. Leaves are picked at peak tartness, sorted by hand, and moved quickly to preserve their signature tang before pickling.",
    farmer: {
      name: "Demo Farmer Profile",
      place: "Farm plots near the Deccan plateau",
      years: "Illustrative — pending verified sourcing data",
      quote:
        "Gongura doesn't wait. Pick it a day late and the tang is gone — timing is everything.",
    },
    landscape: "Paddy fields, palm trees, temple gopurams on the horizon",
    journey: [
      { label: "Farm", detail: "Gongura leaf plots across Andhra Pradesh and Telangana" },
      { label: "Collection", detail: "Hand-picked leaves sorted and moved same-day to retain tartness" },
      { label: "Processing", detail: "Pickled with a South Indian spice blend for the signature tang" },
      { label: "Distribution", detail: "Batch-coded jars dispatched across the Kissan distribution network" },
      { label: "Shelf", detail: "Reaches retail shelves and homes across India" },
      { label: "You", detail: "Now part of your table — batch traced end to end" },
    ],
  },
  {
    slug: "mango-chhundo",
    name: "Mango Chhundo",
    edition: "Gujarat Edition",
    region: "Gujarat",
    regionShort: "Gujarat",
    tagline: "Sweet. Tangy. Truly Gujarati.",
    heroImage: "/images/regions/hero-mango-chhundo.jpg",
    cardImage: "/images/regions/card-mango-chhundo.jpg",
    accentPin: "60% from the top, 78% from the left",
    batchNo: "GJ260801",
    bestBefore: "Aug 2027",
    ingredientName: "Raw Mango",
    ingredientStory:
      "Raw, sun-ripened mangoes from Gujarat's orchards are grated fresh and slow-cooked with sugar and mild spice — the traditional Chhundo method passed down through Gujarati households for generations.",
    farmer: {
      name: "Demo Farmer Profile",
      place: "Mango orchards, Gujarat",
      years: "Illustrative — pending verified sourcing data",
      quote:
        "A good Chhundo starts in the orchard — the mango has to be raw, firm, and picked at just the right week.",
    },
    landscape: "Sun-lit orchards, golden fields, haveli architecture",
    journey: [
      { label: "Farm", detail: "Raw mango orchards across Gujarat, picked firm and unripe" },
      { label: "Collection", detail: "Mangoes graded and moved to the collection centre within the day" },
      { label: "Processing", detail: "Grated fresh, slow-cooked with sugar and spice — the Chhundo method" },
      { label: "Distribution", detail: "Batch-coded jars dispatched across the Kissan distribution network" },
      { label: "Shelf", detail: "Reaches retail shelves and homes across India" },
      { label: "You", detail: "Now part of your table — batch traced end to end" },
    ],
  },
];

export function getAacharBySlug(slug: string) {
  return aachars.find((a) => a.slug === slug);
}
