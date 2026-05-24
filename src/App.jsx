import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

// === КОМПОНЕНТ ДЛЯ АНИМАЦИИ ===
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="container">
      
      {/* 1. Навигация */}
      <nav className="navbar">
        <div className="nav-logo">ZM</div>
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
        <a >
        </a>
      </nav>

      {/* 2. Hero Секция */}
      <FadeIn>
        <header className="hero" id="home">
          <div className="hero-text">
            <h3>I am Zakhar Matvieiev</h3>
            <h1>Software Engineer &<br/>System Architect</h1>
            <p style={{ maxWidth: '85%' }}>
              Building at the intersection of backend systems and game engines.
              I focus on scalable custom architectures, multi-threading, and clean logic. 
              Currently engineering a 2D RPG framework in Unity.
            </p>
            
            {/* Твои боевые контакты в стиле Clean UI */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://github.com/Dornsen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-talk" 
                style={{ textDecoration: 'none', fontSize: '14px', padding: '10px 24px' }}
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/zakhar-matvieiev-3a8231348/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-talk" 
                style={{ textDecoration: 'none', fontSize: '14px', padding: '10px 24px' }}
              >
                LinkedIn
              </a>
              <a 
                href="mailto:zmatveev.20112006@gmail.com" 
                className="btn-talk" 
                style={{ textDecoration: 'none', fontSize: '14px', padding: '10px 24px' }}
              >
                Email
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://i.pinimg.com/originals/70/b0/40/70b040cdc3356cfb8c15dfad0650a24e.gif" alt="Profile Avatar" />
          </div>
        </header>
      </FadeIn>

      {/* 3. Проекты */}
      <section className="section" id="projects">
        <FadeIn>
          <h2>Featured Projects</h2>
          <p className="subtitle">Architecting clean, scalable, and responsive systems</p>
        </FadeIn>
        
        <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <FadeIn delay={0.1}>
            <a 
              href="https://github.com/Dornsen/Nodo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3>Nodo</h3>
              <p>A scalable custom messaging application focusing on backend stability, real-time data processing, and clean architecture.</p>
              <div className="tags">
                <span className="tag">C#</span>
                <span className="tag">Node.js</span>
                <span className="tag">SQL</span>
                <span className="tag">Backend</span>
              </div>
            </a>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <a 
              href="https://github.com/Dornsen/Kiri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3>Kiri</h3>
              <p>Japanese-themed full-stack web card game featuring real-time synchronized duels, core gacha mechanics, and scalable logic.</p>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Socket.io</span>
                <span className="tag">MySQL</span>
                <span className="tag">Vanilla JS</span>
              </div>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* 4. Навыки */}
      <section className="section" id="skills">
        <FadeIn>
          <h2>Skills</h2>
          <p className="subtitle">Crafting robust logic and clean code</p>
        </FadeIn>
        
        <div className="grid-4">
          <FadeIn delay={0.1}>
            <div className="card">
              <h3>Core Languages</h3>
              <div className="tags">
                <span className="tag">C++</span>
                <span className="tag">C#</span>
                <span className="tag">Node.js</span>
                <span className="tag">SQL</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="card">
              <h3>Game Development</h3>
              <div className="tags">
                <span className="tag">Unity</span>
                <span className="tag">Input System</span>
                <span className="tag">Rendering</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="card">
              <h3>Architecture</h3>
              <div className="tags">
                <span className="tag">Multi-threading</span>
                <span className="tag">Clean Arch</span>
                <span className="tag">Networking</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="card">
              <h3>Tools & Deployment</h3>
              <div className="tags">
                <span className="tag">Git</span>
                <span className="tag">GitHub Actions</span>
                <span className="tag">Linux</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

export default App;