import { createFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/topbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prospects, lakhs } from "@/lib/mock-data";
import { Search, Filter, Download } from "lucide-react";

export const Route = createFileRoute("/app/prospects/")({
  head: () => ({ meta: [{ title: "Prospects · VittoProspect" }] }),
  component: ProspectsList,
});

const chips = ["All", "High Priority", "New", "Engaged", "Meeting Scheduled", "Converted"];

function ProspectsList() {
  return (
    <>
      <Topbar title="Prospects" subtitle="AI-scored pipeline across all products" />
      <div className="p-6 space-y-4">
        <Card className="border-border/70 shadow-sm">
          <CardContent className="p-4 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name, city, product intent…" className="pl-9 h-10" />
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {chips.map((c, i) => (
                <Badge
                  key={c}
                  variant={i === 0 ? "default" : "outline"}
                  className={i === 0 ? "" : "cursor-pointer hover:bg-accent"}
                >
                  {c}
                </Badge>
              ))}
            </div>
            <Button variant="outline" size="sm" className="gap-2"><Filter className="h-4 w-4" /> Filters</Button>
            <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export</Button>
          </CardContent>
        </Card>

        <Card className="border-border/70 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="text-left font-medium px-6 py-3">Prospect</th>
                <th className="text-left font-medium px-4 py-3">Segment</th>
                <th className="text-left font-medium px-4 py-3">Predicted intent</th>
                <th className="text-right font-medium px-4 py-3">AI Score</th>
                <th className="text-right font-medium px-4 py-3">Potential</th>
                <th className="text-left font-medium px-4 py-3">Next best action</th>
                <th className="text-left font-medium px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {prospects.map((p) => (
                <tr key={p.id} className="border-t border-border/70 hover:bg-muted/40">
                  <td className="px-6 py-3">
                    <div className="font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.id} · {p.city}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{p.segment}</td>
                  <td className="px-4 py-3"><Badge variant="secondary" className="font-normal">{p.intent}</Badge></td>
                  <td className="px-4 py-3 text-right">
                    <ScorePill value={p.aiScore} />
                  </td>
                  <td className="px-4 py-3 text-right font-medium">{lakhs(p.potentialValue)}</td>
                  <td className="px-4 py-3">{p.nextBestAction}<div className="text-xs text-muted-foreground">{p.timing}</div></td>
                  <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                  <td className="px-4 py-3 text-right">
                    <Link to="/app/prospects/$id" params={{ id: p.id }}>
                      <Button size="sm" variant="ghost">Open →</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}

function ScorePill({ value }: { value: number }) {
  const tone = value >= 85 ? "bg-primary/10 text-primary border-primary/30" :
    value >= 75 ? "bg-amber-50 text-amber-700 border-amber-200" :
    "bg-muted text-muted-foreground border-border";
  return <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${tone}`}>{value}</span>;
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    "New": "bg-blue-50 text-blue-700 border-blue-200",
    "Engaged": "bg-primary/10 text-primary border-primary/30",
    "Meeting Scheduled": "bg-amber-50 text-amber-700 border-amber-200",
    "Converted": "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${map[status] ?? ""}`}>{status}</span>;
}
