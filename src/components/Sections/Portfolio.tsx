import Section from '../UI/Section';
import Card from '../UI/Card';
import type { Project } from '../../types';

const projects: Project[] = [
  {
    id: 'bbshines',
    title: 'BB Shines Car Wash',
    description: 'Professional car wash service website with modern design and online booking functionality',
    url: 'https://www.bbshines.com',
    technologies: ['WordPress', 'PHP', 'CSS3', 'Responsive Design']
  },
  {
    id: 'paro',
    title: 'Paro',
    description: 'Advanced AI-powered platform for professional services with secure architecture',
    url: 'https://www.paro.ai',
    technologies: ['React', 'Security Engineering', 'Scalable Architecture']
  },
  {
    id: 'registrar-corp',
    title: 'Registrar Corp',
    description: 'Enterprise-level web applications managing compliance and regulatory services',
    url: '#',
    technologies: ['Enterprise Architecture', 'Security', 'High Availability']
  },
  {
    id: 'interactive-catalogs',
    title: 'Interactive Catalogs',
    description: 'Custom-built interactive catalog systems for e-commerce platforms',
    url: '#',
    technologies: ['jQuery', 'PHP', 'MySQL', 'Interactive UI']
  }
];

export default function Portfolio() {
  return (
    <Section id="portfolio" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A showcase of successful projects demonstrating expertise in web development, 
          e-commerce solutions, and secure application architecture
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            
            {project.url !== '#' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Visit Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
