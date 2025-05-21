import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardFooter } from './ui/card';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Prismium helped me create a professional website for my business in just 30 minutes. The AI understood exactly what I needed!",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "SJ"
    },
    {
      quote: "As a freelancer, I needed a portfolio site quickly. Prismium delivered a stunning design that perfectly showcases my work.",
      author: "Michael Chen",
      role: "Graphic Designer",
      avatar: "MC"
    },
    {
      quote: "The AI-generated content was spot-on for our startup. We saved weeks of development time and thousands of dollars.",
      author: "Emily Rodriguez",
      role: "Tech Startup Founder",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what people are saying about Prismium.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-muted bg-background">
              <CardContent className="pt-6">
                <p className="mb-4 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t px-6 py-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
