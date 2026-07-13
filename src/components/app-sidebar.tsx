import { Link, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, Users, Zap, Megaphone, Sparkles, Settings, LogOut, Building2 } from "lucide-react";
import { VittoLogo } from "./vitto-logo";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/prospects", label: "Prospects", icon: Users },
  { to: "/app/actions", label: "Next Best Actions", icon: Zap },
  { to: "/app/campaigns", label: "Campaigns", icon: Megaphone },
  { to: "/app/copilot", label: "RM Copilot", icon: Sparkles },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="hidden md:flex md:w-64 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="px-5 h-16 flex items-center border-b border-sidebar-border">
        <VittoLogo className="h-7 w-auto" />
      </div>

      <div className="px-3 py-4 flex-1">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Workspace
        </div>
        <nav className="space-y-0.5">
          {nav.map((item) => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                )}
              >
                <Icon className={cn("h-4 w-4", active && "text-primary")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 rounded-xl border border-sidebar-border bg-background p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" />
            IDBI Bank
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-foreground">
            IDBI 2026 <span className="text-vitto font-semibold">Innovate</span>
            <span className="text-muted-foreground"> · Prospect Assist AI</span>
          </p>
        </div>
      </div>

      <div className="border-t border-sidebar-border p-3">
        <Link
          to="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </Link>
        <Link
          to="/app"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
