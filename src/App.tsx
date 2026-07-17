import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/WhatWeDo';
import { WhoWeAre } from './pages/WhoWeAre';
import { SDGs } from './pages/SDGs';
import { ResourceCenter } from './pages/ResourceCenter';
import { JoinTheMovement } from './pages/JoinTheMovement';

type PageKey = 'home' | 'what_we_do' | 'who_we_are' | 'sdgs' | 'resource_center' | 'join_the_movement';

function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const isHeaderTransparent = currentPage === 'home' && !isScrolled;

  // Monitor scroll for header background blur transparency adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  const handlePageChange = (page: PageKey) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={(p) => handlePageChange(p as PageKey)} />;
      case 'what_we_do':
        return <WhatWeDo />;
      case 'who_we_are':
        return <WhoWeAre />;
      case 'sdgs':
        return <SDGs setCurrentPage={(p) => handlePageChange(p as PageKey)} />;
      case 'resource_center':
        return <ResourceCenter />;
      case 'join_the_movement':
        return <JoinTheMovement />;
      default:
        return <Home setCurrentPage={(p) => handlePageChange(p as PageKey)} />;
    }
  };

  return (
    <>
      {/* 1. Global Navigation Header */}
      <header className={`header ${isHeaderTransparent ? 'is-transparent' : ''}`} style={{
        backgroundColor: isHeaderTransparent ? 'transparent' : (isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.85)'),
        backdropFilter: isHeaderTransparent ? 'none' : 'blur(16px)',
        boxShadow: isHeaderTransparent ? 'none' : (isScrolled ? '0 10px 30px -10px rgba(15, 23, 42, 0.05)' : 'none'),
        borderBottom: isHeaderTransparent ? 'none' : '1px solid rgba(15, 23, 42, 0.08)',
        height: isHeaderTransparent ? '100px' : (isScrolled ? '75px' : '90px')
      }}>
        <div className="container header-container" style={{ height: '100%' }}>
          <a href="#home" className="logo" onClick={() => handlePageChange('home')}>
            <img 
              src={isHeaderTransparent ? "/crossroad/Main logo.png" : "/crossroad/footer_logo.png"} 
              alt="CrossRoad Consultants" 
              style={{ height: isHeaderTransparent ? '60px' : (isScrolled ? '48px' : '58px'), objectFit: 'contain' }} 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav" style={{ display: 'flex' }}>
            <a 
              href="#home" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handlePageChange('home')}
            >
              Home
            </a>
            <a 
              href="#what-we-do" 
              className={`nav-link ${currentPage === 'what_we_do' ? 'active' : ''}`}
              onClick={() => handlePageChange('what_we_do')}
            >
              What We Do
            </a>
            <a 
              href="#who-we-are" 
              className={`nav-link ${currentPage === 'who_we_are' ? 'active' : ''}`}
              onClick={() => handlePageChange('who_we_are')}
            >
              Who We Are
            </a>
            <a 
              href="#sdgs" 
              className={`nav-link ${currentPage === 'sdgs' ? 'active' : ''}`}
              onClick={() => handlePageChange('sdgs')}
            >
              SDGs
            </a>
            <a 
              href="#resources" 
              className={`nav-link ${currentPage === 'resource_center' ? 'active' : ''}`}
              onClick={() => handlePageChange('resource_center')}
            >
              Resource Center
            </a>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => handlePageChange('join_the_movement')}
            >
              Join us
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Main Page Render */}
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        {renderActivePage()}
      </main>

      {/* 3. Global Footer Component */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="logo" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center' }} onClick={() => handlePageChange('home')}>
                <img 
                  src="/crossroad/footer_logo.png" 
                  alt="CrossRoad Consultants" 
                  style={{ height: '58px', objectFit: 'contain' }} 
                />
              </a>
              <p>
                Working at the intersection of climate resilience, gender justice, and human capital development. Shaping inclusive policies and scaling clean energy technologies.
              </p>
              <div className="footer-socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="LinkedIn">🔗</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Twitter">🐦</a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Facebook">👤</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <div className="footer-links">
                <a href="#what-we-do" onClick={() => handlePageChange('what_we_do')}>Green Tech Solutions</a>
                <a href="#what-we-do" onClick={() => handlePageChange('what_we_do')}>Capacity Building</a>
                <a href="#what-we-do" onClick={() => handlePageChange('what_we_do')}>Research &amp; Analytics</a>
                <a href="#what-we-do" onClick={() => handlePageChange('what_we_do')}>Policy &amp; Advocacy</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#who-we-are" onClick={() => handlePageChange('who_we_are')}>About Us</a>
                <a href="#who-we-are" onClick={() => handlePageChange('who_we_are')}>Our Team</a>
                <a href="#sdgs" onClick={() => handlePageChange('sdgs')}>SDG Alignment</a>
                <a href="#resources" onClick={() => handlePageChange('resource_center')}>Publications</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Contact &amp; Offices</h4>
              <div className="footer-contact-item">
                <span className="footer-contact-title">Islamabad Headquarters</span>
                <span>House 5, Street 4, F/8-3, Islamabad, Pakistan</span>
                <span>Phone: +92 3426107847</span>
              </div>
              <div className="footer-contact-item" style={{ marginTop: '1rem' }}>
                <span className="footer-contact-title">Quetta Regional Office</span>
                <span>Office 57, Mountain View Tech Park, Mehar Dar Trail, Marriabad, Quetta</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} CrossRoad Consultants. All Rights Reserved.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy is under formulation."); }}>Privacy Policy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service is under formulation."); }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
