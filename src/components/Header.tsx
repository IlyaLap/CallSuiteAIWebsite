import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToCTA = () => {
    navigate('/#cta');
    setTimeout(() => {
      const ctaSection = document.getElementById('cta-section');
      ctaSection?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  return <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="container-wide flex justify-between items-center py-4">
        <Link to="/" className="flex items-center" onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}>
          <img src="/lovable-uploads/d1093718-988e-4af5-a04e-43c928978c3b.png" alt="CallSuite.ai Logo" className="h-8 md:h-10" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/how-it-works" className="text-darkSlate hover:text-primary font-medium transition-colors">
            How It Works
          </Link>
          <Link to="/features" className="text-darkSlate hover:text-primary font-medium transition-colors">
            Features
          </Link>
          <Link to="/industries" className="text-darkSlate hover:text-primary font-medium transition-colors">
            Industries
          </Link>
          <Link to="/resources" className="text-darkSlate hover:text-primary font-medium transition-colors">
            Resources
          </Link>
          <Link to="/blog" className="text-darkSlate hover:text-primary font-medium transition-colors">Blog</Link>
          <Link to="/contact" className="text-darkSlate hover:text-primary font-medium transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-[#FF7A50] text-white hover:bg-primary" onClick={scrollToCTA}>
            Schedule Demo
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-darkSlate" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white absolute w-full shadow-md z-40 animate-fade-in">
          <div className="container px-4 py-6 flex flex-col space-y-4">
            <Link to="/how-it-works" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              How It Works
            </Link>
            <Link to="/features" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              Features
            </Link>
            <Link to="/industries" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              Industries
            </Link>
            <Link to="/resources" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              Resources
            </Link>
            <Link to="/blog" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="text-darkSlate py-2 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="bg-[#FF7A50] text-white hover:bg-primary w-full" onClick={() => {
          toggleMenu();
          scrollToCTA();
        }}>
              Schedule Demo
            </Button>
          </div>
        </div>}
    </header>;
};
export default Header;