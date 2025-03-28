
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Calendar, Briefcase, Zap, BarChart, Shield, Clock } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                Powerful Features for Your Service Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover all the capabilities that make CallSuite.ai the perfect phone assistant for service professionals
              </p>
              <Button className="btn-primary text-lg">
                Schedule a Free Demo
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Core Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to streamline your call handling and grow your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Call Answering</h3>
                <p className="text-gray-600">
                  Never miss another call with our AI phone assistant that handles calls around the clock, ensuring you never miss a potential customer.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Calendar size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Scheduling</h3>
                <p className="text-gray-600">
                  Let our AI book appointments directly into your calendar, considering travel time and preventing double bookings.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Natural Conversations</h3>
                <p className="text-gray-600">
                  Unlike robotic-sounding services, our AI conducts natural, flowing conversations that provide a great customer experience.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Customization</h3>
                <p className="text-gray-600">
                  Personalized to your business, our AI knows your services, pricing, availability, and service area.
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Instant Setup</h3>
                <p className="text-gray-600">
                  Get up and running quickly with our simple onboarding process. No complex programming or long setup times.
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <BarChart size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
                <p className="text-gray-600">
                  Track calls, booking rates, and customer satisfaction with detailed analytics and reporting.
                </p>
              </div>
              
              {/* Feature 7 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Data Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security keeps your business and customer data safe and protected at all times.
                </p>
              </div>
              
              {/* Feature 8 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Business Hours Awareness</h3>
                <p className="text-gray-600">
                  Our AI knows your operating hours and provides appropriate responses based on when customers call.
                </p>
              </div>
              
              {/* Feature 9 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mb-6">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">Follow-up Management</h3>
                <p className="text-gray-600">
                  Automated reminders and confirmations ensure customers show up for appointments and reduce no-shows.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-wide text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to see these features in action?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo to experience how CallSuite.ai can transform your service business
            </p>
            <Button className="bg-accent text-white hover:bg-accent/90 text-lg">
              Schedule Your Free Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
