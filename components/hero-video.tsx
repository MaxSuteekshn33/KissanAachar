"use client";

import * as React from "react";

/**
 * Background hero video, mobile-aware:
 * - Serves a smaller, lower-bitrate clip on narrow viewports so it starts
 *   fast on mobile data, and the full clip on larger screens.
 * - Ships a poster frame so there's no flash of empty background while the
 *   video buffers (or if autoplay is blocked, e.g. Data Saver mode).
 * - playsInline + webkit-playsinline + muted are all required for iOS
 *   Safari to autoplay inline instead of forcing fullscreen.
 */
export function HeroVideo() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [src, setSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const pick = () => setSrc(mobile.matches ? "/media/hero-journey-mobile.mp4" : "/media/hero-journey.mp4");
    pick();
    mobile.addEventListener("change", pick);
    return () => mobile.removeEventListener("change", pick);
  }, []);

  // Some mobile browsers won't restart autoplay after the src swaps.
  React.useEffect(() => {
    if (src) videoRef.current?.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/media/hero-poster.jpg"
      disablePictureInPicture
      webkit-playsinline="true"
      className="absolute inset-0 h-full w-full object-cover opacity-90"
      src={src ?? undefined}
    />
  );
}
