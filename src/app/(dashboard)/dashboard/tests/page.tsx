"use client";

import { FileText, Clock, Play, CheckCircle, Lock, TrendingUp } from "lucide-react";

const practiceTests = [
  { id: 1, name: "Practice Test 1", duration: "3 hours", questions: 154, completed: true, score: 1380 },
  { id: 2, name: "Practice Test 2", duration: "3 hours", questions: 154, completed: true, score: 1420 },
  { id: 3, name: "Practice Test 3", duration: "3 hours", questions: 154, completed: false, score: null },
  { id: 4, name: "Practice Test 4", duration: "3 hours", questions: 154, completed: false, score: null },
  { id: 5, name: "Practice Test 5", duration: "3 hours", questions: 154, completed: false, score: null, locked: true },
  { id: 6, name: "Practice Test 6", duration: "3 hours", questions: 154, completed: false, score: null, locked: true },
];

const sectionTests = [
  { name: "Reading", duration: "65 min", questions: 52, icon: "📖" },
  { name: "Writing & Language", duration: "35 min", questions: 44, icon: "✍️" },
  { name: "Math (No Calculator)", duration: "25 min", questions: 20, icon: "🧮" },
  { name: "Math (Calculator)", duration: "55 min", questions: 38, icon: "📊" },
];

export default function TestsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Practice Tests</h1>
        <p className="text-muted mt-1">Full-length SAT simulations</p>
      </div>

      {/* Test Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
          <p className="text-sm text-muted mb-1">Best Score</p>
          <p className="text-3xl font-bold text-foreground">1420</p>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4" /> +140 from first test
          </p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm text-muted mb-1">Tests Completed</p>
          <p className="text-3xl font-bold text-foreground">2 / 6</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm text-muted mb-1">Average Time</p>
          <p className="text-3xl font-bold text-foreground">2h 45m</p>
        </div>
      </div>

      {/* Full Practice Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Full Practice Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceTests.map((test) => (
            <div
              key={test.id}
              className={`bg-surface rounded-xl p-5 border transition ${
                test.locked ? "border-border opacity-60" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {test.locked ? (
                    <Lock className="w-6 h-6 text-muted" />
                  ) : test.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <FileText className="w-6 h-6 text-primary" />
                  )}
                </div>
                {test.completed && test.score && (
                  <span className="text-2xl font-bold text-foreground">{test.score}</span>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{test.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {test.duration}
                </span>
                <span>{test.questions} questions</span>
              </div>
              <button
                disabled={test.locked}
                className={`w-full py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  test.locked
                    ? "bg-muted/20 text-muted cursor-not-allowed"
                    : test.completed
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {test.locked ? (
                  <>
                    <Lock className="w-4 h-4" />
                    Upgrade to Unlock
                  </>
                ) : test.completed ? (
                  "Review Results"
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Start Test
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section Tests */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Section Tests</h2>
        <p className="text-muted mb-4">Practice individual sections at your own pace</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionTests.map((section) => (
            <div
              key={section.name}
              className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                {section.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{section.name}</h3>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{section.duration}</span>
                <span>•</span>
                <span>{section.questions} Q</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
