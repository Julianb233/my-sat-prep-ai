import { Award } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">My SAT Prep AI</span>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">Back to Home</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using My SAT Prep AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-gray-600">
                My SAT Prep AI provides AI-powered SAT preparation services including adaptive practice questions, score predictions, study schedules, full-length practice tests, and progress analytics. Our Service is designed to supplement your SAT preparation efforts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-gray-600 mb-4">To use the Service, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Be at least 13 years of age</li>
                <li>Provide accurate registration information</li>
                <li>Maintain the security of your account</li>
                <li>Notify us of unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Subscription and Payment</h2>
              <p className="text-gray-600 mb-4">For paid plans:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Subscriptions are billed monthly or annually</li>
                <li>You authorize recurring charges to your payment method</li>
                <li>Prices may change with 30 days notice</li>
                <li>Free trials convert to paid subscriptions unless cancelled</li>
              </ul>
            </section>

            <section className="mb-8" id="refund">
              <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
              <p className="text-gray-600 mb-4">
                We offer refunds under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Full refund within 7 days of initial purchase if you&apos;re not satisfied</li>
                <li>No refunds for partial months or after 7 days</li>
                <li>Refund requests can be made by emailing support@mysatprepai.com</li>
                <li>Refunds are processed within 5-10 business days</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Cancellation</h2>
              <p className="text-gray-600">
                You may cancel your subscription at any time through your account settings. Access continues until the end of your current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Share your account credentials</li>
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to access other users&apos; accounts</li>
                <li>Distribute or reproduce our content without permission</li>
                <li>Use automated systems to access the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Score Disclaimer</h2>
              <p className="text-gray-600">
                While our AI provides score predictions with high accuracy, we cannot guarantee specific score outcomes on the actual SAT exam. Score improvement depends on many factors including study time, effort, and individual circumstances. Our predictions are estimates based on your practice performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
              <p className="text-gray-600">
                All content, features, and functionality of the Service are owned by My SAT Prep AI and protected by intellectual property laws. SAT is a registered trademark of the College Board, which is not affiliated with our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, My SAT Prep AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600">
                We may modify these Terms at any time with notice via email or through the Service. Continued use constitutes acceptance of modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms:
              </p>
              <p className="text-gray-600 mt-2">
                Email: <a href="mailto:legal@mysatprepai.com" className="text-indigo-600 hover:underline">legal@mysatprepai.com</a>
              </p>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} My SAT Prep AI. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
