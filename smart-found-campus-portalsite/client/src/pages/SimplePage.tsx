import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { PublicHeader } from "../App";
export default function SimplePage({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
  return <div className="public-page"><PublicHeader /><main className="simple-page"><div className="simple-card"><span className="section-eyebrow"><Sparkles size={15} />{eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="simple-points"><div><ShieldCheck size={18} /><strong>Privacy-first</strong><span>Private details stay protected.</span></div><div><Sparkles size={18} /><strong>AI-assisted</strong><span>Signals help surface likely matches.</span></div><div><ArrowRight size={18} /><strong>Clear next step</strong><span>Every report has a visible status.</span></div></div><a className="button primary" href="/">Back to home <ArrowRight size={16} /></a></div></main></div>
}
