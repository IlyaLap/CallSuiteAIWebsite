
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
        <div className="bg-white rounded-xl p-8 shadow-md">
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
