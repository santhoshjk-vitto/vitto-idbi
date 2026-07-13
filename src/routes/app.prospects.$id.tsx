import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Topbar } from "@/components/topbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { prospects, lakhs } from "@/lib/mock-data";
import { ArrowLeft, PhoneCall, Mail, MessageSquare, CalendarClock, Sparkles, ShieldCheck, TrendingUp, Info } from "lucide-react";

export const Route = createFileRoute("/app/prospects/$id")({
  head: ({ params }) => ({ meta: [{ title: `${params.id} · Customer 360` }] }),
  loader: ({ params }) => {
    const p = prospects.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return p;
  },
  component: ProspectDetail,
  notFoundComponent: () => (
    <div className="p-10 text-center text-muted-foreground">Prospect not found. <Link to="/app/prospects" className="text-primary underline">Back to list</Link></div>
  ),
});

function ProspectDetail() {
  const p = Route.useLoaderData();
  const initials = p.name.split(" ").map((n: string) => n[0]).join("");
  const factors = [
    { label: "Income & cashflow", value: 94 },
    { label: "Digital behavior", value: 88 },
    { label: "Credit history", value: 82 },
    { label: "Product affinity", value: 76 },
    { label: "Life-event signals", value: 71 },
  ];
  const timeline = [
    { when: "2h ago", text: "Viewed personal loan EMI calculator (3rd time this week)" },
    { when: "1d ago", text: "Salary credit ₹ 3.2 L · 24% higher than 6-mo avg" },
    { when: "3d ago", text: "Existing personal loan closed ahead of tenure" },
    { when: "6d ago", text: "Enquired about pre-approved offers via mobile app" },
    { when: "14d ago", text: "Upgraded to premium savings account" },
  ];
  const products = [
    { name: "Savings Premium", since: "2019", balance: "₹ 2.4 L" },
    { name: "Salary Account", since: "2019", balance: "Active" },
    { name: "Credit Card · Platinum", since: "2021", balance: "₹ 42k spend" },
  ];

  return (
    <>
      <Topbar title="Customer 360°" subtitle={`${p.id} · ${p.city}`} />
      <div className="p-6 space-y-6">
        <div>
          <Link to="/app/prospects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to prospects
          </Link>
        </div>

        {/* Header card */}
        <Card className="border-border/70 shadow-sm overflow-hidden">
          <div className="h-24 bg-vitto-gradient" />
          <CardContent className="p-6 -mt-12">
            <div className="flex flex-wrap items-end gap-4">
              <Avatar className="h-24 w-24 border-4 border-background shadow">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">{initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-semibold tracking-tight">{p.name}</h2>
                <p className="text-sm text-muted-foreground">{p.segment} · {p.city} · Customer since 2019</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/10">AI Score {p.aiScore}</Badge>
                  <Badge variant="secondary" className="font-normal">Intent · {p.intent}</Badge>
                  <Badge variant="outline">Potential {lakhs(p.potentialValue)}</Badge>
                  <Badge variant="outline" className="text-emerald-700 border-emerald-200 bg-emerald-50">
                    <ShieldCheck className="h-3 w-3 mr-1" /> Low risk
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="gap-1.5"><PhoneCall className="h-4 w-4" /> Call</Button>
                <Button variant="outline" size="sm" className="gap-1.5"><Mail className="h-4 w-4" /> Email</Button>
                <Button variant="outline" size="sm" className="gap-1.5"><MessageSquare className="h-4 w-4" /> WhatsApp</Button>
                <Button size="sm" className="gap-1.5"><CalendarClock className="h-4 w-4" /> Schedule meeting</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Recommendation */}
          <Card className="lg:col-span-2 border-primary/30 shadow-sm bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <CardTitle className="text-base">Next Best Action</CardTitle>
                  <CardDescription>Explainable recommendation by VittoProspect AI</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-lg font-semibold">Offer pre-approved {p.intent} of {lakhs(p.potentialValue)}</div>
                <p className="text-sm text-muted-foreground mt-1">{p.reason}. Best time to engage: <span className="font-medium text-foreground">{p.timing}</span>.</p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  <Info className="h-3.5 w-3.5" /> Why this recommendation
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Recent salary uplift signals higher repayment capacity.</li>
                  <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Repeated EMI calculator visits show active buying intent.</li>
                  <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Similar profiles converted 3.4× faster with pre-approval offer.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button>Do now</Button>
                <Button variant="outline">Personalize offer</Button>
                <Button variant="ghost" className="text-muted-foreground">Not relevant</Button>
              </div>
            </CardContent>
          </Card>

          {/* Score factors */}
          <Card className="border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Score drivers</CardTitle>
              <CardDescription>Explainable AI breakdown</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {factors.map((f) => (
                <div key={f.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{f.label}</span>
                    <span className="font-semibold">{f.value}</span>
                  </div>
                  <Progress value={f.value} className="mt-1.5 h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Recent signals</CardTitle>
              <CardDescription>Behavior and transaction events</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-border ml-2 space-y-4">
                {timeline.map((t, i) => (
                  <li key={i} className="ml-4">
                    <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
                    <div className="text-xs text-muted-foreground">{t.when}</div>
                    <div className="text-sm">{t.text}</div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Product holdings</CardTitle>
              <CardDescription>Existing relationship</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {products.map((pr) => (
                <div key={pr.name} className="flex items-center justify-between rounded-lg border border-border/70 p-3">
                  <div>
                    <div className="text-sm font-medium">{pr.name}</div>
                    <div className="text-xs text-muted-foreground">Since {pr.since}</div>
                  </div>
                  <div className="text-sm font-medium">{pr.balance}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
