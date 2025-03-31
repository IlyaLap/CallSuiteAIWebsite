
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Search, Tag } from "lucide-react";

const Blog = () => {
  // Sample blog post data
  const featuredPost = {
    title: "How AI is Transforming the Service Industry in 2023",
    excerpt: "Discover the latest trends and innovations in AI technology for service businesses, and how automated call handling is becoming essential for growth.",
    category: "Industry Trends",
    author: "Michael Smith",
    date: "October 15, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg"
  };
  
  const blogPosts = [
    {
      title: "5 Ways to Increase Your Booking Rate with AI Call Handling",
      excerpt: "Learn proven strategies that service businesses are using to convert more calls into bookings with the help of AI technology.",
      category: "Business Growth",
      author: "Sarah Johnson",
      date: "September 28, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg"
    },
    {
      title: "The Hidden Costs of Missed Calls for Service Professionals",
      excerpt: "Every missed call is a potential lost customer. We break down the real cost impact for plumbers, electricians, and other service businesses.",
      category: "Business Insights",
      author: "David Wilson",
      date: "September 12, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      title: "Customer Case Study: How Johnson Plumbing Grew 43% in One Year",
      excerpt: "Learn how a family-owned plumbing business in Chicago transformed their operations and dramatically increased revenue with AI call handling.",
      category: "Case Study",
      author: "Jennifer Lee",
      date: "August 30, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg"
    },
    {
      title: "AI vs. Human Receptionists: Comparing Costs and Effectiveness",
      excerpt: "A detailed analysis of the financial and operational differences between traditional human receptionists and modern AI phone assistants.",
      category: "Business Insights",
      author: "Robert Taylor",
      date: "August 15, 2023",
      readTime: "9 min read",
      image: "/placeholder.svg"
    },
    {
      title: "How to Prepare Your Service Business for the AI Revolution",
      excerpt: "The service industry is changing rapidly with new AI technologies. Here's how to position your business to take advantage of these innovations.",
      category: "Industry Trends",
      author: "Amanda Martinez",
      date: "July 29, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg"
    },
    {
      title: "3 Common Customer Complaints That AI Can Solve for Service Businesses",
      excerpt: "Address the top customer frustrations and improve satisfaction rates with smart implementation of AI phone technology.",
      category: "Customer Service",
      author: "Daniel Clark",
      date: "July 14, 2023",
      readTime: "4 min read",
      image: "/placeholder.svg"
    }
  ];
  
  // Sample categories
  const categories = [
    "Business Growth", 
    "Industry Trends", 
    "Customer Service", 
    "Case Studies", 
    "Business Insights", 
    "Technology"
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
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
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Featured post image</p>
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
                  <Button className="w-fit">Read Article</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Posts Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="heading-lg">Latest Articles</h2>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <span className="text-gray-600">Filter by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 bg-white">
                  <option>All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">Blog post image</p>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="mb-2">
                      <span className="inline-block bg-primary/10 text-primary text-sm font-medium rounded-full px-3 py-1">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Read Article</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">Load More Articles</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
