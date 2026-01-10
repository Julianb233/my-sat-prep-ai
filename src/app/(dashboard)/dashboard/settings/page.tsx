"use client";

import { User, Bell, Calendar, Target, Shield, HelpCircle, LogOut } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    reminders: true,
    weekly: true,
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted mt-1">Manage your account and preferences</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Profile Section */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Profile</h2>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-white">
              J
            </div>
            <div>
              <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition">
                Change Photo
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Jason Kim"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                defaultValue="jason@example.com"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
          </div>
        </div>

        {/* Test Settings */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Test Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">SAT Test Date</label>
              <input
                type="date"
                defaultValue="2025-03-08"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Target Score</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition">
                <option>1400</option>
                <option>1450</option>
                <option selected>1500</option>
                <option>1550</option>
                <option>1600</option>
              </select>
            </div>
          </div>
        </div>

        {/* Study Goals */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Study Goals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Daily Questions Goal</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition">
                <option>25 questions</option>
                <option selected>50 questions</option>
                <option>75 questions</option>
                <option>100 questions</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Weekly Study Hours</label>
              <select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition">
                <option>5 hours</option>
                <option selected>10 hours</option>
                <option>15 hours</option>
                <option>20 hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { key: "email", label: "Email Notifications", description: "Score updates and tips" },
              { key: "push", label: "Push Notifications", description: "Browser alerts" },
              { key: "reminders", label: "Study Reminders", description: "Daily practice reminders" },
              { key: "weekly", label: "Weekly Reports", description: "Progress summaries" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key as keyof typeof notifications] })}
                  className={`relative w-12 h-6 rounded-full transition ${
                    notifications[item.key as keyof typeof notifications] ? "bg-primary" : "bg-muted/30"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                      notifications[item.key as keyof typeof notifications] ? "left-7" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Other Settings */}
        <div className="bg-surface rounded-xl border border-border divide-y divide-border">
          {[
            { icon: Shield, label: "Privacy & Security", value: "" },
            { icon: HelpCircle, label: "Help & Support", value: "" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-4 hover:bg-primary/5 transition"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted" />
                <span className="font-medium text-foreground">{item.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="bg-surface rounded-xl p-6 border border-red-200">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
