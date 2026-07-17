import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
}

interface AdvisorItem {
  name: string;
  affiliation: string;
  spec: string;
  image: string;
  bio?: string;
}

export const WhoWeAre: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [activeCharterItem, setActiveCharterItem] = useState<number | null>(0);

  const team: TeamMember[] = [
    {
      name: "Dr. Simbal Khan, PhD",
      role: "Chief Executive Officer (CEO)",
      credentials: "PhD International Relations | Certified Mediator (MIMC, Malaysia)",
      email: "simbal.khan@gmail.com",
      phone: "+92-342-6107847",
      image: "/crossroad/Ms-Fatima-Majeed-07.jpg",
      bio: "Dr. Simbal Khan has over 20 years of experience in governance, conflict transformation, and community stabilization. Her expertise spans Countering/Preventing Violent Extremism (C/PVE), insider mediation, Mental Health and Psycho-Social Support (MHPSS) in conflict settings, and Women, Peace and Security (WPS) frameworks. She has held senior roles leading large-scale portfolios across Pakistan with UNDP, UN Women, UNODC, The Asia Foundation, and Palladium International."
    },
    {
      name: "Dr. Ghazna Khalid Siddiqui",
      role: "Chief Health Innovation Officer (CHIO)",
      credentials: "MBBS (Hons) Imperial College London | MD (Research) UCL | MRCOG",
      email: "ghaznas@gmail.com",
      phone: "+92-332-345-3376",
      image: "/crossroad/Ms-Fatima-Majeed-06.jpg",
      bio: "Dr. Ghazna Khalid brings over 20 years of experience in health systems strengthening, maternal and child health, and health policy reform. She has served as Country Liaison for the Global Financing Facility (GFF) Pakistan, Senior Health Specialist with UNDP, Special Advisor to UNHCR for KP and Balochistan, and consultant to the World Bank's IDA-18 program. She has led national RMNCAHN-G initiatives, served as Lead Gynecologist/Advisor for MSF, and Lead M&E Expert for USAID PAIMAN and Falah programs."
    }
  ];

  const advisors: AdvisorItem[] = [
    {
      name: "Nafisa Nasruddin",
      affiliation: "Climate Security & Gender Specialist",
      spec: "MS in International Relations & Commonwealth Scholar (UoB) specializing in forced migration, climate security, and gender inclusion.",
      image: "/crossroad/nafisa.jpeg",
      bio: "Nafisa Nasruddin is a Balochistan based researcher and program specialist with over six years of experience at the intersection of forced migration, climate security, gender, and community development. She holds an MS in International Relations and is currently pursuing an MSc in International Development Studies (Conflict, Security and Development) at the University of Birmingham as a Commonwealth Scholar, with further academic training from the Refugee Studies Centre at the University of Oxford, where she graduated with distinction. She has served as Program and Research Associate and PSEA focal person at the International Center for Refugee and Migration Studies, and as an external Senior Researcher with the University of Illinois Urbana-Champaign on studies of displaced Afghans, urban violence, and police-community trust in Quetta. Her award-winning research on the climate-induced vulnerabilities of displaced Afghans in Balochistan earned ICRMS's Emerging Scholars Research Award in 2022, and she has presented her work at forums convened by UNDP and UN Women. A member of the Climate Security Expert Network, she has supervised quantitative and qualitative field research in Quetta with UN-Habitat and NED University, and has worked extensively with the Balochistan Rural Support Programme building leadership, advocacy, and capacity among rural women - experience that anchors her work at CrossRoad on gender, displacement, climate vulnerability, and safe community engagement."
    },
    {
      name: "Danielle F. Sharaf",
      affiliation: "New Technologies and Climate Expert",
      spec: "Award-winning serial entrepreneur, former member of the Economic Advisory Committee for the PM of Pakistan, UN SDG WE Empower Awardee, and founder/CEO of SWITCH-ITC.",
      image: "/crossroad/danlie.jpg"
    },
    {
      name: "Leah Boyer Saifullah",
      affiliation: "Senior Policy Advisor & Grants Manager",
      spec: "Tenured U.S. Diplomat (on sabbatical), cultural attaché, climate finance policy expert, and MA (Cantab) in Law from the University of Cambridge.",
      image: "/crossroad/Leah-Boyer-Saifullah.jpg"
    },
    {
      name: "Ms. Fatima Majeed",
      affiliation: "Indigenous & Environmental Rights Defender",
      spec: "Senior Vice Chairperson of Pakistan Fisherfolk Forum, advocating for rights of fishermen, mangroves conservation, and climate adaptation in coastal Sindh.",
      image: "/crossroad/Ms-Fatima-Majeed.jpg"
    },
    {
      name: "Ali Saigol",
      affiliation: "Venture Capital & Private Equity Expert",
      spec: "Demonstrated history of investment leadership, business planning, and agribusiness. Babson College Entrepreneurship graduate.",
      image: "/crossroad/Ali-Saigol-1.jpg"
    },
    {
      name: "Muzzumil Siddiqui",
      affiliation: "Strategic Partnerships Expert",
      spec: "Over 20 years of experience building cross-sector coalitions at the WHO Foundation and Gavi, the Vaccine Alliance, scaling health solutions in 10+ countries.",
      image: "/crossroad/Muzzumil-Siddiqui.png"
    }
  ];

  const charter = [
    {
      title: "Company Legal & SECP Profile",
      body: "CrossRoad Consultants Private Limited is SECP Registered in Pakistan (established in 2025) as a women-led development consultancy. We specialize in health systems strengthening, youth empowerment, education reform, nutrition security, social cohesion, and climate resilience."
    },
    {
      title: "Official Government Framework Partnership",
      body: "We are an official Framework Partner with the Planning & Development (P&D) Department, Government of Balochistan. Through this partnership, we provide technical assistance, direct sectoral development programming, and consensus-building coordination with provincial ministries."
    },
    {
      title: "Stabilization & Conflict Resolution Metrics",
      body: "Our team has successfully managed multi-million-dollar community stabilization portfolios. Key impact metrics include disengaging and reintegrating 1,000+ ex-fighters and at-risk youth with a <3% recidivism rate, and facilitating insider mediation programs that engaged 20,000+ community members."
    },
    {
      title: "Women, Peace and Security (WPS) Audits",
      body: "As senior gender advisors, we have designed the WPS framework for the National Internal Security Policy, conducted comprehensive gender gap audits for UNODC within security and criminal justice sectors, and mainstreamed gender across World Bank, UNDP, and FCDO programs."
    },
    {
      title: "Health Systems Design & GGESI Integration",
      body: "We have coordinated health financing, results-based financing (RBF), and Disbursement-Linked Indicators (DLIs) design with the Global Financing Facility (GFF), GAVI, World Bank, and FCDO, implementing GESI-focused healthcare delivery nationwide."
    }
  ];

  const toggleCharter = (index: number) => {
    setActiveCharterItem(activeCharterItem === index ? null : index);
  };

  return (
    <div className="who-we-are-page" style={{ marginTop: '90px' }}>
      {/* 1. Hero Section */}
      <section className="section section-alt" style={{ 
        backgroundImage: 'linear-gradient(rgba(11, 19, 37, 0.45), rgba(3, 7, 18, 0.55)), url(/crossroad/who-we-are-banner.jpg)',
        backgroundSize: 'cover',
        padding: '13rem 0',
        backgroundPosition: 'center center', 
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)' }}>Corporate Profile</span>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem', color: '#FFFFFF' }}>Women-Led Development Consulting</h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)' }}>
            SECP-registered framework partners delivering evidence-based programs that strengthen institutions and empower climate-vulnerable communities.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="section container">
        <div className="grid-2">
          <div className="glass-card" style={{ borderLeft: '4px solid var(--color-accent-green)', padding: '2.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-white)' }}>Our Vision</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Resilient and equitable communities across Pakistan, where health systems function effectively, youth are economically empowered, and women participate fully in development and decision-making.
            </p>
          </div>
          <div className="glass-card" style={{ borderLeft: '4px solid var(--color-accent-teal)', padding: '2.5rem' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text-white)' }}>Our Mission</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Integrated development solutions that strengthen health systems, empower women and youth, foster social cohesion, and advance climate resilience through evidence-based programming, strategic government partnerships, and community-focused approaches.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Executive Leadership</span>
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-desc">With over 40 years of combined experience in global health design, community stabilization, and public policy formulation.</p>
          </div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card" onClick={() => setSelectedMember(member)}>
                <div className="team-avatar-info">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-avatar" 
                    style={{ objectFit: 'cover', cursor: 'pointer' }} 
                  />
                  <div className="team-meta">
                    <h3>{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                    <div className="team-credentials" style={{ color: 'var(--color-accent-teal)', fontWeight: 600 }}>{member.credentials}</div>
                  </div>
                </div>
                
                <div className="team-contacts-link">
                  <button className="view-bio-link">
                    View Profile &amp; Bio →
                  </button>
                </div>

                <div className="team-contacts">
                  <span>✉ Email: {member.email}</span>
                  <span>📞 Phone: {member.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Advisory Board */}
      <section className="section container">
        <div className="section-header">
          <span className="section-tagline">Board of Advisors</span>
          <h2 className="section-title">Advisory Board</h2>
          <p className="section-desc">Guiding our digital innovation, international policy, grassroots activism, and financial partnerships. Click on any advisor to view their profile.</p>
        </div>

        <div className="advisor-grid">
          {advisors.map((adv, idx) => (
            <div 
              key={idx} 
              className="advisor-card" 
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => setSelectedMember(adv)}
            >
              <img 
                src={adv.image} 
                alt={adv.name} 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  marginBottom: '1.25rem',
                  border: '2.5px solid var(--color-accent-teal)',
                  boxShadow: '0 6px 15px rgba(0,0,0,0.06)'
                }} 
              />
              <h4>{adv.name}</h4>
              <div className="advisor-affiliation">{adv.affiliation}</div>
              <p className="advisor-spec" style={{ fontSize: '0.88rem' }}>{adv.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Institutional Credentials */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="section-tagline">Track Record</span>
            <h2 className="section-title">Institutional Experience &amp; Charter</h2>
            <p className="section-desc">Highlights of our registered programs, certifications, and partnerships across Pakistan.</p>
          </div>

          <div className="charter-section">
            {charter.map((item, idx) => (
              <div key={idx} className={`charter-item ${activeCharterItem === idx ? 'active' : ''}`}>
                <div className="charter-header" onClick={() => toggleCharter(idx)}>
                  <h4>{item.title}</h4>
                  <span className="charter-toggle">+</span>
                </div>
                <div className="charter-body">
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Profile Modal */}
      {selectedMember && (
        <div className="team-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="team-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="team-modal-close" onClick={() => setSelectedMember(null)} aria-label="Close modal">✕</button>
            <div className="team-modal-body">
              <div className="team-modal-img-container">
                <img src={selectedMember.image} alt={selectedMember.name} className="team-modal-img" />
              </div>
              <div className="team-modal-info">
                <span className="team-modal-tagline">{selectedMember.role ? "Team Profile" : "Advisory Board"}</span>
                <h2>{selectedMember.name}</h2>
                <div className="team-modal-role">{selectedMember.role || selectedMember.affiliation}</div>
                <div className="team-modal-credentials">{selectedMember.credentials || selectedMember.spec}</div>
                
                {selectedMember.email && (
                  <div className="team-modal-contacts">
                    <div><strong>✉ Email:</strong> <a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a></div>
                    {selectedMember.phone && <div><strong>📞 Phone:</strong> {selectedMember.phone}</div>}
                  </div>
                )}
                
                <div className="team-modal-divider"></div>
                
                <p className="team-modal-bio">{selectedMember.bio || selectedMember.spec}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
