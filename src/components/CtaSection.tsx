
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const CtaSection = () => {
  return (
    <section className="section-padding bg-primary">
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
            
            <form>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="business">Business Name</Label>
                    <Input id="business" placeholder="Your Business" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="business-type">Business Type</Label>
                    <select 
                      id="business-type" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3" type="submit">
                  Schedule Your Demo Now
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
