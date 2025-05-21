import { cn } from "../../lib/utils";
import {
  Cpu,
  Zap,
  Layout,
  Palette,
  Code,
  Globe,
  Sparkles,
  Shield,
  RefreshCw
} from 'lucide-react';

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "AI-Powered Design",
      description: "Our AI analyzes your needs and generates custom designs tailored to your brand and industry."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Create a complete website in minutes, not days or weeks. Launch your online presence instantly."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Responsive Layouts",
      description: "All websites are fully responsive and look great on any device, from mobile phones to desktop computers."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Styling",
      description: "Easily customize colors, fonts, and layouts to match your brand identity with our intuitive editor."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "No Coding Required",
      description: "Build professional websites without writing a single line of code. Our AI handles the technical details."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "SEO Optimized",
      description: "Built-in SEO tools to help your website rank higher in search results and attract more visitors."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Content Generation",
      description: "Generate engaging copy and content for your website with our AI content assistant."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Built-in",
      description: "All websites come with SSL certificates and security features to protect your data and visitors."
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
