import '../styles/About.css'
import { FaDownload } from 'react-icons/fa'

export default function About() {
  // Resume file path - Upload your resume to public folder as 'resume.pdf'
  const resumePath = '/resume.pdf'

  // Profile image path - Upload your image to public/assets folder as 'profile.jpg'
  const profileImagePath = '/assets/profile.jpg'

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profileImagePath} 
              alt="Sanya Nagwani" 
              className="profile-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="image-placeholder" style={{ display: 'none' }}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="60" r="40" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2"/>
                <path d="M50 120 Q50 100 100 100 Q150 100 150 120 L150 180 Q150 200 130 200 L70 200 Q50 200 50 180 Z" 
                      fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2"/>
              </svg>
              <p className="placeholder-text">Upload Your Photo</p>
            </div>
          </div>
          
          <div className="about-text">
            <h3>About Me</h3>
            <p>
              I'm an AI & Machine Learning Engineer passionate about building intelligent systems and solving complex problems. With expertise in Python, ML, and Full-Stack Development, I create data-driven solutions that make a real impact.
            </p>
            
            <p>
              I specialize in ML models for classification, regression, and recommendation systems. Currently working on innovative projects and web technologies.
            </p>
            
            <div className="about-cta">
              <a href={resumePath} download className="btn btn-primary btn-download">
                <FaDownload className="download-icon" />
                Download My Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
