import { ArrowRight, BadgeCheck, Backpack, BellRing, CheckCircle2, Headphones, KeyRound, MapPin, Search, ShieldCheck, Sparkles, Watch } from "lucide-react";
import { Brand, PublicHeader } from "../App";

const laptopImage = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85";

export default function Home() {
  return <div className="public-page"><PublicHeader />
    <main>
      <section className="hero-section"><div className="hero-orb" /><div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow-pill"><span className="live-dot" />Campus Verified Recovery Network</div>
          <h1>Find what matters.<br /><em>Return what belongs.</em></h1>
          <p>A simple, secure campus platform helping university students and faculty quickly report, discover, and recover lost belongings across campus facilities.</p>
          <div className="hero-actions"><a className="button primary large" href="/report"><span className="material-symbols-outlined">add_circle</span>Report Lost Item</a><a className="button surface large" href="/report"><span className="material-symbols-outlined green-icon">volunteer_activism</span>Report Found Item</a></div>
          <div className="hero-subactions"><a href="/search" className="text-action">Search Items <ArrowRight size={17} /></a><span className="separator">•</span><span className="semester-pill"><span className="material-symbols-outlined">inventory_2</span><strong>148 items</strong> logged this semester</span></div>
        </div>
        <div className="handover-card">
          <div className="card-kicker"><span><CheckCircle2 size={17} />Recently Handed Over</span><span className="status-badge returned">Returned</span></div>
          <div className="showcase-image"><img src={laptopImage} alt="Recovered laptop on a library desk" /><span className="image-location"><MapPin size={14} />Central Library 2nd Floor</span></div>
          <div className="showcase-title"><div><h3>Space Gray MacBook Air M2</h3><p>Matched &amp; claimed within 2 hours of report</p></div><div className="verified-icon"><BadgeCheck size={19} /></div></div>
          <div className="activity-panel"><span className="panel-label">Simultaneous Campus Activity:</span><div className="activity-grid"><Activity icon={<Headphones size={17} />} name="AirPods Pro Gen 2" place="North Quad Law Bldg" /><Activity icon={<BadgeCheck size={17} />} name="Student ID Card" place="Dining Hall West" /><Activity icon={<Backpack size={17} />} name="Navy Herschel Bag" place="Eng Wing B · Rm 204" /><Activity icon={<KeyRound size={17} />} name="Dorm Lanyard Keys" place="Gym Locker Room" /></div></div>
        </div>
      </div></section>
      <section className="stats-strip"><div className="shell stats-grid"><Stat value="88.4%" label="Recovery Rate" detail="Items retrieved by true owners" blue /><Stat value="&lt; 3 hrs" label="Average Match Time" detail="Automated campus intake alerts" /><Stat value="24/7" label="Intake Coverage" detail="Cross-campus security network" /><Stat value="12 Desk" label="Official Handover Sites" detail="Secure verified pickup checkpoints" green /></div></section>
      <section className="workflow-section"><div className="shell"><div className="section-heading"><span className="section-eyebrow">WORKFLOW</span><h2>Simple, transparent campus recovery</h2><p>Engineered to eliminate friction, prevent scams, and return your property safely with minimal effort.</p></div><div className="workflow-grid"><Step num="01" icon={<Search size={22} />} title="Report in minutes" copy="Share the details that help the campus network recognise your item." /><Step num="02" icon={<Sparkles size={22} />} title="AI finds signals" copy="Smart matching compares text, image, colour, time, and location." /><Step num="03" icon={<ShieldCheck size={22} />} title="Verify privately" copy="Hidden details and admin review protect every genuine claimant." /><Step num="04" icon={<Watch size={22} />} title="Return with trust" copy="Arrange a safe handover and close the loop with a record." /></div></div></section>
    </main>
    <footer className="public-footer"><div className="shell footer-inner"><Brand /><span>© 2026 Smart-Found · Campus recovery network</span><span className="footer-safe"><ShieldCheck size={15} /> Privacy-first by design</span></div></footer>
  </div>
}
function Activity({ icon, name, place }: { icon: React.ReactNode; name: string; place: string }) { return <div className="activity-item"><span className="activity-icon">{icon}</span><div><strong>{name}</strong><small>{place}</small></div></div> }
function Stat({ value, label, detail, blue, green }: { value: string; label: string; detail: string; blue?: boolean; green?: boolean }) { return <div className="stat"><strong className={blue ? 'blue' : green ? 'green' : ''}>{value}</strong><b>{label}</b><span>{detail}</span></div> }
function Step({ num, icon, title, copy }: { num: string; icon: React.ReactNode; title: string; copy: string }) { return <article className="workflow-step"><div className="step-top"><span className="step-icon">{icon}</span><span className="step-num">{num}</span></div><h3>{title}</h3><p>{copy}</p><a href="/how-it-works">Learn more <ArrowRight size={15} /></a></article> }
