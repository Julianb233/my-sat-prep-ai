"use client";

import { Award, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement password reset
    console.log("Password reset request:", { email });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-2xl">My SAT Prep AI</span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-2">Reset your password</h1>
              <p className="text-gray-600 text-center mb-8">
                Enter your email and we&apos;ll send you a reset link
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  Send reset link
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Check your email</h1>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500">
                Didn&apos;t receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 hover:underline"
                >
                  try again
                </button>
              </p>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
