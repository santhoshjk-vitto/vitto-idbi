import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prospects, lakhs } from "@/lib/mock-data";
import { PhoneCall, Mail, MessageSquare, Sparkles, CalendarClock } from "lucide-react";

export const Route = createFileRoute("/app/actions")({
  head: () => ({ meta: [{ title: "Next Best Actions · VittoProspect" }] }),
  component: Actions,
});

function iconFor(a: string) {
  const l = a.toLowerCase();
  if (l.includes("call")) return PhoneCall;
  if (l.includes("email")) return Mail;
  if (l.includes("whatsapp") || l.includes("send")) return MessageSquare;
  return CalendarClock;
}

function Actions() {
  return (
    <>
      <Topbar title="Next Best Actions" subtitle="Your AI-prioritised task list for today" />
      <div className="p-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Actions today", value: "18" },
            { label: "Expected conversions", value: "5.2" },
            { label: "Revenue in play", value: "₹ 1.42 Cr" },
          ].map((s) => (
            <Card key={s.label} className="border-border/70 shadow-sm">
              <CardContent className="p-5">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</div>
                <div className="mt-1 text-2xl font-semibold">{s.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-3">
          {prospects.map((p) => {
            const Icon = iconFor(p.nextBestAction);
            return (
              <Card key={p.id} className="border-border/70 shadow-sm">
                <CardContent className="p-5 flex flex-wrap items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">{p.nextBestAction}</span>
                      <span className="text-muted-foreground">·</span>
                      <span>{p.name}</span>
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">AI {p.aiScore}</Badge>
                      <Badge variant="secondary" className="font-normal">{p.intent}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground flex items-start gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 mt-0.5 text-primary shrink-0" /> {p.reason}
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {p.timing} · Potential {lakhs(p.potentialValue)} · {p.city}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">Snooze</Button>
                    <Button size="sm">Do now</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
