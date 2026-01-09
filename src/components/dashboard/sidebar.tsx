"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Target,
  FileText,
  AlertTriangle,
  Calendar,
  BarChart3,
  PenTool,
  Settings,
  LogOut,
  Lock,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: Home, label: "Overview" },
  { href: "/dashboard/practice", icon: Target, label: "Adaptive Practice" },
  { href: "/dashboard/tests", icon: FileText, label: "Practice Tests" },
  { href: "/dashboard/weak-areas", icon: AlertTriangle, label: "Weak Areas" },
  { href: "/dashboard/schedule", icon: Calendar, label: "Study Schedule" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "Score Analytics" },
  { href: "/dashboard/essays", icon: PenTool, label: "Essay Practice", comingSoon: true },
];

const bottomItems = [
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-surface/80 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg shadow-lg shadow-primary/20">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">My SAT Prep AI</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.comingSoon ? "#" : item.href}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary shadow-sm shadow-primary/10"
                    : item.comingSoon
                    ? "cursor-not-allowed text-muted"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-foreground hover:translate-x-1"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary shadow-lg shadow-primary/50"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
                {item.comingSoon && (
                  <span className="ml-auto flex items-center gap-1 rounded-full bg-muted/20 px-2 py-0.5 text-xs text-muted">
                    <Lock className="h-3 w-3" />
                    Soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-border px-3 py-4">
          {bottomItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/70 transition-all duration-300 hover:bg-red-500/10 hover:text-red-500">
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </div>

        {/* Score Preview */}
        <div className="border-t border-border p-4">
          <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 backdrop-blur-sm">
            <p className="text-xs text-muted mb-1">Predicted Score</p>
            <p className="text-2xl font-bold text-foreground">1420</p>
            <p className="text-xs text-secondary">+60 from start</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
