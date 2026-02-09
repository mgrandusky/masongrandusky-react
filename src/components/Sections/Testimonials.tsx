import Section from '../UI/Section';
import Card from '../UI/Card';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Client Name',
    role: 'E-commerce Director',
    company: 'Leading Retail Company',
    content: 'Mason\'s problem-solving abilities and technical excellence have been instrumental in our e-commerce success. His attention to detail and commitment to quality ensure zero downtime and outstanding performance.',
    rating: 5
  },
  {
    id: '2',
    author: 'Team Lead',
    role: 'Technical Manager',
    company: 'Tech Solutions Inc',
    content: 'Excellent communication skills and strong team collaboration make Mason an invaluable asset. His technical expertise combined with his professional approach consistently delivers exceptional results.',
    rating: 5
  },
  {
    id: '3',
    author: 'Business Owner',
    role: 'CEO',
    company: 'Digital Services Co',
    content: 'Working with Mason has been a game-changer for our business. His focus on scalable solutions and reliability has resulted in a high-performance platform with an impressive track record of zero downtime.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trusted by clients for problem-solving, technical excellence, and reliable delivery
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <div className="flex mb-4">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
            
            <div className="border-t pt-4">
              <p className="font-bold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-primary-600">{testimonial.company}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Key Strengths */}
      <div className="mt-16 bg-primary-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Clients Value Most</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🧩', text: 'Problem-Solving' },
            { icon: '💬', text: 'Strong Communication' },
            { icon: '🤝', text: 'Team Collaboration' },
            { icon: '🎯', text: 'Technical Excellence' },
            { icon: '🛒', text: 'E-commerce Expertise' },
            { icon: '⚡', text: 'High Reliability' },
            { icon: '✅', text: 'Zero Downtime' },
            { icon: '📈', text: 'Performance Focus' }
          ].map((strength) => (
            <div key={strength.text} className="text-center">
              <span className="text-3xl block mb-2">{strength.icon}</span>
              <p className="font-medium text-gray-900">{strength.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
