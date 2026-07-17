import React from 'react';

interface ChallengeItem {
  icon: string;
  title: string;
  desc: string;
}

interface ExpertiseItem {
  icon: string;
  title: string;
  desc: string;
  outcome: string;
}

interface WhyChooseItem {
  icon: string;
  title: string;
  desc: string;
}

interface CommitmentItem {
  icon: string;
  title: string;
  desc: string;
}

export const WhatWeDo: React.FC = () => {
  
  const challenges: ChallengeItem[] = [
    { icon: "🌡️", title: "Climate Vulnerability", desc: "Marginalized border populations face severe droughts, heatwaves, and flooding, eroding agricultural safety nets and driving mass climate-induced displacement." },
    { icon: "⚖️", title: "Gender Inequality", desc: "Structural inequalities limit women's physical mobility, access to banking, and representation in local planning assemblies, excluding key stakeholders from climate actions." },
    { icon: "🏥", title: "Weak Health Systems", desc: "Rural primary clinics and Lady Health Worker networks lack the solar backups, mobile diagnostics, and resilient structures needed to function during floods." },
    { icon: "💧", title: "Water Insecurity", desc: "Over 2 billion people struggle with contaminated drinking water, causing widespread waterborne diseases and keeping children out of education." },
    { icon: "🏛️", title: "Limited Capacity", desc: "Provincial line departments struggle to monitor performance-based financing metrics, track ESG compliance, or execute gender budgets." },
    { icon: "📋", title: "Policy Gaps", desc: "The disconnect between national legislative guidelines (NCCP, NDCs) and provincial execution prevents development funding from reaching the field." },
    { icon: "🤝", title: "Community Resilience", desc: "Fragile border areas suffer from high rates of youth recidivism, social vulnerability, and conflicts over depleted natural resources." },
    { icon: "🌾", title: "Sustainable Livelihoods", desc: "Smallholder farmers and rural women lack access to green TVET skills, micro-utilities, and entrepreneurship incubator structures." }
  ];

  const roadmapSteps = [
    { step: "01", title: "Research" },
    { step: "02", title: "Evidence Generation" },
    { step: "03", title: "Policy Design" },
    { step: "04", title: "Capacity Building" },
    { step: "05", title: "Technical Assistance" },
    { step: "06", title: "Community Engagement" },
    { step: "07", title: "Implementation" },
    { step: "08", title: "Monitoring & Learning" },
    { step: "09", title: "Sustainable Impact" }
  ];

  const expertiseList: ExpertiseItem[] = [
    {
      icon: "🌍",
      title: "Climate & Environmental Resilience",
      desc: "Conducting GGESI climate vulnerability audits, designing local adaptation frameworks, and formulating environmental safeguards for infrastructure.",
      outcome: "Unlocked international adaptation financing and 100% compliance with multilateral environmental standards."
    },
    {
      icon: "🏥",
      title: "Climate-Resilient Healthcare",
      desc: "Strengthening rural health clinics with off-grid solar utilities, mobile diagnostics, and training healthcare workers in emergency health security.",
      outcome: "Designed health DLIs that secured funding and guaranteed uninterrupted primary care during floods."
    },
    {
      icon: "⚖️",
      title: "Gender Equality & Women's Leadership",
      desc: "Formulating provincial gender action plans, training women in climate policy, and auditing institutional budgets with a gender lens.",
      outcome: "Mainstreamed gender indicators into the National Internal Security Policy and security sectors."
    },
    {
      icon: "🏛️",
      title: "Public Policy & Governance",
      desc: "Providing technical assistance to Planning & Development departments to coordinate policy implementation between federal and provincial bodies.",
      outcome: "Developed strategic framework agreements aligning provincial priorities with national disaster policies."
    },
    {
      icon: "🌿",
      title: "ESG & Sustainability",
      desc: "Helping corporations and NGOs integrate social inclusivity and environmental safeguards into sustainable investment models.",
      outcome: "Assessed and audited supply chains to secure verified compliance with global ESG mandates."
    },
    {
      icon: "📊",
      title: "Research & Evidence Generation",
      desc: "Executing rigorous field surveys, baseline audits, and gender-disaggregated database management in Pakistan's border areas.",
      outcome: "Delivered data-driven gap analysis briefs utilized by UN bodies and international planning commissions."
    },
    {
      icon: "💧",
      title: "Water, Sanitation & Hygiene (WASH)",
      desc: "Installing solarized clean-water ATMs, micro-filter purification kiosks, and separate, secure WASH infrastructure for girls in public schools.",
      outcome: "Achieved an 80% reduction in waterborne illnesses in targeted districts and boosted school attendance."
    },
    {
      icon: "💼",
      title: "Inclusive Livelihoods",
      desc: "Supporting women-led water kiosks, access to mobile finance, and micro-loans that reinforce economic resilience in remote communities.",
      outcome: "Increased average household earnings for women participants by over 40%."
    },
    {
      icon: "🎓",
      title: "Capacity Building & Training",
      desc: "Training grassroots leaders, local councils, and young women in digital systems, clean tech maintenance, and financial literacy.",
      outcome: "Trained 500+ operators in green tech maintenance, ensuring long-term utility ownership."
    },
    {
      icon: "⚡",
      title: "Climate Technologies",
      desc: "Deploying off-grid solar micro-grids, PAYG household battery utilities, and distributing efficient clean-cooking stoves.",
      outcome: "Reduced indoor carbon smoke pollution and cut household energy costs by 60%."
    },
    {
      icon: "🧒",
      title: "Youth Leadership",
      desc: "Running advocacy bootcamps and volunteer structures that equip young women to lead regional environmental conservation initiatives.",
      outcome: "Established active student climate volunteer networks in colleges across Quetta and Islamabad."
    },
    {
      icon: "🏡",
      title: "Community Development",
      desc: "Preventing violent extremism (C/PVE) through localized insider mediation, community stabilization, and youth vocational TVET programs.",
      outcome: "Disengaged 1,000+ at-risk youth with a documented recidivism rate under 3%."
    }
  ];

  const deliverySteps = [
    { num: "01", title: "Understanding Local Context" },
    { num: "02", title: "Stakeholder Engagement" },
    { num: "03", title: "Research & Diagnostics" },
    { num: "04", title: "Strategic Design" },
    { num: "05", title: "Capacity Development" },
    { num: "06", title: "Policy Integration" },
    { num: "07", title: "Implementation Support" },
    { num: "08", title: "Impact Measurement" },
    { num: "09", title: "Long-Term Sustainability" }
  ];

  const sectors = [
    "Climate", "Health", "Gender", "Governance", "Water", 
    "Communities", "Education", "Technology", "Policy", "Environment"
  ];

  const whyChooseUs: WhyChooseItem[] = [
    { icon: "🎓", title: "Multidisciplinary Expertise", desc: "Led by PhD experts and certified practitioners with over 40 combined years directing portfolios for UNDP, UNHCR, and MSF." },
    { icon: "🤝", title: "Government Framework Partner", desc: "Official Framework Partner of the P&D Department of Balochistan, facilitating direct provincial health and policy coordination." },
    { icon: "📊", title: "Evidence-Based Consulting", desc: "Interventions grounded in empirical data-audits, gender-disaggregated datasets, and rigorous research methodologies." },
    { icon: "⚖️", title: "Gender-Responsive Programming", desc: "Pioneers in integrating GGESI safeguards, WPS strategies, and gender-responsive budgeting into public frameworks." },
    { icon: "🏡", title: "Community-Centered Design", desc: "Building local community ownership through certified insider mediation and localized vocational training." },
    { icon: "🏆", title: "Technical Excellence", desc: "Specialists in performance-based financing, third-party monitoring (TPM), and DLI compliance verification." }
  ];

  const commitments: CommitmentItem[] = [
    { icon: "✊", title: "Climate Justice", desc: "Advocating for the rights of climate-displaced families and securing adaptation finance for underserved border communities." },
    { icon: "✨", title: "Human Dignity", desc: "Ensuring every intervention secures safe drinking water, physical safety, health security, and access to clean utilities." },
    { icon: "📈", title: "Inclusive Growth", desc: "Designing financing and TVET structures that build wealth for marginalized women and youth entrepreneurs." },
    { icon: "⚖️", title: "Women's Empowerment", desc: "Expanding women's technical and administrative leadership in solar networks, public health, and local assemblies." }
  ];

  return (
    <div className="what-we-do-page" style={{ marginTop: '90px' }}>
      
      {/* 1. Hero Section */}
      <section className="section section-alt" style={{ 
        backgroundImage: 'linear-gradient(rgba(11, 19, 37, 0.45), rgba(3, 7, 18, 0.55)), url(/crossroad/what-we-do-hero.jpg)',
        backgroundSize: 'cover',
        
        padding: '13rem 0',
        backgroundPosition: 'center center', 
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)', letterSpacing: '0.1em' }}>Editorial Presentation</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
            Transforming Human Development into Sustainable Impact
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            We partner with governments, development organizations, civil society, donors, and communities to design practical, evidence-based solutions that improve lives, secure environmental justice, and strengthen institutional resilience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Partner With Us <span style={{ marginLeft: '5px' }}>→</span>
          </a>
        </div>
      </section>

      {/* 2. The Challenges We Address */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline" style={{ color: '#DC2626' }}>Systemic Bottlenecks</span>
            <h2 className="section-title">The Challenges We Address</h2>
            <p className="section-desc">Sustainable development requires first diagnosing the complex, interconnected vulnerabilities that local communities face.</p>
          </div>

          <div className="grid-4" style={{ marginTop: '3.5rem' }}>
            {challenges.map((challenge, idx) => (
              <div key={idx} className="editorial-challenge-card">
                <div className="challenge-badge-icon">{challenge.icon}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0B1325' }}>{challenge.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Approach (Roadmap Pipeline) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Methodological Pipeline</span>
            <h2 className="section-title">Our Strategic Approach</h2>
            <p className="section-desc">We follow a disciplined, 9-stage pipeline that guides our operations from baseline research to long-term impact auditing.</p>
          </div>

          <div className="roadmap-flow-container">
            {roadmapSteps.map((node, idx) => (
              <div key={idx} className="roadmap-node">
                <span className="roadmap-node-step">{node.step}</span>
                <span className="roadmap-node-title">{node.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Areas of Expertise */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-tagline">Sectors &amp; Advisory</span>
            <h2 className="section-title">Our Areas of Expertise</h2>
            <p className="section-desc">We combine data, technologies, and policies to deliver verified outcomes across 12 development pillars.</p>
          </div>

          <div className="grid-3" style={{ gap: '2.5rem' }}>
            {expertiseList.map((exp, idx) => (
              <div key={idx} className="expertise-card-editorial">
                <div className="icon-wrap">{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <div className="outcomes-box">
                  <strong>Expected Outcomes</strong>
                  <span>{exp.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Deliver Impact */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Operational Framework</span>
            <h2 className="section-title">Our Delivery Model</h2>
            <p className="section-desc">We ensure every policy implementation remains aligned with the local community's context and needs.</p>
          </div>

          <div className="delivery-flow-container">
            {deliverySteps.map((node, idx) => (
              <div key={idx} className="delivery-node">
                <span className="delivery-node-num">{node.num}</span>
                <span className="delivery-node-title">{node.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Evidence-Based Solutions */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3.5rem', background: '#F8FAFC', borderLeft: '4px solid var(--color-accent-teal)', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">Scientific Rigor</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.5rem 0 1.5rem', fontSize: '2.25rem' }}>Grounded in Empirical Evidence</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                We believe that public policy interventions fail when they are based on assumptions. That is why every CrossRoad consultancy is strictly driven by gender-disaggregated datasets, local baseline metrics, and community diagnostics.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', margin: 0 }}>
                By applying a GGESI and climate-security lens to health infrastructure and social stabilization, we help our partners structure results-based financing that satisfies international standards (ADB, WB, GFF, UN).
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🔬</span>
                <strong>Research &amp; Data</strong>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>⚖️</span>
                <strong>Gender Lens</strong>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🗺️</span>
                <strong>Policy Audits</strong>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📈</span>
                <strong>TPM &amp; MEAL</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Impact Across Sectors */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Integrated System Design</span>
            <h2 className="section-title">Interconnected Sector Impact</h2>
            <p className="section-desc">We do not execute isolated programs. Our strategy connects multiple sectors in a single development loop.</p>
          </div>

          <div className="sector-map-container">
            {sectors.map((sector, idx) => (
              <React.Fragment key={idx}>
                <div className="sector-node">{sector}</div>
                {idx < sectors.length - 1 && (
                  <span className="sector-connector-line">⟷</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SDGs Integration */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Global Objectives</span>
            <h2 className="section-title">Advancing the United Nations SDGs</h2>
            <p className="section-desc">We align our technical designs and policy briefs directly with the UN Sustainable Development Goals.</p>
          </div>

          <div className="grid-3" style={{ gap: '2rem', marginTop: '3.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-accent-green)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-white)' }}>SDG 5 &amp; 10: Reduced Inequalities</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                Mainstreaming women as solar utilities operators, executing gender audits, and providing targeted aid to Afghan refugee-hosting districts to close social inequalities.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid var(--color-accent-teal)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-white)' }}>SDG 3 &amp; 6: WASH &amp; Health Security</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                Installing automated solar Water ATMs, separate safe WASH toilets in schools, and upgrading clinics to ensure uninterrupted primary healthcare.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '2rem', borderTop: '4px solid #F59E0B' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text-white)' }}>SDG 7 &amp; 13: Clean Energy &amp; Climate Action</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
                Deploying off-grid solar micro-grids, PAYG household power sharing packs, and facilitating regional adaptation roundtables to unlock climate funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Organizations Work With Us */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Strategic Edge</span>
            <h2 className="section-title">Why Organizations Work With Us</h2>
            <p className="section-desc">We represent an empirical, highly qualified consultancy channel with deep coordination capacity in Pakistan.</p>
          </div>

          <div className="grid-3" style={{ gap: '2.5rem', marginTop: '3.5rem' }}>
            {whyChooseUs.map((choose, idx) => (
              <div key={idx} className="commitment-card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.75rem' }}>{choose.icon}</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-white)', marginBottom: '0.5rem' }}>{choose.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Our Commitment */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tagline">Core Ideals</span>
            <h2 className="section-title">Our Long-Term Commitment</h2>
            <p className="section-desc">Our work is guided by five foundational values that direct our partnerships and interventions.</p>
          </div>

          <div className="grid-2" style={{ gap: '2.5rem' }}>
            {commitments.map((commit, idx) => (
              <div key={idx} className="commitment-card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: '#F8FAFC', border: '1px solid var(--glass-border)' }}>
                <span style={{ fontSize: '2rem' }}>{commit.icon}</span>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-white)', marginBottom: '0.5rem' }}>{commit.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>{commit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section className="section section-alt" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--color-text-white)' }}>
            Creating Sustainable Change Through Knowledge, Partnership, and Action
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            We invite governments, development agencies, NGOs, donors, academic institutions, private sector organizations, and communities to collaborate with CrossRoad Consultants on building resilient, inclusive, and sustainable futures.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}>
              Partner With Us
            </a>
            <button className="btn btn-outline" onClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}>
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
