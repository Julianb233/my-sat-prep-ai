"use client";

import { BarChart3, TrendingUp, Target, Clock, Award, ChevronRight } from "lucide-react";

const scoreHistory = [
  { date: "Dec 1", score: 1280 },
  { date: "Dec 8", score: 1320 },
  { date: "Dec 15", score: 1350 },
  { date: "Dec 22", score: 1380 },
  { date: "Dec 29", score: 1400 },
  { date: "Jan 5", score: 1420 },
];

const sectionScores = [
  { name: "Reading", score: 350, maxScore: 400, change: +25 },
  { name: "Writing", score: 340, maxScore: 400, change: +30 },
  { name: "Math (No Calc)", score: 350, maxScore: 400, change: +15 },
  { name: "Math (Calc)", score: 380, maxScore: 400, change: +20 },
];

const topicBreakdown = [
  { topic: "Algebra", accuracy: 85, questions: 150 },
  { topic: "Data Analysis", accuracy: 78, questions: 120 },
  { topic: "Geometry", accuracy: 72, questions: 80 },
  { topic: "Advanced Math", accuracy: 68, questions: 100 },
];

export default function AnalyticsPage() {
  const maxScore = Math.max(...scoreHistory.map(s => s.score));
  const minScore = Math.min(...scoreHistory.map(s => s.score));
  const range = maxScore - minScore;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Score Analytics</h1>
        <p className="text-muted mt-1">Track your progress and identify areas for improvement</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Predicted Score</span>
          </div>
          <p className="text-3xl font-bold text-foreground">1420</p>
          <p className="text-sm text-green-500 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +140 total
          </p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Questions Answered</span>
          </div>
          <p className="text-3xl font-bold text-foreground">1,247</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Study Hours</span>
          </div>
          <p className="text-3xl font-bold text-foreground">48</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Accuracy</span>
          </div>
          <p className="text-3xl font-bold text-foreground">76%</p>
        </div>
      </div>

      {/* Score Progress Chart */}
      <div className="bg-surface rounded-xl p-6 border border-border mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Score Progress</h2>
        <div className="h-64 flex items-end justify-between gap-4 px-4">
          {scoreHistory.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="relative w-full flex justify-center mb-2">
                <span className="text-sm font-semibold text-primary">{item.score}</span>
              </div>
              <div
                className="w-full bg-primary/20 rounded-t-lg transition-all relative group"
                style={{
                  height: `${((item.score - minScore + 50) / (range + 100)) * 100}%`,
                  minHeight: "40px",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all"
                  style={{ height: "100%" }}
                />
              </div>
              <p className="text-sm text-muted mt-2">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section Scores */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Section Breakdown</h2>
          <div className="space-y-6">
            {sectionScores.map((section) => (
              <div key={section.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{section.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-green-500">+{section.change}</span>
                    <span className="font-bold text-foreground">{section.score}</span>
                    <span className="text-sm text-muted">/ {section.maxScore}</span>
                  </div>
                </div>
                <div className="w-full bg-border rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all"
                    style={{ width: `${(section.score / section.maxScore) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Breakdown */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Math Topics</h2>
            <button className="text-sm text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {topicBreakdown.map((topic) => (
              <div key={topic.topic} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/10 transition">
                <div>
                  <p className="font-medium text-foreground">{topic.topic}</p>
                  <p className="text-sm text-muted">{topic.questions} questions</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 bg-border rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        topic.accuracy >= 80
                          ? "bg-green-500"
                          : topic.accuracy >= 70
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${topic.accuracy}%` }}
                    />
                  </div>
                  <span className={`font-semibold ${
                    topic.accuracy >= 80
                      ? "text-green-500"
                      : topic.accuracy >= 70
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}>
                    {topic.accuracy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
