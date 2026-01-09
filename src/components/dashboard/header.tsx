"use client";

import { Bell, Search, Menu, Calendar } from "lucide-react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  daysUntilTest?: number;
}

export function Header({ title, subtitle, daysUntilTest }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <button className="lg:hidden rounded-xl p-2 hover:bg-primary/5 transition-colors">
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <div>
          <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Days Until Test */}
        {daysUntilTest && (
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-3 py-2 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              <span className="text-primary">{daysUntilTest}</span> days until SAT
            </span>
          </div>
        )}

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-surface/50 px-3 py-2 backdrop-blur-sm">
          <Search className="h-4 w-4 text-muted" />
          <input
            type="text"
            placeholder="Search topics..."
            className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </div>

        {/* Notifications */}
        <button className="relative rounded-xl p-2 hover:bg-primary/5 transition-colors">
          <Bell className="h-5 w-5 text-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary animate-pulse" />
        </button>
      </div>
    </header>
  );
}
