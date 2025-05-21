import { Cpu, Zap, Layout, Palette, Code, Globe, Sparkles, Shield, RefreshCw, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI-Powered Design",
      description: "Our AI analyzes your needs and generates custom designs tailored to your brand and industry."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Create a complete website in minutes, not days or weeks. Launch your online presence instantly."
    },
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Responsive Layouts",
      description: "All websites are fully responsive and look great on any device, from mobile phones to desktop computers."
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Custom Styling",
      description: "Easily customize colors, fonts, and layouts to match your brand identity with our intuitive editor."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "No Coding Required",
      description: "Build professional websites without writing a single line of code. Our AI handles the technical details."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "SEO Optimized",
      description: "Built-in SEO tools to help your website rank higher in search results and attract more visitors."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Smart Content Generation",
      description: "Generate engaging copy and content for your website with our AI content assistant."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Security Built-in",
      description: "All websites come with SSL certificates and security features to protect your data and visitors."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary" />,
      title: "Continuous Updates",
      description: "Your website stays current with automatic updates and new features added regularly."
    }
  ];

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
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-muted bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-200 hover:border-primary/20">
              <CardHeader>
                <div className="mb-2 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="gap-1 group">
            Explore All Features <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
