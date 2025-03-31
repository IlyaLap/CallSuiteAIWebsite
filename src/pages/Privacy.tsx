
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
            </div>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg">
                At CallSuite.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our service.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Register for an account</li>
                <li>Sign up for our newsletter</li>
                <li>Request a demo</li>
                <li>Contact our support team</li>
                <li>Participate in promotions or surveys</li>
              </ul>
              <p>
                The personal information we may collect includes names, email addresses, phone numbers, business information, and payment details.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Usage Data</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our website. This information may include IP address, browser type, device type, pages visited, time spent on pages, and other diagnostic data. This information helps us improve our services and user experience.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, including for customer service, updates, and marketing</li>
                <li>Process your transactions</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p>
                We may share information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we correct any inaccurate personal information</li>
                <li>The right to request that we delete your personal information</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the details provided below.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: privacy@callsuite.ai<br />
                Phone: (555) 123-4567<br />
                Address: 123 Tech Way, Suite 400, San Francisco, CA 94107
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
