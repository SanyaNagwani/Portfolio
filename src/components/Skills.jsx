import '../styles/Skills.css'

const skillsData = {
  'Languages': [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '⚙️' },
    
  ],
  'Machine Learning & Data Science': [
    { name: 'Pandas', icon: '📊' },
    { name: 'NumPy', icon: '🔢' },
    { name: 'Matplotlib', icon: '📈' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'Regression', icon: '📉' },
    { name: 'Classification', icon: '🎯' },
    
  ],
  'Frontend & Frameworks': [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '✨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'HTML5', icon: '🏗️' },
    { name: 'CSS3', icon: '🎨' }
  ],
  'Developer Tools': [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '🧠' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google Colab', icon: '☁️' },
    { name: 'Jupyter Notebook', icon: '📓' },
    { name: 'Anaconda', icon: '🐍' }
  ],
  'Core Strengths': [
    { name: 'Data Structures & Algorithms', icon: '🔗' },
    { name: 'Object Oriented Programming', icon: '📦' },
    { name: 'Problem Solving', icon: '💡' },
    { name: 'Machine Learning', icon: '🤖' },
    
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {items.map((skill, index) => (
                  <li key={skill.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
