
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most businesses are up and running within 7 days of their initial consultation. The setup process is designed to be efficient while ensuring your AI assistant is properly customized for your specific business needs."
  },
  {
    question: "How does it handle my specific business needs?",
    answer: "During the setup process, we map out all your services, pricing, availability, and common customer questions. Your AI assistant is then custom-built to handle these specific aspects of your business, ensuring it represents your company accurately."
  },
  {
    question: "Will it integrate with my current systems?",
    answer: "Yes, CallSuite.ai is designed to integrate with most popular scheduling, CRM, and business management platforms including Google Calendar, Microsoft Outlook, ServiceTitan, Jobber, Housecall Pro, and more. We'll configure the integrations during your setup process."
  },
  {
    question: "What happens during emergencies?",
    answer: "You can set custom protocols for emergency situations. Your AI assistant can recognize emergency keywords, escalate urgent calls to you or your on-call team, and handle emergency booking procedures according to your specific instructions."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our customers typically see a 20-30% increase in booked jobs within the first 3 months. Additionally, they report higher customer satisfaction, fewer interruptions during service calls, and improved work-life balance."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about CallSuite.ai
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl mb-4">Still have questions?</p>
          <Button className="btn-primary text-lg" onClick={scrollToCTA}>
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
