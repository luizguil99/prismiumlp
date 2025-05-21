import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for personal websites and small projects.",
      features: [
        "1 website",
        "Basic AI design tools",
        "Responsive layouts",
        "Free subdomain",
        "Community support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for businesses and professional portfolios.",
      features: [
        "5 websites",
        "Advanced AI design tools",
        "Custom domains",
        "SEO optimization",
        "Analytics integration",
        "Priority support"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For agencies and large businesses with complex needs.",
      features: [
        "Unlimited websites",
        "Premium AI features",
        "Team collaboration",
        "White-label options",
        "API access",
        "Dedicated support",
        "Custom integrations"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the perfect plan for your needs. All plans include our core AI website building features.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col border-2 ${plan.popular ? 'border-primary' : 'border-muted'}`}
            >
              {plan.popular && (
                <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-baseline text-3xl font-bold">
                  {plan.price}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
