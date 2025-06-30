import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Shield, Target, Users, Heart, Brain, Compass, Star, Quote, MapPin, ArrowRight, Play, X } from 'lucide-react'
import heroBackground from './assets/8d6e8f-2c5c-d32a-115f-2432568ecf8_ChatGPT_Image_May_16_2025_01_36_29_PM.png'
import rowanAndRobert from './assets/2142387-8c6b-b7ec-0b0b-f24133d11b1_rowan_and_robert_glover-2.png'
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
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  // const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    // const observerCallback = (entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setVisibleElements(prev => new Set([...prev, entry.target.id]))
    //     }
    //   })
    // }

    // const observer = new IntersectionObserver(observerCallback, {
    //   threshold: 0.1,
    //   rootMargin: '0px 0px -50px 0px'
    // })

    // Observe all reveal elements
    // document.querySelectorAll('.reveal').forEach((el, index) => {
    //   el.id = `reveal-${index}`
    //   observer.observe(el)
    // })

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
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
      description: "Create the intimate partnership you crave, with the polarity and passion that keeps love alive for decades",
      delay: "100ms"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Sexual Authenticity",
      description: "Embrace your desires without shame, and learn to express your sexuality with confidence and respect",
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
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3 relative" style={{ alignItems: 'flex-end' }}>
              <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" style={{ position: 'relative', zIndex: 2 }}>
                <img src={nmmngLogo} alt="NMMNG Bootcamp Logo" style={{ height: 53, marginRight: 12, position: 'absolute', top: '-18px', left: 0, zIndex: 3 }} />
              </a>
              <h2 className="text-xl font-bold gradient-text nmmng-glow" style={{ marginLeft: 70 }}>NMMNG Bootcamp</h2>
            </div>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="btn-primary"
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="container mx-auto px-6 text-center z-10 relative">
          <div className="animate-fade-in-up">
            <h1 className="text-display mb-8">
              RECLAIM YOUR<br />
              <span className="gradient-text">AUTHENTIC POWER</span>
            </h1>
            <p className="text-subheading mb-12 max-w-4xl mx-auto text-muted-foreground">
              A Transformational Weekend Retreat for Men Ready to Lead
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="btn-primary animate-pulse-glow text-lg px-12 py-6"
              >
                SECURE YOUR PLACE TODAY
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary flex items-center gap-3"
              >
                <Play className="w-4 h-4" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
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
                  <p className="text-muted-foreground leading-relaxed">
                    The world is shifting beneath our feet. AI is reshaping careers overnight. Traditional paths to success are disappearing. The very definition of masculinity is being questioned and redefined. Meanwhile, we're still expected to have all the answers—to be providers, protectors, and leaders in a world that's changing faster than ever.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Yet most of us were never taught how to navigate this complexity. We learned to be "nice guys"—to please others, avoid conflict, and hide our true needs. We adapted by putting everyone else first, secretly hoping for approval and validation in return.
                  </p>
                </div>
                
                <div className="glass-light rounded-2xl p-8">
                  <p className="text-xl font-semibold text-primary mb-4">
                    But that survival strategy is failing us.
                  </p>
                  <p className="text-muted-foreground">
                    In an era where machines can outthink us and social media amplifies every mistake, the old playbook of people-pleasing and conflict avoidance isn't just limiting—it's dangerous.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-destructive">
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
        <div className="container mx-auto px-6">
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
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`bento-item${index === 7 ? ' lg:col-span-3' : ''}`}
                  style={{animationDelay: benefit.delay}}
                >
                  <div className="mb-6 animate-float" style={{animationDelay: benefit.delay}}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">{benefit.title}</h4>
                  <p className="text-muted-foreground text-center leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-32 nmmng-not-for-everyone">
        <div className="container mx-auto px-6">
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
                      <span>Are ready to take radical responsibility for your life</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <span>Are committed to showing up authentically and doing the work</span>
                     </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8">
              <p className="text-body-large text-muted-foreground">
                This process requires courage, vulnerability, and commitment. If that excites you, you\\'re in the right place. If it terrifies you but you know you need it, you\\'re definitely in the right place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text">
              YOUR GUIDE THROUGH THE TRANSFORMATION
            </h2>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center items-center">
                <div className="relative w-full">
                  <img 
                    src={rowanAndRobert} 
                    alt="Rowan Andrews with Dr. Robert Glover" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl p-4">
                      <p className="text-sm font-medium text-primary">Rowan Andrews with Dr. Robert Glover</p>
                      <p className="text-xs text-muted-foreground">Author of "No More Mr. Nice Guy"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 flex flex-col justify-center h-full">
                <div className="text-body-large space-y-6 text-muted-foreground">
                  <p>
                    Rowan Andrews has spent over twelve years guiding men through this exact journey. After his own awakening from the "nice guy" trap following his marriage breakdown, he trained with Dr. Robert Glover (author of "No More Mr. Nice Guy"), spiritual teachers David Deida and Rupert Spira, and created one of the UK's most successful men's groups.
                  </p>
                  <p>
                    As one of Dr. Glover's close associates and an endorsed facilitator, Rowan brings both professional expertise and lived experience to this work. He understands the challenges modern men face because he's navigated them himself.
                  </p>
                </div>
                <div className="glass rounded-2xl p-8">
                  <Quote className="w-12 h-12 text-primary mb-4" />
                  <blockquote className="text-xl italic text-white mb-4">
                    "To become the man you were born to be requires taking full responsibility for where you are today and choosing who you want to become tomorrow."
                  </blockquote>
                  <footer className="text-primary font-semibold">- Rowan Andrews</footer>
                </div>
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-8 gradient-text">
              WHAT PARTICIPANTS SAY
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <Card className={`testimonial-card h-full ${testimonial.featured ? 'border-primary/50' : ''}`}>
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
            <div className="max-w-4xl mx-auto flex justify-center">
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
        <div className="container mx-auto px-6 relative z-10">
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
              <div className="glass rounded-2xl p-8 my-12">
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-4 gradient-text">SECURE YOUR PLACE TODAY</h2>
            <div className="text-2xl font-extrabold mb-2" style={{ color: '#D4E04F', letterSpacing: '0.08em' }}>FIRST MOVER ADVANTAGE</div>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-body-large text-muted-foreground">
                This retreat runs over one intensive weekend and includes all materials, and ongoing support resources. <span className="text-primary font-bold"> Limited to 16 participants</span> to ensure deep, personal attention.
              </p>
              <div className="text-2xl font-bold gradient-text">Dates: 30-31st August</div>
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
            />
            {/* Member Discount Card */}
            <Card className="pricing-card" style={{ border: '2px solid #A67C52', background: '#fff', color: '#0D212D', minHeight: 320 }}>
              <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                <h4 className="text-xl font-bold mb-4 icon-brass">Advanced & Growth Plus Member Discount</h4>
                <p className="text-lg text-muted-foreground text-center mb-4">
                  If you are already part of the NMMNG community, Advanced or Growth Plus, you benefit from <span className="text-primary font-bold">ten per cent discount</span> as part of your membership.
                </p>
                <a href="#" className="text-sm underline text-[#0F4F40] hover:text-[#A67C52] transition-colors">Learn More about Membership</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sexy Footer */}
      <footer className="py-16 border-t border-border/20 bg-background/80">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="mb-6 flex items-center justify-center">
            <img src={nmmngLogo} alt="NMMNG Bootcamp Logo" style={{ height: 56 }} className="drop-shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
          <div className="flex gap-8 mb-4">
            <a href="https://rowan-associates.com" target="_blank" rel="noreferrer" className="text-lg font-semibold text-primary hover:underline transition-colors duration-200">rowan-associates.com</a>
            <a href="https://nomoremrniceguy.co.uk" target="_blank" rel="noreferrer" className="text-lg font-semibold text-primary hover:underline transition-colors duration-200">nomoremrniceguy.co.uk</a>
          </div>
          <div className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} NMMNG Bootcamp. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

// PriceCard component
function PriceCard({ title, price, original, offerLabel, offerDeadline, features, ctaText, ctaColor, ctaTextColor, featured }) {
  const [slashAnimated, setSlashAnimated] = useState(false);
  const priceRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setSlashAnimated(true), 400);
  }, []);

  return (
    <Card className={`pricing-card${featured ? ' featured' : ''}`} style={{ border: '2px solid #D4E04F', background: 'linear-gradient(135deg, #F5F5F5 80%, #E8F0E5 100%)', color: '#0D212D', minHeight: 'unset', height: 'auto', padding: 0, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
      <CardContent className="px-8 py-8 text-center flex flex-col h-full" style={{ padding: '2.5rem 2rem' }}>
        <h3 className="text-2xl font-bold mb-6" style={{ color: '#0F4F40', letterSpacing: '0.06em' }}>{title}</h3>
        <div className="mb-6 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-black" style={{ color: '#0F4F40' }}>£{price}</span>
            <span
              ref={priceRef}
              className={`text-xl font-semibold price-slash price-original text-muted-foreground${slashAnimated ? ' animated' : ''}`}
              onMouseEnter={() => setSlashAnimated(true)}
            >
              £{original}
            </span>
          </div>
          <Badge className="bg-[#D4E04F]/20 text-[#0F4F40] border-[#D4E04F]/30 mb-1">
            {offerLabel}
          </Badge>
          <div className="text-sm font-semibold" style={{ color: '#D4E04F', marginTop: 2 }}>{offerDeadline}</div>
        </div>
        <ul className="text-left space-y-4 mb-8 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckCircle className="w-7 h-7" style={{ color: '#0F4F40', marginTop: 2, flexShrink: 0 }} />
              <span style={{ color: '#0F4F40', fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.5 }}>{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full text-xl py-5 mt-auto rounded-xl font-bold${featured ? ' animate-pulse-glow' : ''}`}
          style={{ background: ctaColor, color: ctaTextColor, fontSize: '1.25rem', minHeight: 64 }}
          onClick={() => window.open('#', '_blank')}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default App

