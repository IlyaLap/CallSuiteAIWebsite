
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
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
        // Use formRef to safely reset the form
        if (formRef.current) {
          formRef.current.reset();
        }
        toast({
          title: "Success!",
          description: "Your demo request has been sent successfully.",
        });
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        variant: "destructive",
      });
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
            
            <form ref={formRef} onSubmit={handleSubmit}>
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
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="Your Phone" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" name="industry" placeholder="Your Industry" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your business needs..." rows={4} />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Schedule Demo"}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
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
