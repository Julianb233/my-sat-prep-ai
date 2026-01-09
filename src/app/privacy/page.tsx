import { Award } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600">
                My SAT Prep AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SAT preparation platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, grade level, target test date</li>
                <li><strong>Practice Data:</strong> Question responses, scores, study time, progress metrics</li>
                <li><strong>Usage Data:</strong> Features used, session duration, device information</li>
                <li><strong>Payment Information:</strong> Processed securely through our payment provider (we do not store card details)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Information</h2>
              <p className="text-gray-600 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide personalized SAT preparation and score predictions</li>
                <li>Identify your weak areas and create targeted study plans</li>
                <li>Track and display your progress over time</li>
                <li>Improve our AI models and educational content</li>
                <li>Send important service updates and study reminders</li>
                <li>Process payments and manage subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Secure, encrypted data storage</li>
                <li>Regular security audits</li>
                <li>Role-based access controls</li>
                <li>Data stored in U.S.-based data centers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do NOT sell your personal data. We only share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers necessary to operate our platform (under strict data protection agreements)</li>
                <li>Analytics providers (in aggregated, anonymized form)</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access and download your data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Update your account information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-gray-600">
                We use cookies and similar technologies to improve your experience, analyze usage, and remember your preferences. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For privacy inquiries or to exercise your rights, contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: <a href="mailto:privacy@mysatprepai.com" className="text-indigo-600 hover:underline">privacy@mysatprepai.com</a>
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
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
