
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Michael Rodriguez",
    business: "Rodriguez Plumbing",
    image: "",
    quote: "Since implementing CallSuite.ai, we've increased our booked jobs by 32%. The AI assistant handles calls even when we're underwater on a job. Best business decision I've made.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    business: "Johnson Electric",
    image: "",
    quote: "I used to miss so many calls while on jobs. Now with CallSuite.ai, every call gets answered professionally and I can focus on my work. My customers love it too!",
    stars: 5
  },
  {
    name: "David Williams",
    business: "Williams HVAC Services",
    image: "",
    quote: "The call handling is so natural that most customers don't even realize they're talking to an AI. It's scheduled dozens of appointments for me while I'm on other jobs.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const navigate = useNavigate();
  
  const scrollToCTA = () => {
    navigate('/#cta');
    setTimeout(() => {
      const ctaSection = document.getElementById('cta-section');
      ctaSection?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Service professionals like you are transforming their businesses with CallSuite.ai
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-200 rounded-full mr-4">
                  {/* Placeholder for avatar */}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">Real Results From Real Businesses</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">27%</div>
              <p className="text-gray-600">Average increase in booked jobs</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Call answer rate, day and night</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-gray-600">Customer satisfaction rating</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={scrollToCTA}>
            Join These Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
