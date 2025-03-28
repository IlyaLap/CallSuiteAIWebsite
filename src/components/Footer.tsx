
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/">
              <img 
                src="/lovable-uploads/d1093718-988e-4af5-a04e-43c928978c3b.png" 
                alt="CallSuite.ai Logo" 
                className="h-10 mb-4" 
              />
            </Link>
            <p className="text-gray-700 mb-4">
              The AI phone assistant built specifically for service professionals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-600 hover:text-primary transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-600 hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="text-gray-600 hover:text-primary transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center md:text-left">
          <div className="md:flex md:justify-between md:items-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} CallSuite.ai. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
