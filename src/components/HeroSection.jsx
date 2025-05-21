import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Build Beautiful Websites with <span className="text-gradient">AI</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create stunning, responsive websites in minutes with Prismium's AI-powered website builder. No coding required.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:w-full sm:w-auto justify-center">
            <Button size="lg" className="gap-1 group">
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          <div className="mt-12 w-full max-w-5xl overflow-hidden rounded-lg shadow-xl">
            <div className="relative aspect-video overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 backdrop-blur-sm">
                <div className="h-full w-full bg-muted/30 backdrop-blur-md"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">AI Website Builder Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
