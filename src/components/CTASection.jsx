import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Build Your Dream Website?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Join thousands of satisfied users who have transformed their online presence with Prismium.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="gap-1 group">
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
