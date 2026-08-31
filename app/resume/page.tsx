'use client';

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="container">
        <h1>Resume/CV</h1>
        
        <div className="resume-content">
          <section className="resume-section-item">
            <h2>Experience</h2>
            <div className="experience-item">
              <h3>Your Job Title</h3>
              <p className="company">Company Name</p>
              <p className="date">2023 - Present</p>
              <ul>
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
              </ul>
            </div>
          </section>

          <section className="resume-section-item">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Degree Name</h3>
              <p className="school">University Name</p>
              <p className="date">2019 - 2023</p>
            </div>
          </section>

          <section className="resume-section-item">
            <h2>Skills</h2>
            <div className="skills-grid">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Git</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
