import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Terms of Service</h1>
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <div>
                <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                
                <p className="text-gray-700 mb-6">
                  These Terms of Service ("Terms") govern your use of PeakBooks. By accessing or using PeakBooks, you agree to these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">1. Services Provided</h2>
                <p className="text-gray-700 mb-6">
                  PeakBooks offers accounting, bookkeeping, and business automation solutions.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">2. Eligibility</h2>
                <p className="text-gray-700 mb-6">
                  You must be 18+ and capable of forming a binding contract to use PeakBooks.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">3. User Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Provide accurate registration and business details.</li>
                  <li>Maintain confidentiality of login credentials.</li>
                  <li>Use PeakBooks lawfully and responsibly.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">4. Subscription & Payments</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Some features require a paid subscription.</li>
                  <li>Fees are billed monthly or annually, non-refundable unless required by law.</li>
                  <li>Failure to pay may suspend access.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">5. Data Ownership</h2>
                <p className="text-gray-700 mb-6">
                  You own your business and financial data. By using PeakBooks, you grant us permission to process and back it up only for service delivery.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">6. Prohibited Uses</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>No fraudulent or illegal use.</li>
                  <li>No reverse engineering or duplication.</li>
                  <li>No unauthorized sharing of accounts.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-6">
                  PeakBooks is provided "as is." We are not liable for indirect damages or loss of profits.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">8. Termination</h2>
                <p className="text-gray-700 mb-6">
                  We may suspend or terminate accounts for violations of these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">9. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of Kenya.
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