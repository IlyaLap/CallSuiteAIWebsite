
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Search, Tag } from "lucide-react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  
  // Sample blog post data
  const featuredPost = {
    title: "How AI is Transforming the Service Industry in 2025",
    excerpt: "Discover how AI technology is revolutionizing service businesses in 2025, from automated customer interactions to predictive maintenance and personalized service delivery.",
    category: "Industry Trends",
    author: "Hamish Havig",
    date: "April 9, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    slug: "how-ai-is-transforming-service-industry-2025"
  };
  
  const handleReadArticle = () => {
    navigate('/blog/how-ai-is-transforming-service-industry-2025');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CallSuite.ai Blog - AI Phone Assistant for Service Businesses</title>
        <meta name="description" content="Explore the latest articles, insights, and trends on AI technology for service businesses at the CallSuite.ai blog." />
        <meta name="keywords" content="AI blog, service industry blog, AI technology, business growth, customer service" />
        <meta property="og:title" content="CallSuite.ai Blog - AI Phone Assistant for Service Businesses" />
        <meta property="og:description" content="Explore the latest articles, insights, and trends on AI technology for service businesses at the CallSuite.ai blog." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://callsuite.ai/blog" />
        <meta property="og:image" content="https://callsuite.ai/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CallSuite.ai Blog - AI Phone Assistant for Service Businesses" />
        <meta name="twitter:description" content="Explore the latest articles, insights, and trends on AI technology for service businesses at the CallSuite.ai blog." />
        <meta name="twitter:image" content="https://callsuite.ai/og-image.png" />
        <link rel="canonical" href="https://callsuite.ai/blog" />
      </Helmet>
      
      <Header />
      <main className="flex-grow">
        {/* Blog Hero */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">
                CallSuite.ai Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, tips and strategies to help service professionals grow their business
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="heading-lg mb-8">Featured Article</h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <span>{featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="w-fit" onClick={handleReadArticle}>Read Article</Button>
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

export default Blog;
