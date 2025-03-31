
import { PhoneCall, Focus, TrendingUp, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BenefitsSection = () => {
  const navigate = useNavigate();
  
  const navigateToHowItWorks = () => {
    navigate('/how-it-works');
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your service business with our intelligent AI phone assistant
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
              <PhoneCall size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Never Miss A Call</h3>
            <p className="text-gray-600">
              24/7 availability ensures every customer call is answered professionally, even when you're busy or after hours.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
              <Focus size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Focus On Your Craft</h3>
            <p className="text-gray-600">
              Eliminate interruptions during jobs, allowing you to deliver higher quality work with full concentration.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Grow Your Business</h3>
            <p className="text-gray-600">
              Book more jobs, reduce no-shows, and increase customer satisfaction with professional call handling.
            </p>
          </div>
          
          {/* Benefit 4 */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
              <CalendarCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Scheduling</h3>
            <p className="text-gray-600">
              Prevent double-bookings and scheduling conflicts with intelligent calendar management.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={navigateToHowItWorks}>
            See How It Works For Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
