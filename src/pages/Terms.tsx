
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 pt-20 pb-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl text-darkSlate mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Last Updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}
              </p>
            </div>
          </div>
        </section>
        
        {/* Terms of Service Content */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg">
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the CallSuite.ai website or services operated by CallSuite.ai.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of CallSuite.ai and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CallSuite.ai.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
              </p>
              <p>
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscription and Payments</h2>
              <p>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis, depending on the type of subscription plan you select.
              </p>
              <p>
                At the end of each billing period, your subscription will automatically renew under the same conditions unless you cancel it or CallSuite.ai cancels it.
              </p>
              <p>
                You may cancel your subscription either through your online account management page or by contacting our customer support team.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Free Trial</h2>
              <p>
                CallSuite.ai may, at its sole discretion, offer a subscription with a free trial for a limited period of time.
              </p>
              <p>
                At any time and without notice, CallSuite.ai reserves the right to (i) modify the terms and conditions of the free trial offer, or (ii) cancel such free trial offer.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Service Modifications</h2>
              <p>
                CallSuite.ai reserves the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall CallSuite.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@callsuite.ai<br />
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

export default Terms;
