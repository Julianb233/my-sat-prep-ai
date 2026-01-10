"use client";

import { Target, Clock, CheckCircle, XCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const questionTypes = [
  { name: "Reading Comprehension", questions: 52, accuracy: 78, icon: "📖" },
  { name: "Writing & Language", questions: 44, accuracy: 82, icon: "✍️" },
  { name: "Math - No Calculator", questions: 20, accuracy: 75, icon: "🧮" },
  { name: "Math - Calculator", questions: 38, accuracy: 80, icon: "📊" },
];

const sampleQuestion = {
  type: "Math - No Calculator",
  difficulty: "Medium",
  question: "If 3x + 7 = 22, what is the value of x?",
  options: ["3", "5", "7", "15"],
  correctAnswer: 1,
};

export default function PracticePage() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Adaptive Practice</h1>
        <p className="text-muted mt-1">AI-powered questions that adapt to your level</p>
      </div>

      {/* Quick Practice Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted">{sampleQuestion.type}</p>
                  <p className="text-xs text-primary font-medium">{sampleQuestion.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4" />
                <span className="text-sm">1:30</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-lg text-foreground font-medium">{sampleQuestion.question}</p>
            </div>

            <div className="space-y-3 mb-6">
              {sampleQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && setSelectedAnswer(index)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition flex items-center gap-3 ${
                    showResult
                      ? index === sampleQuestion.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : selectedAnswer === index
                        ? "border-red-500 bg-red-50"
                        : "border-border"
                      : selectedAnswer === index
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  disabled={showResult}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    showResult
                      ? index === sampleQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : selectedAnswer === index
                        ? "bg-red-500 text-white"
                        : "bg-muted/20 text-muted"
                      : selectedAnswer === index
                      ? "bg-primary text-white"
                      : "bg-muted/20 text-muted"
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-foreground">{option}</span>
                  {showResult && index === sampleQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {showResult && selectedAnswer === index && index !== sampleQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              {!showResult ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="flex-1 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={() => { setShowResult(false); setSelectedAnswer(null); }}
                  className="flex-1 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  Next Question
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Session Stats */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Session Progress</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold text-foreground">7/10</p>
                <p className="text-sm text-muted">Questions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">86%</p>
                <p className="text-sm text-muted">Accuracy</p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-5 border border-border">
            <h3 className="font-medium text-foreground mb-3">Today&apos;s Goal</h3>
            <div className="w-full bg-border rounded-full h-3 mb-2">
              <div className="bg-primary h-3 rounded-full" style={{ width: "70%" }} />
            </div>
            <p className="text-sm text-muted">35 / 50 questions completed</p>
          </div>
        </div>
      </div>

      {/* Question Types */}
      <h2 className="text-xl font-semibold text-foreground mb-4">Practice by Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {questionTypes.map((type) => (
          <div
            key={type.name}
            className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
              {type.icon}
            </div>
            <h3 className="font-medium text-foreground mb-1">{type.name}</h3>
            <p className="text-sm text-muted mb-3">{type.questions} questions</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">Accuracy: {type.accuracy}%</span>
              <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
