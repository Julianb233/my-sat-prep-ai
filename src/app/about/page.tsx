import { Award, Target, TrendingUp, Users, Lightbulb, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">My SAT Prep AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re democratizing access to elite-level SAT preparation through intelligent, personalized AI technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The SAT can determine college opportunities, yet premium test prep costs thousands of dollars - putting top scores out of reach for many families. We believe your zip code shouldn&apos;t determine your SAT score.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My SAT Prep AI was built to level the playing field. <strong>Our AI provides the same personalized attention as a $200/hour tutor - at a fraction of the cost.</strong> By analyzing your unique strengths and weaknesses, we create a study plan that focuses on exactly what you need to improve.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No more wasting time on topics you&apos;ve already mastered. No more generic practice tests. Just intelligent, adaptive preparation that gets results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">+180</p>
              <p className="text-gray-600 mt-2">Avg. Score Improvement</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">50K+</p>
              <p className="text-gray-600 mt-2">Students Prepared</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">95%</p>
              <p className="text-gray-600 mt-2">Score Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4.9</p>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Precision Focus</h3>
              <p className="text-gray-600">Every minute of study should count. We identify exactly what you need and eliminate wasted effort.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
              <p className="text-gray-600">We measure success by score improvement. If our students don&apos;t improve, we haven&apos;t done our job.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">Premium test prep shouldn&apos;t require a premium budget. We offer real value at accessible prices.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
              <p className="text-gray-600">Our AI gets smarter with every student. We&apos;re constantly improving our algorithms and content.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Privacy</h3>
              <p className="text-gray-600">Your data is yours. We never sell student information and maintain strict privacy standards.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">We hold ourselves to the same high standards we expect from our students. Good enough isn&apos;t good enough.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re a team of SAT experts, educators, and AI engineers who&apos;ve been on both sides of test prep. Our team includes former SAT tutors who charged $200+/hour, College Board curriculum designers, and machine learning researchers from top universities.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>Founded:</strong> 2024
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Headquarters:</strong> Boston, MA
            </p>
            <p className="text-gray-600">
              <strong>Students Helped:</strong> 50,000+ and growing
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Reach Your Dream Score?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 50,000+ students who&apos;ve transformed their SAT scores with AI-powered preparation.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
          >
            Start Your Free Practice
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} My SAT Prep AI. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
