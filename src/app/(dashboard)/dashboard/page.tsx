"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/dashboard/header";
import {
  Target,
  FileText,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  BookOpen,
  Calculator,
  PenTool,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const scoreBreakdown = [
  { section: "Reading", score: 710, maxScore: 800, color: "bg-blue-500", icon: BookOpen },
  { section: "Writing", score: 690, maxScore: 800, color: "bg-purple-500", icon: PenTool },
  { section: "Math", score: 720, maxScore: 800, color: "bg-green-500", icon: Calculator },
];

const quickActions = [
  { label: "Start Today's Practice", icon: Target, href: "/dashboard/practice", gradient: true },
  { label: "Take Practice Test", icon: FileText, href: "/dashboard/tests" },
  { label: "Review Weak Areas", icon: AlertTriangle, href: "/dashboard/weak-areas" },
];

const todaysFocus = [
  { topic: "Algebra: Quadratic equations", duration: "30 min", completed: false },
  { topic: "Reading: Inference questions", duration: "20 min", completed: false },
  { topic: "Grammar: Punctuation rules", duration: "15 min", completed: true },
];

const recentProgress = [
  { action: "Completed Math Practice", score: "+15 pts", time: "2 hours ago", positive: true },
  { action: "Finished Reading Section", score: "+10 pts", time: "Yesterday", positive: true },
  { action: "Identified weak area", score: "Algebra II", time: "Yesterday", positive: false },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header
        title="Welcome back!"
        subtitle="Let's improve your SAT score today"
        daysUntilTest={47}
      />

      <div className="p-6 space-y-6">
        {/* Score Overview */}
        <motion.section {...fadeInUp}>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-primary/5 p-6 backdrop-blur-sm relative overflow-hidden">
            {/* Glassmorphism decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <p className="text-sm text-muted mb-1">Predicted Score</p>
                  <div className="flex items-baseline gap-3">
                    <motion.span
                      className="text-5xl font-bold gradient-text"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      1420
                    </motion.span>
                    <span className="flex items-center gap-1 text-secondary font-medium">
                      <TrendingUp className="h-4 w-4" />
                      +60 from start
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted mb-2">Progress to Target (1500)</p>
                    <div className="h-3 w-64 rounded-full bg-border overflow-hidden">
                      <motion.div
                        className="h-full gradient-bg"
                        initial={{ width: 0 }}
                        animate={{ width: "71%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                    <p className="text-xs text-muted mt-1">71% of the way there</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {scoreBreakdown.map((section, index) => (
                    <motion.div
                      key={section.section}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="rounded-xl bg-background/50 backdrop-blur-sm border border-border p-4 text-center"
                    >
                      <section.icon className={`h-5 w-5 mx-auto mb-2 ${section.color.replace('bg-', 'text-')}`} />
                      <p className="text-2xl font-bold text-foreground">{section.score}</p>
                      <p className="text-xs text-muted">{section.section}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between rounded-xl p-5 transition-all duration-300 ${
                  action.gradient
                    ? "gradient-bg text-white shadow-lg shadow-primary/25"
                    : "border border-border bg-surface/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <action.icon className={`h-5 w-5 ${action.gradient ? "text-white" : "text-primary"}`} />
                  <span className={`font-medium ${action.gradient ? "text-white" : "text-foreground"}`}>
                    {action.label}
                  </span>
                </div>
                <ArrowRight className={`h-5 w-5 ${action.gradient ? "text-white/80" : "text-muted"}`} />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Today's Focus */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Today&apos;s Focus</h2>
            <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden">
              {todaysFocus.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index !== todaysFocus.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    item.completed ? "bg-secondary/20" : "bg-primary/20"
                  }`}>
                    {item.completed ? (
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    ) : (
                      <Zap className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${item.completed ? "text-muted line-through" : "text-foreground"}`}>
                      {item.topic}
                    </p>
                    <p className="text-xs text-muted flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.duration}
                    </p>
                  </div>
                  {!item.completed && (
                    <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors">
                      Start
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Recent Progress */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Recent Progress</h2>
            <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden">
              {recentProgress.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index !== recentProgress.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    item.positive ? "bg-secondary/20" : "bg-accent/20"
                  }`}>
                    {item.positive ? (
                      <TrendingUp className="h-4 w-4 text-secondary" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.action}</p>
                    <p className="text-xs text-muted">{item.time}</p>
                  </div>
                  <span className={`text-sm font-medium ${
                    item.positive ? "text-secondary" : "text-accent"
                  }`}>
                    {item.score}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
