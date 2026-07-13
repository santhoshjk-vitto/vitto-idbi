import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { VittoLogo } from "@/components/vitto-logo";
import { IdbiLogo } from "@/components/idbi-logo";
import { ArrowRight, Sparkles, Target, Users, Zap, ShieldCheck, LineChart, BrainCircuit } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VittoProspect · AI-Powered Prospect Intelligence for IDBI Bank" },
      { name: "description", content: "AI co-pilot that helps IDBI Relationship Managers identify the right prospects, predict needs, and recommend the next best action." },
      { property: "og:title", content: "VittoProspect · Prospect Assist AI" },
      { property: "og:description", content: "Built for IDBI Innovate 2026 by Team Vitto." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center h-16 px-6">
          <VittoLogo className="h-7 w-auto" />
          <nav className="hidden md:flex items-center gap-8 mx-auto text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#flow" className="hover:text-foreground">How it works</a>
            <a href="#impact" className="hover:text-foreground">Impact</a>
            <a href="#stack" className="hover:text-foreground">Tech</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/login"><Button variant="ghost" size="sm">Sign in</Button></Link>
            <Link to="/app"><Button size="sm" className="gap-1.5">Open prototype <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            IDBI 2026 <span className="text-vitto font-semibold">Innovate</span>
            <span className="text-muted-foreground">· Problem Statement 2 · Prospect Assist AI</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            AI-powered prospect intelligence,<br />
            <span className="text-vitto">built for Relationship Managers.</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-muted-foreground">
            VittoProspect identifies the right customers, predicts their financial needs and recommends the next best action —
            turning fragmented data into revenue opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/app"><Button size="lg" className="gap-1.5">Explore the prototype <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/login"><Button size="lg" variant="outline">Sign in as RM</Button></Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { k: "+25%", v: "Conversion" },
              { k: "+30%", v: "RM productivity" },
              { k: "+22%", v: "Opportunity hit rate" },
              { k: "98.5%", v: "Model accuracy" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-card p-5 text-left">
                <div className="text-2xl font-semibold">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground">
            <span>Knowledge Partner <span className="font-semibold text-foreground">aws</span></span>
            <span>Powered by <span className="font-semibold text-foreground">H2S</span></span>
            <span>Technology Partner <span className="font-semibold text-foreground">acc — applied cloud computing</span></span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-muted/40">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">What it does</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Ten AI capabilities that turn data into opportunities.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Prospect Intelligence Engine", desc: "Continuously surfaces customers with highest need probability." },
              { icon: LineChart, title: "AI Lead Scoring", desc: "Ranks prospects by conversion potential using behavior and history." },
              { icon: BrainCircuit, title: "Customer Intent Prediction", desc: "Predicts what a customer needs next — loans, deposits, cards, more." },
              { icon: Zap, title: "Next Best Action Engine", desc: "Recommends the highest-impact next move for every RM interaction." },
              { icon: Users, title: "Customer 360° View", desc: "Unified profile with holdings, behavior and opportunity insights." },
              { icon: Sparkles, title: "Relationship Manager Copilot", desc: "Gen-AI assistant that explains scores and drafts outreach." },
              { icon: Target, title: "Smart Segmentation", desc: "AI-driven micro-segments for tailored engagement strategies." },
              { icon: LineChart, title: "Campaign Manager", desc: "Create, run and track targeted campaigns with automated follow-ups." },
              { icon: ShieldCheck, title: "Explainable & Compliant", desc: "Transparent AI, RBAC, encryption, audit trails, RBI-ready." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Process flow</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">From data to action — a continuous loop.</h2>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "1", t: "Data ingestion", d: "CRM · Core banking · Transactions · Digital behavior · Third-party." },
              { n: "2", t: "AI engine", d: "Prospect intelligence · Lead scoring · Intent · Segmentation." },
              { n: "3", t: "Prioritized leads", d: "Opportunity score, ranking and next-best-action assignment." },
              { n: "4", t: "RM co-pilot", d: "Customer 360, AI recommendations, timing and channel guidance." },
              { n: "5", t: "Personalized engagement", d: "RM reaches customer at right time via right channel." },
              { n: "6", t: "Outcomes", d: "Higher conversions, cross-sell, better CX, revenue uplift." },
              { n: "7", t: "Feedback loop", d: "Continuous learning improves scoring and recommendations." },
              { n: "8", t: "Governance", d: "Explainability, drift monitoring, audit and compliance built-in." },
            ].map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-card p-5">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                  {s.n}
                </div>
                <div className="mt-3 font-semibold">{s.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="border-t border-border bg-vitto-gradient text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest opacity-80">Business impact</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Measurable value across the customer lifecycle.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { k: "+25%", v: "Prospect conversion rate" },
              { k: "+18%", v: "Cross-sell / up-sell rate" },
              { k: "+22%", v: "Opportunity hit rate" },
              { k: "+30%", v: "RM productivity" },
              { k: "+20%", v: "Customer satisfaction" },
              { k: "+15%", v: "Revenue uplift" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-6">
                <div className="text-4xl font-semibold tracking-tight">{s.k}</div>
                <div className="text-sm opacity-90 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Tech stack</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Modern, scalable, enterprise-grade.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Frontend", i: ["React.js", "TypeScript", "Tailwind CSS", "Material UI"] },
              { t: "Backend", i: ["Python", "FastAPI", "Node.js", "REST APIs"] },
              { t: "AI / ML", i: ["Scikit-learn", "XGBoost", "LightGBM", "Pandas / NumPy"] },
              { t: "Data", i: ["PostgreSQL", "MongoDB", "Redis", "Amazon S3"] },
              { t: "Engineering", i: ["Apache Kafka", "Airflow", "Spark", "dbt"] },
              { t: "Cloud", i: ["AWS", "EC2", "RDS", "Lambda"] },
              { t: "DevOps", i: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"] },
              { t: "BI", i: ["Power BI", "Tableau", "Plotly", "Grafana"] },
            ].map((g) => (
              <div key={g.t} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">{g.t}</div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {g.i.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to see the co-pilot in action?
          </h2>
          <p className="mt-3 text-muted-foreground">Explore the interactive prototype built for IDBI Innovate 2026.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/app"><Button size="lg" className="gap-1.5">Open prototype <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/login"><Button size="lg" variant="outline">Sign in as RM</Button></Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <VittoLogo className="h-5 w-auto opacity-80" />
            <span>© 2026 Team Vitto · Built for IDBI Innovate</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Knowledge Partner <span className="font-semibold text-foreground">aws</span></span>
            <span>Powered by <span className="font-semibold text-foreground">H2S</span></span>
            <span>Technology Partner <span className="font-semibold text-foreground">acc</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
