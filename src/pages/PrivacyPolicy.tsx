import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">Privacy Policy</h1>
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
              <div>
                <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                
                <p className="text-gray-700 mb-6">
                  PeakBooks ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">1. Information We Collect</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email, phone number, and business details.</li>
                  <li><strong>Financial & Business Data:</strong> Invoices, expenses, payroll, and accounting data entered by you.</li>
                  <li><strong>Usage Data:</strong> Device details, IP addresses, cookies, and activity logs.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-2">We use the information to:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Provide and improve PeakBooks services.</li>
                  <li>Send updates, security alerts, and support messages.</li>
                  <li>Comply with legal and regulatory requirements.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">3. Data Sharing & Disclosure</h2>
                <p className="text-gray-700 mb-2">We do <strong>not</strong> sell your data. We may share it only with:</p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Trusted service providers (hosting, payments, analytics).</li>
                  <li>Authorities when required by law.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-6">
                  We use industry-standard encryption and secure servers to protect your data.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You may access, update, or delete your data by emailing <a href="mailto:support@peakbooks.app" className="text-blue-600 hover:text-blue-800 underline">support@peakbooks.app</a>.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">6. Third-Party Services</h2>
                <p className="text-gray-700 mb-6">
                  PeakBooks integrates with external services like Google and payment providers. Their policies also apply.
                </p>
                
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">7. Changes to this Policy</h2>
                <p className="text-gray-700 mb-6">
                  We may update this policy. Significant updates will be communicated via email or app notifications.
                </p>
                
                <p className="text-gray-700">
                  <strong>Contact:</strong> <a href="mailto:support@peakbooks.app" className="text-blue-600 hover:text-blue-800 underline">support@peakbooks.app</a>
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