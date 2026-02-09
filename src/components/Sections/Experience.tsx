import Section from '../UI/Section';
import Card from '../UI/Card';
import type { Experience } from '../../types';

const experiences: Experience[] = [
  {
    company: 'Registrar Corp',
    role: 'Senior Web Developer',
    description: 'Leading web development initiatives and managing enterprise web applications'
  },
  {
    company: 'PARO',
    role: 'Senior Technical Developer',
    description: 'Developing and maintaining high-performance web applications'
  },
  {
    company: 'Rootwurks',
    role: 'Technical Lead',
    description: 'Managing technical projects and development teams'
  },
  {
    company: 'Intertek Alchemy',
    role: 'Senior Developer',
    description: 'Building secure and scalable web solutions'
  }
];

const highlights = [
  {
    icon: '🌐',
    title: 'Large-Scale Management',
    description: 'Experience managing and maintaining up to 96 websites simultaneously'
  },
  {
    icon: '💼',
    title: 'Interactive Applications',
    description: 'Development of interactive catalogs and complex web applications'
  },
  {
    icon: '⚡',
    title: 'Performance Excellence',
    description: 'Focus on scalable solutions with emphasis on business performance and reliability'
  }
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Highlights</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Senior technical roles at leading organizations with a proven track record of excellence
        </p>
      </div>

      {/* Key Highlights */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {highlights.map((highlight) => (
          <Card key={highlight.title}>
            <div className="text-center">
              <span className="text-4xl mb-4 block">{highlight.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Professional Experience */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Senior Technical Roles</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white p-6 rounded-lg border-l-4 border-primary-600 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.company}</h4>
              <p className="text-primary-600 font-medium mb-2">{exp.role}</p>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
