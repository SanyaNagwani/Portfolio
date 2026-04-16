import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="accent-line accent-top"></div>
          <h1 className="hero-title">
            <span className="title-word">Sanya</span>
            <span className="title-word">Nagwani</span>
          </h1>
          <div className="accent-line accent-bottom"></div>
          <p className="hero-subtitle">Artificial Intelligence & Machine Learning Engineer</p>
          <p className="hero-description">
            Building intelligent systems and modern web applications with expertise in Machine Learning, Python, React, and cloud technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span className="btn-text">View My Work</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-text">Get In Touch</span>
              <span className="btn-arrow">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-line"><span className="code-keyword">const</span> developer = </div>
            <div className="code-line"><span className="code-prop">name</span>: <span className="code-string">"Sanya"</span>,</div>
            <div className="code-line"><span className="code-prop">passion</span>: <span className="code-string">"AI & Code"</span>,</div>
            <div className="code-line"><span className="code-prop">status</span>: <span className="code-string">"Building"</span></div>
            <div className="code-line"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
