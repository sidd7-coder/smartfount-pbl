import { Route, Switch, useLocation } from "wouter";
import { Bell, ChevronDown, Menu, Shield, X } from "lucide-react";
import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ReportItem from "./pages/ReportItem";
import SearchItems from "./pages/SearchItems";
import SimplePage from "./pages/SimplePage";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-lockup">
      <div className="brand-mark"><Shield size={compact ? 18 : 21} strokeWidth={2.4} /></div>
      {!compact && <div className="brand-copy"><strong>Smart-Found</strong><span>Campus Lost &amp; Found</span></div>}
    </div>
  );
}

export function PublicHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const link = (path: string) => `${path === "/" ? "home" : path.slice(1)}`;
  return (
    <header className="public-header">
      <div className="topbar shell">
        <a href="/" aria-label="Smart-Found home"><Brand /></a>
        <nav className={`public-nav ${open ? "open" : ""}`}>
          {[['/', 'Home'], ['/how-it-works', 'How It Works'], ['/search', 'Search Items'], ['/about', 'About']].map(([path, label]) => (
            <a key={path} href={path} className={location === path ? "active" : ""} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button primary small hide-mobile" href="/report"><span className="material-symbols-outlined">add_circle</span>Report Lost/Found</a>
          <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><span className="notification-dot" /></button>
          <a href="/dashboard" className="avatar" aria-label="Open dashboard">SD</a>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
    </header>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = [
    ['/dashboard', 'dashboard', 'Dashboard'], ['/dashboard?tab=reports', 'assignment', 'My Reports'], ['/search', 'search', 'Search Items'], ['/dashboard?tab=matches', 'compare_arrows', 'Matches'], ['/profile', 'person', 'Profile']
  ];
  return (
    <div className="workspace">
      <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-brand"><a href="/"><Brand /></a><button className="sidebar-close" onClick={() => setMobileOpen(false)}><X size={18} /></button></div>
        <nav className="side-nav">
          {nav.map(([path, icon, label]) => <a key={label} href={path} className={location === path || (label === 'Dashboard' && location === '/dashboard') ? 'active' : ''} onClick={() => setMobileOpen(false)}><span className="material-symbols-outlined">{icon}</span>{label}</a>)}
        </nav>
        <div className="sidebar-user"><div className="avatar">SD</div><div><strong>Student ID #9482</strong><span>Verified</span></div><a href="/" aria-label="Logout"><span className="material-symbols-outlined">logout</span></a></div>
      </aside>
      {mobileOpen && <button className="sidebar-overlay" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}
      <div className="workspace-main">
        <header className="workspace-header"><button className="mobile-menu workspace-menu" onClick={() => setMobileOpen(true)}><Menu size={21} /></button><div className="quick-search"><span className="material-symbols-outlined">search</span><input placeholder="Quick search items, tags, locations..." /></div><div className="workspace-header-actions"><a className="button primary small hide-mobile" href="/report"><span className="material-symbols-outlined">add</span>Report Lost / Found</a><button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} /><span className="notification-dot" /></button><div className="avatar">SD</div><ChevronDown size={16} className="hide-mobile muted-icon" /></div></header>
        <main className="workspace-content">{children}</main>
      </div>
    </div>
  );
}

export default function App() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/dashboard"><DashboardShell><Dashboard /></DashboardShell></Route>
    <Route path="/report"><ReportItem /></Route>
    <Route path="/search"><SearchItems /></Route>
    <Route path="/how-it-works"><SimplePage title="How Smart-Found works" eyebrow="A clear recovery path" description="Report the item, let the campus network surface likely matches, verify ownership privately, and arrange a safe return." /></Route>
    <Route path="/about"><SimplePage title="Built for a safer campus" eyebrow="About Smart-Found" description="Smart-Found keeps lost-and-found reporting, matching, verification, and handover in one trusted campus workspace." /></Route>
    <Route path="/profile"><DashboardShell><SimplePage title="Your profile" eyebrow="Student workspace" description="Manage your campus profile, notification preferences, and privacy settings." /></DashboardShell></Route>
    <Route component={() => <SimplePage title="Page not found" eyebrow="404" description="The page you are looking for does not exist." />} />
  </Switch>;
}
