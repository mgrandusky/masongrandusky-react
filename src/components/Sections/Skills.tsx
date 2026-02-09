import Section from '../UI/Section';
import Card from '../UI/Card';
import type { Skill } from '../../types';

const skills: Skill[] = [
  // Web Design & Development
  { name: 'PHP', category: 'development' },
  { name: 'HTML/HTML5', category: 'web-design' },
  { name: 'CSS/CSS3', category: 'web-design' },
  { name: 'WordPress', category: 'development' },
  { name: 'Drupal', category: 'development' },
  { name: 'jQuery', category: 'development' },
  { name: 'Python', category: 'development' },
  { name: 'JSP', category: 'development' },
  { name: 'C++', category: 'development' },
  // Security Engineering
  { name: 'Red Hat Enterprise Linux', category: 'security' },
  { name: 'Apache', category: 'security' },
  { name: 'Secure Architecture', category: 'security' },
  { name: 'Security Protocols', category: 'security' },
];

const categories = [
  {
    title: 'Web Design & Development',
    description: 'Crafting responsive, user-friendly websites and applications with modern technologies',
    icon: '🎨',
    skills: skills.filter(s => s.category === 'web-design' || s.category === 'development')
  },
  {
    title: 'Security Engineering',
    description: 'Building secure architectures and implementing robust security protocols',
    icon: '🔒',
    skills: skills.filter(s => s.category === 'security')
  }
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technical expertise in web development and security engineering, 
          with a focus on creating responsive websites and secure applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Card key={category.title}>
            <div className="text-center mb-6">
              <span className="text-5xl mb-4 block">{category.icon}</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
