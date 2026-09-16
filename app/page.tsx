import Link from "next/link";
import { ArrowDown, CheckCircle2, ScanLine } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CollectionCarousel } from "@/components/collection-carousel";
import { JourneyStrip } from "@/components/journey-strip";

const GENERIC_JOURNEY = [
  { label: "Farm", detail: "Growing with care, region by region" },
  { label: "Collection", detail: "From farms to local collection centres" },
  { label: "Processing", detail: "Quality checks and traditional pickling" },
  { label: "Distribution", detail: "Batch-coded jars move across India" },
  { label: "Shelf", detail: "Reaches your nearest store" },
  { label: "You", detail: "Good food brings us closer" },
];

export default function Home() {
  return (
    <main className="flex-1">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[100vh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-kissan-green-deep">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        >
          <source src="/media/hero-journey.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-kissan-green-deep/70 via-kissan-green-deep/30 to-kissan-green-deep/90" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center text-kissan-cream">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kissan-cream/70">
            Real Ingredients. Real People. A Bigger India.
          </p>
          <h1 className="font-heading text-4xl italic leading-tight sm:text-6xl">
            Your pickle has a story.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-kissan-cream/85 sm:text-lg">
            Trace the journey of your Kissan aachar — from the farm it grew on, to the
            hands that picked it, to the jar on your table.
          </p>
          <Link
            href="#collection"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-kissan-red px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-kissan-terracotta"
          >
            Start the Journey
            <ArrowDown className="size-4" />
          </Link>
        </div>
      </section>

      {/* Regional Roots Collection */}
      <section id="collection" className="dotted-surface bg-kissan-cream py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
            Three Regions. Three Traditions. One Kissan.
          </p>
          <h2 className="mt-3 font-heading text-3xl italic text-kissan-green-deep sm:text-4xl">
            Regional Roots Collection
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Every jar carries its own regional story. Scan the batch or tap a jar below
            to follow its ingredient from soil to shelf.
          </p>
        </div>
        <div className="mt-8">
          <CollectionCarousel />
        </div>
      </section>

      {/* From Farms to Families */}
      <section id="journey" className="bg-kissan-paper py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
              A Journey of Goodness
            </p>
            <h2 className="mt-3 font-heading text-3xl italic text-kissan-green-deep sm:text-4xl">
              From Farms to Families
            </h2>
          </div>
          <JourneyStrip steps={GENERIC_JOURNEY} className="mt-14" />
        </div>
      </section>

      {/* Trust / verify */}
      <section className="bg-kissan-green-deep py-20 text-kissan-cream">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-kissan-cream/30 px-3 py-1.5 text-xs">
              <ScanLine className="size-3.5" />
              Batch-level transparency
            </p>
            <h3 className="mt-4 font-heading text-2xl italic sm:text-3xl">
              What you can verify
            </h3>
            <p className="mt-3 text-sm text-kissan-cream/80">
              Only information that can actually be substantiated is shown. This is a demo
              experience — full sourcing data is pending HUL verification.
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            {[
              "Ingredient origin, region by region",
              "Production batch number",
              "Processing facility (illustrative)",
              "Packaging date & best-before",
              "Distribution journey, farm to shelf",
              "Quality information at a glance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 shrink-0 text-kissan-cream/70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
