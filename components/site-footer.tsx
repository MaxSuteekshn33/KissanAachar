import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-kissan-tan/60 bg-kissan-paper px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-heading text-lg italic text-kissan-green-deep">
            Good food brings us closer.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Kissan Trace — a farm-to-shelf transparency prototype for the Regional Roots Collection.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-kissan-green">
          <Link href="/#collection" className="hover:text-kissan-red">
            Regional Roots
          </Link>
          <Link href="/#journey" className="hover:text-kissan-red">
            The Journey
          </Link>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground">
        Demo experience. Sourcing, farmer and batch details shown are illustrative pending verified data from HUL.
      </p>
    </footer>
  );
}
