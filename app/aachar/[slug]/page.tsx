import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, QrCode, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JourneyStrip } from "@/components/journey-strip";
import { aachars, getAacharBySlug } from "@/lib/aachars";

export function generateStaticParams() {
  return aachars.map((a) => ({ slug: a.slug }));
}

export default async function AacharPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const aachar = getAacharBySlug(slug);
  if (!aachar) notFound();

  const others = aachars.filter((a) => a.slug !== aachar.slug);

  return (
    <main className="flex-1">
      <SiteHeader />

      {/* Region hero */}
      <section className="relative flex min-h-[80dvh] w-full items-end overflow-hidden bg-kissan-green-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={aachar.heroImage}
          alt={`${aachar.name} — ${aachar.landscape}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kissan-green-deep/90 via-kissan-green-deep/20 to-kissan-green-deep/40" />
        <div className="relative z-10 w-full px-6 pb-16 pt-40 text-kissan-cream sm:px-10">
          <p className="inline-flex items-center gap-1.5 rounded-full border border-kissan-cream/40 px-3 py-1 text-xs">
            <MapPin className="size-3.5" />
            {aachar.region}
          </p>
          <h1 className="mt-4 font-heading text-4xl italic leading-tight sm:text-6xl">
            {aachar.name}
          </h1>
          <p className="mt-2 text-base text-kissan-cream/85 sm:text-lg">
            {aachar.edition} · {aachar.tagline}
          </p>
        </div>
      </section>

      {/* Your bottle */}
      <section className="bg-kissan-paper py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-kissan-tan/60 bg-kissan-cream p-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
                Your Bottle
              </p>
              <p className="mt-2 font-heading text-2xl italic text-kissan-green-deep">
                {aachar.name}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Batch No.</dt>
                <dd className="font-medium text-kissan-green-deep">{aachar.batchNo}</dd>
                <dt className="text-muted-foreground">Best Before</dt>
                <dd className="font-medium text-kissan-green-deep">{aachar.bestBefore}</dd>
                <dt className="text-muted-foreground">Edition</dt>
                <dd className="font-medium text-kissan-green-deep">{aachar.edition}</dd>
              </dl>
            </div>
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-kissan-green-deep text-kissan-cream">
              <QrCode className="size-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient story */}
      <section className="dotted-surface bg-kissan-cream py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
              The Ingredient
            </p>
            <h2 className="mt-3 font-heading text-3xl italic text-kissan-green-deep">
              {aachar.ingredientName}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {aachar.ingredientStory}
            </p>
          </div>
          <div className="rounded-3xl border border-kissan-tan/60 bg-kissan-paper p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
              Landscape
            </p>
            <p className="mt-2 text-sm text-kissan-green-deep">{aachar.landscape}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={aachar.cardImage}
              alt={aachar.name}
              className="mt-4 aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet the farmer */}
      <section className="bg-kissan-green-deep py-20 text-kissan-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-kissan-cream/60">
            Meet the Farmer
          </p>
          <Quote className="mx-auto mt-5 size-8 text-kissan-cream/50" />
          <p className="mt-4 font-heading text-xl italic leading-relaxed sm:text-2xl">
            &ldquo;{aachar.farmer.quote}&rdquo;
          </p>
          <p className="mt-5 text-sm text-kissan-cream/80">
            {aachar.farmer.name} · {aachar.farmer.place}
          </p>
          <p className="mt-1 text-xs text-kissan-cream/50">{aachar.farmer.years}</p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-kissan-paper py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
              Trace My Batch
            </p>
            <h2 className="mt-3 font-heading text-3xl italic text-kissan-green-deep sm:text-4xl">
              {aachar.name}&rsquo;s Journey
            </h2>
          </div>
          <JourneyStrip steps={aachar.journey} className="mt-14" />
        </div>
      </section>

      {/* Explore other regions */}
      <section className="bg-kissan-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/#collection"
            className="inline-flex items-center gap-2 text-sm font-medium text-kissan-green hover:text-kissan-red"
          >
            <ArrowLeft className="size-4" />
            Back to Regional Roots Collection
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-kissan-terracotta">
            Explore other regions
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/aachar/${other.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-kissan-tan/60 bg-kissan-paper p-4 transition hover:border-kissan-red"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={other.cardImage}
                  alt={other.name}
                  className="size-16 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <p className="font-heading text-lg italic text-kissan-green-deep group-hover:text-kissan-red">
                    {other.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{other.regionShort}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
