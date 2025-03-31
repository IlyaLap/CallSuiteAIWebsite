
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, FileText, PlayCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resources = () => {
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
  
  // Sample resource data
  const guides = [
    {
      title: "Getting Started with CallSuite.ai",
      description: "A complete guide to setting up and configuring your AI phone assistant",
      type: "PDF Guide",
      date: "June 15, 2023"
    },
    {
      title: "Optimizing Your Call Handling Workflow",
      description: "Best practices for maximizing efficiency with AI call handling",
      type: "PDF Guide",
      date: "July 23, 2023"
    },
    {
      title: "Integration Guide: Calendar Systems",
      description: "How to connect CallSuite.ai with popular calendar platforms",
      type: "PDF Guide",
      date: "August 9, 2023"
    },
    {
      title: "Measuring ROI from Your AI Phone Assistant",
      description: "Tracking and calculating the return on your CallSuite.ai investment",
      type: "PDF Guide",
      date: "September 2, 2023"
    }
  ];
  
  const webinars = [
    {
      title: "How to Reduce No-Shows by 75%",
      description: "Learn the proven strategies for dramatically reducing appointment no-shows",
      duration: "45 minutes",
      presenter: "Michael Johnson, Customer Success Manager",
      date: "April 12, 2023"
    },
    {
      title: "Advanced Call Handling for Service Businesses",
      description: "Take your call management to the next level with advanced AI techniques",
      duration: "60 minutes",
      presenter: "Sarah Wilson, Head of Product",
      date: "May 29, 2023"
    },
    {
      title: "Seasonal Business? How to Manage Call Spikes",
      description: "Strategies for handling high call volumes during your busy season",
      duration: "50 minutes",
      presenter: "David Miller, Industry Specialist",
      date: "July 18, 2023"
    }
  ];
  
  const templates = [
    {
      title: "Service Business Phone Script Template",
      description: "Customizable scripts for common service business scenarios",
      format: "Downloadable Template",
      date: "February 10, 2023"
    },
    {
      title: "Customer Information Collection Template",
      description: "Standardized format for gathering essential customer details",
      format: "Downloadable Template",
      date: "March 22, 2023"
    },
    {
      title: "Emergency Call Handling Protocol",
      description: "Step-by-step process for managing urgent service requests",
      format: "Downloadable Template",
      date: "April 5, 2023"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                Resources & Learning Center
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Guides, webinars, and templates to help you get the most out of CallSuite.ai
              </p>
            </div>
          </div>
        </section>
        
        {/* Resources Tabs Section */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <Tabs defaultValue="guides" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
              </TabsList>
              
              {/* Guides Tab */}
              <TabsContent value="guides" className="w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  {guides.map((guide, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <FileText size={18} className="text-primary" />
                          <CardDescription>{guide.type} • {guide.date}</CardDescription>
                        </div>
                        <CardTitle>{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{guide.description}</p>
                      </CardContent>
                      <CardFooter className="pt-1">
                        <Button variant="outline" className="w-full gap-2">
                          <Download size={16} />
                          Download Guide
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Webinars Tab */}
              <TabsContent value="webinars" className="w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  {webinars.map((webinar, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <PlayCircle size={18} className="text-primary" />
                          <CardDescription>{webinar.duration} • {webinar.date}</CardDescription>
                        </div>
                        <CardTitle>{webinar.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">{webinar.description}</p>
                        <p className="text-sm font-medium">Presenter: {webinar.presenter}</p>
                      </CardContent>
                      <CardFooter className="pt-1">
                        <Button variant="outline" className="w-full gap-2">
                          <PlayCircle size={16} />
                          Watch Webinar
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Templates Tab */}
              <TabsContent value="templates" className="w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  {templates.map((template, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <BookOpen size={18} className="text-primary" />
                          <CardDescription>{template.format} • {template.date}</CardDescription>
                        </div>
                        <CardTitle>{template.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{template.description}</p>
                      </CardContent>
                      <CardFooter className="pt-1">
                        <Button variant="outline" className="w-full gap-2">
                          <Download size={16} />
                          Download Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
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
            <Button className="bg-accent text-white hover:bg-accent/90 text-lg" onClick={scrollToCTA}>
              Schedule Your Free Demo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
