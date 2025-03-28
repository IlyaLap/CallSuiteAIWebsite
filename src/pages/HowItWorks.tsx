
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PhoneCall, MessageSquare, Calendar, ClipboardCheck, Clock } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                How CallSuite.ai Works
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our AI phone assistant handles your calls, books appointments, and helps grow your service business
              </p>
              <Button className="btn-primary text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">The Complete Call Handling Solution</h2>
                <p className="text-lg text-gray-600 mb-6">
                  CallSuite.ai is a sophisticated AI phone assistant built specifically for service businesses. It handles incoming calls, books appointments, answers questions, and manages your schedule—all while sounding completely natural.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Unlike basic answering services or chatbots, CallSuite.ai is custom-built for your specific business and can have natural, flowing conversations with your customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">
                    Hear Audio Sample
                  </Button>
                  <Button variant="outline">
                    See Features
                  </Button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                <p className="text-gray-500">Product demo video placeholder</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Capabilities Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Key Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive call handling for every aspect of your service business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capability 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <PhoneCall size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Call Answering</h3>
                <p className="text-gray-600 mb-4">
                  Never miss another call with round-the-clock professional call handling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Natural-sounding voice conversations
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Business hour awareness
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Emergency call handling
                  </li>
                </ul>
              </div>
              
              {/* Capability 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Service Inquiry Handling</h3>
                <p className="text-gray-600 mb-4">
                  Answers questions about your services, pricing, and availability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Detailed service descriptions
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Pricing information
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Service area verification
                  </li>
                </ul>
              </div>
              
              {/* Capability 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  Books appointments and manages your calendar efficiently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Real-time availability checks
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Double-booking prevention
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Travel time consideration
                  </li>
                </ul>
              </div>
              
              {/* Capability 4 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <ClipboardCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Information Collection</h3>
                <p className="text-gray-600 mb-4">
                  Gathers all necessary details to prepare for service calls.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Contact information
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Service location details
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Problem descriptions
                  </li>
                </ul>
              </div>
              
              {/* Capability 5 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Follow-up Management</h3>
                <p className="text-gray-600 mb-4">
                  Handles appointment reminders and confirmations automatically.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Appointment confirmations
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Pre-appointment reminders
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Rescheduling assistance
                  </li>
                </ul>
              </div>
              
              {/* Capability 6 */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Hours Awareness</h3>
                <p className="text-gray-600 mb-4">
                  Provides different responses based on your operating hours.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Custom business hours
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    Holiday scheduling
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    After-hours protocols
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Integration Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Works with the tools you already use
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Integration logos (placeholders) */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 h-20 flex items-center justify-center shadow-sm">
                    <div className="h-10 w-32 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't see your tool? Contact us to discuss custom integrations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to see CallSuite.ai in action?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo to see exactly how it works for your specific service business
            </p>
            <Button className="bg-accent text-white hover:bg-accent/90 text-lg">
              Schedule Your Demo Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
