"use client";

import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Search,
  Calendar,
  FileText,
  PenTool,
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Play,
  Sparkles,
  Award,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">My SAT Prep AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900 transition hidden sm:block">Log in</a>
            <a
              href="/signup"
              className="gradient-bg text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Start Free Practice
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Target className="w-4 h-4" />
            Average score improvement: +180 points
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Your personalized path to
            <span className="gradient-text block">SAT excellence</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Our AI analyzes your strengths and weaknesses, then creates a customized study plan that focuses on exactly what you need to improve your score.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/signup"
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Start Free Practice
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-300 transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              See How It Works
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 from 2,000+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Product Mockup with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative perspective-container"
        >
          {/* Background Glow Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main 3D Mockup */}
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mockup-3d mockup-shadow rounded-2xl overflow-hidden"
          >
            <div className="glass-card p-1">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 rounded-xl p-6 backdrop-blur-xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-500 text-center">
                      mysatprepai.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Score Dashboard */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="glass-card rounded-xl p-4 flex-1 mr-4">
                      <p className="text-sm text-gray-500 mb-1">Predicted Score</p>
                      <div className="flex items-baseline gap-2">
                        <motion.span
                          className="text-5xl font-bold gradient-text"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                        >
                          1420
                        </motion.span>
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <TrendingUp className="w-4 h-4" />
                          +60
                        </span>
                      </div>
                    </div>
                    <div className="glass-card rounded-xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Target</p>
                      <p className="text-3xl font-bold text-gray-400">1500</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Progress to Target</span>
                      <span className="text-indigo-600 font-bold">71%</span>
                    </div>
                    <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
                      <motion.div
                        className="h-full gradient-bg rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '71%' }}
                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Section Scores */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">Reading</div>
                      <div className="text-xl font-bold text-blue-600">710</div>
                    </div>
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">Writing</div>
                      <div className="text-xl font-bold text-purple-600">690</div>
                    </div>
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">Math</div>
                      <div className="text-xl font-bold text-green-600">720</div>
                    </div>
                  </div>

                  {/* Today's Focus */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-indigo-100/70 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Algebra: Quadratics
                    </span>
                    <span className="bg-purple-100/70 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Reading: Inference
                    </span>
                    <span className="bg-green-100/70 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Grammar Rules
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Glassmorphism Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 lg:-right-8 top-20 glass-card rounded-xl p-4 animate-float-3d hidden lg:block glow-primary"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">95% Accuracy</p>
                <p className="text-xs text-gray-500">Score prediction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 lg:-left-8 top-40 glass-card rounded-xl p-4 animate-float hidden lg:block"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">+180 pts</p>
                <p className="text-xs text-gray-500">Avg. improvement</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute right-20 -bottom-4 glass-card rounded-xl p-3 animate-float hidden lg:block"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-2 border-white" />
              </div>
              <span className="text-xs text-gray-600">50,000+ students</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "+180", label: "Avg. Score Improvement" },
    { value: "50,000+", label: "Students Prepared" },
    { value: "95%", label: "Prediction Accuracy" },
    { value: "4.9/5", label: "Rating (2K+ reviews)" },
  ];

  return (
    <section className="py-16 border-y border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Target,
      title: "Adaptive Practice",
      description: "Questions that adjust to your level. Too easy? We'll challenge you. Struggling? We'll build your foundation.",
    },
    {
      icon: TrendingUp,
      title: "Score Prediction",
      description: "AI predicts your SAT score based on practice performance with 95% accuracy. Watch your predicted score climb.",
    },
    {
      icon: Search,
      title: "Weak Area Focus",
      description: "Automatically identifies your trouble spots and generates targeted practice to turn weaknesses into strengths.",
    },
    {
      icon: Calendar,
      title: "Study Schedule",
      description: "Personalized daily study plans based on your test date, current level, and target score. Never wonder what to study.",
    },
    {
      icon: FileText,
      title: "Full Practice Tests",
      description: "Timed, realistic SAT simulations with detailed explanations. Know exactly what test day feels like.",
    },
    {
      icon: PenTool,
      title: "Essay Analysis",
      description: "AI-powered essay feedback on structure, evidence, and writing style. Improve your writing score fast.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">FEATURES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">ace the SAT</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            From adaptive practice to score prediction, we&apos;ve built the complete SAT prep toolkit.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Take the diagnostic",
      description: "Complete a 20-minute assessment. Our AI identifies your exact skill level in Reading, Writing, and Math.",
    },
    {
      step: "02",
      title: "Get your personalized plan",
      description: "Receive a custom study schedule targeting your weak areas. Each session adapts based on your performance.",
    },
    {
      step: "03",
      title: "Watch your score climb",
      description: "Track improvement with predicted scores. Take full practice tests to validate progress before test day.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">HOW IT WORKS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            From diagnostic to <span className="gradient-text">dream score</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp} className="relative">
              <div className="text-8xl font-bold text-gray-100 absolute -top-8 left-0">{item.step}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Perfect for trying out SAT prep",
      features: [
        "5 practice questions per day",
        "Basic score estimate",
        "Limited analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Prep",
      price: "$29",
      period: "/month",
      description: "For serious SAT preparation",
      features: [
        "Unlimited practice questions",
        "Full-length practice tests",
        "AI score prediction",
        "Weak area analysis",
        "Custom study schedule",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Maximum score improvement",
      features: [
        "Everything in Prep",
        "Essay scoring & feedback",
        "1-on-1 tutor session/month",
        "College application tips",
        "Priority support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">PRICING</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Invest in your <span className="gradient-text">future</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Start free, upgrade when you&apos;re ready to commit.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-bg text-white scale-105 shadow-2xl"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="bg-white text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? "text-white" : ""}`}>
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : ""}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/80" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={plan.popular ? "text-white/90" : "text-gray-600"}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-indigo-600"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "I went from a 1280 to a 1480 in 3 months. The weak area focus saved me from wasting time on stuff I already knew.",
      author: "Jason K.",
      role: "Senior, now at UCLA",
      rating: 5,
    },
    {
      quote: "The score predictor was scary accurate. It said 1520, I got 1530. The practice tests really prepared me.",
      author: "Emily R.",
      role: "Junior",
      rating: 5,
    },
    {
      quote: "As a tutor, I recommend this to all my students. It's like having a personal SAT coach 24/7.",
      author: "David L.",
      role: "SAT Tutor",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">SUCCESS STORIES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Students love their <span className="gradient-text">results</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "How accurate is the SAT score prediction?",
      answer: "Our AI achieves 95% accuracy within 30 points of your actual score. The more you practice, the more accurate the prediction becomes as it learns your patterns.",
    },
    {
      question: "How long should I prepare for the SAT?",
      answer: "Most students see significant improvement in 2-3 months of consistent practice. Our AI creates a personalized timeline based on your current level and target score.",
    },
    {
      question: "Are the practice tests like the real SAT?",
      answer: "Yes! Our practice tests mirror the official SAT format, timing, and difficulty. Many students report that test day felt familiar thanks to our realistic simulations.",
    },
    {
      question: "Can I focus on just one section?",
      answer: "Absolutely. You can customize your practice to focus on Reading, Writing, or Math. Our AI will adjust your study plan based on where you need the most improvement.",
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes! Our mobile app lets you practice on the go with quick drills and full-length tests. Your progress syncs seamlessly across all devices.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-indigo-600 font-semibold mb-4">FAQ</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Common <span className="gradient-text">questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="gradient-bg rounded-3xl p-12 text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to reach your dream score?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 50,000+ students who&apos;ve improved their SAT scores with AI-powered, personalized preparation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Start Your Free Practice
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-6 text-white/70 text-sm">
            No credit card required. Start improving today.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">My SAT Prep AI</span>
            </div>
            <p className="text-gray-400">
              AI-powered SAT preparation for your dream score.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Practice Tests</a></li>
              <li><a href="#" className="hover:text-white transition">Study Plans</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My SAT Prep AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
