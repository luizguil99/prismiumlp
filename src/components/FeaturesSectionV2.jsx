import { FeaturesSectionWithHoverEffects } from "./ui/FeaturesSectionWithHoverEffects";

export function FeaturesSectionV2() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create stunning websites with powerful AI tools designed to make web development accessible to everyone.
            </p>
          </div>
        </div>
        
        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
}
