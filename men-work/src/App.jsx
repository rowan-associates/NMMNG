// Trigger redeploy: no code changes.
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Shield, Target, Users, Heart, Brain, Compass, Star, Quote, MapPin, ArrowRight, Play, X } from 'lucide-react'
import bootcampHero from './assets/bootcamp.png'
import heroSilhouette from './assets/hero_silhouette.jpeg'
import rowanAndRobert from './assets/robert-rowan.avif'
import workshopScene1 from './assets/CF3DF794-1254-4708-90B7-0AF5F2F10CEB_1_102_o.jpeg'
import workshopScene2 from './assets/49BD1805-E930-459F-B81D-183FD9893845_1_102_o.jpeg'
import workshopScene3 from './assets/F45DABA0-9D05-40A4-8673-6EEF417795C1_1_105_c.jpeg'
import workshopScene4 from './assets/5C932074-2F6F-477A-92B3-0E12B0FA4497_1_102_o.jpeg'
import groupWorkshop from './assets/1EDAD776-35D7-4524-BC4D-57222539E280_1_102_o.jpeg'
import brotherhoodImage from './assets/0fbac460-657d-4ced-a33b-23d3e90c68c2.png'
import transformationImage from './assets/c62c282-e402-71bf-a78b-474e3e43747f_ChatGPT_Image_Jun_6_2025_02_03_52_AM.png'
import venueImage from './assets/venue_conference_room.png'
import quoteIcon from './assets/DlaV2Rk1Qg2GdhkpshNw_icon-quote.png'
import nmmngLogo from './assets/nmmng-logo.png'
import memberDiscountImage from './assets/venue_conference_room.png'
import nmmngCommunity from './assets/nmmng-community.png'
import bootcampFooter from './assets/bootcamp-footer.avif'
import backToTopImg from './assets/back-to-top.webp'
import './App.css'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaMeetup, FaTiktok, FaLinkedin, FaWhatsapp, FaEnvelope, FaGlobe, FaFire, FaRocket, FaBullseye, FaBook, FaMicrophone } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import lionIcon from './assets/nmmng-logo.png'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { motion } from 'framer-motion'
import loverHero from './assets/lover-hero.webp'
import loverPhases from './assets/lover-phases.webp'
import polarityImg from './assets/polarity-transparent.webp'
import { FaUsers, FaChalkboardTeacher, FaUserCheck, FaTasks, FaComments, FaHandshake, FaVideo } from 'react-icons/fa'
import menBg from './assets/men.webp'
import CoachingLanding from './CoachingLanding.jsx'
import Analytics from './components/Analytics.jsx'
import LinkInBio from './LinkInBio'

// Socials array (move to file scope for reuse)
const socials = [
  { icon: <FaYoutube />, url: 'https://www.youtube.com/@NoMoreMrNiceGuyUK' },
  { icon: <SiX />, url: 'https://x.com/NMMNGS' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/NMMNGS/' },
  { icon: <FaMeetup />, url: 'https://www.meetup.com/uk-no-more-mr-nice-guy/' },
  { icon: <FaWhatsapp />, url: 'https://Nmmng.co/NMMNG-General-Whatsapp' },
  { icon: <FaEnvelope />, url: 'mailto:enquire@nomoremrniceguy.co' },
  { icon: <FaGlobe />, url: 'https://nomoremrniceguy.co.uk' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  // Button background color (same as current button background)
  const buttonBg = '#B7C93B';
  const buttonTextColor = '#0D212D';
  const buttonLineHeight = 1.18;
  const iconCircleStyle = {
    background: buttonBg,
    borderRadius: '50%',
    width: 56,
    height: 56,
    minWidth: 56,
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const whiteIconStyle = { color: '#fff', width: 28, height: 28 };

  const buttons = [
    {
      text: 'No More Mr. Nice Guy® Community',
      url: 'https://nomoremrniceguy.co.uk',
      lion: true,
    },
    {
      text: 'NMMNG® Bootcamp, Oxford UK',
      url: 'https://join.nmmng.co/bootcamp',
      lion: true,
    },
    {
      text: 'NMMNG® The Authentic Lover Blueprint',
      url: 'https://join.nmmng.co/lover',
      lion: true,
    },
    {
      text: 'Executive Coaching',
      url: '/coaching',
      icon: <FaBook style={whiteIconStyle} />, whiteIcon: true,
    },
    {
      text: 'NMMNG® WhatsApp General Discussions Group',
      url: 'https://Nmmng.co/NMMNG-General-Whatsapp',
      icon: <FaWhatsapp style={whiteIconStyle} />, whiteIcon: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-12 relative overflow-hidden">
      {/* Background image layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: "url('/linkinbio-background.webp') center/cover no-repeat",
        opacity: 0.22,
        pointerEvents: 'none',
      }} />
      <div className="glass card-modern flex flex-col items-center max-w-md w-full mx-auto px-4 pt-10 pb-8 shadow-xl animate-fade-in-up relative z-10" style={{ background: 'rgba(15,31,45,0.68)', borderRadius: 24, boxShadow: '0 8px 40px rgba(0,0,0,0.35)', border: '1.5px solid #1A1A1A', marginTop: '60px', marginBottom: '60px', backdropFilter: 'blur(12px)' }}>
        <div className="flex flex-col items-center mb-8">
          <span className="rounded-full border-4 border-[#D4E04F] bg-[#0F4F40] flex items-center justify-center mb-4" style={{ width: 90, height: 90 }}>
            <FaFire size={48} color="#D4E04F" />
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center" style={{ color: '#D4E04F', fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>RECLAIM YOUR AUTHENTIC POWER</h1>
          <div className="text-base md:text-lg text-muted-foreground mb-4 text-center" style={{ color: '#F5F5F5', fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>
            Links to real transformation, not surface fixes.
          </div>
          <div className="linkinbio-socials" style={{ marginBottom: 8 }}>
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: buttonBg, fontSize: 32, transition: 'color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full items-center mb-6">
          {buttons.map((btn, i) => (
            <a key={btn.text} href={btn.url} target="_blank" rel="noopener noreferrer" className="linkinbio-btn w-full" style={{ fontSize: '1.25rem', fontWeight: 700, background: buttonBg, color: buttonTextColor, lineHeight: buttonLineHeight }}>
              <span className="icon" style={btn.lion ? { background: '#111', border: '2px solid #D4E04F', display: 'flex', alignItems: 'center', justifyContent: 'center' } : btn.whiteIcon ? { ...iconCircleStyle, background: '#0F4F40', border: '2px solid #D4E04F' } : iconCircleStyle}>
                {btn.lion ? <img src={lionIcon} alt="Lion Icon" style={{ width: 36, height: 36, objectFit: 'contain', filter: 'brightness(1.2)' }} /> : btn.icon}
              </span>
              <span style={{ lineHeight: buttonLineHeight }}>{btn.text}</span>
            </a>
          ))}
        </div>
        <div className="text-xs text-muted-foreground text-center mt-2" style={{ color: '#D4E04F', fontFamily: 'League Spartan, sans-serif', fontWeight: 500 }}>
          Trusted by 10,000+ men in 50+ countries
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LinkInBio />} />
        <Route path="/bootcamp" element={<BootcampLanding />} />
        <Route path="/lover" element={<LoverLanding />} />
        <Route path="/coaching" element={<CoachingLanding />} />
      </Routes>
    </>
  )
}

function BootcampLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const forestBgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setShowBackToTop(window.scrollY > 300)
      // Parallax effect for forest background
      if (forestBgRef.current) {
        const offset = window.scrollY * 0.25
        forestBgRef.current.style.backgroundPositionY = `-${offset}px`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Unshakeable Core Confidence",
      description: "Access the natural self-assurance that doesn't depend on others' approval or external validation",
      delay: "0ms"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Relationship Mastery",
      description: "Learn how to create the intimate partnership you crave, with the polarity and passion that keeps love alive",
      delay: "100ms"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Sexual Authenticity",
      description: "Understand how to embrace your desires without shame and express your sexuality with confidence and respect",
      delay: "200ms"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Emotional Intelligence",
      description: "Understand and express your feelings powerfully without losing yourself in them",
      delay: "300ms"
    },
    {
      icon: <Compass className="w-12 h-12 text-primary" />,
      title: "Boundary Setting",
      description: "Learn to say no with strength and yes with intention, protecting your energy and values",
      delay: "400ms"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Brotherhood Connection",
      description: "Build meaningful relationships with other men based on truth, not performance",
      delay: "500ms"
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Purpose and Direction",
      description: "Cut through the noise of an AI-dominated world to find your unique contribution and path forward",
      delay: "600ms"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
      title: "Radical Self-Acceptance",
      description: "Embrace who you are completely, flaws and all, as the foundation for genuine transformation",
      delay: "700ms"
    }
  ]

  const testimonials = [
    {
      quote: "As a coach, speaker, and leader, Rowan is in the top tier of professionals and a breath of fresh air from the same old stale routines you encounter in personal development.",
      author: "Dr. Robert Glover",
      title: "Author of \"No More Mr. Nice Guy\"",
      featured: true
    },
    {
      quote: "This weekend had an immensely positive and transformative impact on my life. I'm sure I'll be reaping the benefits for years to come. If you're a suffering nice guy, just do it—you won't regret it.",
      author: "Workshop Participant",
      title: ""
    },
    {
      quote: "I expected macho-man teachings, but instead received love and acceptance I'd never experienced. Being embraced by men who saw all my darkness and accepted me anyway changed everything. It's about truly embracing yourself.",
      author: "Workshop Participant",
      title: ""
    },
    {
      quote: "Transformationally life-changing! So much information, so many areas covered, and sharing it with a brotherhood on the same journey was the kickstarter for a better life.",
      author: "Workshop Participant",
      title: ""
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navigation */}
      {isScrolled && (
        <nav className="nav-sticky">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="flex items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
                <img src={nmmngLogo} alt="NMMNG Bootcamp Logo" className="h-12 w-auto sm:h-14 mr-0 sm:mr-4" style={{ position: 'relative', top: 0, left: 0, zIndex: 11, background: 'none' }} />
              </a>
              <h2 className="text-lg sm:text-xl font-bold nmmng-glow text-center sm:text-left" style={{ marginLeft: 0, zIndex: 1, lineHeight: 1.1, color: '#fff', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>NMMNG Bootcamp</h2>
            </div>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="btn-primary w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-4 mt-2 sm:mt-0"
              style={{ minWidth: 0 }}
            >
              SECURE YOUR PLACE
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section id="hero" ref={bootcampHeroRef} className="relative w-full min-h-screen flex items-center justify-center hero-bg overflow-hidden" style={{ minHeight: '100vh', height: '100svh' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 bg-cover bg-center z-1" style={{ backgroundImage: `url(${bootcampHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black z-2" />
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text-primary" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>
            No More Mr. Nice Guy® Bootcamp
          </h1>
          <div className="mb-4 text-2xl md:text-3xl" style={{ fontFamily: 'PT Serif, serif', fontWeight: 500, color: '#D4E04F' }}>
            Summer 2025 🇬🇧 UK Edition
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground" style={{ fontFamily: 'PT Serif, serif', fontWeight: 500, lineHeight: 1.2 }}>
            A Transformational Weekend Retreat for <span className="font-bold" style={{ fontFamily: 'PT Serif, serif' }}>Men Ready to Lead</span>
          </h2>
          <div className="mb-4">
            <span style={{ color: '#D4E04F', fontSize: '22px', letterSpacing: '0.04em', fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>
              6–7th September ✴️ Oxford, UK – Limited Spots Available
            </span>
          </div>
          <Button onClick={() => scrollToSection('pricing')} className="btn-primary w-full md:w-auto text-base md:text-xl px-6 md:px-10 py-3 md:py-4 mt-2 md:mt-0" style={{ minWidth: 0 }}>
            SECURE YOUR PLACE
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text-primary">
              What does it mean to be a man in 2025?
            </h2>
          </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="text-body-large space-y-6">
                  <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '1.375rem' }}>
                    The world is shifting beneath our feet. AI is reshaping careers overnight. Traditional paths to success are disappearing. The very definition of masculinity is being questioned and redefined. Meanwhile, we're still expected to have all the answers—to be providers, protectors, and leaders in a world that's changing faster than ever.
                  </p>
                  <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '1.375rem' }}>
                    Yet most of us were never taught how to navigate this complexity. We learned to be "nice guys"—to please others, avoid conflict, and hide our true needs. We adapted by putting everyone else first, secretly hoping for approval and validation in return.
                  </p>
                </div>
                <div className="max-w-7xl mx-auto w-full px-6">
                  <div className="glass-light rounded-2xl p-8">
                    <p className="text-xl font-semibold text-primary mb-4">
                      But that survival strategy is failing us.
                    </p>
                    <p className="text-muted-foreground">
                      In an era where machines can outthink us and social media amplifies every mistake, the old playbook of people-pleasing and conflict avoidance isn't just limiting—it's dangerous.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-lg text-muted-foreground">
                    The cost of staying stuck has never been higher.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={transformationImage} 
                  alt="Man in transformation" 
                  className="w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text">
              THE BREAKTHROUGH WEEKEND<br />THAT CHANGES EVERYTHING
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-body-large text-muted-foreground">
                This isn't another self-help seminar. This is a deep dive into reclaiming your authentic masculine power—the kind that thrives in uncertainty, leads with integrity, and creates the life you actually want.
              </p>
              <p className="text-body-large text-muted-foreground">
                Over one transformational weekend, you'll join a brotherhood of men committed to breaking free from the conditioning that's been holding them back. Together, we'll dismantle the "nice guy" programming and rebuild from your core.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-subheading text-center mb-16 gradient-text-primary">What You'll Discover:</h3>
            <div className="bento-grid max-w-7xl mx-auto">
              {benefits.map((benefit, index) => {
                // Animation class logic
                let iconAnim = 'icon-float';
                if (benefit.title === 'Relationship Mastery') iconAnim = 'icon-beat';
                if (benefit.title === 'Sexual Authenticity') iconAnim = 'icon-zoom';
                if (benefit.title === 'Emotional Intelligence') iconAnim = 'icon-rotate';
                return (
                  <div
                    key={index}
                    className={`bento-item${index === 7 ? ' lg:col-span-3' : ''} group`}
                    style={{ animationDelay: benefit.delay }}
                  >
                    <div className="flex flex-col items-center" style={{ minHeight: 110, justifyContent: 'flex-start' }}>
                      <div className={`mb-6 icon-anim ${iconAnim} group-hover:active-anim`}>
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: 'PT Serif, serif', fontSize: '33px', fontWeight: 700 }}>
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-center leading-relaxed" style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '22px', fontWeight: 400 }}>
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-32 nmmng-not-for-everyone">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text-primary">
              THIS INTENSIVE IS NOT FOR EVERYONE
            </h2>
          </div>
                  <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <Card className="card-modern bg-destructive/10 border-destructive/30 h-full">                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-8 text-destructive">Don't attend if you:</h3>
                  <ul className="space-y-6 text-lg">
                    <li className="flex items-start gap-4">
                      <X className="w-6 h-6 text-[#D4E04F] mt-1 flex-shrink-0" />
                      <span>Think you've got it all figured out</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <X className="w-6 h-6 text-[#D4E04F] mt-1 flex-shrink-0" />
                      <span>Are looking for a quick fix or magic bullet</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <X className="w-6 h-6 text-[#D4E04F] mt-1 flex-shrink-0" />
                      <span>Aren't willing to look honestly at your patterns</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <X className="w-6 h-6 text-[#D4E04F] mt-1 flex-shrink-0" />
                      <span>Expect transformation without doing the work</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
              <div>
                <Card className="card-modern bg-primary/10 border-primary/30 h-full">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold mb-8 text-primary">This is perfect for you if you:</h3>
                  <ul className="space-y-6 text-lg">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Know something needs to change but aren't sure how</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Feel stuck in patterns that no longer serve you</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Want genuine connection and purpose in your life</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Are ready to do the deep work of real transformation</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Recognize that the old ways of being a man aren't working in today's world</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>If you're ready to step on the path of personal growth and development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="max-w-7xl mx-auto w-full px-6">
              <div className="glass rounded-2xl p-8">
                <p className="text-body-large text-muted-foreground">
                  This process requires courage, vulnerability, and commitment. If that excites you, you're in the right place. If it terrifies you but you know you need it, you're definitely in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text">
              YOUR GUIDE THROUGH THE TRANSFORMATION
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col items-center md:items-start gap-6 w-full">
                <div className="glass-light rounded-2xl p-6 w-full">
                  <div className="font-bold text-lg mb-1" style={{ color: '#D4E04F', fontFamily: 'League Spartan, sans-serif' }}>
                    Rowan Andrews with Dr. Robert Glover
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">Author of "No More Mr. Nice Guy"</div>
                  <img src={rowanAndRobert} alt="Rowan and Dr. Robert Glover" className="rounded-2xl w-full object-cover" style={{ aspectRatio: '4/5', background: '#0D212D', objectFit: 'cover' }} />
                </div>
              </div>
              <div className="flex flex-col gap-8 w-full">
                <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  Rowan Andrews has spent over twelve years guiding men through this exact journey. After his own awakening from the "nice guy" trap following his marriage breakdown, he trained with Dr. Robert Glover (author of "No More Mr. Nice Guy"), spiritual teachers David Deida and Rupert Spira, and created one of the UK's most successful men's groups.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  As one of Dr. Glover's close associates and an endorsed facilitator, Rowan brings both professional expertise and lived experience to this work. He understands the challenges modern men face because he's navigated them himself.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  Rowan is joined by Matt and Kev, who have spent the last eight years developing their own expertise and now bring their unique experience to support men in this workshop.
                </p>
                <div className="glass rounded-2xl p-6 mt-4 w-full">
                  <Quote className="w-8 h-8 mb-2 text-primary" />
                  <p className="italic text-lg mb-2">"To become the man you were born to be requires taking full responsibility for where you are today and choosing who you want to become tomorrow."</p>
                  <div className="font-bold text-primary text-lg">- Rowan Andrews</div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mt-2" style={{ fontFamily: 'League Spartan, sans-serif' }}>
                  Rowan is supported by Matt and Kev, who have been trained over the last eight years and walked their own path and bring their own experience to support men in the workshop.
                </p>
              </div>
            </div>
            {/* Workshop Gallery */}
            <div className="mt-24">
              <h3 className="text-subheading text-center mb-12 gradient-text-primary">Real Workshop Experiences</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { img: groupWorkshop, caption: "Collective growth and shared experiences" },
                  { img: workshopScene2, caption: "Guided exercises for personal transformation" },
                  { img: workshopScene3, caption: "Brotherhood support and connection" },
                  { img: workshopScene1, caption: "Authentic conversations and breakthrough moments" }
                ].map((scene, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={scene.img} 
                        alt={scene.caption}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm text-white font-medium">{scene.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text">
              WHAT PARTICIPANTS SAY
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card className={`testimonial-card h-full${testimonial.featured ? ' border-primary/50' : ''}`}>
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic mb-6 text-muted-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer>
                      <div className="font-semibold text-primary">{testimonial.author}</div>
                      {testimonial.title && (
                        <div className="text-sm text-muted-foreground mt-1">{testimonial.title}</div>
                      )}
                    </footer>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="max-w-7xl mx-auto w-full px-6 flex justify-center">
              <div className="glass rounded-2xl p-6 text-center w-full">
                <p className="text-lg font-medium text-white">
                  Join a brotherhood of men committed to authentic transformation and mutual support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url(${transformationImage})`,backgroundSize: 'cover',backgroundPosition: 'center',backgroundAttachment: 'fixed'}}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-headline mb-12 gradient-text">
              THE TIME IS NOW
            </h2>
            <div className="space-y-8 text-body-large">
              <p className="text-muted-foreground leading-relaxed">
                The world isn't slowing down. Technology will continue disrupting everything we thought we knew about work, relationships, and success. You can either adapt from a place of authentic strength or continue reacting from old patterns of fear and people-pleasing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The men who thrive in the coming decades won't be the ones who resist change—they'll be the ones who know themselves deeply enough to navigate any storm.
              </p>
              <div className="glass rounded-2xl p-8 my-12 max-w-7xl mx-auto w-full px-6">
                <p className="text-2xl font-bold gradient-text mb-4">
                  Your journey to authentic masculine power starts with a single weekend.
                </p>
                <p className="text-xl font-semibold text-white">
                  Are you ready to break free?
                </p>
              </div>
              <Button onClick={() => scrollToSection("pricing")} className="btn-primary text-xl px-12 py-6 animate-pulse-glow">
                YES, I'M READY
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-4 gradient-text">SECURE YOUR PLACE TODAY</h2>
            <div className="text-2xl font-extrabold mb-2" style={{ color: '#D4E04F', letterSpacing: '0.08em' }}>FIRST MOVER ADVANTAGE</div>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-body-large text-muted-foreground">
                This workshop runs over one intensive weekend and includes all materials and ongoing support resources. <b>Limited capacity</b> to ensure deep, personal attention.
              </p>
              <div className="text-2xl font-bold gradient-text">Dates: 6-7th September</div>
            </div>
          </div>
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Standard Package */}
            <PriceCard
              title="Standard Package"
              price={347}
              original={397}
              offerLabel="First Mover Advantage"
              offerDeadline="Offer ends July 16th"
              features={[
                'Full weekend workshop access',
                'Preparation and ongoing integration support for three months via our Core community programme, meeting every Thursday evening for three months to support the integration of what you\'ve learned.',
                'All materials included',
                'Ongoing support resources',
                'Brotherhood community access',
              ]}
              ctaText="BOOK STANDARD"
              ctaColor="#0F4F40"
              ctaTextColor="#D4E04F"
              bgColor="#F6FCD9"
              ctaUrl="https://www.nomoremrniceguy.co.uk/offers/CS5Y6BTF"
            />
            {/* VIP Package */}
            <PriceCard
              title="VIP Package"
              price={597}
              original={697}
              offerLabel="First Mover Advantage"
              offerDeadline="Offer ends July 16th"
              features={[
                'Everything in Standard Package',
                'Preparation and integration support for three months via our Advanced group and its scheduled meetings.',
                'Dinner on Saturday night',
                'Priority support access',
              ]}
              ctaText="BOOK VIP"
              ctaColor="#0F4F40"
              ctaTextColor="#D4E04F"
              featured
              bgColor="#F3F7C0"
              ctaUrl="https://www.nomoremrniceguy.co.uk/offers/TYF4zF5z"
            />
            {/* Member Discount Card - Redesigned */}
            <Card
              className="pricing-card"
              style={{
                border: '1px solid #A67C52',
                background: '#EFF7E1',
                color: '#0D212D',
                minHeight: 'unset',
                height: 'auto',
                padding: 0,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
            >
              <CardContent className="p-8 flex flex-col h-full w-full pricing-card-body" style={{ padding: '2.5rem 2rem', lineHeight: 1.25 }}>
                <img src={nmmngCommunity} alt="NMMNG Community" className="pricing-card-img-edge" />
                <h4 className="text-2xl font-bold mb-2" style={{ color: '#0F4F40', fontFamily: 'PT Serif, serif', fontWeight: 700, fontSize: '1.5rem', lineHeight: 1.15, letterSpacing: '0.06em', textAlign: 'left' }}>
                  No More Mr. Nice Guy® Membership Benefits.
                </h4>
                <p className="text-lg mb-4" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, fontSize: '22px', lineHeight: 1.25 }}>
                  If you are already part of the NMMNG community, Advanced or Growth Plus, you benefit from <b style={{ fontWeight: 700 }}>ten per cent discount</b> as part of your membership.
                </p>
                <Button
                  variant="outline"
                  className="w-full text-xl py-4 mt-2 rounded-xl font-bold border-[#0F4F40] text-[#0F4F40] hover:bg-[#F6FCD9] hover:border-[#A67C52]"
                  style={{ borderWidth: 2, background: 'transparent', color: '#0F4F40', fontSize: '1.1rem', minHeight: 56, fontFamily: 'League Spartan, sans-serif', fontWeight: 700, marginTop: 'auto' }}
                  onClick={() => window.open('https://nomoremrniceguy.co.uk?UTM_SOURCE=bootcamp', '_blank')}
                >
                  Learn More about Membership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forest background for both venue and footer */}
      <div className="relative overflow-hidden forest-bg-parent" style={{width: '100%', minHeight: 0, backgroundImage: `url(${bootcampFooter})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        {/* Optional: subtle overlay for readability */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(13,33,45,0.18) 0%, rgba(13,33,45,0.33) 100%)', zIndex: 1, pointerEvents: 'none'}}></div>
        {/* Venue/Location Section - Restored */}
        <section className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-10 max-w-5xl">
            <img src={venueImage} alt="Workshop Venue" className="rounded-2xl shadow-xl w-full md:w-1/2 object-cover" style={{ aspectRatio: '4/3', maxHeight: 320 }} />
            <div className="flex-1 text-left md:pl-10 mt-8 md:mt-0">
              <h3 className="text-2xl font-bold mb-4 gradient-text" style={{ fontFamily: 'PT Serif, serif', fontWeight: 700 }}>Venue: Oxford, UK</h3>
              <p className="text-lg text-muted-foreground" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400, fontSize: '22px' }}>
                The retreat takes place at a beautiful, private conference hotel in Oxford, UK—chosen for comfort, privacy, and easy access from London and the Midlands. Full details provided upon registration.
              </p>
            </div>
          </div>
        </section>

        {/* Sexy Footer */}
        <Footer showBackToTop={showBackToTop} scrollToTop={scrollToTop} backToTopImg={backToTopImg} />
      </div>
    </div>
  )
}

function LoverLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const forestBgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setShowBackToTop(window.scrollY > 300)
      if (forestBgRef.current) {
        const offset = window.scrollY * 0.25
        forestBgRef.current.style.backgroundPositionY = `-${offset}px`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // --- Sectioned content from lover-brief.txt ---
  const heroTitle = "No More Mr. Nice Guy® – The Authentic Lover Blueprint";
  const heroSubtitle = "An intensive six-month Dating and Relationship Programme for men wanting to connect with women";
  const heroDesc = "Are you tired of overthinking every date or every interaction with your partner or girlfriend? Do you feel fear that you won't be able to attract the woman or women you truly desire and would want a relationship with? Or are you stuck in a relationship that has never quite fulfilled it's promise?";
  const investment = "Investment: £4,997 (full six-month programme)";
  const joinUrl = "https://join.nmmng.co/lover";

  const invitation = "This intensive six-month programme is designed to break the \"Nice Guy\" patterns that are get in the way of you having the intimate relationship you really want. We move you beyond theory and strategising into direct experience, helping you uncover and dismantle the limiting beliefs that condition your current approach and build the confidence in you to connect with women authentically.";

  const whoTitle = "Who Is This Programme For?";
  const whoBullets = [
    "You experience a powerful fear of rejection that stops you from attempting to connect with women",
    "You feel insecure and \"conservative\" in social situations, especially around women.",
    "You tend to overthink and \"strategize\" dates and conversations to perfection, which is exhausting and prevents you from being present.",
    "You focus more on making your date or partner comfortable and happy than on your own enjoyment and needs.",
    "You put women on a pedestal, creating an imbalance before the interaction even begins.",
    "You find it difficult to connect with other men and lack a supportive male community to hold you accountable on your mission to find a nourishing relationship.",
    "You suspect your current dating behaviour patterns are not working for you."
  ];

  const philosophyTitle = "Our Philosophy: Experience Over Theory";
  const philosophyText = [
    "We believe that lasting change doesn't come from reading another book; it comes from rewiring your nervous system through experience. This programme is not about learning clever lines. It's about dismantling the core wounds that fuel \"Nice Guy\" behaviour. We will guide you to stop intellectualising your problems and start feeling your way to a solution.",
    "This begins with a clear understanding of what authentic masculine energy is and the difference between that and feminine energy. We call that Polarity.",
    "From here we show you how to communicate that masculine essence in the way you show up in texts, in calls and conversations and in physical intimacy. It's like a road map that will enable you to navigate from the mind and all it's resistance, to the body and opening it to trust and desire."
  ];

  const structureTitle = "Programme Structure & Curriculum (Six Months)";
  const phases = [
    {
      phase: "Phase 1: Deconstructing The Nice Guy",
      modules: [
        {
          title: "Module 1: Identifying Your Core Wounds",
          desc: "We will explore the origins of your toxic shame, perfectionism, and the impact of your relationship with your parents on your current behaviour with women. Key to healing this conditioning is exploring the mother wound. This is a term that describes our relationship with our mothers and the ultimate problem at the core. Unpacking this deep-seated emotional wound unlocks the possibility of freedom to be who you really are in relationship with women, rather than someone projecting their neediness on women."
        },
        {
          title: "Module 2: Mastering Your Emotional State",
          desc: "Learn to identify and sit with uncomfortable feelings associated with rejection. We will guide you to bring your attention to the feeling without needing to \"solve\" it with your mind. This is about mastering your own emotions and body. With greater awareness, comes greater power, open, positive and nourishing power rather than controlling power."
        }
      ]
    },
    {
      phase: "Phase 2: The Field Manual",
      modules: [
        {
          title: "Module 3: Practical Missions",
          desc: "The cornerstone of this programme is putting theory into practice. You will be guided to take on bespoke missions that help you integrate what you've learned and will challenge you to break through existing patterns that keep you stuck with the same results. Instead you will open up new possibilities for connection and relationship that you can put into practice in your very own dating activities whether you have already been dating or are just starting out. We guide you through it all at every point you need it. You will rapidly get comfortable trying out new ways of communicating and transmitting your natural masculine energy. These powerful exercises are designed to prove that your fears are unfounded, build confidence and resilience."
        },
        {
          title: "Module 4: Dating Without a Mask",
          desc: "You will learn to \"follow the energy\" of an interaction instead of a script. This involves dropping your mental checklist of what you should and shouldn't do and learning to be free to act or speak even when feeling vulnerable or anxious in a specific situation in the dating cycle. We guide you through this in timely interventions so that you can leverage what you are learning at every point in the programme."
        }
      ]
    },
    {
      phase: "Phase 3: Integration & Community (Months 5–6)",
      modules: [
        {
          title: "Module 5: Building Your Tribe",
          desc: "You will be encouraged and supported to build deeper, more authentic connections with other men. Having a strong male support system is crucial for accountability and navigating challenges. Expect the feeling of deep brotherhood as you and your fellow participants give up the competitive defensive instinct and instead connect on an equal footing in the dating game."
        },
        {
          title: "Module 6: Dating with Integrity",
          desc: "Learn the art of rejecting and being rejected with grace and being okay with any outcome. We will help you develop the ability to communicate your needs and boundaries clearly, hear the other person's needs and boundaries so that you can freely move from a passive people-pleasing stance to one of authentic leadership in your dating and relational life."
        }
      ]
    }
  ];

  const whatsIncludedTitle = "What's Included in The Programme";
  const whatsIncluded = [
    {
      icon: <FaUsers size={38} className="text-[#D4E04F]" />, name: 'Weekly Group Coaching Calls', desc: 'Two calls per month to share experiences, receive direct coaching from Rowan, Kevin and Matt, and learn from the journeys of other men in the group.'
    },
    {
      icon: <FaChalkboardTeacher size={38} className="text-[#A67C52]" />, name: 'Direct input and feedback from women', desc: 'Our female coaches are on hand to deliver invaluable insights and feedback that will accelerate your learning and growth.'
    },
    {
      icon: <FaUserCheck size={38} className="text-[#0F4F40]" />, name: 'One-on-One Coaching Sessions', desc: 'Scheduled coaching calls with a seasoned coach to work on your specific requirements and track your progress.'
    },
    {
      icon: <FaTasks size={38} className="text-[#D4E04F]" />, name: 'Practical "Missions"', desc: 'Real-world assignments we call them "Games" to implement between sessions so that you get hands on practice - like a sandbox for your dating activity!'
    },
    {
      icon: <FaComments size={38} className="text-[#A67C52]" />, name: 'Private Accountability Group', desc: 'A dedicated online forum for daily support, check-ins, and accountability with your "tribe."'
    },
    {
      icon: <FaHandshake size={38} className="text-[#0F4F40]" />, name: 'Accountability Partner', desc: 'You will be paired with another man in the programme to provide mutual support and ensure you stay on track with your missions.'
    },
    {
      icon: <FaVideo size={38} className="text-[#D4E04F]" />, name: 'Video, audio and text content', desc: 'Access to exclusive content to deepen your understanding and inspire you to think outside the box and grow as a lover.'
    },
  ];

  const finalCta = "This programme is an investment in a completely new way of being. It's for men who are ready to stop playing small and start creating the authentic, fulfilling dating, intimacy and relationship life they deserve. Becoming the authentic lover you are underneath the decades of conditioning.";

  // Pricing options for the new section
  const pricingOptions = [
    {
      price: '£4,997',
      subtitle: 'Full 6-Month Programme',
      cta: 'Apply Now',
      url: 'https://join.nmmng.co/lover',
      highlight: true,
    },
    {
      price: '2 × £2,697',
      subtitle: 'Split into two payments across the programme',
      cta: 'Apply Now',
      url: 'https://join.nmmng.co/lover',
      highlight: false,
    },
    {
      price: '6 × £897',
      subtitle: 'Monthly installments, total £5,382',
      cta: 'Apply Now',
      url: 'https://join.nmmng.co/lover',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navigation */}
      {isScrolled && (
        <nav className="nav-sticky">
          <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="flex items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
                <img src={nmmngLogo} alt="NMMNG Logo" className="h-12 w-auto sm:h-14 mr-0 sm:mr-4" style={{ position: 'relative', top: 0, left: 0, zIndex: 11, background: 'none' }} />
              </a>
              <h2 className="text-lg sm:text-xl font-bold nmmng-glow text-center sm:text-left" style={{ marginLeft: 0, zIndex: 1, lineHeight: 1.1, color: '#fff', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>Authentic Lover Blueprint</h2>
            </div>
            <Button 
              onClick={() => scrollToSection('investment-plan')}
              className="btn-primary w-full sm:w-auto text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-4 mt-2 sm:mt-0"
              style={{ minWidth: 0 }}
            >
              JOIN PROGRAMME
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section id="hero" ref={loverHeroRef} className="relative w-full min-h-screen flex items-center justify-center hero-bg overflow-hidden" style={{ minHeight: '100vh', height: '100svh' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 bg-cover bg-center z-1" style={{ backgroundImage: `url(${loverHero})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black z-2" />
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center h-full">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold mb-2 gradient-text-primary" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>
            No More Mr. Nice Guy®
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold mb-6 gradient-text-primary" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>
            The Authentic Lover Blueprint
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="my-10 mx-auto w-full max-w-4xl text-center" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 300, fontSize: 33, color: '#fff', lineHeight: 1.22, textShadow: '0 0 32px #E6F97B55, 0 0 8px #fff2' }}>
            {invitation}
          </motion.p>
          <Button onClick={() => scrollToSection('investment-plan')} className="btn-primary w-full md:w-auto text-base md:text-xl px-6 md:px-10 py-3 md:py-4 mt-2 md:mt-0" style={{ minWidth: 0 }}>
            JOIN PROGRAMME
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Section 2: The Invitation */}
      <section className="py-16 max-w-7xl mx-auto w-full px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full mx-auto">
          <div className="w-full mx-auto max-w-4xl" style={{ fontSize: 33, fontFamily: 'League Spartan, sans-serif', fontWeight: 300, color: '#fff', lineHeight: 1.22, background: 'none', boxShadow: 'none', border: 'none', padding: 0 }}>
            {invitation}
          </div>
        </motion.div>
      </section>

      {/* Section 3: Who Is This Programme For? */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
           {/* Text Card */}
           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass rounded-xl p-8 flex flex-col justify-center h-full" style={{ minHeight: 420, background: 'rgba(15,31,45,0.82)', border: '1.5px solid #1A1A1A', boxShadow: '0 8px 40px rgba(0,0,0,0.18)', backdropFilter: 'blur(10px)' }}>
             <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-left md:text-center" style={{ color: '#D4E04F', fontFamily: 'PT Serif, serif' }}>{whoTitle}</h2>
            <ul className="space-y-6 text-lg text-left mx-auto max-w-2xl" style={{ fontFamily: 'League Spartan, sans-serif', fontSize: '22px', fontWeight: 400 }}>
              {whoBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 text-[#D4E04F]">✅</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
           </motion.div>
           {/* Image Card */}
           <div className="flex justify-center items-center h-full min-h-[420px]">
             <img src="/assets/hero_silhouette.jpeg" alt="Silhouette" className="object-cover h-full w-full rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform ease-in-out duration-300" style={{ maxWidth: 340 }} />
          </div>
          </div>
      </section>

      {/* Section 4: Our Philosophy: Experience Over Theory */}
      <section className="py-16 px-6 md:px-12 w-full relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('/assets/polarity-transparent.webp')] bg-cover bg-center blur-sm opacity-40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#0D212Dcc] to-[#0D212Ddd] z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch h-full">
          {/* Foreground Image Card (left on desktop, top on mobile) */}
          <div className="flex justify-center items-center h-full min-h-[420px] order-1 md:order-none">
            <img src="/assets/polarity-transparent.webp" alt="Philosophy Portrait" className="object-cover h-full w-full rounded-xl border border-white/10 shadow-xl hover:scale-105 transition-transform ease-in-out duration-300" style={{ maxWidth: 300 }} />
          </div>
          {/* Text Card (right on desktop, bottom on mobile) */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow flex flex-col justify-center h-full" style={{ minHeight: 420 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-left md:text-center" style={{ color: '#D4E04F', fontFamily: 'PT Serif, serif' }}>{philosophyTitle}</h2>
            {philosophyText.map((p, i) => (
              <p key={i} className="text-lg text-white mb-6" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>{p}</p>
            ))}
        </motion.div>
        </div>
      </section>

      {/* Section 5: Programme Structure & Curriculum */}
      <section className="relative py-20 w-full min-h-[700px] flex flex-col items-center justify-center overflow-visible" style={{ zIndex: 1 }}>
        <div className="relative max-w-7xl mx-auto w-full px-6 flex flex-col items-center">
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-bold mb-4 gradient-text text-center" style={{ fontFamily: 'PT Serif, serif', color: '#D4E04F' }}>{structureTitle}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-lg md:text-xl text-center mb-12 text-white/80 max-w-3xl mx-auto" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>
            This is a guided, transformational arc—from self-awareness to field testing to integration.
          </motion.p>
          <div className="w-full flex justify-center relative mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto relative z-10">
              {/* Month 1 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 1 · Weeks 1–2</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 1: Identifying Your Core Wounds</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Explore the origins of toxic shame, perfectionism, and the impact of your relationship with your parents on your current behaviour with women. Unpacking the mother wound unlocks the possibility of freedom to be who you really are in relationship with women.</div>
              </motion.div>
              {/* Month 2 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 2 · Weeks 3–4</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 2: Mastering Your Emotional State</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Learn to identify and sit with uncomfortable feelings associated with rejection. Master your emotions and body for greater awareness and positive, nourishing power.</div>
              </motion.div>
              {/* Month 3 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 3 · Weeks 5–6</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 3: Practical Missions</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Put theory into practice with bespoke missions that challenge you to break through old patterns and open new possibilities for connection and relationship.</div>
              </motion.div>
              {/* Month 4 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.0 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 4 · Weeks 7–8</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 4: Dating Without a Mask</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Learn to "follow the energy" of an interaction instead of a script. Drop your mental checklist and learn to act and speak freely, even when feeling vulnerable or anxious.</div>
              </motion.div>
              {/* Month 5 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 5 · Weeks 9–10</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 5: Building Your Tribe</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Build deeper, more authentic connections with other men. Develop a strong male support system for accountability and navigating challenges.</div>
              </motion.div>
              {/* Month 6 */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md text-light flex flex-col items-start hover:scale-[1.01] transition-transform duration-300 group">
                <div className="uppercase text-[12px] tracking-wide text-yellow-300 mb-2">Month 6 · Weeks 11–12</div>
                <div className="font-bold text-lg md:text-xl mb-2 text-[#D4E04F]">Module 6: Dating with Integrity</div>
                <div className="text-white/90 text-sm md:text-base font-medium">Learn the art of rejecting and being rejected with grace. Communicate your needs and boundaries clearly, and move from people-pleasing to authentic leadership in your dating and relational life.</div>
              </motion.div>
            </div>
            </div>
            </div>
      {/* Blurred background image below timeline boxes, only as wide as the card row */}
      <div className="relative w-full flex justify-center mt-12">
        <div className="absolute inset-0 w-full h-full flex justify-center pointer-events-none" aria-hidden="true">
          <div className="w-full max-w-7xl h-[180px] md:h-[260px] lg:h-[320px] mx-auto rounded-2xl overflow-hidden" style={{ position: 'relative' }}>
            <div style={{
              backgroundImage: "url('/assets/lover-phases.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(6px)',
              opacity: 0.32,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
            }} />
          </div>
        </div>
        <div className="w-full max-w-7xl" style={{ height: '180px' }}></div>
      </div>
      {/* Standalone, fully visible image after the grid */}
      <div className="w-full flex justify-center mt-12">
        <img src="/assets/lover-phases.webp" alt="Programme Phases" className="block w-full max-w-6xl h-auto" style={{ display: 'block', margin: '0 auto', borderRadius: 0, boxShadow: 'none', filter: 'none', opacity: 1 }} />
      </div>
      </section>

      {/* Section 6: What's Included */}
      <section className="py-16 relative w-full flex justify-center items-center overflow-hidden">
        {/* Large, centered, in-focus lion background */}
        <img src="/assets/nmmng-logo.png" alt="NMMNG Lion Logo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] lg:w-[1100px] max-w-none opacity-20 pointer-events-none select-none z-0" style={{ filter: 'none' }} />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center" style={{ fontFamily: 'PT Serif, serif', color: '#D4E04F' }}>{whatsIncludedTitle}</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {whatsIncluded.map((item, i) => (
              <div key={i} className="glass rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden" style={{ borderRadius: 18, background: 'rgba(15,31,45,0.82)', boxShadow: '0 8px 40px rgba(0,0,0,0.18)', border: '1.5px solid #1A1A1A', backdropFilter: 'blur(10px)' }}>
                {/* Blurred lion only under the card content */}
                <img src="/assets/nmmng-logo.png" alt="NMMNG Lion Logo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 object-contain opacity-30 blur-2xl pointer-events-none select-none z-0" style={{}} />
                <div className="mb-4 flex items-center justify-center relative z-10">{item.icon}</div>
                <div className="text-xl font-bold mb-2 relative z-10" style={{ fontFamily: 'PT Serif, serif', color: '#D4E04F', letterSpacing: '0.01em' }}>{item.name}</div>
                <div className="text-base text-white relative z-10" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 7: Pricing Section */}
      <section className="py-16 max-w-7xl mx-auto w-full px-6" id="investment-plan">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center" style={{ fontFamily: 'PT Serif, serif', color: '#D4E04F' }}>Choose Your Investment Plan</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-6 items-stretch justify-center">
            {/* Card 1: One-time Payment */}
            <div className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10" style={{ borderRadius: 11, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', border: '1.5px solid #E6E6E6', minHeight: 420 }}>
              <div className="text-lg font-bold mb-2 text-center" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif' }}>One-time Payment</div>
              <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£4,997</div>
              <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Full 6-Month Programme</div>
              <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full" style={{ background: '#D4E04F', color: '#0F4F40', fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto' }} onClick={() => scrollToSection('investment-plan')}>Apply Now</button>
              <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>
                Total: £4,997
              </div>
            </div>
            {/* Card 2: Quarterly */}
            <div className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10" style={{ borderRadius: 11, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', border: '1.5px solid #E6E6E6', minHeight: 420 }}>
              <div className="text-lg font-bold mb-2 text-center" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif' }}>Quarterly</div>
              <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£500 + 2 × £2,299</div>
              <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay £500 upfront, then 2 installments of £2,299 each (one every 3 months).</div>
              <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full" style={{ background: '#D4E04F', color: '#0F4F40', fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto' }} onClick={() => scrollToSection('investment-plan')}>Apply Now</button>
              <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>
                Total: £5,098
              </div>
            </div>
            {/* Card 3: Monthly */}
            <div className="bg-white rounded-2xl flex-1 flex flex-col h-full items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative p-10" style={{ borderRadius: 11, boxShadow: '0 8px 40px rgba(0,0,0,0.10)', border: '1.5px solid #E6E6E6', minHeight: 420 }}>
              <div className="text-lg font-bold mb-2 text-center" style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif' }}>Monthly</div>
              <div className="text-3xl font-bold mb-2 text-center" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif' }}>£500 + 6 × £800</div>
              <div className="text-lg mb-4 text-center" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, lineHeight: 1.3 }}>Pay £500 upfront, then 6 installments of £800 each (one every month).</div>
              <button className="btn-primary text-lg px-8 py-4 font-bold mt-2 rounded-lg w-full" style={{ background: '#D4E04F', color: '#0F4F40', fontFamily: 'PT Serif, serif', minHeight: 56, borderRadius: 11, fontWeight: 700, marginTop: 'auto' }} onClick={() => scrollToSection('investment-plan')}>Apply Now</button>
              <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>
                Total: £5,300
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground text-center mt-2" style={{ fontFamily: 'League Spartan, sans-serif', color: '#A67C52' }}>
            We accept most major cards. Secure checkout and support included.
          </div>
        </motion.div>
      </section>

      {/* Section 8: Final Commitment Section */}
      <section className="py-16 max-w-7xl mx-auto w-full px-6 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0" style={{ backgroundImage: `url(${menBg})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.32 }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" style={{ zIndex: 1 }}></div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="max-w-5xl mx-auto w-full px-6 flex flex-col items-center justify-center text-center">
            <div className="flex justify-center items-center w-full mb-8">
              <div className="w-full max-w-[200px] md:max-w-[260px] lg:max-w-[300px] mx-auto" style={{ filter: 'drop-shadow(0 0 32px #E6F97B55) drop-shadow(0 2px 16px #0008)' }}>
                <img src="/assets/key.webp" alt="Key Symbol" className="w-full h-[180px] md:h-[240px] lg:h-[300px] object-contain" style={{ background: 'transparent', display: 'block', margin: '0 auto' }} />
            </div>
            </div>
            <p className="text-2xl font-bold gradient-text mb-0 text-center" style={{ fontFamily: 'PT Serif, serif', fontWeight: 700, color: '#D4E04F', maxWidth: '100%' }}>{finalCta}</p>
          </div>
        </motion.div>
      </section>

      {/* Footer Section (for consistency) */}
      <Footer showBackToTop={showBackToTop} scrollToTop={scrollToTop} backToTopImg={backToTopImg} />
    </div>
  )
}

// PriceCard component
function PriceCard({ title, price, original, offerLabel, offerDeadline, features, ctaText, ctaColor, ctaTextColor, featured, bgColor, ctaUrl }) {
  const [slashAnimated, setSlashAnimated] = useState(false);
  const priceRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setSlashAnimated(true), 400);
  }, []);

  return (
    <Card
      className={`pricing-card${featured ? ' featured' : ''}`}
      style={{
        border: '1px solid #D4E04F',
        background: bgColor,
        color: '#0D212D',
        minHeight: 'unset',
        height: 'auto',
        padding: 0,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        transition: 'box-shadow 0.3s, transform 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
    >
      {featured && (
        <div
          style={{
            position: 'absolute',
            top: '18px',
            right: '-70px',
            width: 'calc(100% + 70px)',
            maxWidth: 420,
            minWidth: 220,
            height: '44px',
            background: '#E6F97B',
            color: '#0F4F40',
            fontWeight: 700,
            fontFamily: 'League Spartan, sans-serif',
            fontSize: '1.25rem',
            letterSpacing: '0.12em',
            textAlign: 'center',
            lineHeight: '44px',
            transform: 'rotate(20deg)',
            boxShadow: '0 2px 12px rgba(0,255,136,0.10)',
            borderRadius: '10px',
            textTransform: 'uppercase',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          MOST POPULAR
        </div>
      )}
      <CardContent className="px-8 py-8 flex flex-col h-full" style={{ padding: '2.5rem 2rem' }}>
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#0F4F40', letterSpacing: '0.06em', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>{title}</h3>
        <div className="mb-6 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl price-pt-serif-bold" style={{ color: '#0D212D', fontFamily: 'PT Serif, serif', fontWeight: 700 }}>
              £{price}
            </span>
            <span
              ref={priceRef}
              className="text-2xl price-slash price-original"
              style={{
                color: '#FF4C4C',
                opacity: 0.6,
                marginLeft: 4,
                textDecoration: 'line-through',
                textDecorationThickness: 3,
                textDecorationColor: '#FF4C4C',
                textDecorationLine: 'line-through',
                fontWeight: 400,
                fontFamily: 'League Spartan, sans-serif',
                position: 'relative',
                top: 0
              }}
              onMouseEnter={() => setSlashAnimated(true)}
            >
              £{original}
            </span>
          </div>
          <div className="text-xs font-bold" style={{ color: '#FF4C4C', marginTop: 2, fontFamily: 'League Spartan, sans-serif', fontWeight: 700, fontSize: 16 }}>{offerDeadline}</div>
        </div>
        <ul className="text-left space-y-4 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7" style={{ color: '#0F4F40', marginTop: 2, flexShrink: 0 }} />
              <span style={{ color: '#0F4F40', fontFamily: 'League Spartan, sans-serif', fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.5 }}>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full text-xl py-5 mt-auto rounded-xl font-bold${featured ? ' animate-pulse-glow' : ''} cursor-pointer`}
          style={{ background: ctaColor, color: ctaTextColor, fontSize: '1.25rem', minHeight: 64, fontFamily: 'League Spartan, sans-serif', fontWeight: 700, marginTop: 'auto' }}
          onClick={() => ctaUrl ? window.open(ctaUrl, '_blank') : window.open('#', '_blank')}
        >
          {ctaText}
        </Button>
        <div className="text-base font-bold text-center mt-6" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>
          Total: £{price}
        </div>
      </CardContent>
    </Card>
  );
}

// Footer component for reuse
function Footer({ showBackToTop, scrollToTop, backToTopImg }) {
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
    <footer className="py-16 border-t border-border/20 relative z-10" style={{ background: '#000' }}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="mb-6 flex items-center justify-center cursor-pointer">
          <img src={nmmngLogo} alt="NMMNG Logo" style={{ width: 220, height: 220, objectFit: 'contain' }} className="drop-shadow-lg hover:scale-105 transition-transform duration-300" />
        </a>
        <div className="flex gap-8 mb-4">
          <a href="/bootcamp" className="text-primary hover:underline ml-1 cursor-pointer text-lg font-bold" style={{ color: '#D4E04F' }}>NMMNG® Bootcamp</a>
          <a href="/lover" className="text-primary hover:underline ml-1 cursor-pointer text-lg font-bold" style={{ color: '#D4E04F' }}>Authentic Lover Blueprint</a>
          <a href="/coaching" className="text-primary hover:underline ml-1 cursor-pointer text-lg font-bold" style={{ color: '#D4E04F' }}>Executive Coaching</a>
          <a href="https://nomoremrniceguy.co.uk" className="text-primary hover:underline ml-1 cursor-pointer text-lg font-bold" style={{ color: '#D4E04F' }}>No More Mr. Nice Guy®</a>
        </div>
        <div className="flex gap-6 mb-6">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: '#D4E04F', fontSize: 32, transition: 'color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="flex gap-6 text-sm mb-1">
            <a href="https://www.nomoremrniceguy.co.uk/terms" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary" style={{ color: '#D4E04F' }}>Terms & Conditions</a>
            <a href="https://www.nomoremrniceguy.co.uk/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary" style={{ color: '#D4E04F' }}>Privacy Policy</a>
          </div>
          <div className="text-xs text-center" style={{ color: '#D4E04F', fontFamily: 'League Spartan, sans-serif', fontWeight: 500 }}>
            © 2025 No More Mr. Nice Guy®️ is a registered trademark and trading name of RA & Associates Limited
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-[11px] text-center" style={{ color: '#D4E04F', fontFamily: 'League Spartan, sans-serif', fontWeight: 400, marginTop: 4 }}>
            Vibe coded by <a href="https://respira.cafe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Respira</a>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{position: 'fixed', bottom: 32, right: 32, zIndex: 50, background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: 0}}
        >
          <img src={backToTopImg} alt="Back to top" className="back-to-top-img float-anim" style={{width: 177, height: 177, maxWidth: 177, maxHeight: 177, opacity: 1, background: 'transparent'}} />
        </button>
      )}
    </footer>
  );
}

export default App;
export { BootcampLanding, LoverLanding };

