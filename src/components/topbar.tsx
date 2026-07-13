import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center gap-4 px-6 sticky top-0 z-20">
      <div className="min-w-0">
        <h1 className="text-lg font-semibold tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground truncate">{subtitle}</p>}
      </div>
      <div className="ml-auto flex items-center gap-3">
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search prospects, actions…"
            className="w-72 pl-9 h-9 bg-muted/60 border-transparent focus-visible:bg-background"
          />
        </div>
        <button className="relative rounded-full p-2 hover:bg-muted transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>
        <div className="flex items-center gap-2.5 pl-3 border-l border-border">
          <div className="text-right leading-tight hidden sm:block">
            <div className="text-sm font-medium">Santhosh J K</div>
            <div className="text-[11px] text-muted-foreground">
              RM · Bengaluru <Badge variant="secondary" className="ml-1 py-0 h-4 text-[10px]">Tier 1</Badge>
            </div>
          </div>
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">SJ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
