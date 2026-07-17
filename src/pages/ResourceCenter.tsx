import React from 'react';

export const ResourceCenter: React.FC = () => {
  const publications = [
    {
      meta: "STRATEGIC CHARTER / REPORT",
      title: "Gender Equality and Social Inclusion (GESI) Strategy 2025–2030",
      desc: "Our five-year roadmap to guide public-private partnerships in embedding gender indicators directly into renewable energy and agricultural development policies."
    },
    {
      meta: "HEALTH POLICY BRIEF",
      title: "Pakistan’s Path to Universal Health Coverage: National and Regional Strategic Insights",
      desc: "A comprehensive policy review focused on maternal health access, primary clinic resilience during floods, and community healthcare governance systems."
    },
    {
      meta: "SECURITY & REFORMS AUDIT",
      title: "Gap Analysis of Pakistan’s Security Protocols Through a Gender Lens",
      desc: "An evidence-based assessment of public safety, disaster warning systems, and national relief frameworks to increase safety and inclusion for vulnerable populations."
    },
    {
      meta: "REGIONAL MEDICAL STUDY",
      title: "Definitions and Roles of a Skilled Birth Attendant: A Mapping Exercise From Four South-Asian Countries",
      desc: "A comparative study analyzing healthcare workforce development, certification standards, and local midwife recruitment patterns across South Asia."
    }
  ];

  const news = [
    {
      date: "08 Oct, 2025",
      title: "PPPA Strategic Briefing",
      body: "Our advisory board met with the Public Private Partnership Authority (PPPA) team at the Evacuee Trust Building in Islamabad to present guidelines on blending private green bonds with public social development budgets."
    },
    {
      date: "25 Sep, 2025",
      title: "IRS Security Tech Forum",
      body: "CEO Dr. Simbal Khan joined security panels at the Institute of Regional Studies to deliver recommendations on integrating local human security data into border stabilization models."
    },
    {
      date: "30 Jul, 2025",
      title: "Quetta Governance Alliance",
      body: "Our consultants visited Balochistan to align on climate adaptation briefs, establishing a pipeline with local municipal leaders and disaster warning units."
    }
  ];

  return (
    <div className="resource-center-page" style={{ marginTop: '90px' }}>
      {/* 1. Page Hero Banner with Image */}
      <section className="section section-alt" style={{ 
        backgroundImage: 'linear-gradient(rgba(11, 19, 37, 0.45), rgba(3, 7, 18, 0.55)), url(/crossroad/resources_page.jpg)',
        backgroundSize: 'cover',
        
        padding: '13rem 0',
        backgroundPosition: 'center 20%', 
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)' }}>Publications &amp; News</span>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem', color: '#FFFFFF' }}>Resource Center</h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)' }}>
            Access our latest policy studies, peer-reviewed briefs, project publications, and media updates.
          </p>
        </div>
      </section>

      {/* 2. Publications Section */}
      <section className="section container">
        <div className="section-header">
          <span className="section-tagline">Research</span>
          <h2 className="section-title">Featured Publications</h2>
          <p className="section-desc">Download detailed strategic frameworks and empirical reports prepared by our consulting experts.</p>
        </div>

        <div className="grid-2">
          {publications.map((pub, idx) => (
            <div key={idx} className="glass-card publication-card">
              <div>
                <span className="pub-meta">{pub.meta}</span>
                <h3 className="pub-title">{pub.title}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>{pub.desc}</p>
              </div>
              <button 
                className="pub-action" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                onClick={() => alert(`Downloading document: ${pub.title}`)}
              >
                Download PDF Report (EN) 📥
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Case Studies */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tagline">Impact Delivery</span>
            <h2 className="section-title">Case Studies</h2>
            <p className="section-desc">Practical demonstrations of our green technologies and capacity-building frameworks in action.</p>
          </div>

          <div className="grid-2">
            <div className="glass-card" style={{ background: 'var(--color-primary-dark)' }}>
              <h3 style={{ color: 'var(--color-accent-green)', marginBottom: '1rem' }}>Project Balochistan Resilience</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-white)', marginBottom: '0.5rem' }}>Livelihoods &amp; Climate Adaptation in Quetta District</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We worked with the Balochistan Rural Support Program to establish clean energy grids, train 100+ local women in digital finance tools, and evaluate Afghan refugee vulnerabilities in informal settlements.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>Location: Quetta, Balochistan | Status: Active</span>
            </div>

            <div className="glass-card" style={{ background: 'var(--color-primary-dark)' }}>
              <h3 style={{ color: 'var(--color-accent-green)', marginBottom: '1rem' }}>Smart WASH &amp; Clean Cooking</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-text-white)', marginBottom: '0.5rem' }}>Renewable Utility Deployment for Under-Served Neighborhoods</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                We deployed solarized Water ATMs and high-efficiency e-stoves in rural peri-urban settlements near Islamabad. The project decreased waterborne diseases by 65% and improved household energy stability.
              </p>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>Location: Rawalpindi / Islamabad | Status: Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Media Coverage / Updates */}
      <section className="section container">
        <div className="section-header">
          <span className="section-tagline">Newsroom</span>
          <h2 className="section-title">Media Coverage &amp; Engagements</h2>
          <p className="section-desc">Key updates on panel discussions, state commission roundtables, and project inspections.</p>
        </div>

        <div className="grid-3">
          {news.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-green)', fontWeight: 700 }}>{item.date}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '0.75rem 0' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
