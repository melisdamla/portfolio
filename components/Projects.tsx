'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with Next.js and React',
      technologies: ['Next.js', 'React', 'TypeScript'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with real-time features',
      technologies: ['Node.js', 'React', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-responsive design system and component library',
      technologies: ['CSS', 'JavaScript', 'Storybook'],
      link: '#',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link}>View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
