"use client";

import { Award, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration
    console.log("Signup attempt:", { name, email, password });
  };

  const benefits = [
    "AI-powered adaptive practice questions",
    "Accurate score prediction (95% accuracy)",
    "Personalized study schedule",
    "Full-length practice tests",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-2xl">My SAT Prep AI</span>
        </Link>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-2xl font-bold text-center mb-2">Start free practice</h1>
          <p className="text-gray-600 text-center mb-8">
            No credit card required
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="John Smith"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Create password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="8+ characters"
                  required
                  minLength={8}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Create free account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Benefits */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-700 mb-3">What you&apos;ll get:</p>
            <ul className="space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center mt-6 text-xs text-gray-500">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-gray-700">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>
        </p>

        {/* Back to home */}
        <p className="text-center mt-4 text-gray-500">
          <Link href="/" className="hover:text-gray-700 transition">
            &larr; Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
