import { createFileRoute, Link } from "@tanstack/react-router";
import { Topbar } from "@/components/topbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight, TrendingUp, Users, Zap, IndianRupee, Target, Sparkles, PhoneCall, Mail, CalendarClock,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { conversionTrend, dashboardMetrics, inr, lakhs, productMix, prospects, segments } from "@/lib/mock-data";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Dashboard · VittoProspect" }] }),
  component: Dashboard,
});

const kpis = [
  { label: "Prospects Analyzed", value: dashboardMetrics.totalProspects.toLocaleString(), delta: "+8.2%", icon: Users, tone: "up" },
  { label: "High Priority", value: dashboardMetrics.highPriority.toLocaleString(), delta: "+12.4%", icon: Target, tone: "up" },
  { label: "Conversion Rate", value: `${dashboardMetrics.conversionRate}%`, delta: "+3.1 pts", icon: TrendingUp, tone: "up" },
  { label: "Potential Revenue", value: inr(dashboardMetrics.potentialRevenue), delta: "+₹0.42 Cr", icon: IndianRupee, tone: "up" },
];

function Dashboard() {
  const topProspects = prospects.slice(0, 5);
  const actions = prospects.slice(0, 3);

  return (
    <>
      <Topbar title="Good morning, Santhosh" subtitle="Here's what your AI co-pilot surfaced today" />
      <div className="p-6 space-y-6">
        {/* KPI row */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <Card key={k.label} className="border-border/70 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{k.label}</div>
                      <div className="mt-2 text-2xl font-semibold tracking-tight">{k.value}</div>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-600">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {k.delta}
                    <span className="text-muted-foreground font-normal ml-1">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-border/70 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-base">Conversion trend</CardTitle>
                <CardDescription>Last 6 months · AI-scored prospects</CardDescription>
              </div>
              <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                Model acc {dashboardMetrics.modelAccuracy}%
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={conversionTrend} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="conv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--vitto-red)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--vitto-red)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                    <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12 }}
                      formatter={(v: number) => `${v}%`}
                    />
                    <Area type="monotone" dataKey="conversion" stroke="var(--vitto-red)" strokeWidth={2.5} fill="url(#conv)" />
                    <Area type="monotone" dataKey="target" stroke="var(--color-muted-foreground)" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Predicted product intent</CardTitle>
              <CardDescription>Share of high-intent signals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productMix} layout="vertical" margin={{ top: 4, right: 12, left: 8, bottom: 0 }}>
                    <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="product" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={90} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12 }}
                      formatter={(v: number) => `${v}%`}
                    />
                    <Bar dataKey="value" fill="var(--vitto-red)" radius={[0, 6, 6, 0]} barSize={14} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next best actions + segments */}
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-border/70 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  AI Recommendations for you
                </CardTitle>
                <CardDescription>Ranked by conversion likelihood</CardDescription>
              </div>
              <Link to="/app/actions">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  View all <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {actions.map((p) => (
                <div key={p.id} className="group flex items-start gap-4 rounded-xl border border-border/70 p-4 hover:border-primary/40 hover:bg-accent/40 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm shrink-0">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{p.name}</span>
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5">
                        AI Score {p.aiScore}
                      </Badge>
                      <Badge variant="secondary" className="font-normal">{p.intent}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{p.nextBestAction}</span> · {p.reason}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <CalendarClock className="h-3.5 w-3.5" /> {p.timing}
                      <span>·</span>
                      <span>Potential {lakhs(p.potentialValue)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <Button size="sm">Do now</Button>
                    <Button size="sm" variant="ghost" className="text-muted-foreground">
                      Snooze
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Top segments</CardTitle>
              <CardDescription>Smart segmentation by intent</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {segments.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.pct}%</span>
                  </div>
                  <Progress value={s.pct * 2} className="mt-1.5 h-1.5" />
                  <div className="text-xs text-muted-foreground mt-1">{s.count.toLocaleString()} prospects</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top prospects table */}
        <Card className="border-border/70 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Top AI-recommended prospects</CardTitle>
              <CardDescription>Ranked by opportunity score</CardDescription>
            </div>
            <Link to="/app/prospects">
              <Button variant="outline" size="sm">Open pipeline</Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="border-t border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="text-left font-medium px-6 py-3">Prospect</th>
                    <th className="text-left font-medium px-4 py-3">Intent</th>
                    <th className="text-right font-medium px-4 py-3">AI Score</th>
                    <th className="text-right font-medium px-4 py-3">Potential</th>
                    <th className="text-left font-medium px-4 py-3">Next best action</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {topProspects.map((p) => (
                    <tr key={p.id} className="border-t border-border/70 hover:bg-muted/40">
                      <td className="px-6 py-3">
                        <div className="font-medium">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.segment} · {p.city}</div>
                      </td>
                      <td className="px-4 py-3"><Badge variant="secondary" className="font-normal">{p.intent}</Badge></td>
                      <td className="px-4 py-3 text-right font-semibold">{p.aiScore}</td>
                      <td className="px-4 py-3 text-right">{lakhs(p.potentialValue)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5 text-foreground">
                          {p.nextBestAction.toLowerCase().includes("call") ? <PhoneCall className="h-3.5 w-3.5 text-primary" /> :
                            p.nextBestAction.toLowerCase().includes("email") || p.nextBestAction.toLowerCase().includes("send") ? <Mail className="h-3.5 w-3.5 text-primary" /> :
                            <Zap className="h-3.5 w-3.5 text-primary" />}
                          {p.nextBestAction}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link to="/app/prospects/$id" params={{ id: p.id }}>
                          <Button size="sm" variant="ghost">View →</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
