"use client";

import { useRouter } from "next/navigation";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { aachars } from "@/lib/aachars";

export function CollectionCarousel() {
  const router = useRouter();

  const slides: CoverflowSlide[] = aachars.map((a) => ({
    src: a.cardImage,
    alt: `${a.name} — ${a.edition}`,
    title: a.name,
    subtitle: `${a.edition} · ${a.tagline}`,
    href: `/aachar/${a.slug}`,
  }));

  return (
    <CoverflowCarousel
      slides={slides}
      onSelectSlide={(slide) => {
        if (slide.href) router.push(slide.href);
      }}
    />
  );
}
