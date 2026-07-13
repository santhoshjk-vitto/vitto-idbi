import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Topbar } from "@/components/topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send } from "lucide-react";

export const Route = createFileRoute("/app/copilot")({
  head: () => ({ meta: [{ title: "RM Copilot · VittoProspect" }] }),
  component: Copilot,
});

type Msg = { from: "ai" | "me"; text: string; chips?: string[] };

const seed: Msg[] = [
  { from: "ai", text: "Good morning Santhosh! You have 18 high-priority actions today. Would you like a briefing?" , chips: ["Show top 3 prospects", "Draft outreach for Arjun Mehta", "Summarize Kavya Iyer's profile"] },
  { from: "me", text: "Summarize Arjun Mehta and suggest the best pitch." },
  { from: "ai", text: "Arjun Mehta (AI Score 92) is a Sr. Manager in Bengaluru. He closed a personal loan 3 days ago and his salary jumped 24%. He has visited the EMI calculator 3× this week — classic active-intent pattern.\n\nRecommended pitch: Lead with a pre-approved offer of ₹ 12.4L at your best salaried rate. Call between 11 AM–1 PM (his historical response window). Emphasize instant disbursal since his previous loan closed early — a reliability signal." },
];

function Copilot() {
  const [msgs, setMsgs] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");

  const send = (t?: string) => {
    const text = (t ?? input).trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "me", text }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, {
        from: "ai",
        text: "Drafted a personalised message and scheduled a follow-up nudge. Would you like me to send via WhatsApp or Email?",
        chips: ["Send WhatsApp", "Send Email", "Show draft"],
      }]);
    }, 500);
  };

  return (
    <>
      <Topbar title="RM Copilot" subtitle="Ask anything about your prospects, actions and pipeline" />
      <div className="p-6">
        <Card className="border-border/70 shadow-sm max-w-4xl mx-auto">
          <CardContent className="p-0">
            <div className="p-4 border-b border-border flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">VittoProspect Copilot</div>
                <div className="text-xs text-muted-foreground">Explainable · Secure · Bank-grade</div>
              </div>
              <Badge variant="outline" className="ml-auto text-emerald-700 border-emerald-200 bg-emerald-50">Online</Badge>
            </div>

            <div className="p-6 space-y-4 min-h-[420px]">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "me" ? "justify-end" : ""}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                    m.from === "me"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted rounded-bl-sm"
                  }`}>
                    {m.text}
                    {m.chips && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {m.chips.map((c) => (
                          <button
                            key={c}
                            onClick={() => send(c)}
                            className="text-xs rounded-full border border-border bg-background px-3 py-1 hover:bg-accent hover:border-primary/30 text-foreground"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="p-3 border-t border-border flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask VittoProspect anything…"
                className="h-11"
              />
              <Button type="submit" size="lg" className="gap-1.5">
                <Send className="h-4 w-4" /> Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
