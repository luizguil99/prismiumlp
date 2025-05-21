import { useState } from 'react';
import { MessageSquare, Sparkles, Monitor } from 'lucide-react';
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Describe Your Website",
      description: "Tell our AI what kind of website you need, your brand details, and any specific requirements.",
      color: "from-blue-500 to-indigo-600",
      lightColor: "bg-blue-100 dark:bg-blue-950/40"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Generates Your Site",
      description: "Our advanced AI creates a custom website based on your description, complete with pages, content, and design.",
      color: "from-purple-500 to-pink-600",
      lightColor: "bg-purple-100 dark:bg-purple-950/40"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Customize & Publish",
      description: "Make any final adjustments to your site, then publish it with one click to your custom domain.",
      color: "from-emerald-500 to-teal-600",
      lightColor: "bg-emerald-100 dark:bg-emerald-950/40"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-2">
            Three Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From idea to live website in minutes, not months
          </p>
        </div>

        {/* Step selector buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {steps.map((step, index) => (
            <Button
              key={index}
              variant={activeStep === index ? "default" : "outline"}
              className={cn(
                "rounded-full transition-all",
                activeStep === index && "shadow-lg"
              )}
              onClick={() => setActiveStep(index)}
            >
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-background">
                {index + 1}
              </span>
              {step.title}
            </Button>
          ))}
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side: Step details */}
          <div className="space-y-6">
            <div className={cn(
              "inline-flex items-center justify-center p-2 rounded-2xl",
              steps[activeStep].lightColor
            )}>
              <div className={cn(
                "w-16 h-16 rounded-xl flex items-center justify-center text-white bg-gradient-to-br",
                steps[activeStep].color
              )}>
                {steps[activeStep].icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
            <p className="text-lg text-muted-foreground">{steps[activeStep].description}</p>
            
            <div className="pt-4">
              <Button 
                className={cn(
                  "rounded-full text-white bg-gradient-to-r shadow-lg",
                  steps[activeStep].color
                )}
              >
                {activeStep === steps.length - 1 ? "Get Started" : "Next Step"}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Right side: Visual representation */}
          <div className="relative w-full">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border w-full">
              {/* Step 1 visual */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8",
                activeStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className="w-full h-full bg-card rounded-xl p-6 flex flex-col">
                  <div className="h-8 w-3/4 bg-muted rounded mb-4"></div>
                  <div className="flex-1 bg-muted/50 rounded flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Describe your website needs...</span>
                  </div>
                  <div className="h-10 w-full bg-primary/10 rounded mt-4 flex items-center px-4">
                    <div className="h-4 w-4 rounded-full bg-primary mr-2 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">AI assistant is ready</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 visual */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8",
                activeStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className="w-full h-full bg-card rounded-xl p-6 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-1/3 bg-muted rounded"></div>
                    <div className="h-6 w-16 bg-primary/20 rounded"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 flex-1">
                    <div className="bg-muted/50 rounded animate-pulse"></div>
                    <div className="bg-muted/30 rounded animate-pulse delay-100"></div>
                    <div className="bg-muted/70 rounded animate-pulse delay-200"></div>
                  </div>
                  <div className="h-8 w-full bg-primary/10 rounded mt-4 flex items-center justify-center">
                    <span className="text-xs text-primary">Generating your website...</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 visual */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500 flex items-center justify-center p-8",
                activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <div className="w-full h-full bg-card rounded-xl p-6 flex flex-col">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-1/2 bg-muted rounded"></div>
                    <div className="flex space-x-2">
                      <div className="h-6 w-6 bg-muted/70 rounded"></div>
                      <div className="h-6 w-6 bg-muted/70 rounded"></div>
                      <div className="h-6 w-6 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-muted/20 rounded flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-muted/40 rounded border border-muted flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Your Website Preview</span>
                    </div>
                  </div>
                  <div className="h-10 w-full bg-primary/10 rounded mt-4 flex items-center justify-between px-4">
                    <span className="text-xs text-muted-foreground">Ready to publish</span>
                    <div className="h-6 w-20 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                activeStep === index 
                  ? "bg-primary w-8" 
                  : "bg-muted hover:bg-primary/50"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
