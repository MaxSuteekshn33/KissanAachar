import Link from "next/link";
import { Leaf } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-10">
      <Link href="/" className="flex items-center gap-2 text-kissan-cream">
        <span className="flex items-center gap-1.5 rounded-md bg-kissan-red px-3 py-1.5 font-heading text-lg font-semibold italic tracking-tight text-white shadow-sm">
          kissan
        </span>
        <span className="hidden text-sm font-medium tracking-wide sm:inline">
          Trace
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-kissan-cream/90">
        <Link href="/#collection" className="hidden hover:text-kissan-cream sm:inline">
          Regional Roots
        </Link>
        <Link href="/#journey" className="hidden hover:text-kissan-cream sm:inline">
          The Journey
        </Link>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-kissan-cream/40 px-3 py-1.5 text-xs">
          <Leaf className="size-3.5" />
          Scan to Trace
        </span>
      </nav>
    </header>
  );
}
