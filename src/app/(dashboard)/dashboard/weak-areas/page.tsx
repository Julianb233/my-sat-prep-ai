"use client";

import { AlertTriangle, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const weakAreas = [
  {
    topic: "Quadratic Equations",
    section: "Math - No Calculator",
    accuracy: 45,
    questionsAttempted: 20,
    improvement: "+8%",
    priority: "high",
  },
  {
    topic: "Inference Questions",
    section: "Reading",
    accuracy: 52,
    questionsAttempted: 35,
    improvement: "+5%",
    priority: "high",
  },
  {
    topic: "Pronoun Agreement",
    section: "Writing & Language",
    accuracy: 58,
    questionsAttempted: 25,
    improvement: "+12%",
    priority: "medium",
  },
  {
    topic: "Data Analysis",
    section: "Math - Calculator",
    accuracy: 62,
    questionsAttempted: 30,
    improvement: "+3%",
    priority: "medium",
  },
  {
    topic: "Vocabulary in Context",
    section: "Reading",
    accuracy: 65,
    questionsAttempted: 40,
    improvement: "+7%",
    priority: "low",
  },
];

const strengths = [
  { topic: "Linear Equations", section: "Math", accuracy: 92 },
  { topic: "Sentence Structure", section: "Writing", accuracy: 88 },
  { topic: "Main Idea Questions", section: "Reading", accuracy: 85 },
];

export default function WeakAreasPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Weak Areas</h1>
        <p className="text-muted mt-1">Focus on topics that need the most improvement</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-red-50 rounded-xl p-5 border border-red-200">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span className="font-medium text-red-700">High Priority</span>
          </div>
          <p className="text-3xl font-bold text-red-600">2</p>
          <p className="text-sm text-red-600/70">Topics need attention</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-5 h-5 text-amber-500" />
            <span className="font-medium text-amber-700">Medium Priority</span>
          </div>
          <p className="text-3xl font-bold text-amber-600">2</p>
          <p className="text-sm text-amber-600/70">Topics improving</p>
        </div>
        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="font-medium text-green-700">Overall Improvement</span>
          </div>
          <p className="text-3xl font-bold text-green-600">+35%</p>
          <p className="text-sm text-green-600/70">Since you started</p>
        </div>
      </div>

      {/* Weak Areas List */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Topics to Focus On</h2>
        <div className="bg-surface rounded-xl border border-border divide-y divide-border">
          {weakAreas.map((area, index) => (
            <div key={index} className="p-5 flex items-center justify-between hover:bg-primary/5 transition">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  area.priority === "high"
                    ? "bg-red-100 text-red-600"
                    : area.priority === "medium"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-blue-100 text-blue-600"
                }`}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{area.topic}</h3>
                  <p className="text-sm text-muted">{area.section}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">{area.accuracy}%</p>
                  <p className="text-sm text-green-500">{area.improvement}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted">Attempted</p>
                  <p className="font-medium text-foreground">{area.questionsAttempted}</p>
                </div>
                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition flex items-center gap-2">
                  Practice
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Your Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {strengths.map((strength) => (
            <div key={strength.topic} className="bg-green-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium text-green-700">{strength.topic}</span>
              </div>
              <p className="text-3xl font-bold text-green-600">{strength.accuracy}%</p>
              <p className="text-sm text-green-600/70">{strength.section}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
