import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Sanya Nagwani</h1>
        <p className="hero-subtitle">Artificial Intelligence and Machine Learning Engineer</p>
        <p className="hero-description">
          Passionate about building intelligent systems and web applications. Specializing in Machine Learning, Python, and Full-Stack Development.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
