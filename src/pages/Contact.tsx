
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 mb-8">
                Have questions about CallSuite.ai? Our team is here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..." 
                      className="mt-1 min-h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#FF7A50] hover:bg-primary">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is available Monday through Friday, 9am to 5pm EST. We strive to respond to all inquiries within 24 hours.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 bg-primary/10 text-primary rounded-full mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Office</h3>
                      <p className="text-gray-600">123 Tech Way, Suite 400</p>
                      <p className="text-gray-600">San Francisco, CA 94107</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 bg-primary/10 text-primary rounded-full mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 bg-primary/10 text-primary rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@callsuite.ai</p>
                      <p className="text-gray-600">support@callsuite.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 bg-primary/10 text-primary rounded-full mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm EST</p>
                      <p className="text-gray-600">Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
