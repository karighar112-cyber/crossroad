import React, { useState } from 'react';

export const JoinTheMovement: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus('error');
      return;
    }
    // Simulate API request
    setFormStatus('success');
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      institution: '',
      message: ''
    });
  };

  return (
    <div className="join-movement-page" style={{ marginTop: '90px' }}>
      {/* 1. Page Hero Banner with Image */}
      <section className="section section-alt" style={{ 
        backgroundImage: 'linear-gradient(rgba(11, 19, 37, 0.45), rgba(3, 7, 18, 0.55)), url(/crossroad/about-banner.jpg)',
        backgroundSize: 'cover',
        
        padding: '13rem 0',
        backgroundPosition: 'center center', 
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div className="container">
          <span className="section-tagline" style={{ color: 'var(--color-accent-green)' }}>Careers &amp; Contact</span>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem', color: '#FFFFFF' }}>Join The Movement</h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.85)' }}>
            Explore internships, consultancies, and fellowship opportunities. Join a platform empowering young women and students in climate advocacy and public health research.
          </p>
        </div>
      </section>

      {/* 2. Internships & Opportunities info */}
      <section className="section container">
        <div className="section-header">
          <span className="section-tagline">Why Join Us?</span>
          <h2 className="section-title">Grow, Connect, and Drive Real Change</h2>
          <p className="section-desc">We foster professional leadership skills by placing you at the heart of national policy research and on-ground utility deployments.</p>
        </div>

        <div className="grid-4" style={{ marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent-green)', marginBottom: '0.75rem' }}>Grow Leadership</h3>
            <p style={{ fontSize: '0.85rem' }}>Gain hands-on skills in policy analysis, local data gathering, community organization, and public policy lobbying.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent-green)', marginBottom: '0.75rem' }}>Build Connections</h3>
            <p style={{ fontSize: '0.85rem' }}>Work directly alongside climate scientists, senior health specialists, regional commissions (NCSW), and UN delegates.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent-green)', marginBottom: '0.75rem' }}>Make an Impact</h3>
            <p style={{ fontSize: '0.85rem' }}>Organize regional workshops, inspect solar WASH systems, and draft documents that support marginalized communities.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--color-accent-green)', marginBottom: '0.75rem' }}>Drive Innovation</h3>
            <p style={{ fontSize: '0.85rem' }}>Coordinate clean cooking fuel pilots, e-mobility routes, and Water ATM monitoring dashboards across remote districts.</p>
          </div>
        </div>

        <div className="section-header">
          <span className="section-tagline">Areas of Action</span>
          <h2 className="section-title">Our Active Fellowship Streams</h2>
        </div>

        <div className="grid-2">
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem' }}>📝</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Policy &amp; Research Stream</h3>
              <p style={{ fontSize: '0.9rem' }}>Assist our senior analysts in collecting field surveys, auditing regional budgets, and compiling gender-disaggregated database indicator models.</p>
            </div>
          </div>
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem' }}>📢</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Advocacy &amp; Campaigns Stream</h3>
              <p style={{ fontSize: '0.9rem' }}>Plan and execute digital campaigns, draft media publications, and coordinate local volunteer groups in schools and colleges.</p>
            </div>
          </div>
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem' }}>📅</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Strategic Event Planning</h3>
              <p style={{ fontSize: '0.9rem' }}>Coordinate multi-stakeholder roundtable logistics, expert panels, consensus seminars, and public-private sector briefings.</p>
            </div>
          </div>
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2rem' }}>🎨</div>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>Media &amp; Digital Storytelling</h3>
              <p style={{ fontSize: '0.9rem' }}>Create visual slide decks, video updates of green tech projects, and write feature profiles of community activists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Split Address & Interactive Application Form */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2">
            
            {/* Left Column: Office Contacts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span className="section-tagline" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>Office Locations</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get in Touch</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>Have questions about our advisory services, research studies, or partnerships? Reach out to our offices in Islamabad or Quetta.</p>
              </div>

              <div className="glass-card" style={{ background: 'var(--color-primary-dark)', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-green)', marginBottom: '1rem' }}>Main Headquarters (Islamabad)</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                  House 5, Street 4, F/8-3, Islamabad, Pakistan.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.9rem' }}>
                  <span>📞 Phone: +92 3426107847</span>
                  <span>✉ Email: <a href="mailto:Simbal@crossroadconsultants.com" style={{ color: 'var(--color-accent-teal)' }}>Simbal@crossroadconsultants.com</a></span>
                </div>
              </div>

              <div className="glass-card" style={{ background: 'var(--color-primary-dark)', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-green)', marginBottom: '1rem' }}>Balochistan Regional Office (Quetta)</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                  Office 57, Mountain View Tech Park, Mehar Dar Trail, Marriabad, Quetta, Pakistan.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.9rem' }}>
                  <span>✉ Email: <a href="mailto:Ghazna@crossroadconsultants.com" style={{ color: 'var(--color-accent-teal)' }}>Ghazna@crossroadconsultants.com</a></span>
                </div>
              </div>

              <div style={{ padding: '0 1rem' }}>
                <h4 style={{ color: 'var(--color-text-white)', marginBottom: '0.5rem', fontSize: '1rem' }}>Working Hours</h4>
                <p style={{ fontSize: '0.9rem' }}>Monday – Friday: 9:00 AM – 5:30 PM (PKT)<br />Closed on weekends and national holidays.</p>
              </div>
            </div>

            {/* Right Column: Apply Form */}
            <div className="glass-card" style={{ background: 'var(--color-primary-dark)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>Apply / Contact Form</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="age">Age</label>
                    <input 
                      type="number" 
                      id="age" 
                      name="age" 
                      className="form-input" 
                      placeholder="e.g. 23"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input 
                      type="text" 
                      id="phone" 
                      name="phone" 
                      className="form-input" 
                      placeholder="e.g. +92-300-1234567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="institution">University / Institution</label>
                    <input 
                      type="text" 
                      id="institution" 
                      name="institution" 
                      className="form-input" 
                      placeholder="e.g. NUST, Quaid-i-Azam University"
                      value={formData.institution}
                      onChange={handleInputChange}
                    />
                  </div>



                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="message">Your Message / Cover Note</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-textarea" 
                      placeholder="Briefly tell us why you are passionate about joining our climate &amp; gender consulting projects..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Application 📤
                </button>

                {formStatus === 'success' && (
                  <div className="form-status success">
                    ✓ Thank you! Your application has been submitted successfully. Our team will review and follow up via email.
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className="form-status" style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', color: '#EF4444' }}>
                    ⚠ Please fill out all required fields (*) before submitting.
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
