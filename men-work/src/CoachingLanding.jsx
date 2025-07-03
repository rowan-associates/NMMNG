import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import loverHero from './assets/lover-hero.webp';
import loverPhases from './assets/lover-phases.webp';
import keyImg from './assets/key.webp';
import bootcampFooter from './assets/bootcamp-footer.avif';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import nmmngLogo from './assets/nmmng-logo.png';
import { ArrowRight } from 'lucide-react';
import archetypeLeader from './assets/archetype-leader.webp';
import archetypeProvider from './assets/archetype-provider.webp';
import archetypeLover from './assets/archetype-lover.webp';
import { Input } from './components/ui/input.jsx';
import { Textarea } from './components/ui/textarea.jsx';
import Footer from './App.jsx';
import backToTopImg from './assets/back-to-top.webp';
import heroCoaching from './assets/hero-coaching.webp';
import goldFoil from './assets/gold-foil.webp';
// import other assets/icons as needed

// Add/override styles for premium black and gold aesthetic
const GOLD = '#D4AF37';
const BRASS = '#A67C52';
const TEXT_LIGHT = '#F5F5F5';
const TEXT_SOFT = '#E0E0E0';
const BG_BLACK = '#000000';

function CoachingLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const forestBgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
      if (forestBgRef.current) {
        const offset = window.scrollY * 0.25;
        forestBgRef.current.style.backgroundPositionY = `-${offset}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden" style={{ background: BG_BLACK, color: TEXT_LIGHT }}>
      {/* Sticky Navigation */}
      {isScrolled && (
        <nav className="nav-sticky" style={{ background: 'rgba(0,0,0,0.92)', boxShadow: `0 2px 24px 0 ${GOLD}33` }}>
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="/" className="flex items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
                <img src={nmmngLogo} alt="NMMNG Logo" className="h-12 w-auto sm:h-14 mr-0 sm:mr-4" style={{ position: 'relative', top: 0, left: 0, zIndex: 11, background: 'none' }} />
              </a>
              <h2 className="text-lg sm:text-xl font-bold nmmng-glow text-center sm:text-left" style={{ marginLeft: 0, zIndex: 1, lineHeight: 1.1, color: GOLD, fontFamily: 'League Spartan, sans-serif', fontWeight: 700, textShadow: `0 0 16px ${GOLD}88` }}>Executive Transformation Program</h2>
            </div>
            <button 
              onClick={() => scrollToSection('application')}
              className="btn-primary w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-4 mt-2 sm:mt-0 border-2 rounded-xl"
              style={{ minWidth: 0, background: BG_BLACK, color: GOLD, borderColor: GOLD, boxShadow: `0 0 16px 2px ${GOLD}55`, textTransform: 'uppercase', fontWeight: 800 }}
              onMouseOver={e => e.currentTarget.style.boxShadow = `0 0 32px 8px ${GOLD}99`}
              onMouseOut={e => e.currentTarget.style.boxShadow = `0 0 16px 2px ${GOLD}55`}
            >
              APPLY NOW
              <ArrowRight className="w-4 h-4 ml-2" color={GOLD} />
            </button>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-bg">
        {/* Hero background image with black gradient fade and gold foil overlay */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0" style={{ backgroundImage: `url(${heroCoaching})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', zIndex: 1 }} />
        {/* Black gradient fade at bottom */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 60%, #000 100%)', zIndex: 2 }} />
        {/* Gold foil overlay, subtle and only at edges */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `url(${goldFoil}) center/cover no-repeat`, opacity: 0.18, mixBlendMode: 'screen', zIndex: 3 }} />
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center py-32">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08, color: GOLD, textShadow: `0 0 32px #D4AF3788, 0 0 8px #fff2` }}>
            THE EXECUTIVE TRANSFORMATION PROGRAM
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-2xl md:text-3xl font-semibold mb-8" style={{ fontFamily: 'PT Serif, serif', fontWeight: 500, lineHeight: 1.2, color: GOLD }}>
            Fast-Track Your Evolution. Master Your Leadership, Wealth, and Relationships in 90 Days.
          </motion.h2>
          <button className="btn-primary text-xl px-8 py-6 font-bold mt-2 rounded-lg gold-foil-btn shimmer-on-hover" style={{ background: `linear-gradient(90deg, #D4AF37 0%, #BFA14A 100%)`, color: '#111', fontFamily: 'PT Serif, serif', minHeight: 64, borderRadius: 11, boxShadow: '0 0 32px 8px #D4AF3722', border: `2px solid ${GOLD}`, position: 'relative', overflow: 'hidden' }} onClick={() => scrollToSection('application')}>
            <span style={{ position: 'relative', zIndex: 2 }}>Apply Now</span>
            {/* Gold foil shimmer overlay for button */}
            <span className="gold-foil-shimmer" style={{ position: 'absolute', inset: 0, background: `url(${goldFoil}) center/cover no-repeat`, opacity: 0.22, mixBlendMode: 'screen', pointerEvents: 'none', zIndex: 1 }} />
            {/* Animated shimmer highlight */}
            <span className="gold-shimmer-anim" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }} />
          </button>
        </div>
        {/* Scoped shimmer animation CSS */}
        <style>{`
          .shimmer-on-hover .gold-shimmer-anim {
            background: linear-gradient(120deg, transparent 60%, rgba(255,255,200,0.18) 70%, transparent 80%);
            opacity: 0;
            transition: opacity 0.3s;
          }
          .shimmer-on-hover:hover .gold-shimmer-anim,
          .shimmer-on-hover:focus .gold-shimmer-anim {
            opacity: 1;
            animation: goldShimmerMove 2.2s linear infinite;
          }
          @keyframes goldShimmerMove {
            0% { background-position: -120% 0; }
            100% { background-position: 220% 0; }
          }
          .gold-shimmer-anim {
            background-size: 200% 100%;
            background-repeat: no-repeat;
          }
        `}</style>
      </section>

      {/* Disruption Section */}
      <section id="disruption" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Cinematic forest background with blur and overlay */}
        <div className="absolute inset-0 z-0" style={{ background: "url('/assets/hero_silhouette.jpeg') center/cover no-repeat", filter: 'blur(4px) brightness(0.7)', opacity: 0.7 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D212Dcc] to-[#0F4F40ee] z-0" />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative z-10 w-full max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-10 md:p-16 flex flex-col items-center shadow-xl border border-white/10 backdrop-blur-md" style={{ background: 'rgba(20,20,20,0.82)', borderRadius: 24, boxShadow: `0 8px 40px ${GOLD}22, 0 2px 16px ${BRASS}22`, border: `1.5px solid ${BRASS}` }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'PT Serif, serif', color: GOLD, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
              The World Has Changed. Have You?
            </h2>
            <p className="text-lg md:text-xl text-white mb-4 text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
              The world is shifting beneath our feet. AI is reshaping careers overnight. Traditional paths to success are disappearing. The very definition of masculinity is being questioned and redefined. Meanwhile, we're still expected to have all the answers—to be providers, protectors, and leaders in a world that's changing faster than ever.
            </p>
            <p className="text-lg md:text-xl text-white mb-4 text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
              Yet most of us were never taught how to navigate this complexity. We learned to be "nice guys"—to please others, avoid conflict, and hide our true needs. We adapted by putting everyone else first, secretly hoping for approval and validation in return.
            </p>
            <p className="text-lg md:text-xl text-white mb-4 text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
              But that survival strategy is failing us.
            </p>
            <p className="text-lg md:text-xl text-white mb-2 text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
              In an era where machines can outthink us and social media amplifies every mistake, the old playbook of people-pleasing and conflict avoidance isn't just limiting—it's dangerous. We're watching men around us struggle with depression, failed relationships, and a deep sense that they're living someone else's life.
            </p>
            <p className="text-lg md:text-xl text-[#D4E04F] font-bold text-center mt-4" style={{ fontFamily: 'PT Serif, serif', lineHeight: 1.3 }}>
              The cost of staying stuck has never been higher.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Express Ticket Section */}
      <section id="express-ticket" className="py-20 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: text */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 flex flex-col items-start justify-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'PT Serif, serif', color: GOLD, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            This Is Your Express Ticket to Transformation
          </h2>
          <p className="text-lg md:text-xl text-white mb-6" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
            This is not a slow, meandering coaching process. This is not another leadership programme teaching you to smile more and network better. This is an intensive, bespoke, three-month engagement that serves as your "express ticket" to transformation.<br/><br/>
            Achieve in three months what might otherwise take years of trial and error.
          </p>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2" style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>This programme is for:</div>
            <ul className="space-y-4 text-base md:text-lg" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
              <li>Potential high-performing men who feel stuck despite their ability for success</li>
              <li>Executives facing significant challenges who need rapid, sustainable change</li>
              <li>Leaders ready to stop living someone else's life and start living their own</li>
              <li>Men who are serious about transformational change and ready to do the work</li>
              <li>Those who want to thrive in the AI era, not just survive it</li>
            </ul>
          </div>
        </motion.div>
        {/* Right: blurred forest image */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 w-full flex items-center justify-center relative min-h-[320px] md:min-h-[420px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ zIndex: 1 }}>
            <img src="/assets/hero_silhouette.jpeg" alt="Forest" className="w-full h-full object-cover blur-md scale-105" style={{ filter: 'blur(8px) brightness(0.8)' }} />
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {/* Optionally add a subtle overlay or icon here */}
          </div>
        </motion.div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="py-20 w-full relative overflow-hidden">
        {/* Blurred lover-phases.webp background */}
        <div className="absolute inset-0 z-0" style={{ background: `url(${loverPhases}) center/cover no-repeat`, filter: 'blur(8px)', opacity: 0.32 }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            The Three Pillars of Male Excellence
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Leader Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/10 backdrop-blur-md" style={{ background: 'rgba(20,20,20,0.82)', borderRadius: 18, boxShadow: `0 8px 40px ${GOLD}22, 0 2px 16px ${BRASS}22`, border: `1.5px solid ${BRASS}` }}>
              <img src={archetypeLeader} alt="Leader Archetype" className="w-24 h-24 object-contain mb-4" />
              <div className="text-xl font-bold mb-2" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 1: Leadership & Capability (The Leader)</div>
              <div className="text-base text-[#A67C52] mb-4" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 600 }}>Move beyond conditioned patterns. Solve complex problems. Lead with confidence.</div>
              <ul className="text-left space-y-3 mb-2" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
                <li><b>Assessment:</b> A deep dive into your current leadership skills, decision-making processes, and overall capability.</li>
                <li><b>Objective:</b> Move beyond conditioned patterns of thinking that limit your potential. Learn new mental models and practical skills to solve complex problems and create unseen opportunities.</li>
                <li><b>Transformation:</b>
                  <ul className="ml-4 list-disc">
                    <li>Enhanced leadership presence that commands respect naturally</li>
                    <li>Decisive action without the paralysis of people-pleasing</li>
                    <li>The ability to navigate AI disruption and future challenges with confidence</li>
                    <li>Strategic thinking that anticipates change rather than reacts to it</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
            {/* Provider Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="glass rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/10 backdrop-blur-md" style={{ background: 'rgba(20,20,20,0.82)', borderRadius: 18, boxShadow: `0 8px 40px ${GOLD}22, 0 2px 16px ${BRASS}22`, border: `1.5px solid ${BRASS}` }}>
              <img src={archetypeProvider} alt="Provider Archetype" className="w-24 h-24 object-contain mb-4" />
              <div className="text-xl font-bold mb-2" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 2: Wealth & Provision (The Provider)</div>
              <div className="text-base text-[#A67C52] mb-4" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 600 }}>Remove blocks to financial growth. Build abundance. Provide with confidence.</div>
              <ul className="text-left space-y-3 mb-2" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
                <li><b>Assessment:</b> An honest evaluation of your relationship with money, your ability to generate it, and your mindset around wealth and being a provider.</li>
                <li><b>Objective:</b> Identify and remove blocks to financial growth. Refine strategies for income enhancement and build a mindset of abundance that thrives regardless of economic disruption.</li>
                <li><b>Transformation:</b>
                  <ul className="ml-4 list-disc">
                    <li>A clear strategy to enhance earning potential in the AI economy</li>
                    <li>Powerful financial decision-making that creates sustainable wealth</li>
                    <li>Freedom from scarcity thinking that keeps you trapped in survival mode</li>
                    <li>The confidence to provide and protect in an uncertain world</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
            {/* Lover Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="glass rounded-2xl p-8 flex flex-col items-center text-center shadow-xl border border-white/10 backdrop-blur-md" style={{ background: 'rgba(20,20,20,0.82)', borderRadius: 18, boxShadow: `0 8px 40px ${GOLD}22, 0 2px 16px ${BRASS}22`, border: `1.5px solid ${BRASS}` }}>
              <img src={archetypeLover} alt="Lover Archetype" className="w-24 h-24 object-contain mb-4" />
              <div className="text-xl font-bold mb-2" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 3: Relationships & Connection (The Lover)</div>
              <div className="text-base text-[#A67C52] mb-4" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 600 }}>Deepen connection. Build relational intelligence. Lead with authenticity.</div>
              <ul className="text-left space-y-3 mb-2" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
                <li><b>Assessment:</b> Evaluating your current relational status—whether you're in a difficult relationship or seeking to find a healthy one.</li>
                <li><b>Objective:</b> Provide the tools and insights needed to either repair and deepen an existing partnership or prepare for and attract a healthy, fulfilling relationship.</li>
                <li><b>Transformation:</b>
                  <ul className="ml-4 list-disc">
                    <li>Improved relational intelligence that builds deeper connections</li>
                    <li>The ability to be authentic without sacrificing respect</li>
                    <li>Clear boundaries that protect your energy while building stronger relationships</li>
                    <li>A thriving personal life that supports rather than drains your professional success</li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="promise" className="py-20 w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* Optional key symbol background */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <img src={keyImg} alt="Key Symbol" className="w-full max-w-3xl opacity-10 grayscale" style={{ filter: 'blur(1px) grayscale(1)' }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            Transformational Change, Not Surface Fixes
          </h2>
          <div className="w-32 h-1 mb-8 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #D4E04F 0%, #A67C52 100%)', boxShadow: '0 0 16px 4px #E6F97B88' }} />
          <p className="text-lg md:text-xl text-white mb-8 text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.4 }}>
            We don't just solve surface-level problems. We rewire the underlying patterns of thinking and behaviour that created them, opening up a new sense of self and possibility.
          </p>
          <ul className="space-y-4 text-base md:text-lg text-left mx-auto max-w-2xl" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
            <li><span className="text-[#D4E04F] font-bold">Speed & Intensity:</span> Achieve profound transformation in 90 days through intensive, focused work on what matters most.</li>
            <li><span className="text-[#D4E04F] font-bold">Bespoke Solutions:</span> The program is entirely tailored to you. We diagnose your specific problems and co-create a direct path to the solutions.</li>
            <li><span className="text-[#D4E04F] font-bold">Vision & Strategy:</span> You will leave with a powerful, grounded vision for your future and a clear, actionable pathway to achieve it.</li>
            <li><span className="text-[#D4E04F] font-bold">Future-Ready Leadership:</span> Skills that complement, don't compete with, AI capabilities, positioning you as irreplaceable in a rapidly changing world.</li>
            <li><span className="text-[#D4E04F] font-bold">Authentic Confidence:</span> Confidence rooted in self-knowledge, not external validation, that allows you to lead authentically rather than perform constantly.</li>
          </ul>
        </motion.div>
      </section>

      {/* Structure Section */}
      <section id="structure" className="py-20 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Bullets */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 flex flex-col items-start justify-center z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            Program Structure: 90-Day Intensive Transformation
          </h2>
          <ul className="space-y-6 text-lg md:text-xl" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT, fontWeight: 400 }}>
            <li><span className="text-[#D4E04F] font-bold">Format:</span> One-on-one executive coaching with strategic group sessions</li>
            <li><span className="text-[#D4E04F] font-bold">Duration:</span> 3-Month Intensive Program</li>
            <li><span className="text-[#D4E04F] font-bold">Delivery:</span>
              <ul className="ml-4 list-disc">
                <li>Weekly 90-minute intensive coaching sessions (12 total)</li>
                <li>Bi-weekly strategic group mastermind sessions with carefully selected peers</li>
                <li>24/7 access to secure messaging for breakthrough moments</li>
                <li>Comprehensive assessment tools and personalised action plans</li>
                <li>Access to exclusive resources and frameworks</li>
              </ul>
            </li>
            <li><span className="text-[#D4E04F] font-bold">Investment:</span> £4,999 for the complete 90-day transformation<br/><span className="text-xs text-white/70">Payment in full to ensure maximum commitment and results</span></li>
          </ul>
        </motion.div>
        {/* Right: Timeline/Calendar Visual */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 w-full flex items-center justify-center z-10">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex flex-col items-center">
            {/* Timeline visual for 3 months */}
            <div className="flex flex-col items-center w-full">
              <div className="mb-8">
                <div className="text-2xl font-bold text-[#D4E04F] mb-2" style={{ fontFamily: 'PT Serif, serif' }}>90-Day Timeline</div>
                <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(90deg, #D4E04F 0%, #A67C52 100%)', boxShadow: '0 0 8px 2px #E6F97B88' }} />
              </div>
              <div className="flex flex-col gap-8 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#D4E04F] border-2 border-[#A67C52] flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-white" style={{ fontFamily: 'PT Serif, serif' }}>Month 1</div>
                    <div className="text-base text-white/80" style={{ fontFamily: 'League Spartan, sans-serif' }}>Foundation & Assessment</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#D4E04F] border-2 border-[#A67C52] flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-white" style={{ fontFamily: 'PT Serif, serif' }}>Month 2</div>
                    <div className="text-base text-white/80" style={{ fontFamily: 'League Spartan, sans-serif' }}>Deep Work & Group Mastermind</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#D4E04F] border-2 border-[#A67C52] flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-white" style={{ fontFamily: 'PT Serif, serif' }}>Month 3</div>
                    <div className="text-base text-white/80" style={{ fontFamily: 'League Spartan, sans-serif' }}>Integration & Future Vision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto w-full px-6">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
          Choose Your Investment Plan
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-6 items-stretch justify-center">
          {/* Full Payment Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10 border-2 border-[#D4E04F] shadow-lg" style={{ borderRadius: 11, minHeight: 420, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22` }}>
            <div className="absolute top-6 right-6 bg-[#D4E04F] text-[#0F4F40] px-4 py-1 rounded-full font-bold text-sm shadow" style={{ fontFamily: 'League Spartan, sans-serif', letterSpacing: '0.08em' }}>Best Value</div>
            <div className="text-lg font-bold mb-2 text-center" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif' }}>Full Payment</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£4,999</div>
            <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in full for the complete 90-day transformation</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full animate-pulse-glow" style={{ background: BG_BLACK, color: GOLD, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}55` }} onClick={() => scrollToSection('application')}>Apply Now</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £4,999</div>
            {/* Accordion for Why This Investment Level */}
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-full">
                <AccordionTrigger className="text-lg font-bold" style={{ color: '#A67C52', fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: '#0D212D' }}>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Quality Assurance: It ensures we work only with clients who are fully committed to profound change, not those seeking quick fixes.</li>
                    <li>Resource Allocation: It allows us to provide the intensive, high-touch experience necessary for rapid transformation.</li>
                    <li>Serious Commitment: It acts as a filter, ensuring only people serious about transformational change apply.</li>
                    <li>Results Guarantee: At this level, we can guarantee the depth of attention and customisation needed for breakthrough results.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          {/* Split in 2 Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10 border-2 border-[#A67C52] shadow-lg" style={{ borderRadius: 11, minHeight: 420, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22` }}>
            <div className="text-lg font-bold mb-2 text-center" style={{ color: '#A67C52', fontFamily: 'League Spartan, sans-serif' }}>Split in 2</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£2,600 x 2</div>
            <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in two installments across the programme</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full" style={{ background: BG_BLACK, color: GOLD, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}55` }} onClick={() => scrollToSection('application')}>Apply Now</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £5,200</div>
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-2">
                <AccordionTrigger className="text-lg font-bold" style={{ color: '#A67C52', fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: '#0D212D' }}>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Quality Assurance: It ensures we work only with clients who are fully committed to profound change, not those seeking quick fixes.</li>
                    <li>Resource Allocation: It allows us to provide the intensive, high-touch experience necessary for rapid transformation.</li>
                    <li>Serious Commitment: It acts as a filter, ensuring only people serious about transformational change apply.</li>
                    <li>Results Guarantee: At this level, we can guarantee the depth of attention and customisation needed for breakthrough results.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
          {/* Monthly Plan Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10 border-2 border-[#0F4F40] shadow-lg" style={{ borderRadius: 11, minHeight: 420, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22` }}>
            <div className="text-lg font-bold mb-2 text-center" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif' }}>Monthly Plan</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£1,750 x 3</div>
            <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in three monthly installments</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full" style={{ background: BG_BLACK, color: GOLD, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}55` }} onClick={() => scrollToSection('application')}>Apply Now</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £5,250</div>
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-3">
                <AccordionTrigger className="text-lg font-bold" style={{ color: '#A67C52', fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: '#0D212D' }}>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Quality Assurance: It ensures we work only with clients who are fully committed to profound change, not those seeking quick fixes.</li>
                    <li>Resource Allocation: It allows us to provide the intensive, high-touch experience necessary for rapid transformation.</li>
                    <li>Serious Commitment: It acts as a filter, ensuring only people serious about transformational change apply.</li>
                    <li>Results Guarantee: At this level, we can guarantee the depth of attention and customisation needed for breakthrough results.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
        <div className="text-sm text-muted-foreground text-center mt-2" style={{ fontFamily: 'League Spartan, sans-serif', color: '#A67C52' }}>
          We accept most major cards. Secure checkout and support included.
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="py-20 max-w-7xl mx-auto w-full px-6 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-2xl mx-auto glass rounded-2xl p-10 md:p-16 flex flex-col items-center shadow-xl border border-white/10 backdrop-blur-md" style={{ background: 'rgba(20,20,20,0.82)', borderRadius: 24, boxShadow: `0 8px 40px ${GOLD}22, 0 2px 16px ${BRASS}22`, border: `1.5px solid ${BRASS}` }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            Apply for Your Private Consultation
          </h2>
          <form className="w-full flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>Name</label>
              <Input type="text" placeholder="Your Name" required className="w-full" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>Address</label>
              <Input type="text" placeholder="Your Address" required className="w-full" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>Phone Number</label>
              <Input type="tel" placeholder="Your Phone Number" required className="w-full" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>Employment Status</label>
              <Input type="text" placeholder="e.g. Self employed, full time, part time employed etc." required className="w-full" />
            </div>
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>What do you want to get from joining this programme?</label>
              <Textarea placeholder="Describe your current circumstances and what you wish to transform..." required className="w-full" rows={4} />
            </div>
            <div>
              <label className="block mb-2 text-lg font-bold" style={{ fontFamily: 'League Spartan, sans-serif', color: GOLD }}>Call Preference</label>
              <Input type="text" placeholder="Morning, Afternoon, Evening, Weekday/Weekend" required className="w-full" />
            </div>
            <button type="submit" className="btn-primary text-xl px-8 py-6 font-bold mt-4 rounded-lg w-full" style={{ background: BG_BLACK, color: GOLD, fontFamily: 'PT Serif, serif', minHeight: 64, borderRadius: 11, boxShadow: `0 0 16px 2px ${GOLD}55` }}>
              Apply Now
            </button>
          </form>
          <div className="text-xs text-center text-white/70 mt-6" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Your information is kept strictly confidential and will only be used to contact you about your application. We respect your privacy.
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 w-full relative flex flex-col items-center justify-center overflow-hidden">
        {/* Key image background */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <img src={keyImg} alt="Key Symbol" className="w-full max-w-2xl opacity-20 grayscale" style={{ filter: 'blur(1px) grayscale(1)' }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center" style={{ fontFamily: 'PT Serif, serif', fontWeight: 700, color: GOLD, lineHeight: 1.2, textShadow: '0 0 32px #E6F97B55, 0 0 8px #fff2' }}>
            "The question isn't whether the world will change around you—it's whether you'll change with it, or be left behind."
          </p>
          <button className="btn-primary text-xl px-8 py-6 font-bold mt-2 rounded-lg" style={{ background: BG_BLACK, color: GOLD, fontFamily: 'PT Serif, serif', minHeight: 64, borderRadius: 11, boxShadow: `0 0 16px 2px ${GOLD}55` }} onClick={() => scrollToSection('application')}>
            Start My Application
          </button>
        </motion.div>
      </section>

      {/* Footer Section (for consistency) */}
      <Footer showBackToTop={showBackToTop} scrollToTop={scrollToTop} backToTopImg={backToTopImg} />
    </div>
  );
}

export default CoachingLanding; 