import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };
  
  const statsRef = React.useRef<HTMLDivElement>(null);

  const partners = [
    { name: "UNDP", logo: "/crossroad/United-Nations-Development-Programme-UNDP-Pakistan-ngo.jpg" },
    { name: "USAID", logo: "/crossroad/USAID-Pakistan-ngo.jpg" },
    { name: "Aga Khan Foundation", logo: "/crossroad/logo-aga-khan.png" },
    { name: "HANDS", logo: "/crossroad/hands_logo.jpg" },
    { name: "FNF", logo: "/crossroad/fredrich.png" },
    { name: "Sungi", logo: "/crossroad/sungi-crossroad.png" },
    { name: "SWITCH", logo: "/crossroad/switch_crossroad_partner.png" },
    { name: "TCF", logo: "/crossroad/tcf_crossroad_logo.png" }
  ];

  const slides = [
    {
      tagline: "Human Development. Climate Technology. Gender Justice.",
      title: "Pioneering Equitable Solutions for Sustainable Futures",
      desc: "We work at the intersection of climate resilience and gender justice to build local capacity, deploy clean technologies, and guide national policy.",
      btnText: "Our Services",
      page: "what_we_do",
      video: "/home-page-video/cross-road-home.mp4"
    },
    {
      tagline: "Empowering Communities & Families",
      title: "Closing the Climate Gender Gap in Pakistan",
      desc: "Every Woman. Every Child. Enhancing women-led adaptation systems, clean cooking technologies, and safe clean-water infrastructure.",
      btnText: "Learn More",
      page: "sdgs",
      image: "/crossroad/slider_img_1.jpg"
    },
    {
      tagline: "Bridging Policy and Grassroots Action",
      title: "Rigorous Data. Inclusive Policy. Tangible Impact.",
      desc: "Providing government ministries, UN bodies, and international donors with critical gender-disaggregated climate research and strategic advisory.",
      btnText: "Who We Are",
      page: "who_we_are",
      image: "/crossroad/slider_img_2.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleFaqToggle = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  const problems = [
    {
      icon: "🏗️",
      title: "Outdated Infrastructure",
      desc: "Development projects and facilities (health clinics, schools, WASH centers) are highly vulnerable to climate disasters and lack resilient designs."
    },
    {
      icon: "📊",
      title: "GGESI Data Gaps",
      desc: "Social and climate interventions are often designed without gender-disaggregated audits, resulting in low demographic inclusivity."
    },
    {
      icon: "🕊️",
      title: "Unstable Post-Conflict Settings",
      desc: "High rates of youth unemployment and recidivism in border areas due to a lack of vocational incubation and structured peace mediation."
    },
    {
      icon: "🏛️",
      title: "Weak Capacity & Governance",
      desc: "Provincial line departments struggle to monitor results-based financing, secure international climate grants, or audit budgets."
    }
  ];

  const solutions = [
    {
      icon: "🏥",
      title: "Climate-Smart Engineering",
      desc: "We design and retrofit clinics, schools, and toilets to withstand floods and heatwaves, ensuring uninterrupted public services."
    },
    {
      icon: "⚖️",
      title: "Inclusion & WPS Policy",
      desc: "We draft gender strategies and Women, Peace and Security (WPS) frameworks to help ministries align with international donor standards."
    },
    {
      icon: "🧑‍🎓",
      title: "Mediation & Incubation",
      desc: "We run MIMC-certified insider mediation and TVET green-job setups to disengage at-risk youth and achieve <3% recidivism."
    },
    {
      icon: "📈",
      title: "Results-Based Financing",
      desc: "We formulate Disbursement-Linked Indicators (DLIs) and robust MEAL dashboards to track project funds transparently."
    }
  ];

  const services = [
    {
      icon: "🏥",
      title: "Health Systems Strengthening",
      whyNeeded: "Fragile primary health networks struggle to deploy resources under climate stress.",
      benefits: "Guarantees continuous maternal and RMNCAHN-G care, upgraded clinics, and trained Lady Health Workers.",
      process: "Assessments → DLI Formulation → Infrastructure Upgrades → Capacity Building",
      outcomes: "Strengthened healthcare delivery and verified donor fund disbursements."
    },
    {
      icon: "🏛️",
      title: "Governance & Conflict Resolution",
      whyNeeded: "Fragile border communities require grass-roots mediation systems to maintain stabilization.",
      benefits: "Promotes localized conflict resolution, prevents violent extremism (C/PVE), and trains mediators.",
      process: "Context Analysis → Insider Mediation Setup → Youth Dialogues → Reintegration",
      outcomes: "20,000+ citizens engaged in mediation with under 3% recidivism."
    },
    {
      icon: "⚖️",
      title: "Gender Mainstreaming & Inclusion",
      whyNeeded: "Interventions fail to empower women due to lack of gender audits and budgets.",
      benefits: "Mainstreams gender-responsive budgeting and provides independent e-mobility frameworks for women.",
      process: "Gender Gap Audits → Strategy Formulation → Capacity Training → Impact Tracking",
      outcomes: "Integrated GGESI safeguards matching World Bank and UN standards."
    },
    {
      icon: "🌍",
      title: "Climate Resilience & ESG Audits",
      whyNeeded: "Organizations must bridge the gap between climate actions and social safeguards.",
      benefits: "Provides rigorous Environmental & Social Safeguard audits and adaptation mapping.",
      process: "Vulnerability Auditing → ESG Safeguard Designs → Real-Time MEAL → Verification",
      outcomes: "100% compliance with international donor frameworks (ADB, WB)."
    }
  ];

  const chooseUs = [
    { icon: "🎓", title: "Experienced Leadership", desc: "Led by PhD experts and certified practitioners with over 40 combined years managing portfolios for UNDP, UNHCR, and MSF." },
    { icon: "🤝", title: "Official Framework Partner", desc: "Framework partner of the P&D Department of Balochistan, facilitating direct government coordination." },
    { icon: "📈", title: "Proven Outcomes", desc: "Empirical success: 1,000+ disengaged youth, 20,000+ mediation participants, and implemented RMNCAHN-G health DLIs." },
    { icon: "🛠️", title: "End-to-End Solutions", desc: "We handle the entire program lifecycle—from baseline data collection to infrastructure upgrades and MEAL verification." },
    { icon: "🔍", title: "Transparent Auditing", desc: "Specialized in results-based financing and third-party monitoring for verified donor disbursements." },
    { icon: "🎯", title: "Localized Regional Reach", desc: "Active networks and field experience in Balochistan border districts, KP Merged Areas, and South Punjab." }
  ];

  const processes = [
    { step: "01", title: "Discover", desc: "Vulnerability mapping, data gap audits, and baseline research." },
    { step: "02", title: "Plan", desc: "Formulating DLI indicators, ESG frameworks, and policy structures." },
    { step: "03", title: "Design", desc: "Drafting climate-resilient blueprints and GGESI action plans." },
    { step: "04", title: "Develop", desc: "Executing facility upgrades, teacher training, and TVET setups." },
    { step: "05", title: "Test", desc: "Auditing compliance safeguards and testing diagnostic systems." },
    { step: "06", title: "Launch", desc: "Handover of solar grids, water kiosks, and activated programs." },
    { step: "07", title: "Support", desc: "Third-party monitoring, dashboard analysis, and policy roundtables." }
  ];

  const industries = [
    { icon: "🏛️", title: "Government Departments", desc: "Providing technical assistance and DLI audits to Planning & Development and Health ministries." },
    { icon: "🌍", title: "International NGOs", desc: "Coordinating field execution and ESG compliance with UNDP, UN Women, and USAID." },
    { icon: "🌾", title: "Rural Communities", desc: "Deploying solar micro-grids, e-mobility, and clean-cooking WASH solutions to rural families." },
    { icon: "💼", title: "Private Sector & PPPs", desc: "Structuring ESG frameworks and sustainable investments for corporate organizations." }
  ];

  const portfolio = [
    {
      tag: "Health & Finance",
      title: "Balochistan Health DLIs",
      challenge: "Provincial healthcare systems lacked verifiable indicators to unlock international health financing.",
      solution: "Designed and implemented 4 Disbursement-Linked Indicators (DLIs) for maternal and child care.",
      tech: "Results-Based Financing (RBF) frameworks, MEAL tracking dashboards.",
      impact: "Successfully unlocked donor funding and upgraded primary health facilities across Balochistan."
    },
    {
      tag: "Social Stabilization",
      title: "Youth Reintegration",
      challenge: "High social vulnerability and lack of vocational opportunities for youth in border districts.",
      solution: "Established a C/PVE initiative in South Punjab with certified MIMC insider mediation and TVET setups.",
      tech: "MHPSS diagnostic frameworks, green-job vocational tools.",
      impact: "Disengaged 1,000+ at-risk youth with a documented recidivism rate under 3%."
    },
    {
      tag: "GGESI Auditing",
      title: "UNODC Gender Audits",
      challenge: "Lack of structural gender-disaggregated datasets in security and criminal justice departments.",
      solution: "Conducted comprehensive institutional gender gap audits and drafted provincial strategies.",
      tech: "Gender-responsive budgeting models, policy assessment briefs.",
      impact: "Successfully integrated gender compliance indicators into national policy frameworks."
    }
  ];

  const testimonials = [
    {
      text: "Dr. Simbal and her team possess a native understanding of Balochistan's development challenges. Their framework partnership with P&D Balochistan has unlocked critical coordination pathways.",
      author: "Provincial P&D Director",
      org: "Government Stakeholder",
      rating: 5
    },
    {
      text: "CrossRoad's design of Results-Based Financing and DLI monitoring was critical to our healthcare portfolio. They bridged the gap between policy goals and verified field outcomes.",
      author: "Senior Health Advisor",
      org: "International Donor Agency",
      rating: 5
    },
    {
      text: "Their community stabilization models are empirical. Achieving under 3% recidivism through local mediation is a model we look forward to scaling nationally.",
      author: "Program Lead",
      org: "Peace & Governance Coalition",
      rating: 5
    }
  ];

  const faqs = [
    {
      q: "Is CrossRoad Consultants registered with SECP?",
      a: "Yes. CrossRoad Consultants Private Limited is fully registered under the Securities and Exchange Commission of Pakistan (SECP) as a private limited company (established in 2025). We operate under strict corporate governance guidelines."
    },
    {
      q: "How does your Balochistan P&D Framework Partnership work?",
      a: "As an official Framework Partner with the Planning & Development (P&D) Department, Government of Balochistan, we provide technical assistance, execute provincial surveys, design DLI metrics, and coordinate project execution between international donors and provincial departments."
    },
    {
      q: "Which regions of Pakistan do you cover?",
      a: "We offer nationwide coverage. Our team specializes in field interventions in challenging, remote, and border regions, including Balochistan (Quetta, Chagai, Nushki, Kharan), KP Newly Merged Areas (ex-FATA), South Punjab, and rural/coastal Sindh."
    },
    {
      q: "Can you coordinate projects directly with international donors?",
      a: "Yes. We have over 40 years of combined leadership experience working directly with UN agencies (UNDP, UN Women, UNHCR, UNODC, WHO), development banks (World Bank, ADB), and bilateral donors (FCDO, USAID) to coordinate large-scale development portfolios."
    }
  ];

  return (
    <div className="home-page">
      {/* 1. Hero Section (Keep but Improve) */}
      <section className="slider-container" style={{ marginTop: '0' }}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={slide.image ? {
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat'
            } : {}}
          >
            {slide.video && (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            )}
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <span className="slide-tagline">{slide.tagline}</span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-desc">{slide.desc}</p>
              
              {/* CTAs */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a href="#contact" className="btn btn-primary">
                  {slide.btnText} <span style={{ marginLeft: '5px' }}>→</span>
                </a>
                <button className="btn btn-outline" style={{ border: '2.5px solid #FFFFFF', color: '#FFFFFF' }} onClick={() => setCurrentPage('who_we_are')}>
                  Corporate Profile
                </button>
              </div>

              {/* Trust Indicators */}
              <div style={{ 
                marginTop: '3.5rem', 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2.5rem', 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: 'rgba(255, 255, 255, 0.85)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                flexWrap: 'wrap'
              }}>
                <span>🛡️ SECP Registered</span>
                <span>🤝 Balochistan P&amp;D framework partner</span>
                <span>💼 40+ Years Experience</span>
              </div>
            </div>
          </div>
        ))}
        
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous slide">‹</button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Next slide">›</button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* 2. The Problem Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline" style={{ color: '#DC2626' }}>Critical Bottlenecks</span>
            <h2 className="section-title">The Challenges We Address</h2>
            <p className="section-desc">Governments, development agencies, and NGOs face systemic obstacles that delay progress and dilute program impact.</p>
          </div>

          <div className="grid-4" style={{ marginTop: '3.5rem' }}>
            {problems.map((prob, idx) => (
              <div key={idx} className="problem-card">
                <div className="problem-icon">{prob.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0B1325' }}>{prob.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Solution Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Integrated Approach</span>
            <h2 className="section-title">Our Solutions</h2>
            <p className="section-desc">We deliver verified, outcomes-based solutions that connect international funding with localized execution.</p>
          </div>

          <div className="grid-4" style={{ marginTop: '3.5rem' }}>
            {solutions.map((sol, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-icon">{sol.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0B1325' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Us Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="section-tagline">Who We Are</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.5rem 0 1.5rem' }}>Committed to Resilient &amp; Inclusive Transformation</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                CrossRoad Consultants Private Limited is a women-led development consultancy specializing in health systems strengthening, youth empowerment, education reform, nutrition security, social cohesion, and climate resilience.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                As an official Framework Partner with the Balochistan P&amp;D Department, we deliver evidence-based programs that strengthen institutions and empower communities across Pakistan's most challenging regions.
              </p>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('who_we_are')}>
                Learn More About Us
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent-green)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>Our Vision</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  Resilient and equitable communities across Pakistan, where health systems function effectively, youth are economically empowered, and women participate fully in development and decision-making.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent-teal)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>Our Mission</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  Integrated development solutions that strengthen health systems, empower women and youth, foster social cohesion, and advance climate resilience through evidence-based programming, strategic government partnerships, and community-focused approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Very Detailed) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Our Focus Areas</span>
            <h2 className="section-title">Comprehensive Consultancy Services</h2>
            <p className="section-desc">Explore how we help development agencies and provincial governments execute policy and track outcomes.</p>
          </div>

          <div className="grid-2" style={{ gap: '3rem', marginTop: '3.5rem' }}>
            {services.map((srv, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.25rem' }}>{srv.icon}</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-white)', margin: 0 }}>{srv.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', lineHeight: '1.5' }}>
                  <p><strong className="portfolio-detail-label">Why It's Needed:</strong> <span style={{ color: 'var(--color-text-muted)' }}>{srv.whyNeeded}</span></p>
                  <p><strong className="portfolio-detail-label">Key Benefits:</strong> <span style={{ color: 'var(--color-text-muted)' }}>{srv.benefits}</span></p>
                  <p><strong className="portfolio-detail-label">Our Process:</strong> <span style={{ color: 'var(--color-text-muted)' }}>{srv.process}</span></p>
                  <p><strong className="portfolio-detail-label">Expected Outcomes:</strong> <span style={{ color: 'var(--color-text-muted)' }}>{srv.outcomes}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button className="btn btn-primary" onClick={() => setCurrentPage('what_we_do')}>
              Explore Detailed 3D Services Tab Stage
            </button>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Why CrossRoad</span>
            <h2 className="section-title">Our Strategic Advantages</h2>
            <p className="section-desc">We bring unmatched capacity, legal credentials, and empirical evidence to development planning.</p>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem', marginTop: '3.5rem' }}>
            {chooseUs.map((choose, idx) => (
              <div key={idx} className="why-choose-card">
                <div className="why-choose-icon">{choose.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>{choose.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Process Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Workflow</span>
            <h2 className="section-title">Our 7-Step Implementation Process</h2>
            <p className="section-desc">From baseline audits to third-party verification and long-term donor reporting.</p>
          </div>

          <div className="process-flow-container">
            {processes.map((proc, idx) => (
              <div key={idx} className="process-step-card">
                <div className="process-step-num">{proc.step}</div>
                <h4 className="process-step-title">{proc.title}</h4>
                <p className="process-step-desc">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries We Serve Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Partners &amp; Beneficiaries</span>
            <h2 className="section-title">Sectors We Assist</h2>
            <p className="section-desc">We bridge high-level policy guidelines with transparent localized execution for different stakeholders.</p>
          </div>

          <div className="grid-4" style={{ marginTop: '3.5rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Portfolio / Case Studies Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Case Studies</span>
            <h2 className="section-title">Our Proven Track Record</h2>
            <p className="section-desc">Examine our concrete contributions, project methodologies, and verified stakeholder impacts.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '3.5rem' }}>
            {portfolio.map((port, idx) => (
              <div key={idx} className="portfolio-card">
                <div className="portfolio-img-wrap">
                  <img src={idx === 0 ? "/crossroad/machhapuchhare-2024-12-05-18-24-09-utc.jpg" : (idx === 1 ? "/crossroad/sdgs_pic.jpg" : "/crossroad/what-we-do-hero.jpg")} alt={port.title} />
                  <span className="portfolio-tag">{port.tag}</span>
                </div>
                <div className="portfolio-info">
                  <h3>{port.title}</h3>
                  <div className="portfolio-detail-item">
                    <span className="portfolio-detail-label">Challenge:</span> <span style={{ color: 'var(--color-text-muted)' }}>{port.challenge}</span>
                  </div>
                  <div className="portfolio-detail-item">
                    <span className="portfolio-detail-label">Our Solution:</span> <span style={{ color: 'var(--color-text-muted)' }}>{port.solution}</span>
                  </div>
                  <div className="portfolio-detail-item" style={{ marginBottom: 0 }}>
                    <span className="portfolio-detail-label">Tools &amp; Outcomes:</span> <span style={{ color: 'var(--color-text-muted)' }}>{port.tech}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Feedback</span>
            <h2 className="section-title">Stakeholder Testimonials</h2>
            <p className="section-desc">What our government partners and donor representatives say about our consulting outputs.</p>
          </div>

          <div className="grid-3" style={{ marginTop: '3.5rem' }}>
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="testimonial-stars">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{test.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {test.author.charAt(0)}
                  </div>
                  <div className="testimonial-meta">
                    <h4>{test.author}</h4>
                    <span>{test.org}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Statistics Section (Scrolling Count-up) */}
      <section className="container stats-banner" ref={statsRef}>
        <div className="stats-grid">
          <div className="grid-3">
            <div className="stat-item">
              <div className="stat-val">
                {statsVisible ? <AnimatedCounter end={80} suffix="%" /> : "0%"}
              </div>
              <div className="stat-lbl">of climate-displaced citizens in Pakistan are women (UN Report)</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                {statsVisible ? <AnimatedCounter end={148} suffix="th" /> : "0th"}
              </div>
              <div className="stat-lbl">on Global Gender Gap Index, prompting gender budget reforms</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">
                {statsVisible ? <AnimatedCounter end={164} suffix="th" /> : "0th"}
              </div>
              <div className="stat-lbl">on HDI, calling for direct primary health investments</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Mission Partners */}
      <section className="section section-alt" style={{ overflow: 'hidden', padding: '5.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tagline">Collaboration</span>
          <h2 style={{ marginBottom: '3rem', fontSize: '2rem', fontWeight: 800 }}>Mission Partners</h2>
          
          <div className="logo-ticker-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
            <div className="logo-ticker-track" style={{ display: 'flex', gap: '4rem', width: 'max-content' }}>
              {[...partners, ...partners].map((partner, idx) => (
                <div key={idx} className="logo-ticker-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80px', width: '160px' }}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      objectFit: 'contain',
                      filter: 'grayscale(1) opacity(0.7)',
                      transition: 'all 0.3s'
                    }} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'grayscale(0) opacity(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'grayscale(1) opacity(0.7)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. Latest News */}
      <section className="section container">
        <div className="section-header">
          <span className="section-tagline">Newsroom</span>
          <h2 className="section-title">Latest News</h2>
          <p className="section-desc">Stay informed about our team's active engagements, policy roundtables, and regional interventions.</p>
        </div>

        <div className="grid-3" style={{ gap: '2rem', marginTop: '3.5rem' }}>
          {/* News 1 */}
          <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src="/crossroad/WhatsApp-Image-2025-10-08-at-15.08.35.jpeg" 
                alt="PPPA Strategic Meeting" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>8 Oct, 2025</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0', color: 'var(--color-text-white)', fontWeight: 700 }}>PPPA Strategic Meeting</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                Crossroad Consultants’ team meeting with the Public Private Partnership Authority team at the PPPA office in the Evacuee Trust Building, 5th Floor, F/5, Islamabad.
              </p>
            </div>
          </div>

          {/* News 2 */}
          <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src="/crossroad/WhatsApp-Image-2025-09-26-at-16.35.34.jpeg" 
                alt="CEO Speaks on Emerging Tech" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>25 Sep, 2025</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0', color: 'var(--color-text-white)', fontWeight: 700 }}>CEO Speaks on Emerging Tech</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                Dr. Simbal Khan, CEO of Women in Climate (WiC), speaking at the IRS event on Emerging Technologies and the Future of Counterterrorism Operations in the Pakistan-Afghanistan Border Areas.
              </p>
            </div>
          </div>

          {/* News 3 */}
          <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src="/crossroad/WhatsApp-Image-2025-09-26-at-16.35.35.jpeg" 
                alt="IRS Panel on Border Operations" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>25 Sep, 2025</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0', color: 'var(--color-text-white)', fontWeight: 700 }}>IRS Panel on Border Operations</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                Panel discussion on Emerging Technologies and the Future of Counterterrorism Operations in the Pakistan-Afghanistan Border Areas, featuring Dr. Simbal Khan.
              </p>
            </div>
          </div>

          {/* News 4 */}
          <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src="/crossroad/WhatsApp-Image-2025-09-26-at-17.39.12.jpeg" 
                alt="Balochistan Stakeholder Engagement" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>July 30, 2025</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0', color: 'var(--color-text-white)', fontWeight: 700 }}>Balochistan Stakeholder Engagement</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                Crossroad Consultants’ team visit to Quetta to strengthen partnerships with government stakeholders on human development in Balochistan.
              </p>
            </div>
          </div>

          {/* News 5 */}
          <div className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', padding: 0 }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img 
                src="/crossroad/WhatsApp-Image-2025-09-26-at-16.35.35-1.jpeg" 
                alt="IRS Panel on Regional Security" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-green)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>25 Sep, 2025</span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.75rem 0', color: 'var(--color-text-white)', fontWeight: 700 }}>IRS Panel on Regional Security</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, margin: 0 }}>
                Dr. Simbal Khan speaking at the Institute of Regional Studies event on the role of emerging technologies in counterterrorism and regional security.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button className="btn btn-secondary" onClick={() => setCurrentPage('resource_center')}>
            Visit News &amp; Resources
          </button>
        </div>
      </section>

      {/* 14. Newsletter Subscription */}
      <section className="section section-alt" style={{ background: '#0B1325', color: '#FFFFFF', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '750px', textAlign: 'center' }}>
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)' }}>Subscribe</span>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', color: '#FFFFFF', fontWeight: 800 }}>Join Our Newsletter</h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Subscribe to our policy briefings, climate vulnerability reports, and community updates. Join over 5,000+ policymakers, development partners, and researchers.
          </p>
          
          {newsletterSubmitted ? (
            <div style={{ padding: '1.5rem', background: 'rgba(86, 192, 42, 0.1)', border: '1px solid var(--color-accent-green)', borderRadius: '8px', color: 'var(--color-text-white)', fontWeight: 600 }}>
              ✓ Thank you! You have successfully subscribed to CrossRoad policy briefs.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
                style={{
                  padding: '1rem 1.5rem',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#FFFFFF',
                  flexGrow: 1,
                  maxWidth: '450px',
                  outline: 'none'
                }}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">Answering crucial questions about our credentials, framework status, and donor alignments.</p>
          </div>

          <div className="faq-list" style={{ marginTop: '3.5rem' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => handleFaqToggle(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Call-To-Action (CTA) Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, rgba(11, 19, 37, 0.95), rgba(3, 7, 18, 0.98)), url(/crossroad/what-we-do-hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#FFFFFF' }}>Empower Your Next Development Intervention</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Liaise with our SECP-registered women-led team to audit GGESI benchmarks, structure health DLIs, or design resilient local infrastructure.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ display: 'inline-block' }}>
            Schedule Free Consultation Request
          </a>
        </div>
      </section>

      {/* 14. Contact Section */}
      <section className="section" style={{ background: '#FFFFFF' }} id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Get In Touch</span>
            <h2 className="section-title">Contact Our Offices</h2>
            <p className="section-desc">Submit a proposal request or get in touch with our team in Islamabad and Quetta.</p>
          </div>

          <div className="contact-grid" style={{ marginTop: '3.5rem' }}>
            {/* Form */}
            <div className="contact-card-info" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-white)' }}>Send Us a Message</h3>
              
              {formSubmitted ? (
                <div style={{ padding: '1.5rem', background: 'rgba(86, 192, 42, 0.1)', border: '1px solid var(--color-accent-green)', borderRadius: '8px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  ✓ Thank you! Your proposal/consultation request has been successfully submitted. Our team will contact you within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group-redesign">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control-redesign" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group-redesign">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control-redesign" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group-redesign">
                    <label>Subject / Sector Focus</label>
                    <input 
                      type="text" 
                      className="form-control-redesign" 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="form-group-redesign">
                    <label>Message / Consultation Details</label>
                    <textarea 
                      rows={5} 
                      required 
                      className="form-control-redesign"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
                </form>
              )}
            </div>

            {/* Office Info & Mock Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--color-text-white)' }}>Headquarters</h3>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon">📍</span>
                  <div>
                    <strong>Islamabad Office</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>House 5, Street 4, F/8-3, Islamabad, Pakistan.</p>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--color-text-white)', marginTop: '2rem' }}>Regional Office</h3>
                <div className="contact-detail-row">
                  <span className="contact-detail-icon">📍</span>
                  <div>
                    <strong>Quetta Office</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Office 57, Mountain View Tech Park, Mehar Dar Trail, Marriabad, Quetta.</p>
                  </div>
                </div>

                <div className="contact-detail-row" style={{ marginTop: '2rem' }}>
                  <span className="contact-detail-icon">✉️</span>
                  <div>
                    <strong>Direct Communications</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>simbal.khan@gmail.com</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>ghaznas@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Mock Map Iframe Container */}
              <div className="map-container-mock">
                <iframe 
                  title="CrossRoad Office Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5714704043993!2d73.03719467634356!3d33.72005477328229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9c16823af7%3A0xe7f9bcf0407cc583!2sF-8%20Sector%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 15. Call to Action (Footer is global, so it's implemented in App.tsx) */}
    </div>
  );
};
