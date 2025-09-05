import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <div>
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using PeakBooks' accounting platform, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-700 mb-4">
                  PeakBooks provides cloud-based accounting software designed to help businesses manage 
                  their financial records, generate reports, and streamline bookkeeping processes. 
                  The service is provided on a subscription basis.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials, 
                  ensuring the accuracy of data you input into the system, and complying with all 
                  applicable laws and regulations in your use of the service.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Subscription fees are billed in advance on a monthly or annual basis. All fees are 
                  non-refundable except as required by law. We reserve the right to change our pricing 
                  with 30 days' notice to existing subscribers.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Ownership and Backup</h2>
                <p className="text-gray-700 mb-4">
                  You retain ownership of all data you input into PeakBooks. We provide regular backups 
                  of your data, but you are responsible for maintaining your own backup copies. Upon 
                  termination, you may export your data for a period of 30 days.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  PeakBooks shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of the service. Our total liability 
                  shall not exceed the amount paid by you for the service in the 12 months preceding 
                  the claim.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate this agreement at any time. Upon termination, your access 
                  to the service will cease, and any outstanding fees will become immediately due.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
                <p className="text-gray-700">
                  For questions regarding these Terms of Service, please contact us at:
                  <br />
                  Email: legal@peakbooks.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}