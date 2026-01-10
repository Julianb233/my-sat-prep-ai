"use client";

import { Calendar, Clock, Target, CheckCircle, Circle, ChevronLeft, ChevronRight } from "lucide-react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const todayTasks = [
  { time: "9:00 AM", task: "Math - Quadratic Equations", duration: "30 min", completed: true },
  { time: "10:00 AM", task: "Reading - Inference Practice", duration: "25 min", completed: true },
  { time: "2:00 PM", task: "Writing - Grammar Rules", duration: "20 min", completed: false },
  { time: "4:00 PM", task: "Full Section Test - Reading", duration: "65 min", completed: false },
];

const weeklyGoals = [
  { goal: "Complete 50 practice questions", current: 35, target: 50 },
  { goal: "Study for 10 hours", current: 7, target: 10 },
  { goal: "Take 1 full practice test", current: 0, target: 1 },
];

export default function SchedulePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Study Schedule</h1>
        <p className="text-muted mt-1">Your personalized SAT preparation plan</p>
      </div>

      {/* Test Date Countdown */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/20 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted mb-1">SAT Test Date</p>
            <p className="text-2xl font-bold text-foreground">March 8, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-primary">47</p>
            <p className="text-sm text-muted">days remaining</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary/20">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted">Preparation Progress</span>
            <span className="text-primary font-medium">65%</span>
          </div>
          <div className="w-full bg-white/50 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <div className="bg-surface rounded-xl p-6 border border-border mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">January 2025</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-muted/20 transition">
                  <ChevronLeft className="w-5 h-5 text-muted" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted/20 transition">
                  <ChevronRight className="w-5 h-5 text-muted" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm text-muted py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2; // Start from previous month
                const isCurrentMonth = day > 0 && day <= 31;
                const isToday = day === 9;
                const hasTask = [5, 9, 12, 15, 18, 22, 25, 28].includes(day);
                return (
                  <button
                    key={i}
                    className={`aspect-square rounded-lg flex flex-col items-center justify-center transition ${
                      isToday
                        ? "bg-primary text-white"
                        : isCurrentMonth
                        ? "hover:bg-muted/20"
                        : "text-muted/50"
                    }`}
                  >
                    <span className="text-sm">{isCurrentMonth ? day : ""}</span>
                    {hasTask && isCurrentMonth && !isToday && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Today&apos;s Schedule</h2>
            </div>
            <div className="space-y-4">
              {todayTasks.map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition ${
                    task.completed
                      ? "bg-green-50 border-green-200"
                      : "bg-surface border-border hover:border-primary/50"
                  }`}
                >
                  <button className="flex-shrink-0">
                    {task.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted" />
                    )}
                  </button>
                  <div className="flex-1">
                    <p className={`font-medium ${task.completed ? "text-green-700 line-through" : "text-foreground"}`}>
                      {task.task}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <span>{task.time}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {task.duration}
                      </span>
                    </div>
                  </div>
                  {!task.completed && (
                    <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
                      Start
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Goals */}
        <div>
          <div className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Weekly Goals</h2>
            </div>
            <div className="space-y-6">
              {weeklyGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground">{goal.goal}</p>
                    <p className="text-sm font-medium text-primary">
                      {goal.current}/{goal.target}
                    </p>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Tips */}
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-6 border border-secondary/20 mt-6">
            <h3 className="font-semibold text-foreground mb-3">💡 Study Tip</h3>
            <p className="text-sm text-muted">
              Based on your performance, we recommend focusing on Reading Inference questions today.
              You&apos;ve improved 15% this week!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
