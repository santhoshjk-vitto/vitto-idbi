import { createFileRoute } from "@tanstack/react-router";
import { Topbar } from "@/components/topbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { campaigns, inr } from "@/lib/mock-data";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/app/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns · VittoProspect" }] }),
  component: Campaigns,
});

function Campaigns() {
  const totalReach = campaigns.reduce((a, c) => a + c.reach, 0);
  const totalConv = campaigns.reduce((a, c) => a + c.converted, 0);
  const totalRev = campaigns.reduce((a, c) => a + c.revenue, 0);

  return (
    <>
      <Topbar title="Campaigns" subtitle="Targeted engagement powered by AI segmentation" />
      <div className="p-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            { label: "Active campaigns", value: campaigns.filter(c => c.status === "Active").length },
            { label: "Total reach", value: totalReach.toLocaleString() },
            { label: "Conversions", value: totalConv.toLocaleString() },
            { label: "Revenue attributed", value: inr(totalRev) },
          ].map((s) => (
            <Card key={s.label} className="border-border/70 shadow-sm">
              <CardContent className="p-5">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</div>
                <div className="mt-1 text-2xl font-semibold">{s.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border/70 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">All campaigns</CardTitle>
              <CardDescription>Track engagement and conversion metrics</CardDescription>
            </div>
            <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" /> New campaign</Button>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="text-left font-medium px-6 py-3">Campaign</th>
                  <th className="text-right font-medium px-4 py-3">Reach</th>
                  <th className="text-left font-medium px-4 py-3 w-56">Engagement</th>
                  <th className="text-right font-medium px-4 py-3">Conversions</th>
                  <th className="text-right font-medium px-4 py-3">Revenue</th>
                  <th className="text-left font-medium px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c) => {
                  const eng = Math.round((c.engaged / c.reach) * 100);
                  return (
                    <tr key={c.id} className="border-t border-border/70 hover:bg-muted/40">
                      <td className="px-6 py-3">
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-muted-foreground">{c.id}</div>
                      </td>
                      <td className="px-4 py-3 text-right">{c.reach.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Progress value={eng} className="h-1.5 flex-1" />
                          <span className="text-xs text-muted-foreground w-10 text-right">{eng}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">{c.converted.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right">{inr(c.revenue)}</td>
                      <td className="px-4 py-3">
                        <Badge variant={c.status === "Active" ? "default" : "outline"} className={c.status === "Active" ? "" : "text-muted-foreground"}>
                          {c.status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
