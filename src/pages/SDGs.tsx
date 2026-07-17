import React, { useState } from 'react';

interface SDGItem {
  number: number;
  name: string;
  focus: string;
  image: string;
  statVal: string;
  statLbl: string;
  globalContext: string;
  contribution: string;
  impact: string;
}

interface SDGsProps {
  setCurrentPage: (page: string) => void;
}

export const SDGs: React.FC<SDGsProps> = ({ setCurrentPage }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const sdgList: SDGItem[] = [
    {
      number: 1,
      name: "No Poverty",
      focus: "Economic Inclusion & Micro-Utilities",
      image: "/crossroad/SDG-1.png",
      statVal: "40%+",
      statLbl: "Average Household Income Increase",
      globalContext: "More than 700 million people globally live in extreme poverty, struggling to meet basic human needs such as food, water, healthcare, and education. In Pakistan, climate shocks like major floods push millions of rural families back below the poverty line every year due to crop failures and asset destruction.",
      contribution: "CrossRoad Consultants designs and implements targeted economic inclusion systems, such as micro-franchised Water Kiosks and local solar utility ownership programs. We help women-led households transition from survival to self-sufficiency by deploying mobile-banking micro-loans and vocational toolkits.",
      impact: "Our programs establish long-term economic independence by creating durable local micro-economies. Families gain resilience against seasonal economic disruptions, children are freed from manual labor to attend schools, and local entrepreneurship thrives."
    },
    {
      number: 2,
      name: "Zero Hunger",
      focus: "Climate-Smart Irrigation & Storage",
      image: "/crossroad/SDG-2.png",
      statVal: "3x",
      statLbl: "Increase in Annual Crop Cycles",
      globalContext: "Droughts, floods, and erratic monsoons are accelerating global food insecurity, leaving over 800 million people undernourished. Smallholder farmers bear the brunt of these disruptions, losing entire yields to extreme weather events due to a lack of climate-resilient farming techniques.",
      contribution: "We deploy solarized drip irrigation systems, smart greenhouse technologies, and temperature-controlled post-harvest crop storage units to insulate local agricultural yields from climate stress and heatwaves.",
      impact: "Farming communities achieve year-round food security, increase yield reliability by 60%, and generate agricultural surpluses that can be sold in regional markets, boosting local agro-entrepreneurship."
    },
    {
      number: 3,
      name: "Good Health & Well-being",
      focus: "Disaster-Resilient Primary Care",
      image: "/crossroad/sdg3-en.png",
      statVal: "10k+",
      statLbl: "Maternal Patients Assisted Safely",
      globalContext: "Millions of mothers and children in remote areas lack access to basic primary healthcare, resulting in preventable mortality. Climate disasters frequently damage clinics and disrupt supply chains when services are needed most, leaving rural districts isolated.",
      contribution: "We design and audit maternal health Disbursement-Linked Indicators (DLIs), upgrade rural clinics to be flood-resilient, and train community health workers in digital diagnostic tools.",
      impact: "Secures uninterrupted healthcare delivery during climate emergencies, dramatically reduces maternal mortality rates, and builds local trust in public health institutions."
    },
    {
      number: 5,
      name: "Gender Equality",
      focus: "GGESI Auditing & E-Mobility",
      image: "/crossroad/sdg5-en.png",
      statVal: "500+",
      statLbl: "Women Solar & Transit Technicians",
      globalContext: "Systemic gender gaps limit women's physical mobility, financial agency, and representation in public decision-making. Women represent the vast majority of those displaced by climate change, yet hold minimal leadership roles.",
      contribution: "We conduct institutional gender audits, design gender-responsive budgeting systems, train women as off-grid solar engineers, and deploy female-owned electric bike transit networks.",
      impact: "Unlocks physical and economic independence for women in conservative regions, shifts social norms toward female technical leadership, and ensures gender-inclusive development planning."
    },
    {
      number: 6,
      name: "Clean Water & Sanitation",
      focus: "Solar WASH & Safe Water ATMs",
      image: "/crossroad/SDG-6.png",
      statVal: "80%",
      statLbl: "Reduction in Waterborne Diseases",
      globalContext: "Over 2 billion people lack access to safely managed drinking water, and billions live without basic sanitation. In remote and refugee-hosting areas, collecting water consumes hours of manual labor, mostly affecting women and girls.",
      contribution: "We construct solar-powered clean-water purification kiosks (Water ATMs), deploy micro-filtration units, and engineer separate sanitation facilities for girls in rural schools.",
      impact: "Drastically reduces waterborne illness, restores hours of productive time to women and children, and keeps young girls in school by providing private, safe sanitation."
    },
    {
      number: 7,
      name: "Affordable & Clean Energy",
      focus: "Solarization & PAYG Utilities",
      image: "/crossroad/sdg7-en.png",
      statVal: "50k+",
      statLbl: "Off-Grid Citizens Powered Cleanly",
      globalContext: "Roughly 700 million people live in complete energy darkness, relying on toxic kerosene and firewood. This limits economic operations, halts education after sunset, and causes severe respiratory diseases.",
      contribution: "We engineer off-grid community solar micro-grids, install Pay-As-You-Go (PAYG) household power systems, and deploy clean-cooking biomass and electric stoves.",
      impact: "Eliminates harmful indoor air pollution, reduces energy expenditure by 60%, and powers local micro-businesses, evening classes, and critical health devices."
    },
    {
      number: 8,
      name: "Decent Work & Economic Growth",
      focus: "Green TVET & Youth Incubation",
      image: "/crossroad/sdg8-en.png",
      statVal: "100%",
      statLbl: "Green Job Placement Rate",
      globalContext: "High youth unemployment rates limit regional stability and lead to disenfranchisement. Transitioning to a green economy requires training a new generation of technical operators.",
      contribution: "We run green-technology TVET bootcamps, incubate local technicians in solar grid maintenance, and support women-led micro-enterprises with business training.",
      impact: "Empowers youth in border areas with market-demanded technical skills, driving sustainable economic growth and local wealth creation."
    },
    {
      number: 10,
      name: "Reduced Inequalities",
      focus: "Refugee & Intersectional Inclusion",
      image: "/crossroad/sdg10-en.png",
      statVal: "25k+",
      statLbl: "Displaced & Refugee Citizens Assisted",
      globalContext: "Systemic marginalization and displacement leave refugees, indigenous groups, and remote minorities excluded from national development plans and basic infrastructure.",
      contribution: "We design targeted resource distribution systems and capacity-building programs specifically tailored for Afghan refugees, displaced coastal families, and minority women.",
      impact: "Restores dignity and legal access for displaced groups, builds social cohesion, and prevents localized conflicts over scarce development resources."
    },
    {
      number: 11,
      name: "Sustainable Cities & Communities",
      focus: "Resilient Infrastructure & Safe Spaces",
      image: "/crossroad/sdg_11.png",
      statVal: "30+",
      statLbl: "Municipal Blueprints Upgraded",
      globalContext: "Rapid, unplanned urbanization creates highly vulnerable settlements that lack green spaces, safe transport, and resilience against flash flooding.",
      contribution: "We consult on inclusive municipal blueprints, design safe public facilities, and audit zero-emission public transit routes for municipal departments.",
      impact: "Reduces municipal carbon emissions, ensures physical safety for female commuters, and builds local government capacity to plan climate-resilient cities."
    },
    {
      number: 13,
      name: "Climate Action",
      focus: "Women in Climate Policy Forum",
      image: "/crossroad/sdg_13.png",
      statVal: "100%",
      statLbl: "GGESI Safeguard Compliance",
      globalContext: "Climate change is driving extreme disasters that hit Pakistan first and hardest. Aligning policy with international adaptation standards is critical to secure global climate financing.",
      contribution: "We lead provincial climate adaptation planning, conduct environmental risk audits, and run the 'Women in Climate' forum to lobby for gender-responsive climate finance.",
      impact: "Unlocks international climate adaptation grants, builds national institutional capacity, and strengthens community defenses against natural disasters."
    },
    {
      number: 16,
      name: "Peace, Justice & Strong Institutions",
      focus: "Youth Reintegration & Mediation",
      image: "/crossroad/SDG_16.png",
      statVal: "<3%",
      statLbl: "Youth Recidivism Rate Achieved",
      globalContext: "Local conflicts, weak institutional accountability, and social instability derail sustainable development. Establishing grass-roots justice and mediation mechanisms is critical for peace.",
      contribution: "We train local insider mediators, lead community peace dialogues, and design accountability metrics for provincial public institutions.",
      impact: "Successfully reintegrates at-risk youth into the local economy, resolves community resource conflicts peacefully, and strengthens public trust in state institutions."
    },
    {
      number: 17,
      name: "Partnerships for the Goals",
      focus: "Provincial & Donor Coalitions",
      image: "/crossroad/SDG-17.png",
      statVal: "12+",
      statLbl: "Multilateral Partnerships Executed",
      globalContext: "The scale of the SDGs requires close collaboration between sovereign governments, international donors, technical consultancies, and local community organizations.",
      contribution: "We coordinate joint development portfolios linking the Balochistan Government P&D Department with UN bodies (UNDP, UN Women), USAID, and rural support networks.",
      impact: "Maximizes project coordination, prevents resource duplication, and builds a sustainable framework for scaling development models nationwide."
    }
  ];

  const activeSdg = sdgList[selectedIdx];

  return (
    <div className="sdgs-page" style={{ marginTop: '90px' }}>
      {/* 1. Page Hero Banner */}
      <section className="section section-alt" style={{ 
        backgroundImage: 'linear-gradient(rgba(11, 19, 37, 0.45), rgba(3, 7, 18, 0.55)), url(/crossroad/sdgs_pic.jpg)',
        backgroundSize: 'cover',
        
        padding: '13rem 0',
        backgroundPosition: 'center center', 
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)' }}>Global Alignment</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>Sustainable Development Goals (SDGs)</h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.6' }}>
            We align our technical designs, public advisory systems, and conflict-stabilization programs with the United Nations 2030 Agenda, translating global commitments into verifiable local impact.
          </p>
        </div>
      </section>

      {/* 2. Educational Introduction Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-tagline">Foundational Framework</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.5rem 0 1.5rem', fontSize: '2.25rem' }}>Why the SDGs Guide Our Strategy</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                Adopted by all United Nations Member States in 2015, the 17 Sustainable Development Goals represent a shared blueprint for peace and prosperity. They address global challenges including poverty, inequality, climate change, environmental degradation, and institutional fragility.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                At CrossRoad Consultants, we believe sustainable growth is impossible without intersectional justice. By embedding SDG compliance into our designs, we help provincial governments and development partners satisfy the stringent Environmental, Social, and Governance (ESG) guidelines required by international donors.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', margin: 0 }}>
                Our GGESI-aligned approach ensures that health systems, clean energy utilities, and vocational programs directly empower communities, promoting long-term entrepreneurship and social stability.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '2rem', background: '#F8FAFC', borderLeft: '4px solid var(--color-accent-green)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>💡 Driving Green Innovation</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  SDG alignment acts as a catalyst for deploying modern clean technology, including solarized water purification (Water ATMs) and micro-grid energy sharing models.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', background: '#F8FAFC', borderLeft: '4px solid var(--color-accent-teal)' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>🌱 Fostering Local Entrepreneurship</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  By training local youth and women as technicians, managers, and community leaders, we convert infrastructure projects into profitable, self-sustaining community businesses.
                </p>
              </div>
              <div className="glass-card" style={{ padding: '2rem', background: '#F8FAFC', borderLeft: '4px solid #F59E0B' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-white)' }}>🌍 Strengthening Climate Resilience</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
                  Our designs focus on adaptive capacity—ensuring health centers, agricultural storage, and WASH systems continue functioning during severe flood events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Grid-to-Detail Showcase */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tagline">Interactive SDG Matrix</span>
            <h2 className="section-title">Mapping Global Goals to Our Projects</h2>
            <p className="section-desc">Select any Sustainable Development Goal below to review our global context, organizational contributions, and target impact metrics.</p>
          </div>

          {/* SDG Grid Menu */}
          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {sdgList.map((sdg, idx) => (
              <div 
                key={sdg.number} 
                className={`sdg-grid-card ${selectedIdx === idx ? 'active' : ''}`}
                onClick={() => setSelectedIdx(idx)}
              >
                <img src={sdg.image} alt={sdg.name} className="sdg-card-img" />
                <div className="sdg-card-overlay" style={{ background: selectedIdx === idx ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--color-accent-green)' }}>SDG {sdg.number}</h3>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-white)', marginBottom: '0.25rem', fontWeight: 700 }}>{sdg.name}</h4>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-accent-teal)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {sdg.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Detail Showcase Panel */}
          <div className="sdg-showcase-panel">
            <div className="sdg-showcase-grid">
              
              {/* Left Column: Stat Callout & Image */}
              <div className="sdg-showcase-left">
                <div className="sdg-showcase-stat-box">
                  <div className="sdg-showcase-stat-val">{activeSdg.statVal}</div>
                  <div className="sdg-showcase-stat-lbl">{activeSdg.statLbl}</div>
                </div>
                <div className="sdg-showcase-image-wrap">
                  <img src={activeSdg.number === 1 ? "/crossroad/slider_img_1.jpg" : (activeSdg.number === 3 ? "/crossroad/machhapuchhare-2024-12-05-18-24-09-utc.jpg" : "/crossroad/what-we-do-hero.jpg")} alt={activeSdg.name} />
                </div>
              </div>

              {/* Right Column: Detailed 3-Paragraph Context */}
              <div className="sdg-showcase-right">
                <div>
                  <span className="sdg-showcase-tagline">Goal {activeSdg.number} / {activeSdg.focus}</span>
                  <h3 className="sdg-showcase-title">{activeSdg.name}</h3>
                </div>

                <div className="sdg-showcase-section">
                  <h4 className="sdg-showcase-section-title">🌐 Global Context &amp; Importance</h4>
                  <p>{activeSdg.globalContext}</p>
                </div>

                <div className="sdg-showcase-section">
                  <h4 className="sdg-showcase-section-title">🏥 Our Contribution &amp; Projects</h4>
                  <p>{activeSdg.contribution}</p>
                </div>

                <div className="sdg-showcase-section">
                  <h4 className="sdg-showcase-section-title">📈 Long-Term Community &amp; Policy Impact</h4>
                  <p>{activeSdg.impact}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Concluding Partnership Commitment Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="section-tagline">Sustained Commitments</span>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem' }}>Partnering for a Resilient Future</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
            Sustainable development cannot be achieved in isolation. Our mission relies on close collaboration with provincial governments, international donor agencies, and grassroots community organizations. By linking sovereign policy with field execution, we ensure that every funding dollar produces measurable, long-term indicators.
          </p>
          <div className="glass-card" style={{ padding: '2rem', background: 'rgba(86, 192, 42, 0.03)', border: '1px solid rgba(86, 192, 42, 0.15)', borderRadius: '8px', textAlign: 'left', marginBottom: '2.5rem' }}>
            <h4 style={{ color: 'var(--color-text-white)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span>🤝</span> Strategic Government Coordination
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: '1.5', margin: 0 }}>
              Through our Framework Partnership with the Planning &amp; Development Department, Government of Balochistan, we scale these climate-smart models across secondary cities and border districts, directly aligning public budgets with the United Nations Sustainable Development Goals.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary" onClick={() => setCurrentPage('home')}>
            Work With Us to Advance the Goals
          </a>
        </div>
      </section>
    </div>
  );
};
