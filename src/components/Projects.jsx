import '../styles/Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'Movie Recommendation System',
    description: 'An intelligent recommendation system that suggests movies based on user preferences. Built with Scikit-learn for ML algorithms and Streamlit for a user-friendly interface. Implemented TF-IDF vectorization and cosine similarity for content-based recommendations.',
    tech: ['Python', 'Scikit-learn', 'Streamlit', 'TF-IDF', 'Cosine Similarity'],
    
    github: 'https://github.com/SanyaNagwani/Movie-Recommendation-System'
  },
  {
    id: 2,
    title: 'Breast Cancer Detection',
    description: 'A machine learning classification model for detecting breast cancer using the Scikit-learn Breast Cancer dataset. Applied Logistic Regression for binary classification (malignant vs benign) with ~95% model accuracy. Conducted comprehensive data analysis and preprocessing.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Logistic Regression', 'Machine Learning'],
    
    github: 'https://github.com/SanyaNagwani/breast-cancer-prediction'
  },
  {
    id: 3,
    title: 'Travel and Tourism Management System',
    description: 'An innovative Java-based desktop application designed to streamline travel package booking and enhance customer management for agencies. Features a robust database backend with MySQL and intuitive frontend using Java Swing for a seamless user experience.',
    tech: ['Java', 'Java Swing', 'AWT', 'MySQL', 'JDBC', 'IntelliJ IDEA'],
    
    github: 'https://github.com/SanyaNagwani/travel-and-tourism-management-system-'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
