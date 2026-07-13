import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { VittoLogo } from "@/components/vitto-logo";
import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in · VittoProspect" }] }),
  component: Login,
});

function Login() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => nav({ to: "/app" }), 500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col p-8 lg:p-12">
        <div className="flex items-center justify-between">
          <VittoLogo className="h-8 w-auto" />
          <div className="text-xs text-muted-foreground">
            IDBI 2026 <span className="text-vitto font-semibold">Innovate</span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary">
                <Sparkles className="h-3 w-3" /> AI Co-pilot for Relationship Managers
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight">Welcome back</h1>
              <p className="mt-1 text-sm text-muted-foreground">Sign in to your VittoProspect workspace.</p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <Label htmlFor="uid" className="text-xs font-medium">User ID</Label>
                <Input id="uid" defaultValue="santhosh.jk" className="mt-1.5 h-11" />
              </div>
              <div>
                <Label htmlFor="pwd" className="text-xs font-medium">Password</Label>
                <Input id="pwd" type="password" defaultValue="••••••••" className="mt-1.5 h-11" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <Checkbox defaultChecked /> Remember me
                </label>
                <a href="#" className="text-primary hover:underline">Forgot password?</a>
              </div>
              <Button type="submit" size="lg" className="w-full h-11" disabled={loading}>
                {loading ? "Signing in…" : "Sign in"}
              </Button>
              <Link to="/app" className="block text-center text-xs text-muted-foreground hover:text-foreground">
                Continue as demo user →
              </Link>
            </form>

            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" />
              Bank-grade security · SSO · RBAC · Audit trails
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1">
          <span>Knowledge Partner <span className="font-semibold text-foreground">aws</span></span>
          <span>Powered by <span className="font-semibold text-foreground">H2S</span></span>
          <span>Technology Partner <span className="font-semibold text-foreground">acc</span></span>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="hidden lg:flex relative overflow-hidden bg-vitto-gradient text-primary-foreground p-12 flex-col justify-between">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative">
          <div className="text-xs uppercase tracking-widest opacity-80">Team Vitto · Problem Statement 2</div>
          <div className="mt-1 text-sm opacity-90">Prospect Assist AI · IDBI Innovate 2026</div>
        </div>

        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight leading-tight">
            Don't wait for customers<br />to ask for financial products.
          </h2>
          <p className="mt-3 text-lg opacity-90">Identify the opportunity before they do.</p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { k: "+25%", v: "Prospect conversion" },
              { k: "+30%", v: "RM productivity" },
              { k: "₹4.82Cr", v: "Revenue in play" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4">
                <div className="text-2xl font-semibold">{s.k}</div>
                <div className="text-xs opacity-80 mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center gap-2 text-xs opacity-90">
          <TrendingUp className="h-4 w-4" /> AI-Powered · Explainable · Secure · Scalable
        </div>
      </div>
    </div>
  );
}
