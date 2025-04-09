import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar, CalendarX, Clock, X, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProblemSolutionSection = () => {
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
    <section className="section-padding bg-white" data-sb-object-id="problem-solution-section">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4" data-sb-field-path="heading">
            Stop Losing Business To Missed Calls
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-sb-field-path="description">
            Every missed call is a missed opportunity. See how CallSuite.ai transforms your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* BEFORE Column */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200" data-sb-object-id="before-column">
            <div className="flex items-center justify-center h-20 w-20 bg-red-100 text-red-500 rounded-full mx-auto mb-6">
              <X size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center text-red-500 mb-6 uppercase" data-sb-field-path="beforeHeading">BEFORE</h3>
            
            <div className="space-y-6" data-sb-field-path="beforeItems">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <X size={20} className="text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Missed Customer Calls</h4>
                  <p className="text-gray-600">Lose business when you're busy on a job or after hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <X size={20} className="text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Constant Interruptions</h4>
                  <p className="text-gray-600">Phone calls disrupt your work and decrease quality</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <X size={20} className="text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Scheduling Errors</h4>
                  <p className="text-gray-600">Double bookings and inefficient scheduling waste time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <X size={20} className="text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Lost Revenue</h4>
                  <p className="text-gray-600">Each missed call equals lost revenue opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <X size={20} className="text-red-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Poor Work-Life Balance</h4>
                  <p className="text-gray-600">Constantly answering calls after hours affects your life</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AFTER Column */}
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20" data-sb-object-id="after-column">
            <div className="flex items-center justify-center h-20 w-20 bg-green-100 text-green-500 rounded-full mx-auto mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center text-green-500 mb-6 uppercase" data-sb-field-path="afterHeading">AFTER</h3>
            
            <div className="space-y-6" data-sb-field-path="afterItems">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Every Call Answered</h4>
                  <p className="text-gray-600">Professional AI assistant answers calls 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Uninterrupted Work</h4>
                  <p className="text-gray-600">Focus on your craft with zero phone distractions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Smart Scheduling</h4>
                  <p className="text-gray-600">Automated booking with conflict prevention</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Increased Revenue</h4>
                  <p className="text-gray-600">Book more jobs and maximize your earnings</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check size={20} className="text-green-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-lg">Better Work-Life Balance</h4>
                  <p className="text-gray-600">Enjoy your personal time without business interruptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary text-lg" onClick={scrollToCTA} data-sb-field-path="ctaButton">
            Transform Your Business Operations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
