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
import archetypesImg from './assets/archetypes.webp';
import { FaYoutube, FaX, FaInstagram, FaMeetup, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import phoenixImg from './assets/phoenix.webp';
import blackBg from './assets/black.webp';
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
  const sectionIds = ['hero','disruption','express-ticket','pillars','structure','promise','pricing','application','final-cta'];
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
      if (forestBgRef.current) {
        const offset = window.scrollY * 0.25;
        forestBgRef.current.style.backgroundPositionY = `-${offset}px`;
      }
      let found = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.33 && rect.bottom > window.innerHeight * 0.33) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
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
      {/* Sticky Navigation - gold-foil background, no blue */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cover bg-no-repeat bg-center shadow-lg overflow-hidden nav-sticky-mobile" style={{ backgroundImage: `url(${goldFoil})`, backgroundBlendMode: 'overlay' }}>
        <div className="container mx-auto px-4 py-2 flex flex-row justify-between items-center gap-2 relative z-10">
          <div className="flex flex-row items-center gap-3">
            <a href="/" className="flex items-center justify-center relative z-10">
              <img src={nmmngLogo} alt="NMMNG Logo" className="h-10 w-auto mr-2 relative z-11 bg-none" />
            </a>
            <h2 className="text-lg md:text-xl font-bold nmmng-glow text-left" style={{ color: GOLD, fontFamily: 'League Spartan, sans-serif', fontWeight: 700, textShadow: `0 0 8px ${GOLD}55` }}>Executive Transformation Program</h2>
          </div>
          <button 
            onClick={() => scrollToSection('application')}
            className="btn-primary text-base px-5 py-2 font-bold rounded-lg gold-foil-btn shimmer-on-hover bg-black text-gold border border-gold font-bold min-w-0 leading-tight h-11 flex items-center justify-center whitespace-nowrap relative overflow-hidden"
            style={{ border: `1.5px solid ${GOLD}` }}
          >
            <span className="relative z-2">APPLY NOW</span>
            <ArrowRight className="w-4 h-4 ml-2" color={GOLD} />
            <span className="gold-shimmer-anim absolute inset-0 pointer-events-none z-3" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-bg w-full flex flex-col items-center justify-center relative pt-24 md:pt-0" style={{ marginTop: '56px' }}>
        {/* Hero background image with black gradient fade and gold foil overlay */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 bg-cover bg-center z-1 md:bg-fixed" style={{ backgroundImage: `url(${heroCoaching})` }} />
        {/* Black gradient fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black z-2" />
        {/* Gold foil overlay, subtle and only at edges */}
        <div className="absolute inset-0 pointer-events-none bg-cover bg-center opacity-20 mix-blend-screen z-3" style={{ backgroundImage: `url(${goldFoil})` }} />
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10 flex flex-col items-center text-center py-16 md:py-32">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-extrabold mb-4 break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD, textShadow: `0 0 32px #D4AF3788, 0 0 8px #fff2` }}>
            THE EXECUTIVE TRANSFORMATION PROGRAM
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-lg md:text-2xl font-semibold mb-8 break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', fontWeight: 500, color: GOLD }}>
            Fast-Track Your Evolution. Master Your Leadership, Wealth, and Relationships in 90 Days.
          </motion.h2>
          <button className="btn-primary text-base md:text-xl px-6 md:px-8 py-4 md:py-6 font-bold mt-2 rounded-lg gold-foil-btn shimmer-on-hover bg-gradient-to-r from-gold to-brass text-black font-serif min-h-12 md:min-h-16 rounded-lg shadow-lg border-2 border-gold relative overflow-hidden" onClick={() => scrollToSection('application')}>
            <span className="relative z-2">Apply Now</span>
            <span className="gold-foil-shimmer absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none z-1" style={{ backgroundImage: `url(${goldFoil})` }} />
            <span className="gold-shimmer-anim absolute inset-0 pointer-events-none z-3" />
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

      {/* Disruption Section: more visible archetypes.webp, transparent black text box, gold-foil border, 100% width */}
      <section id="disruption" className="w-full min-h-screen flex items-center justify-center relative overflow-visible">
        <img src={archetypesImg} alt="Archetypes" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 blur-sm pointer-events-none" />
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10 w-full flex items-center justify-center px-4 md:px-6 py-16 min-h-[80vh]">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full max-w-7xl mx-auto">
            <div className="p-6 md:p-12 flex flex-col items-center shadow-xl backdrop-blur-md w-full rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif' }}>
                The World Has Changed. Have You?
              </h2>
              <p className="text-lg md:text-xl mb-4 text-center break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: '#F5F5F5' }}>
                The world is shifting beneath our feet. AI is reshaping careers overnight. Traditional paths to success are disappearing. The very definition of masculinity is being questioned and redefined. Meanwhile, we're still expected to have all the answers—to be providers, protectors, and leaders in a world that's changing faster than ever.
              </p>
              <p className="text-lg md:text-xl mb-4 text-center break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: '#F5F5F5' }}>
                Yet most of us were never taught how to navigate this complexity. We learned to be "nice guys"—to please others, avoid conflict, and hide our true needs. We adapted by putting everyone else first, secretly hoping for approval and validation in return.
              </p>
              <p className="text-lg md:text-xl mb-4 text-center break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: '#F5F5F5' }}>
                But that survival strategy is failing us.
              </p>
              <p className="text-lg md:text-xl mb-2 text-center break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: '#F5F5F5' }}>
                In an era where machines can outthink us and social media amplifies every mistake, the old playbook of people-pleasing and conflict avoidance isn't just limiting—it's dangerous. We're watching men around us struggle with depression, failed relationships, and a deep sense that they're living someone else's life.
              </p>
              <p className="text-lg md:text-xl font-bold text-center mt-4 gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif' }}>
                The cost of staying stuck has never been higher.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Express Ticket Section */}
      <section id="express-ticket" className="py-16 max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 flex flex-col items-start justify-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            This Is Your Express Ticket to Transformation
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            This is not a slow, meandering coaching process. This is not another leadership programme teaching you to smile more and network better. This is an intensive, bespoke, three-month engagement that serves as your "express ticket" to transformation.<br/><br/>
            Achieve in three months what might otherwise take years of trial and error.
          </p>
          <div className="mb-4">
            <div className="text-lg font-bold mb-2" style={{ color: GOLD, fontFamily: 'PT Serif, serif' }}>This programme is for:</div>
            <ul className="space-y-4 text-base md:text-lg break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
              <li>Potential high-performing men who feel stuck despite their ability for success</li>
              <li>Executives facing significant challenges who need rapid, sustainable change</li>
              <li>Leaders ready to stop living someone else's life and start living their own</li>
              <li>Men who are serious about transformational change and ready to do the work</li>
              <li>Those who want to thrive in the AI era, not just survive it</li>
            </ul>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 w-full flex items-center justify-center relative min-h-[220px] md:min-h-[320px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden z-1">
            <img src="/assets/hero_silhouette.jpeg" alt="Forest" className="w-full h-full object-cover blur-md scale-105" />
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center" />
        </motion.div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="py-16 w-full relative overflow-visible">
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            The Three Pillars of Male Excellence
          </motion.h2>
          <div className="flex flex-col gap-8">
            {/* Leader Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl border border-[#D4AF37] bg-black overflow-visible">
              <div className="flex-shrink-0 w-full md:w-1/3 flex items-stretch">
                <img src={archetypeLeader} alt="Leader Archetype" className="object-cover w-full h-full min-h-[160px]" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 md:p-10 text-left break-words overflow-x-hidden">
                <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 1: Leadership & Capability (The Leader)</div>
                <ul className="space-y-3 mb-2 text-base md:text-lg" style={{ fontFamily: 'League Spartan, sans-serif', color: '#fff' }}>
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
              </div>
            </motion.div>
            {/* Provider Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="flex flex-col md:flex-row-reverse items-stretch rounded-2xl shadow-xl border border-[#D4AF37] bg-black overflow-visible">
              <div className="flex-shrink-0 w-full md:w-1/3 flex items-stretch">
                <img src={archetypeProvider} alt="Provider Archetype" className="object-cover w-full h-full min-h-[160px]" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 md:p-10 text-left break-words overflow-x-hidden">
                <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 2: Wealth & Provision (The Provider)</div>
                <ul className="space-y-3 mb-2 text-base md:text-lg" style={{ fontFamily: 'League Spartan, sans-serif', color: '#fff' }}>
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
              </div>
            </motion.div>
            {/* Lover Card */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="flex flex-col md:flex-row items-stretch rounded-2xl shadow-xl border border-[#D4AF37] bg-black overflow-visible">
              <div className="flex-shrink-0 w-full md:w-1/3 flex items-stretch">
                <img src={archetypeLover} alt="Lover Archetype" className="object-cover w-full h-full min-h-[160px]" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6 md:p-10 text-left break-words overflow-x-hidden">
                <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>Pillar 3: Relationships & Connection (The Lover)</div>
                <ul className="space-y-3 mb-2 text-base md:text-lg" style={{ fontFamily: 'League Spartan, sans-serif', color: '#fff' }}>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promise Section - Transformational Change, Not Surface Fixes */}
      <section id="promise" className="min-h-screen h-screen w-full flex items-center justify-center px-4 md:px-6 gap-8">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-1 flex flex-col justify-center max-w-xl z-10 text-left break-words overflow-x-hidden">
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-6 break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
              Transformational Change, Not Surface Fixes
            </motion.h2>
            <div className="w-32 h-1 mb-8 rounded-full bg-gradient-to-r from-[#D4E04F] to-[#A67C52] shadow-lg" />
            <p className="text-lg md:text-xl text-white mb-8 break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              We don't just solve surface-level problems. We rewire the underlying patterns of thinking and behaviour that created them, opening up a new sense of self and possibility.
            </p>
            <ul className="space-y-4 text-base md:text-lg break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
              <li><span className="text-[#D4E04F] font-bold">Speed & Intensity:</span> Achieve profound transformation in 90 days through intensive, focused work on what matters most.</li>
              <li><span className="text-[#D4E04F] font-bold">Bespoke Solutions:</span> The program is entirely tailored to you. We diagnose your specific problems and co-create a direct path to the solutions.</li>
              <li><span className="text-[#D4E04F] font-bold">Vision & Strategy:</span> You will leave with a powerful, grounded vision for your future and a clear, actionable pathway to achieve it.</li>
              <li><span className="text-[#D4E04F] font-bold">Future-Ready Leadership:</span> Skills that complement, don't compete with, AI capabilities, positioning you as irreplaceable in a rapidly changing world.</li>
              <li><span className="text-[#D4E04F] font-bold">Authentic Confidence:</span> Confidence rooted in self-knowledge, not external validation, that allows you to lead authentically rather than perform constantly.</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center h-full z-10">
            <img src={phoenixImg} alt="Phoenix" className="object-contain w-full max-w-2xl h-[40vh] md:h-[60vh] drop-shadow-2xl" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
            <img src={keyImg} alt="Key Symbol" className="w-full max-w-3xl opacity-10 grayscale blur-sm" />
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="structure" className="py-16 max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 flex flex-col items-start justify-center z-10 max-w-xl break-words overflow-x-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            Program Structure: 90-Day Intensive Transformation
          </h2>
          <ul className="space-y-6 text-lg md:text-xl break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
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
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 w-full flex items-center justify-center z-10">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto flex flex-col items-center">
            <div className="flex flex-col items-center w-full">
              <div className="mb-8">
                <div className="text-2xl font-bold text-[#D4E04F] mb-2" style={{ fontFamily: 'PT Serif, serif' }}>90-Day Timeline</div>
                <div className="w-16 h-1 rounded-full mx-auto bg-gradient-to-r from-[#D4E04F] to-[#A67C52] shadow-lg" />
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
      <section id="pricing" className="min-h-screen h-screen py-16 max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col justify-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-6 text-center gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
          Choose Your Investment Plan
        </motion.h2>
        <div className="text-base text-center mb-12 break-words overflow-x-hidden" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', maxWidth: 700, margin: '0 auto' }}>
          Limited to 12 clients annually. Applications reviewed carefully to ensure mutual fit and maximum transformation potential.
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-6 items-stretch justify-center">
          {/* Full Payment Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-black rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative pt-14 p-10 border-2 gold-foil-border shadow-lg" style={{ borderRadius: 11, minHeight: 520, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22`, display: 'flex' }}>
            {/* Best Value label only on this card */}
            <div className="absolute left-0 top-0 w-full flex justify-center" style={{ transform: 'translateY(-50%)', zIndex: 2 }}>
              <div className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-bold text-base shadow gold-gradient-text" style={{ fontFamily: 'League Spartan, sans-serif', letterSpacing: '0.08em', boxShadow: `0 2px 12px ${GOLD}33`, opacity: 1 }}>Best Value</div>
            </div>
            <div className="text-lg font-bold mb-2 text-center gold-gradient-text" style={{ fontFamily: 'League Spartan, sans-serif', paddingTop: 8 }}>Full Payment</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'PT Serif, serif' }}>£4,999</div>
            <div className="text-lg mb-4 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in full for the complete 90-day transformation</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full shimmer-on-hover" style={{ background: `url(${goldFoil}) center/cover no-repeat, linear-gradient(90deg, #D4AF37 0%, #A67C52 100%)`, color: BG_BLACK, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}33`, border: `2px solid ${GOLD}` }} onClick={() => scrollToSection('application')}>APPLY NOW</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £4,999</div>
            {/* Accordion for Why This Investment Level */}
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-full">
                <AccordionTrigger className="text-lg font-bold" style={{ color: BRASS, fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
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
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="bg-black rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10 border-2 gold-foil-border shadow-lg" style={{ borderRadius: 11, minHeight: 520, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22`, display: 'flex' }}>
            <div className="text-lg font-bold mb-2 text-center gold-gradient-text" style={{ fontFamily: 'League Spartan, sans-serif', paddingTop: 8 }}>Split in 2</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'PT Serif, serif' }}>£2,600 x 2</div>
            <div className="text-lg mb-4 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in two installments across the programme</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full shimmer-on-hover" style={{ background: `url(${goldFoil}) center/cover no-repeat, linear-gradient(90deg, #D4AF37 0%, #A67C52 100%)`, color: BG_BLACK, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}33`, border: `2px solid ${GOLD}` }} onClick={() => scrollToSection('application')}>APPLY NOW</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £5,200</div>
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-2">
                <AccordionTrigger className="text-lg font-bold" style={{ color: BRASS, fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
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
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="bg-black rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10 border-2 gold-foil-border shadow-lg" style={{ borderRadius: 11, minHeight: 520, boxShadow: `0 8px 40px ${GOLD}33, 0 2px 16px ${BRASS}22`, display: 'flex' }}>
            <div className="text-lg font-bold mb-2 text-center gold-gradient-text" style={{ fontFamily: 'League Spartan, sans-serif', paddingTop: 8 }}>Monthly Plan</div>
            <div className="text-3xl font-bold mb-2 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'PT Serif, serif' }}>£1,750 x 3</div>
            <div className="text-lg mb-4 text-center" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay in three monthly installments</div>
            <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full shimmer-on-hover" style={{ background: `url(${goldFoil}) center/cover no-repeat, linear-gradient(90deg, #D4AF37 0%, #A67C52 100%)`, color: BG_BLACK, fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto', boxShadow: `0 0 16px 2px ${GOLD}33`, border: `2px solid ${GOLD}` }} onClick={() => scrollToSection('application')}>APPLY NOW</button>
            <div className="text-base font-bold text-center mt-6" style={{ color: TEXT_LIGHT, fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Total: £5,250</div>
            <Accordion type="single" collapsible className="w-full mt-6">
              <AccordionItem value="why-3">
                <AccordionTrigger className="text-lg font-bold" style={{ color: BRASS, fontFamily: 'PT Serif, serif' }}>Why This Investment Level?</AccordionTrigger>
                <AccordionContent className="text-base" style={{ fontFamily: 'League Spartan, sans-serif', color: TEXT_LIGHT }}>
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
        <div className="text-sm text-muted-foreground text-center mt-2 break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif', color: '#A67C52' }}>
          We accept most major cards. Secure checkout and support included.
        </div>
      </section>

      {/* Application Section */}
      <section id="application" className="py-16 max-w-7xl mx-auto w-full px-4 md:px-6 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full max-w-2xl mx-auto glass rounded-2xl p-6 md:p-12 flex flex-col items-center shadow-xl border border-white/10 backdrop-blur-md bg-black/80 break-words overflow-x-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
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
          <div className="text-xs text-center text-white/70 mt-6 break-words overflow-x-hidden" style={{ fontFamily: 'League Spartan, sans-serif' }}>
            Your information is kept strictly confidential and will only be used to contact you about your application. We respect your privacy.
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-16 w-full relative flex flex-col items-center justify-center overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <img src={keyImg} alt="Key Symbol" className="w-full max-w-2xl opacity-20 grayscale blur-sm" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center break-words overflow-x-hidden">
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-8 text-center gold-gradient-text break-words overflow-x-hidden" style={{ fontFamily: 'PT Serif, serif', color: GOLD }}>
            "The question isn't whether the world will change around you—it's whether you'll change with it, or be left behind."
          </p>
          <button className="btn-primary text-xl px-8 py-6 font-bold mt-2 rounded-lg gold-foil-btn bg-black text-gold font-serif min-h-16 rounded-lg shadow-lg border-2 border-gold relative overflow-hidden" onClick={() => scrollToSection('application')}>
            Start My Application
          </button>
        </motion.div>
      </section>

      {/* Footer Section (for consistency) */}
      <CoachingFooter />

      {/* Gold-foil CSS helpers scoped to this file */}
      <style>{`
        .gold-gradient-text {
          background: linear-gradient(90deg, #D4AF37 0%, #A67C52 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .gold-foil-border {
          border-width: 2px;
          border-style: solid;
          border-image-source: url(${goldFoil});
          border-image-slice: 30;
          border-image-width: 2px;
          border-image-repeat: round;
        }
        .gold-foil-divider {
          border: 0;
          border-top: 2px solid transparent;
          border-image: url(${goldFoil}) 30 round;
          margin: 2rem 0;
        }
        .gold-foil-btn {
          border-width: 2px;
          border-style: solid;
          border-image-source: url(${goldFoil});
          border-image-slice: 30;
          border-image-width: 2px;
          border-image-repeat: round;
          background: linear-gradient(90deg, #D4AF37 0%, #A67C52 100%);
          color: #111;
          transition: background 0.2s, color 0.2s;
        }
        .gold-foil-btn:hover, .gold-foil-btn:focus {
          background: #000;
          color: #D4AF37;
          outline: none;
          box-shadow: 0 0 0 2px #D4AF37;
        }
        .gold-foil-outline-btn {
          background: rgba(0,0,0,0.85);
          color: #D4AF37;
          border-width: 2px;
          border-style: solid;
          border-image-source: url(${goldFoil});
          border-image-slice: 30;
          border-image-width: 2px;
          border-image-repeat: round;
          transition: background 0.2s, color 0.2s;
        }
        .gold-foil-outline-btn:hover, .gold-foil-outline-btn:focus {
          background: linear-gradient(90deg, #D4AF37 0%, #A67C52 100%);
          color: #111;
          outline: none;
        }
        .gold-foil-diagonal {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 60px;
          background: linear-gradient(120deg, rgba(212,175,55,0.10) 0%, rgba(166,124,82,0.10) 100%);
          opacity: 0.7;
          pointer-events: none;
          z-index: 2;
        }
        ::-webkit-scrollbar {
          width: 10px;
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: ${GOLD};
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${GOLD};
        }
        /* Responsive fixes for mobile */
        @media (max-width: 600px) {
          .text-5xl, .text-6xl { font-size: 2rem !important; }
          .text-3xl, .text-4xl { font-size: 1.3rem !important; }
          .text-2xl { font-size: 1.1rem !important; }
          .py-32, .py-24, .py-20 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
          .px-6, .px-4 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
          .gap-12, .gap-14, .gap-10 { gap: 1.2rem !important; }
          .rounded-2xl { border-radius: 0.8rem !important; }
          .p-10, .p-12, .p-16 { padding: 1rem !important; }
          .min-h-[320px], .min-h-[420px], .min-h-[220px], .min-h-[520px] { min-height: 120px !important; }
          .max-w-7xl, .max-w-5xl, .max-w-xl, .max-w-2xl, .max-w-3xl { max-width: 100vw !important; }
          .w-full { width: 100% !important; }
          .overflow-x-hidden { overflow-x: hidden !important; }
          .flex-row, .md\:flex-row, .md\:flex-row-reverse { flex-direction: column !important; }
          .items-center, .justify-center { align-items: stretch !important; justify-content: flex-start !important; }
          .text-center, .text-left { text-align: left !important; }
          .btn-primary, .gold-foil-btn { font-size: 1rem !important; padding: 0.75rem 1.2rem !important; min-height: 44px !important; }
          .glass, .glass-light { padding: 1rem !important; }
          .border, .border-2 { border-width: 1px !important; }
          .shadow-xl, .shadow-lg, .drop-shadow-lg { box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important; }
          .overflow-visible { overflow: visible !important; }
          .vertical-dot-nav { display: none !important; }
          .word-break, .overflow-wrap { word-break: break-word !important; overflow-wrap: break-word !important; }
        }
      `}</style>

      {/* Vertical dot navigation (updated) */}
      <div className="vertical-dot-nav fixed right-8 top-1/2 z-50 flex flex-col items-center gap-3" style={{ transform: 'translateY(-50%)', opacity: 0.7 }}>
        <button aria-label="Scroll Up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-2 p-2 rounded-full bg-black/60 border border-gold-500 hover:bg-gold-700 transition-all" style={{ color: GOLD, borderColor: GOLD, fontSize: 16, opacity: 0.6 }}>&uarr;</button>
        {sectionIds.map((id, idx) => (
          <button key={id} aria-label={`Go to section ${idx+1}`} onClick={() => scrollToSection(id)}
            className="my-1 w-3 h-3 rounded-full border-2 transition-all"
            style={{
              borderColor: GOLD,
              background: activeSection === id ? GOLD : 'transparent',
              opacity: activeSection === id ? 1 : 0.35,
              boxShadow: activeSection === id ? `0 0 8px 2px ${GOLD}55` : 'none',
              outline: 'none',
              transition: 'background 0.2s, opacity 0.2s, box-shadow 0.2s',
            }}
          />
        ))}
        <button aria-label="Scroll Down" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="mt-2 p-2 rounded-full bg-black/60 border border-gold-500 hover:bg-gold-700 transition-all" style={{ color: GOLD, borderColor: GOLD, fontSize: 16, opacity: 0.6 }}>&darr;</button>
      </div>
    </div>
  );
}

function CoachingFooter() {
  const socials = [
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@NoMoreMrNiceGuyUK' },
    { icon: <SiX />, url: 'https://x.com/NMMNGS' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/NMMNGS/' },
    { icon: <FaMeetup />, url: 'https://www.meetup.com/uk-no-more-mr-nice-guy/' },
    { icon: <FaWhatsapp />, url: 'https://Nmmng.co/NMMNG-General-Whatsapp' },
    { icon: <FaEnvelope />, url: 'mailto:enquire@nomoremrniceguy.co' },
    { icon: <FaGlobe />, url: 'https://nomoremrniceguy.co.uk' },
  ];
  return (
    <footer className="py-10 md:py-16 border-t border-border/20 relative z-10 bg-black" style={{
      position: 'relative',
      background: `url(${blackBg}), url(${goldFoil}), url(${bootcampFooter}) center bottom/cover no-repeat`,
      backgroundBlendMode: 'overlay',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, filter: 'blur(6px)', pointerEvents: 'none' }} />
      <div className="absolute top-0 left-0 w-full h-3" style={{ background: `url(${goldFoil}) center/cover no-repeat`, opacity: 0.7, zIndex: 2 }} />
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 md:gap-6 relative z-10 text-center">
        <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="mb-4 flex items-center justify-center cursor-pointer">
          <img src={nmmngLogo} alt="NMMNG Logo" className="drop-shadow-lg hover:scale-105 transition-transform duration-300" style={{ width: 120, height: 120, objectFit: 'contain' }} />
        </a>
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8 mb-2 w-full">
          <a href="/bootcamp" className="text-primary hover:underline cursor-pointer text-base md:text-lg font-bold" style={{ color: GOLD }}>NMMNG® Bootcamp</a>
          <a href="/lover" className="text-primary hover:underline cursor-pointer text-base md:text-lg font-bold" style={{ color: GOLD }}>Authentic Lover Blueprint</a>
          <a href="/coaching" className="text-primary hover:underline cursor-pointer text-base md:text-lg font-bold" style={{ color: GOLD }}>Executive Coaching</a>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mb-4 w-full">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: GOLD, fontSize: 24, transition: 'color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 mb-2 w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-xs md:text-sm mb-1 items-center justify-center w-full">
            <a href="https://www.nomoremrniceguy.co.uk/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary" style={{ color: GOLD }}>Terms & Conditions</a>
            <a href="https://www.nomoremrniceguy.co.uk/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary" style={{ color: GOLD }}>Privacy Policy</a>
          </div>
          <div className="text-[11px] md:text-xs text-center" style={{ color: GOLD, fontFamily: 'League Spartan, sans-serif', fontWeight: 500 }}>
            © 2025 No More Mr. Nice Guy®️ is a registered trademark and trading name of RA & Associates Limited
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-[10px] md:text-[11px] text-center" style={{ color: GOLD, fontFamily: 'League Spartan, sans-serif', fontWeight: 400, marginTop: 4 }}>
            Vibe coded by <a href="https://respira.cafe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Respira</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CoachingLanding; 