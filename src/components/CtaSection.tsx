
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CtaSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(e.currentTarget);
    
    // Add the access key for Web3Forms
    formData.append("access_key", "0c2275e8-f84f-4be7-89bc-82fa6b7e60b1");
    formData.append("from_name", "CallSuite.ai Demo Request");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Thank you! Your demo request has been sent successfully. Our team will contact you shortly.");
        e.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta-section" className="section-padding bg-primary">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-white mb-6">
              Ready To Never Miss Another Call?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book a personalized demo to see CallSuite.ai in action for your business. Our team will show you exactly how it works for your specific industry.
            </p>
            
            <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-8">
              <p className="text-white font-medium mb-2">What you'll learn in your demo:</p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                  How the AI handles your specific service calls
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                  Customization options for your business
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                  Integration with your current systems
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                  Pricing and ROI for your business size
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Schedule Your Demo</h3>
            
            {result && (
              <Alert className={`mb-6 ${result.includes("Thank you") ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}>
                <AlertDescription>{result}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="business">Business Name</Label>
                    <Input id="business" name="business" placeholder="Your Business" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="(555) 123-4567" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" name="email" placeholder="you@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="business-type">Business Type</Label>
                    <select 
                      id="business-type" 
                      name="business-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="" disabled selected>Select Business Type</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="hvac">HVAC</option>
                      <option value="electrical">Electrical</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="extra-info">Extra Information</Label>
                    <Textarea 
                      id="extra-info" 
                      name="extra-info" 
                      placeholder="Tell us about your current challenges, goals, and problems you're looking to solve with CallSuite.ai"
                      className="min-h-24 text-gray-500"
                    />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Schedule Your Demo Now"}
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
