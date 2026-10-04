import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  MessageCircle,
  X,
  Code2,
  Database,
  Layers3,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Home,
  User,
  Briefcase,
  Star,
  Mail,
  Award,
  BadgeCheck,
  Eye,
  ShieldCheck,
  Cpu,
  Terminal,
  Network,
  Cloud,
  CheckCircle2,
  Boxes,
  Compass,
  Palette,
  Check
} from 'lucide-react';
import './index.css';

const Github = ({ size = 20, ...p }) => (
  <svg {...p} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Linkedin = ({ size = 20, ...p }) => (
  <svg {...p} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCode = ({ size = 20, ...p }) => (
  <svg {...p} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.247 2.198 5.864 2.198 8.11 0l3.678-3.601a1.37 1.37 0 0 0-.007-1.942 1.37 1.37 0 0 0-1.943.007l-3.678 3.601a3.006 3.006 0 0 1-4.225 0l-.039-.039-4.277-4.193a3.195 3.195 0 0 1-.689-.982 3.167 3.167 0 0 1-.188-1.277 3.084 3.084 0 0 1 .655-1.144l3.854-4.126 5.406-5.788a1.37 1.37 0 0 0-.007-1.942 1.37 1.37 0 0 0-.968-.438zM16.14 9.17a1.37 1.37 0 0 0-1.37 1.37v.001c0 .757.613 1.37 1.37 1.37h4.86a1.37 1.37 0 0 0 1.37-1.37v-.001a1.37 1.37 0 0 0-1.37-1.37z" />
  </svg>
);

const SameemLogo = ({ size = 38, className = "" }) => (
  <div 
    className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <defs>
        <linearGradient id="siThemeGradDynamic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="50%" stopColor="var(--secondary)" />
          <stop offset="100%" stopColor="var(--glow)" />
        </linearGradient>

        <radialGradient id="siAmbientGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="siHexGlassFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#11151C" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#080A0F" stopOpacity="0.98" />
        </linearGradient>

        <filter id="siNeonFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="50" cy="50" r="44" fill="url(#siAmbientGlow)" />

      {/* Outer Hexagon Cyber Crest */}
      <polygon
        points="50,6 88,26 88,74 50,94 12,74 12,26"
        fill="url(#siHexGlassFill)"
        stroke="url(#siThemeGradDynamic)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Cyber Tech Corner Ticks */}
      <line x1="50" y1="6" x2="50" y2="14" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="94" x2="50" y2="86" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="26" x2="19" y2="30" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="74" x2="81" y2="70" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />

      {/* Corner Vertex Dots */}
      <circle cx="50" cy="6" r="2" fill="var(--glow)" />
      <circle cx="88" cy="26" r="2" fill="var(--glow)" />
      <circle cx="88" cy="74" r="2" fill="var(--glow)" />
      <circle cx="50" cy="94" r="2" fill="var(--glow)" />
      <circle cx="12" cy="74" r="2" fill="var(--glow)" />
      <circle cx="12" cy="26" r="2" fill="var(--glow)" />

      {/* Stylized Monogram S */}
      <path
        d="M 68,30 
           L 36,30 
           C 29,30 25,34 25,40 
           C 25,46 30,49 37,51 
           L 63,55 
           C 70,57 75,61 75,67 
           C 75,73 70,77 63,77 
           L 30,77"
        fill="none"
        stroke="url(#siThemeGradDynamic)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#siNeonFilter)"
      />

      {/* Central Pillar I */}
      <line
        x1="50"
        y1="21"
        x2="50"
        y2="85"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeDasharray="16 18 16"
      />

      {/* Glowing Central Quantum Core */}
      <circle cx="50" cy="50" r="4" fill="var(--primary)" stroke="#FFFFFF" strokeWidth="1.8" />
      
      {/* Precision Node Accents */}
      <circle cx="68" cy="30" r="2.5" fill="#FFFFFF" />
      <circle cx="30" cy="77" r="2.5" fill="#FFFFFF" />
    </svg>
  </div>
);

const themes = [
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    primary: '#3B82F6',
    secondary: '#06B6D4',
    glow: '#60A5FA',
    primaryRgb: '59, 130, 246',
    secondaryRgb: '6, 182, 212',
    glowRgb: '96, 165, 250'
  },
  {
    id: 'cyber-purple',
    name: 'Cyber Purple',
    primary: '#8B5CF6',
    secondary: '#A855F7',
    glow: '#C084FC',
    primaryRgb: '139, 92, 246',
    secondaryRgb: '168, 85, 247',
    glowRgb: '192, 132, 252'
  },
  {
    id: 'emerald',
    name: 'Emerald',
    primary: '#10B981',
    secondary: '#14B8A6',
    glow: '#34D399',
    primaryRgb: '16, 185, 129',
    secondaryRgb: '20, 184, 166',
    glowRgb: '52, 211, 153'
  },
  {
    id: 'sunset-orange',
    name: 'Sunset Orange',
    primary: '#F97316',
    secondary: '#EF4444',
    glow: '#FB923C',
    primaryRgb: '249, 115, 22',
    secondaryRgb: '239, 68, 68',
    glowRgb: '251, 146, 60'
  },
  {
    id: 'rose',
    name: 'Rose',
    primary: '#F43F5E',
    secondary: '#EC4899',
    glow: '#FB7185',
    primaryRgb: '244, 63, 94',
    secondaryRgb: '236, 72, 153',
    glowRgb: '251, 113, 133'
  },
  {
    id: 'golden',
    name: 'Golden',
    primary: '#F59E0B',
    secondary: '#EAB308',
    glow: '#FBBF24',
    primaryRgb: '245, 158, 11',
    secondaryRgb: '234, 179, 8',
    glowRgb: '251, 191, 36'
  },
  {
    id: 'ice-cyan',
    name: 'Ice Cyan',
    primary: '#06B6D4',
    secondary: '#0EA5E9',
    glow: '#22D3EE',
    primaryRgb: '6, 182, 212',
    secondaryRgb: '14, 165, 233',
    glowRgb: '34, 211, 238'
  },
  {
    id: 'matrix-green',
    name: 'Matrix Green',
    primary: '#22C55E',
    secondary: '#16A34A',
    glow: '#4ADE80',
    primaryRgb: '34, 197, 94',
    secondaryRgb: '22, 163, 74',
    glowRgb: '74, 222, 128'
  }
];

const profile = {
  name: 'Sameem Irfan',
  role: 'Frontend Developer & Full-Stack Builder',
  thought: 'Frontend Developer | AI & Cloud Enthusiast | React.js | Node.js | Python | AWS | Building Scalable Web & AI Solutions',
  location: 'Chennai, India',
  coordinates: '13.0827° N, 80.2707° E',
  linkedin: 'https://www.linkedin.com/in/sameem-irfan-97403b35a',
  github: 'https://github.com/SameemIrfan21',
  leetcode: 'https://leetcode.com/u/Sameem_irfan/',
  whatsapp: 'https://wa.me/918531800402'
};

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'Python',
  'AWS',
  'MongoDB',
  'PostgreSQL',
  'Neo4j Cypher',
  'Firebase',
  'REST APIs',
  'Git & GitHub'
];

const projects = [
  {
    title: 'Shop Zone',
    type: 'Full-Stack E-Commerce Engine',
    desc: 'An end-to-end shopping experience featuring product discovery, cart management, checkout pipelines, JWT security, and a Node.js/Express + MongoDB API backbone.',
    tags: ['React', 'Vite', 'Node.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/SameemIrfan21',
    live: 'https://shopzone-silk.vercel.app/'
  },
  {
    title: 'Chatify',
    type: 'Real-Time Neural Messaging App',
    desc: 'Full-duplex instant messaging platform engineered for ultra-low latency dispatch, persistent chat streams, user session auth, and responsive liquid UI styling.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Liquid UI'],
    github: 'https://github.com/SameemIrfan21/chatify.git'
  },
  {
    title: 'Smart Grievance Routing',
    type: 'AI-Powered Workflow System',
    desc: 'Automated problem-dispatch architecture utilizing categorical classification logic to ingest grievance tickets and route them to designated resolution teams with priority telemetry.',
    tags: ['React', 'AI Logic', 'Node.js', 'Database Architecture'],
    github: 'https://github.com/SameemIrfan21'
  },
  {
    title: 'Restaurant Operations Copilot',
    type: 'Enterprise Business Intelligence HUD',
    desc: 'Operations command dashboard tracking transactional analytics, staff rosters, inventory throughput, and predictive workflow metrics in real time.',
    tags: ['React', 'PostgreSQL', 'Analytics Dashboard', 'System UX'],
    github: 'https://github.com/SameemIrfan21'
  }
];

const certifications = [
  {
    title: 'Web Development Training & Internship',
    issuer: 'Corizo · Partnered with IIT Bombay Mood Indigo',
    platform: 'Corizo',
    date: 'Jan 2026 – Feb 2026',
    image: '/certificates/corizo-internship-cert.png',
    credId: 'CRZ141291',
    tags: ['Web Development', 'Frontend', 'Corizo', 'Training'],
    desc: 'Official Certificate of Training awarded for successful completion of comprehensive web engineering training (Jan 5 – Feb 5, 2026), demonstrating diligence, technical precision, and modern interface development.'
  },
  {
    title: 'Introduction to AI',
    issuer: 'Google',
    platform: 'Coursera',
    date: 'Sep 9, 2025',
    image: '/certificates/google-ai-cert.png',
    verifyUrl: 'https://coursera.org/verify/650UKJ9WEONL',
    credId: '650UKJ9WEONL',
    tags: ['Artificial Intelligence', 'Google', 'Machine Learning', 'Coursera'],
    desc: 'Authorized by Google and offered through Coursera. Validates core foundational principles of Artificial Intelligence, neural computing concepts, algorithmic ethics, and applied intelligent system workflows.'
  },
  {
    title: 'Build an IoT Blockchain Network for a Supply Chain',
    issuer: 'IBM Developer Skills Network',
    platform: 'Cognitive Class',
    date: 'Feb 19, 2026',
    image: '/certificates/ibm-blockchain-cert.png',
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/acdbffe655704179b3948e8332df0bf7',
    credId: 'acdbffe655704179b3948e8332df0bf7',
    tags: ['Blockchain', 'IoT', 'IBM', 'Supply Chain', 'Smart Contracts'],
    desc: 'Practical architectural mastery connecting IoT sensor telemetry with tamper-evident distributed blockchain ledgers for real-time supply chain transparency and autonomous contract execution.'
  },
  {
    title: 'Neo4j Certified Professional',
    issuer: 'Neo4j GraphAcademy',
    platform: 'Neo4j',
    date: 'Accredited',
    image: '/certificates/neo4j-cert.png',
    credId: '8d6dddb8-fdd9-486c-bbde-39d04887b404',
    tags: ['Graph Database', 'Neo4j', 'Cypher Query', 'Knowledge Graphs'],
    desc: 'Accredited professional certification validating proficiency in graph database architecture, Cypher query language optimization, high-dimensional relationship queries, and enterprise graph modeling.'
  }
];

const spring = { type: 'spring', stiffness: 320, damping: 28 };
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const tabs = [
  { id: 'home', label: 'Command', icon: <Home size={18} /> },
  { id: 'skills', label: 'Stack', icon: <Cpu size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Boxes size={18} /> },
  { id: 'experience', label: 'Field', icon: <Terminal size={18} /> },
  { id: 'certs', label: 'Certs', icon: <Award size={18} /> },
  { id: 'about', label: 'Bio', icon: <User size={18} /> },
  { id: 'contact', label: 'Transmission', icon: <Mail size={18} /> }
];

function ThemeSwitcher({ currentTheme, onSelectTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div className="relative">
      {/* Desktop / Laptop Sleek Inline Bar */}
      <div className="hidden md:flex items-center theme-switcher-container">
        <div className="flex items-center gap-1.5 px-2 text-slate-400">
          <Palette size={14} style={{ color: 'var(--primary)' }} />
          <span className="hidden xl:inline text-[10px] font-mono font-bold tracking-wider uppercase text-slate-300">
            {activeThemeObj.name}
          </span>
        </div>
        <div className="h-3.5 w-px bg-white/10 mx-0.5" />
        <div className="flex items-center gap-1.5 px-1">
          {themes.map((t) => {
            const isActive = t.id === currentTheme;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelectTheme(t.id)}
                aria-label={`Activate ${t.name} color theme`}
                title={`${t.name} (${t.primary})`}
                className={`theme-dot-btn group ${isActive ? 'active' : ''}`}
                style={{
                  background: `linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%)`
                }}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile / Tablet Compact Palette Button & Dropdown */}
      <div className="md:hidden relative">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open color theme selector"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-mono text-white backdrop-blur-md hover:bg-white/10 transition-colors"
        >
          <span
            className="w-3.5 h-3.5 rounded-full shrink-0"
            style={{
              background: `linear-gradient(135deg, ${activeThemeObj.primary} 0%, ${activeThemeObj.secondary} 100%)`,
              boxShadow: `0 0 8px ${activeThemeObj.glow}`
            }}
          />
          <Palette size={13} style={{ color: 'var(--primary)' }} />
        </button>

        {mobileOpen && (
          <div
            className="absolute right-0 top-full mt-2 p-3 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-2xl z-50 min-w-[210px]"
            style={{ background: 'rgba(17, 21, 28, 0.98)' }}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] font-mono text-slate-300">
              <span className="flex items-center gap-1.5 font-bold">
                <Palette size={12} style={{ color: 'var(--primary)' }} />
                <span>COLOR THEMES</span>
              </span>
              <span className="text-[10px] text-slate-400">8 PRESETS</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {themes.map((t) => {
                const isActive = t.id === currentTheme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      onSelectTheme(t.id);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center gap-2 p-1.5 rounded-xl text-left text-xs transition-colors ${
                      isActive ? 'bg-white/15 text-white font-bold' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.primary} 0%, ${t.secondary} 100%)`,
                        boxShadow: isActive ? `0 0 8px ${t.glow}` : 'none'
                      }}
                    />
                    <span className="text-[11px] truncate">{t.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCert, setSelectedCert] = useState(null);

  // Multi-Color Theme System with Persistence
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && themes.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'electric-blue';
  });

  const applyTheme = (themeId) => {
    setCurrentTheme(themeId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', themeId);
      document.documentElement.setAttribute('data-theme', themeId);
      
      const themeObj = themes.find((t) => t.id === themeId);
      if (themeObj) {
        document.documentElement.style.setProperty('--primary', themeObj.primary);
        document.documentElement.style.setProperty('--secondary', themeObj.secondary);
        document.documentElement.style.setProperty('--glow', themeObj.glow);
        document.documentElement.style.setProperty('--primary-rgb', themeObj.primaryRgb);
        document.documentElement.style.setProperty('--secondary-rgb', themeObj.secondaryRgb);
        document.documentElement.style.setProperty('--glow-rgb', themeObj.glowRgb);
      }
    }
  };

  useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Liquid Interactive Spotlight Tracking
  useEffect(() => {
    const handleMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Scrollspy to synchronize active tab smoothly
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'projects', 'experience', 'certs', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden selection:bg-[var(--primary)] selection:text-black bg-[#080A0F]">
      {/* ── AI Cyber Matrix Grid & Interactive Liquid Cursor Spotlight ── */}
      <div className="ai-grid" />
      <div className="liquid-spotlight" />

      {/* ── Liquid Morphism Animated Glowing Ambient Blobs ── */}
      <div className="liquid-blob liquid-blob-1" />
      <div className="liquid-blob liquid-blob-2" />
      <div className="liquid-blob liquid-blob-3" />

      {/* ── High-Tech Full-Width Liquid Top Navbar ── */}
      <header className="liquid-nav">
        <div className="mx-auto flex max-w-[1560px] items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <div 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <SameemLogo size={38} />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="text-[15px] sm:text-base font-extrabold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  Sameem
                </span>
                <span className="text-[15px] sm:text-base font-black liquid-gradient-text">
                  Irfan
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'var(--primary)',
                    boxShadow: '0 0 6px var(--primary)'
                  }}
                />
                <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-medium">
                  Frontend & AI Developer
                </span>
              </div>
            </div>
          </div>

          {/* Center/Right: Theme Switcher & Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeSwitcher currentTheme={currentTheme} onSelectTheme={applyTheme} />

            <span className="hidden xl:flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 6px var(--primary)' }}
              />
              <span>{profile.location}</span>
              <span className="text-slate-600">[{profile.coordinates}]</span>
            </span>

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="liquid-btn-primary"
              style={{ padding: '8px 18px', fontSize: 13 }}
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Initialize Transmission</span>
              <span className="sm:hidden">Transmission</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── FULL-PAGE EXPANSIVE BENTO CONTAINER ── */}
      <main className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-32 space-y-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            BENTO ROW 1: FULL-COVER HERO PROFILE SHOWCASE
        ══════════════════════════════════════════════════════════ */}
        <section id="home" className="pt-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={reveal}
            className="bento-card col-span-12 p-6 sm:p-10 lg:p-12 relative overflow-hidden"
          >
            {/* Background Ambient Glow */}
            <div
              className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full filter blur-3xl pointer-events-none transition-all duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.16) 0%, rgba(var(--secondary-rgb), 0.1) 50%, transparent 100%)'
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Profile Cover Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  <div
                    className="relative p-[3.5px] rounded-[34px] overflow-hidden transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(var(--primary-rgb), 0.85) 0%, rgba(var(--secondary-rgb), 0.5) 50%, rgba(var(--glow-rgb), 0.75) 100%)',
                      boxShadow: '0 0 50px -10px rgba(var(--primary-rgb), 0.4), 0 25px 50px -15px rgba(0,0,0,0.85)'
                    }}
                  >
                    <div className="w-full h-80 sm:h-96 lg:h-[440px] rounded-[30px] overflow-hidden bg-slate-950 relative group">
                      <img
                        src="/profile.jpg"
                        alt="Sameem Irfan"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/90 via-[#080A0F]/20 to-transparent" />
                      
                      {/* Overlay badge on image */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <span className="flex items-center gap-1.5 text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}
                          />
                          <span>AVAILABLE FOR OPPORTUNITIES</span>
                        </span>
                        <span
                          className="backdrop-blur-md px-2 py-1 rounded-md border"
                          style={{
                            color: 'var(--secondary)',
                            backgroundColor: 'rgba(var(--secondary-rgb), 0.18)',
                            borderColor: 'rgba(var(--secondary-rgb), 0.35)'
                          }}
                        >
                          PROD.READY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cyber HUD Floating Name Badge */}
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap shadow-xl border"
                    style={{
                      background: 'rgba(8, 10, 15, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderColor: 'rgba(var(--secondary-rgb), 0.4)'
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}
                    />
                    <span className="font-mono text-xs font-bold text-white tracking-wide">
                      SAMEEM IRFAN
                    </span>
                    <span
                      className="text-[10px] font-mono px-1 rounded"
                      style={{
                        color: 'var(--secondary)',
                        backgroundColor: 'rgba(var(--secondary-rgb), 0.18)'
                      }}
                    >
                      DEV // IT
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Details & Thought Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs font-mono tracking-widest uppercase font-bold"
                      style={{ color: 'var(--secondary)' }}
                    >
                      DEVELOPER_PORTFOLIO // FULLSTACK.AI
                    </span>
                    <span className="liquid-tag font-mono text-[10px]">
                      {profile.location}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                    Sameem <span className="liquid-gradient-text">Irfan</span>
                  </h1>

                  <p
                    className="text-lg sm:text-xl font-mono font-semibold"
                    style={{ color: 'var(--secondary)' }}
                  >
                    {profile.role}
                  </p>
                </div>

                {/* Thought & Vision Card */}
                <div
                  className="p-5 sm:p-6 rounded-2xl border shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%), var(--theme-card)',
                    backdropFilter: 'blur(20px)',
                    borderColor: 'var(--theme-border)'
                  }}
                >
                  <p
                    className="text-[11px] font-mono uppercase tracking-wider mb-2 flex items-center gap-2 font-bold"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 6px var(--primary)' }}
                    />
                    CORE VISION & CAPABILITIES
                  </p>
                  <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                    Frontend Developer <span style={{ color: 'var(--primary)' }}>|</span> AI & Cloud Enthusiast <span style={{ color: 'var(--secondary)' }}>|</span> React.js <span style={{ color: 'var(--primary)' }}>|</span> Node.js <span style={{ color: 'var(--glow)' }}>|</span> Python <span style={{ color: 'var(--primary)' }}>|</span> AWS <span style={{ color: 'var(--secondary)' }}>|</span> Building Scalable Web & AI Solutions
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button onClick={() => scrollTo('projects')} className="liquid-btn-primary">
                    Explore Deployed Projects <ArrowUpRight size={17} />
                  </button>
                  <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="liquid-btn-glass">
                    <MessageCircle size={17} style={{ color: 'var(--primary)' }} />
                    <span>WhatsApp</span>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="liquid-btn-glass">
                    <Linkedin size={17} />
                    <span>LinkedIn</span>
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="liquid-btn-icon" title="GitHub Profile">
                    <Github size={18} />
                  </a>
                  <a href={profile.leetcode} target="_blank" rel="noreferrer" className="liquid-btn-icon" title="LeetCode Profile (@Sameem_irfan)">
                    <LeetCode size={18} />
                  </a>
                </div>

                {/* Telemetry Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {[
                    ['12+', 'Tech Engines', 'React, Next, Node, AWS'],
                    ['4+', 'Deployed Apps', 'Full-stack & AI platforms'],
                    ['4', 'Accredited Certs', 'Google, IBM, Corizo, Neo4j']
                  ].map(([num, lbl, sub]) => (
                    <div key={lbl} className="liquid-stat p-3 sm:p-4">
                      <p className="text-xl sm:text-2xl font-black font-mono liquid-gradient-text tracking-tight">
                        {num}
                      </p>
                      <p className="text-xs font-bold text-white mt-0.5 font-mono uppercase tracking-wider">
                        {lbl}
                      </p>
                      <p className="hidden sm:block text-[11px] text-slate-400 mt-0.5">
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            BENTO ROW 2: AI TERMINAL & TECH STACK CAPABILITIES
        ══════════════════════════════════════════════════════════ */}
        <section id="skills" className="pt-2">
          <div className="bento-grid">

            {/* Bento 3: AI Code Console Terminal */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={reveal}
              className="bento-card col-span-12 lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="ml-2 text-xs font-mono text-slate-400">sameem-neural-core.config.ts</span>
                  </div>
                  <div
                    className="flex items-center gap-1.5 text-[11px] font-mono font-bold"
                    style={{ color: 'var(--secondary)' }}
                  >
                    <Terminal size={13} />
                    <span>READY</span>
                  </div>
                </div>

                <div className="liquid-code border-0 rounded-none bg-transparent p-2">
                  <code>
                    <span className="text-pink-400 font-bold">const</span>{' '}
                    <span style={{ color: 'var(--secondary)' }}>architect</span>: <span style={{ color: 'var(--primary)' }}>DeveloperProfile</span> = {'{'}{'\n'}
                    {'  '}name: <span style={{ color: 'var(--primary)' }}>"Sameem Irfan"</span>,{'\n'}
                    {'  '}role: <span style={{ color: 'var(--primary)' }}>"Frontend Developer"</span>,{'\n'}
                    {'  '}focus: <span style={{ color: 'var(--secondary)' }}>"Scalable Web & AI Solutions"</span>,{'\n'}
                    {'  '}cloud: [<span className="text-amber-300">"AWS"</span>, <span className="text-amber-300">"Vercel"</span>],{'\n'}
                    {'  '}aiEngines: [<span style={{ color: 'var(--primary)' }}>"Python"</span>, <span style={{ color: 'var(--secondary)' }}>"Google AI"</span>, <span style={{ color: 'var(--glow)' }}>"Neo4j"</span>],{'\n'}
                    {'  '}mindset: <span style={{ color: 'var(--primary)' }}>"Build with Purpose."</span>{'\n'}
                    {'}'};<span
                      className="inline-block w-2 h-4 ml-1 animate-pulse align-middle"
                      style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}
                    />
                  </code>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span style={{ color: 'var(--secondary)' }}>STATUS: COMPILED_SUCCESS</span>
                <span>LATENCY: 12ms</span>
              </div>
            </motion.div>

            {/* Bento 4: 4-Quadrant Core Capabilities & Marquee */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={reveal}
              transition={{ delay: 0.1 }}
              className="bento-card col-span-12 lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="ai-section-label" style={{ marginBottom: 0 }}>
                    02 // CORE CAPABILITIES & TECH STACK
                  </p>
                  <span className="liquid-tag font-mono text-[10px]">16+ ENGINES</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                  {[
                    {
                      icon: <Code2 size={19} style={{ color: 'var(--primary)' }} />,
                      title: 'Frontend Architecture',
                      desc: 'React.js, Next.js, ES6+, Responsive Design, Tailwind CSS, Component UX'
                    },
                    {
                      icon: <Layers3 size={19} style={{ color: 'var(--secondary)' }} />,
                      title: 'Backend & APIs',
                      desc: 'Node.js, Express.js, RESTful Architecture, JWT Auth, Microservices'
                    },
                    {
                      icon: <Database size={19} style={{ color: 'var(--glow)' }} />,
                      title: 'Databases & Graph Models',
                      desc: 'MongoDB, PostgreSQL, Neo4j Graph Database, Firebase, Cypher Query'
                    },
                    {
                      icon: <Cloud size={19} style={{ color: 'var(--primary)' }} />,
                      title: 'AI, Python & Cloud',
                      desc: 'Python, AWS, AI Integration, Git, GitHub Pipelines, Vite, Vercel'
                    }
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[var(--primary)] transition-all"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                          {c.icon}
                        </div>
                        <h4 className="text-sm font-bold text-white">{c.title}</h4>
                      </div>
                      <p className="text-xs text-slate-400 font-mono leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liquid Marquee inside Bento Card */}
              <div className="marquee-wrap pt-2 border-t border-white/10">
                <div className="marquee-track gap-2.5">
                  {[...skills, ...skills].map((s, idx) => (
                    <span key={idx} className="liquid-chip text-xs py-1.5 px-3.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full mr-2"
                        style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 6px var(--primary)' }}
                      />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            BENTO ROW 3: DEPLOYED ARCHITECTURES & PROJECTS SHOWCASE
        ══════════════════════════════════════════════════════════ */}
        <section id="projects" className="pt-2">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="ai-section-label" style={{ marginBottom: 0 }}>
              03 // DEPLOYED ARCHITECTURES & PROJECTS SHOWCASE
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono hover:underline flex items-center gap-1.5"
              style={{ color: 'var(--primary)' }}
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="bento-grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ...spring }}
                className="bento-card col-span-12 md:col-span-6 xl:col-span-3 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider font-bold"
                        style={{ color: 'var(--secondary)' }}
                      >
                        0{i + 1} // {p.type}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 tracking-tight">
                        {p.title}
                      </h3>
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="liquid-btn-icon"
                      style={{ width: 36, height: 36 }}
                      title="View GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="liquid-tag text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="liquid-live text-xs py-1.5 px-3"
                    >
                      <ExternalLink size={12} />
                      <span>Live Production</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      [OPEN REPO]
                    </span>
                  )}

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 ml-auto"
                  >
                    <span>Source</span>
                    <ChevronRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            BENTO ROW 4: FIELD EXPERIENCE & ACCREDITED CREDENTIALS
        ══════════════════════════════════════════════════════════ */}
        <section id="experience" className="pt-2">
          <div className="bento-grid">

            {/* Bento 5: Field Experience & Academics */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={reveal}
              className="bento-card col-span-12 lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <p className="ai-section-label">04 // FIELD WORKFLOW & ACADEMICS</p>

                {/* Corizo Experience */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-4">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border"
                        style={{
                          backgroundColor: 'rgba(var(--primary-rgb), 0.15)',
                          borderColor: 'rgba(var(--primary-rgb), 0.35)',
                          color: 'var(--primary)'
                        }}
                      >
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Corizo · Web Development</h4>
                        <p
                          className="text-xs font-mono font-medium"
                          style={{ color: 'var(--secondary)' }}
                        >
                          Internship & Training · Jan – Feb 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-3">
                    Worked on web development workflows, responsive UI implementation, full-stack API integration, and real-world development practices.
                  </p>
                  <button
                    onClick={() => setSelectedCert(certifications[0])}
                    className="liquid-btn-glass text-xs py-1.5 px-3"
                  >
                    <Award size={13} style={{ color: 'var(--primary)' }} />
                    <span>Inspect Training Certificate</span>
                  </button>
                </div>

                {/* Degree */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: 'rgba(var(--secondary-rgb), 0.15)',
                        borderColor: 'rgba(var(--secondary-rgb), 0.35)',
                        color: 'var(--secondary)'
                      }}
                    >
                      <Star size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">
                        B.Tech in Information Technology
                      </h4>
                      <p className="text-xs font-mono text-slate-400">
                        Prince Shri Venkateshwara Padmavathy Engineering College · 2023 – 2027
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>STATUS: DILIGENT & VERIFIED</span>
                <span>CRZ DICE: CRZ141291</span>
              </div>
            </motion.div>

            {/* Bento 6: Accredited Credentials 2x2 Bento Matrix */}
            <motion.div
              id="certs"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={reveal}
              transition={{ delay: 0.1 }}
              className="bento-card col-span-12 lg:col-span-7 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <p className="ai-section-label" style={{ marginBottom: 0 }}>
                    05 // ACCREDITED CREDENTIALS
                  </p>
                  <span className="liquid-tag font-mono text-[10px]">4 VERIFIED RECORDS</span>
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono hover:underline flex items-center gap-1"
                  style={{ color: 'var(--primary)' }}
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-[var(--primary)] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2 gap-1">
                        <span
                          className="text-xs font-mono font-bold truncate"
                          style={{ color: 'var(--primary)' }}
                        >
                          {c.issuer}
                        </span>
                        <span className="liquid-tag font-mono text-[9px] py-0.5 px-2">
                          {c.date}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">
                        {c.title}
                      </h4>

                      {/* Image Thumbnail Preview */}
                      <div
                        onClick={() => setSelectedCert(c)}
                        className="group relative rounded-xl overflow-hidden cursor-pointer mb-2.5 border border-white/10 bg-black/40 aspect-video max-h-32"
                      >
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                          <span className="liquid-pill text-[10px] py-1 px-2.5">
                            <Eye size={12} /> Inspect
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 mt-2 text-xs">
                      <button
                        onClick={() => setSelectedCert(c)}
                        className="text-xs font-mono hover:text-white flex items-center gap-1 transition-colors"
                        style={{ color: 'var(--secondary)' }}
                      >
                        <Eye size={12} /> Inspect
                      </button>
                      {c.verifyUrl && (
                        <a
                          href={c.verifyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono hover:underline flex items-center gap-1 transition-colors"
                          style={{ color: 'var(--primary)' }}
                        >
                          Verify <ArrowUpRight size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            BENTO ROW 5: NEURAL BIOGRAPHY & PHILOSOPHY
        ══════════════════════════════════════════════════════════ */}
        <section id="about" className="pt-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={reveal}
            className="bento-card p-6 sm:p-10"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="ai-section-label" style={{ marginBottom: 0 }}>
                01 // NEURAL BIOGRAPHY & PHILOSOPHY
              </p>
              <span className="liquid-tag font-mono text-[10px]">CORE ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-5">
              I build digital experiences that turn{' '}
              <span className="liquid-gradient-text">ideas into products.</span>
            </h2>

            <div className="space-y-4 text-slate-300/85 text-sm sm:text-base leading-relaxed max-w-4xl">
              <p>
                As an IT professional and Frontend Developer, I specialize in creating responsive, intuitive, and scalable web applications using{' '}
                <span
                  className="text-white font-semibold underline decoration-2"
                  style={{ textDecorationColor: 'rgba(var(--primary-rgb), 0.6)' }}
                >
                  React.js, JavaScript, HTML, and CSS
                </span>
                , with full-stack capabilities across{' '}
                <span
                  className="text-white font-semibold underline decoration-2"
                  style={{ textDecorationColor: 'rgba(var(--secondary-rgb), 0.6)' }}
                >
                  Node.js, Express.js, MongoDB, and REST APIs
                </span>
                .
              </p>
              <p>
                My development philosophy is simple:{' '}
                <strong className="font-semibold" style={{ color: 'var(--primary)' }}>
                  understand the problem, build with purpose, and continuously improve.
                </strong>{' '}
                I enjoy working at the intersection of clean UI, practical engineering, and real-world problem solving—whether that means developing a complete web application, integrating APIs and databases, or improving the overall user experience.
              </p>
              <p>
                I’m driven by curiosity, ownership, and continuous growth, and I’m looking for opportunities where I can contribute to impactful products while evolving into a well-rounded software engineer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
              {[
                { title: 'Understand the Problem', desc: 'Deep dive into user requirements, edge cases, and resilient data flows.' },
                { title: 'Build with Purpose', desc: 'Craft clean, performant, and scalable code tailored for longevity.' },
                { title: 'Continuous Growth', desc: 'Rapidly embracing AI paradigms, cloud scalability, and modern web tools.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <p
                    className="text-[10px] font-mono font-bold mb-1"
                    style={{ color: 'var(--primary)' }}
                  >
                    0{idx + 1} // RULE
                  </p>
                  <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FOOTER: DEDICATED FULL-WIDTH LIQUID CONTACT CARD
        ══════════════════════════════════════════════════════════ */}
        <footer id="contact" className="pt-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            variants={reveal}
            className="bento-card p-8 sm:p-12 relative overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl pointer-events-none transition-all duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.16) 0%, rgba(var(--secondary-rgb), 0.1) 50%, transparent 100%)'
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading & Availability */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--glow)' }}
                  />
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-[0.2em]"
                    style={{ color: 'var(--secondary)' }}
                  >
                    06 // TRANSMISSION TERMINAL & CONTACT
                  </span>
                  <span className="liquid-tag font-mono text-[10px]">OPEN FOR ROLES</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Have an innovative idea?<br />
                  <span className="liquid-gradient-text">Let's build something exceptional.</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed max-w-xl font-normal">
                  Open to frontend engineering roles, full-stack development, tech internships, and impactful digital ventures. Connect with me directly via WhatsApp, GitHub, or LinkedIn.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: 'var(--primary)' }}>●</span> Location: Chennai, India
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: 'var(--secondary)' }}>●</span> Response: Within 24 hours
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Action Cards */}
              <div className="lg:col-span-5 space-y-3">
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--primary)] hover:bg-[var(--primary)]/[0.08] transition-all shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border"
                      style={{
                        backgroundColor: 'rgba(var(--primary-rgb), 0.15)',
                        borderColor: 'rgba(var(--primary-rgb), 0.35)',
                        color: 'var(--primary)'
                      }}
                    >
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-white transition-colors"
                      >
                        Direct WhatsApp
                      </p>
                      <p className="text-xs font-mono text-slate-400">+91 85318 00402</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    style={{ color: 'var(--primary)' }}
                  />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/[0.08] transition-all shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border"
                      style={{
                        backgroundColor: 'rgba(var(--secondary-rgb), 0.15)',
                        borderColor: 'rgba(var(--secondary-rgb), 0.35)',
                        color: 'var(--secondary)'
                      }}
                    >
                      <Linkedin size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white transition-colors">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs font-mono text-slate-400">/in/sameem-irfan-97403b35a</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    style={{ color: 'var(--secondary)' }}
                  />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[var(--glow)] hover:bg-[var(--glow)]/[0.08] transition-all shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border"
                      style={{
                        backgroundColor: 'rgba(var(--glow-rgb), 0.15)',
                        borderColor: 'rgba(var(--glow-rgb), 0.35)',
                        color: 'var(--glow)'
                      }}
                    >
                      <Github size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white transition-colors">
                        GitHub Profile
                      </p>
                      <p className="text-xs font-mono text-slate-400">github.com/SameemIrfan21</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    style={{ color: 'var(--glow)' }}
                  />
                </a>

                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/[0.08] transition-all shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border border-amber-400/30 bg-amber-500/15 text-amber-400"
                    >
                      <LeetCode size={22} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        LeetCode Profile
                      </p>
                      <p className="text-xs font-mono text-slate-400">leetcode.com/u/Sameem_irfan</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-500 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="pt-8 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 6px var(--primary)' }}
                />
                <span>SYSTEM STATUS: OPERATIONAL</span>
              </div>
              <p>© {new Date().getFullYear()} Sameem Irfan · Building Scalable Web & AI Solutions</p>
            </div>
          </motion.div>
        </footer>

      </main>

      {/* ── High-Tech Floating Bottom Dock with Morphing Active Indicator ── */}
      <nav className="liquid-dock">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => scrollTo(t.id)}
              className="relative flex flex-col items-center gap-1 text-[11px] font-semibold py-1.5 px-3 sm:px-4 rounded-full transition-colors z-10"
              style={{
                color: isActive ? '#080A0F' : 'rgba(241, 245, 249, 0.55)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
              title={t.label}
            >
              {isActive && (
                <motion.span
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                    boxShadow: '0 0 20px rgba(var(--glow-rgb), 0.65)'
                  }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              {t.icon}
              <span className="tracking-wide text-[10px]">{t.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ── High-Tech Liquid Modal Lightbox for Full-Resolution Certificates ── */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={spring}
              onClick={(e) => e.stopPropagation()}
              className="liquid-card max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-white/20"
              style={{
                background: 'rgba(17, 21, 28, 0.96)',
                boxShadow: '0 0 60px rgba(var(--primary-rgb), 0.25)'
              }}
            >
              {/* Modal Top HUD */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }}
                  />
                  <span className="text-xs font-mono font-bold text-white tracking-wider">
                    {selectedCert.issuer}
                  </span>
                  <span className="liquid-tag font-mono text-[10px]">
                    {selectedCert.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="liquid-btn-icon"
                  style={{ width: 32, height: 32 }}
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 overflow-y-auto space-y-4">
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain max-h-[55vh] mx-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{selectedCert.title}</h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed font-normal">{selectedCert.desc}</p>
                </div>
                {selectedCert.credId && (
                  <div className="text-xs font-mono text-slate-400 bg-white/[0.04] p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span>CREDENTIAL VERIFICATION ID:</span>
                    <span className="font-bold" style={{ color: 'var(--primary)' }}>
                      {selectedCert.credId}
                    </span>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="p-4 border-t border-white/10 flex items-center justify-between gap-3 bg-white/[0.02]">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="liquid-btn-glass"
                  style={{ padding: '8px 18px', fontSize: 13 }}
                >
                  Close Terminal
                </button>
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="liquid-btn-primary"
                    style={{ padding: '8px 18px', fontSize: 13 }}
                  >
                    <span>Verify Online Credential</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
