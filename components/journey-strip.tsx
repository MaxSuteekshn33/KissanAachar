import { Sprout, Truck, Factory, PackageCheck, Store, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, typeof Sprout> = {
  Farm: Sprout,
  Collection: Truck,
  Processing: Factory,
  Distribution: PackageCheck,
  Shelf: Store,
  You: Users,
  People: Users,
};

export function JourneyStrip({
  steps,
  className,
}: {
  steps: { label: string; detail: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6",
        className,
      )}
    >
      {steps.map((step, index) => {
        const Icon = ICONS[step.label] ?? Sprout;
        return (
          <div key={step.label} className="relative flex flex-col items-center text-center">
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-6 hidden h-px w-full bg-kissan-tan lg:block" />
            )}
            <div className="glass-orb relative z-10 flex size-12 items-center justify-center rounded-full text-kissan-cream">
              <Icon className="relative z-10 size-5" />
            </div>
            <p className="mt-3 font-heading text-sm font-semibold text-kissan-green-deep">
              {step.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {step.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}
