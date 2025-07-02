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
import { FaYoutube, FaInstagram, FaMeetup, FaTiktok, FaLinkedin, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import lionIcon from './assets/nmmng-logo.png'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-12 relative overflow-hidden" style={{ background: "url('/linkinbio-background.webp') center/cover no-repeat" }}>
      <div className="glass card-modern flex flex-col items-center max-w-2xl w-full mx-auto px-4 pt-8 pb-6 shadow-xl animate-fade-in-up relative z-10" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 11, boxShadow: '0 8px 40px rgba(0,0,0,0.35)', border: '1.5px solid #1A1A1A', marginTop: '60px', marginBottom: '60px', backdropFilter: 'blur(12px)' }}>
        {/* Text content */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text-primary text-center" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>Men's Work</h1>
        <div className="text-lg md:text-xl font-bold mb-4 text-center" style={{ color: '#D4E04F', fontFamily: 'League Spartan, sans-serif' }}>Your Pocket-Sized Brotherhood</div>
        <div className="text-base md:text-lg text-muted-foreground mb-4 text-center" style={{ color: '#F5F5F5', fontFamily: 'League Spartan, sans-serif', fontWeight: 400 }}>
          A modern brotherhood for men ready to reclaim authentic power, deepen relationships, and lead with confidence. Join our global community, events, and conversations.
        </div>
        <div className="flex flex-col gap-5 w-full items-center mt-2 mb-4 relative z-10">
          <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noopener noreferrer" className="w-full max-w-2xl flex items-center gap-4 px-4 py-4 shadow-lg border-2 border-[#0F4F40] font-bold" style={{ minHeight: 72, fontWeight: 700, borderRadius: 11 }}>
            <span className="flex items-center justify-center w-14 h-10 md:w-14 md:h-10" style={{ borderRadius: 11, background: '#0D212D', border: '2px solid #D4E04F' }}>
              <img src={lionIcon} alt="Lion Icon" className="w-8 h-8 object-contain" />
            </span>
            <span className="text-lg md:text-xl font-bold text-left" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>No More Mr. Nice Guy® Community</span>
          </a>
          <Link to="/bootcamp" className="w-full max-w-2xl flex items-center gap-4 px-4 py-4 shadow-lg border-2 border-[#0F4F40] font-bold" style={{ minHeight: 72, fontWeight: 700, borderRadius: 11 }}>
            <span className="flex items-center justify-center w-14 h-10 md:w-14 md:h-10" style={{ borderRadius: 11, background: '#0D212D', border: '2px solid #D4E04F' }}>
              <img src={lionIcon} alt="Lion Icon" className="w-8 h-8 object-contain" />
            </span>
            <span className="text-lg md:text-xl font-bold text-left" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>No More Mr. Nice Guy® Bootcamp - September Oxford, UK</span>
          </Link>
          <Link to="/lover" className="w-full max-w-2xl flex items-center gap-4 px-4 py-4 shadow-lg border-2 border-[#0F4F40] font-bold" style={{ minHeight: 72, fontWeight: 700, borderRadius: 11 }}>
            <span className="flex items-center justify-center w-14 h-10 md:w-14 md:h-10" style={{ borderRadius: 11, background: '#0D212D', border: '2px solid #D4E04F' }}>
              <img src={lionIcon} alt="Lion Icon" className="w-8 h-8 object-contain" />
            </span>
            <span className="text-lg md:text-xl font-bold text-left" style={{ color: '#0D212D', fontFamily: 'League Spartan, sans-serif', fontWeight: 700 }}>No More Mr. Nice Guy® WhatsApp General</span>
          </Link>
        </div>
        {/* Divider above social icons */}
        <div className="w-full flex justify-center items-center mt-6 mb-2">
          <div style={{ width: '80%', height: 1, background: 'rgba(255,255,255,0.12)' }} />
        </div>
        {/* Social icons row at the bottom of the card, always visible */}
        <div className="flex flex-row justify-center items-center gap-4 mt-2 mb-1">
          <a href="https://www.youtube.com/@NoMoreMrNiceGuyUK" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://x.com/nmmng_uk" target="_blank" rel="noopener noreferrer"><SiX className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://instagram.com/nomoremrniceguyuk" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://www.meetup.com/menwork-uk/" target="_blank" rel="noopener noreferrer"><FaMeetup className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://www.linkedin.com/company/menwork-uk/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://wa.me/447418351888" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="mailto:info@nomoremrniceguy.co.uk" target="_blank" rel="noopener noreferrer"><FaEnvelope className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
          <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noopener noreferrer"><FaGlobe className="text-2xl text-[#0D212D] hover:text-[#D4E04F]" /></a>
        </div>
      </div>
    </div>
  );
}

function App() {
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bootcamp" element={<BootcampLanding />} />
        <Route path="/lover" element={<LoverLanding />} />
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
      <section className="min-h-screen flex items-center justify-center relative hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${bootcampHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: 0.6 // reduce lantern opacity
          }}
        ></div>
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center py-32">
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
              6–7th September ✴ Oxford, UK – Limited Spots Available
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 w-full max-w-lg mx-auto">
            <div className="relative w-full sm:w-auto flex-1 flex justify-center">
              <span className="absolute inset-0 rounded-xl blur-xl opacity-60" style={{ background: 'radial-gradient(circle, #E6F97B 0%, transparent 80%)', zIndex: 0 }}></span>
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="btn-primary text-xl px-8 py-6 font-bold relative z-10 w-full sm:w-auto cursor-pointer"
                style={{ boxShadow: '0 0 32px 8px #E6F97B55', fontFamily: 'PT Serif, serif', minHeight: 64 }}
              >
                SECURE YOUR PLACE TODAY
              </Button>
            </div>
            <Button 
              variant="outline"
              className="border-2 text-lg px-8 py-6 font-bold cursor-pointer"
              style={{ borderColor: '#E6F97B', color: '#E6F97B', background: 'transparent', fontFamily: 'PT Serif, serif', minHeight: 64 }}
              onClick={() => {
                const nextSection = document.querySelector('section:nth-of-type(2)');
                if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>
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
        <footer className="py-16 border-t border-border/20 relative z-10">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="mb-6 flex items-center justify-center cursor-pointer">
              <img src={nmmngLogo} alt="NMMNG Bootcamp Logo" style={{ width: 220, height: 220, objectFit: 'contain' }} className="drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </a>
            <div className="flex gap-8 mb-4">
              <a href="https://rowan-associates.com" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1 cursor-pointer" style={{ fontSize: 16 }}>rowan-associates.com</a>
              <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1 cursor-pointer" style={{ fontSize: 16 }}>nomoremrniceguy.co.uk</a>
            </div>
            <div className="text-muted-foreground text-sm flex flex-wrap items-center gap-2">
              &copy; {new Date().getFullYear()} NMMNG Bootcamp. All rights reserved.
              <span>|</span>
              <span>Vibe coded by <a href="https://respira.cafe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Respira</a></span>
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center py-32">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 gradient-text-primary" style={{ fontFamily: 'PT Serif, serif', letterSpacing: '-0.01em', lineHeight: 1.08 }}>
            No More Mr. Nice Guy® – The Authentic Lover Blueprint
          </h1>
          <div className="mb-4 text-2xl md:text-3xl" style={{ fontFamily: 'PT Serif, serif', fontWeight: 500, color: '#D4E04F' }}>
            An intensive six-month Dating and Relationship Programme for men wanting to connect with women
          </div>
          <div className="glass rounded-2xl p-8 my-12 max-w-4xl mx-auto w-full px-6">
            <p className="text-xl font-semibold text-white text-left" style={{ fontFamily: 'League Spartan, sans-serif' }}>
              Are you tired of overthinking every date or every interaction with your partner or girlfriend? Do you feel fear that you won't be able to attract the woman or women you truly desire and would want a relationship with? Or are you stuck in a relationship that has never quite fulfilled its promise?</p>
            <p className="mt-4">This intensive six-month programme is designed to break the "Nice Guy" patterns that get in the way of you having the intimate relationship you really want. We move you beyond theory and strategising into direct experience, helping you uncover and dismantle the limiting beliefs that condition your current approach and build the confidence in you to connect with women authentically.</p>
            <div className="text-2xl font-bold mt-8 mb-2" style={{ color: '#D4E04F', letterSpacing: '0.08em' }}>Investment: £4,997 (full six-month programme)</div>
          </div>
        </div>
      </section>

      {/* Programme Details Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="glass rounded-2xl p-8 mb-12 text-left">
            <h3 className="text-2xl font-bold mb-4 gradient-text-primary" style={{ fontFamily: 'PT Serif, serif' }}>Who Is This Programme For?</h3>
            <ul className="list-disc ml-6 mb-4">
              <li>You experience a powerful fear of rejection that stops you from attempting to connect with women</li>
              <li>You feel insecure and "conservative" in social situations, especially around women.</li>
              <li>You tend to overthink and "strategize" dates and conversations to perfection, which is exhausting and prevents you from being present.</li>
              <li>You focus more on making your date or partner comfortable and happy than on your own enjoyment and needs.</li>
              <li>You put women on a pedestal, creating an imbalance before the interaction even begins.</li>
              <li>You find it difficult to connect with other men and lack a supportive male community to hold you accountable on your mission to find a nourishing relationship.</li>
              <li>You suspect your current dating behaviour patterns are not working for you.</li>
            </ul>
            <h3 className="mt-6 mb-2 font-bold text-lg" style={{ color: '#D4E04F' }}>Our Philosophy: Experience Over Theory</h3>
            <p>We believe that lasting change doesn't come from reading another book; it comes from rewiring your nervous system through experience. This programme is not about learning clever lines. It's about dismantling the core wounds that fuel "Nice Guy" behaviour. We will guide you to stop intellectualising your problems and start feeling your way to a solution.</p>
            <p className="mt-2">This begins with a clear understanding of what authentic masculine energy is and the difference between that and feminine energy. We call that Polarity.</p>
            <p className="mt-2">From here we show you how to communicate that masculine essence in the way you show up in texts, in calls and conversations and in physical intimacy. It's like a road map that will enable you to navigate from the mind and all its resistance, to the body and opening it to trust and desire.</p>
            <h3 className="mt-6 mb-2 font-bold text-lg" style={{ color: '#D4E04F' }}>Programme Structure & Curriculum (Six Months)</h3>
            <p className="mt-2 font-bold">Phase 1: Deconstructing The Nice Guy</p>
            <ul className="list-disc ml-6 mb-4">
              <li><b>Module 1: Identifying Your Core Wounds:</b> We will explore the origins of your toxic shame, perfectionism, and the impact of your relationship with your parents on your current behaviour with women. Key to healing this conditioning is exploring the mother wound. This is a term that describes our relationship with our mothers and the ultimate problem at the core. Unpacking this deep-seated emotional wound unlocks the possibility of freedom to be who you really are in relationship with women, rather than someone projecting their neediness on women.</li>
              <li><b>Module 2: Mastering Your Emotional State:</b> Learn to identify and sit with uncomfortable feelings associated with rejection. We will guide you to bring your attention to the feeling without needing to "solve" it with your mind. This is about mastering your own emotions and body. With greater awareness, comes greater power, open, positive and nourishing power rather than controlling power.</li>
            </ul>
            <p className="mt-2 font-bold">Phase 2: The Field Manual</p>
            <ul className="list-disc ml-6 mb-4">
              <li><b>Module 3: Practical Missions:</b> The cornerstone of this programme is putting theory into practice. You will be guided to take on bespoke missions that help you integrate what you've learned and will challenge you to break through existing patterns that keep you stuck with the same results. Instead you will open up new possibilities for connection and relationship that you can put into practice in your very own dating activities whether you have already been dating or are just starting out. We guide you through it all at every point you need it. You will rapidly get comfortable trying out new ways of communicating and transmitting your natural masculine energy. These powerful exercises are designed to prove that your fears are unfounded, build confidence and resilience.</li>
              <li><b>Module 4: Dating Without a Mask:</b> You will learn to "follow the energy" of an interaction instead of a script. This involves dropping your mental checklist of what you should and shouldn't do and learning to be free to act or speak even when feeling vulnerable or anxious in a specific situation in the dating cycle. We guide you through this in timely interventions so that you can leverage what you are learning at every point in the programme.</li>
            </ul>
            <p className="mt-2 font-bold">Phase 3: Integration & Community (Months 5-6)</p>
            <ul className="list-disc ml-6 mb-4">
              <li><b>Module 5: Building Your Tribe:</b> You will be encouraged and supported to build deeper, more authentic connections with other men. Having a strong male support system is crucial for accountability and navigating challenges. Expect the feeling of deep brotherhood as you and your fellow participants give up the competitive defensive instinct and instead connect on an equal footing in the dating game.</li>
              <li><b>Module 6: Dating with Integrity:</b> Learn the art of rejecting and being rejected with grace and being okay with any outcome. We will help you develop the ability to communicate your needs and boundaries clearly, hear the other person's needs and boundaries so that you can freely move from a passive people-pleasing stance to one of authentic leadership in your dating and relational life.</li>
            </ul>
            <h3 className="mt-6 mb-2 font-bold text-lg" style={{ color: '#D4E04F' }}>What's Included in The Programme:</h3>
            <ul className="list-disc ml-6 mb-4">
              <li><b>Weekly Group Coaching Calls:</b> Two calls per month to share experiences, receive direct coaching from Rowan, Kevin and Matt, and learn from the journeys of other men in the group.</li>
              <li><b>Direct input and feedback from women:</b> Our female coaches are on hand to deliver invaluable insights and feedback that will accelerate your learning and growth.</li>
              <li><b>Timely One-on-One Coaching Sessions and input when you need it:</b>  Scheduled coaching calls with a seasoned coach to work on your specific requirements and track your progress.</li>
              <li><b>Practical "Missions":</b> Real-world assignments we call them 'Games' to implement between sessions so that you get hands on practice - like a sandbox for your dating activity!</li>
              <li><b>Private Accountability Group:</b> A dedicated online forum for daily support, check-ins, and accountability with your "tribe."</li>
              <li><b>Accountability Partner:</b> You will be paired with another man in the programme to provide mutual support and ensure you stay on track with your missions and Rowan and his team will be your guide to ensure you get the full value of your investment.</li>
              <li><b>Video, audio and text content:</b>  Access to exclusive content to deepen your understanding and inspire you to think outside the box and grow as a lover</li>
            </ul>
            <p className="mt-4">This programme is an investment in a completely new way of being. It's for men who are ready to stop playing small and start creating the authentic, fulfilling dating, intimacy and relationship life they deserve. Becoming the authentic lover you are underneath the decades of conditioning.</p>
          </div>
        </div>
      </section>

      {/* Footer Section (optional, for consistency) */}
      <footer className="py-16 border-t border-border/20 relative z-10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="mb-6 flex items-center justify-center cursor-pointer">
            <img src={nmmngLogo} alt="NMMNG Logo" style={{ width: 220, height: 220, objectFit: 'contain' }} className="drop-shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
          <div className="flex gap-8 mb-4">
            <a href="https://rowan-associates.com" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1 cursor-pointer" style={{ fontSize: 16 }}>rowan-associates.com</a>
            <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="text-primary hover:underline ml-1 cursor-pointer" style={{ fontSize: 16 }}>nomoremrniceguy.co.uk</a>
          </div>
          <div className="text-muted-foreground text-sm flex flex-wrap items-center gap-2">
            &copy; {new Date().getFullYear()} Authentic Lover Blueprint. All rights reserved.
            <span>|</span>
            <span>Vibe coded by <a href="https://respira.cafe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">Respira</a></span>
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
      </CardContent>
    </Card>
  );
}

export default App

