import Section from '../UI/Section';
import Button from '../UI/Button';

export default function Contact() {
  const approach = [
    {
      step: '1',
      title: 'Needs Assessment',
      description: 'Understanding your business requirements and technical challenges',
      icon: '🔍'
    },
    {
      step: '2',
      title: 'Scalable Solutions',
      description: 'Designing architecture that grows with your business',
      icon: '📈'
    },
    {
      step: '3',
      title: 'Performance & Reliability',
      description: 'Delivering high-performance solutions with focus on business results',
      icon: '🎯'
    }
  ];

  return (
    <Section id="contact" className="bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Approach</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A systematic approach to delivering exceptional web solutions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {approach.map((item) => (
          <div key={item.step} className="text-center">
            <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {item.step}
            </div>
            <span className="text-4xl block mb-4">{item.icon}</span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
        <p className="text-xl text-gray-600 mb-8">
          Ready to discuss your next web development project? Let's create something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Start a Project
          </Button>
          <Button variant="outline" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
}
