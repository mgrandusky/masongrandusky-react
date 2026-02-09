import Button from '../UI/Button';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Mason Grandusky
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary-600 font-semibold mb-8">
            Web Design and Development
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Professional web developer and security engineer with <span className="font-semibold text-primary-600">20+ years of experience</span> creating 
            secure, scalable, and high-performance web applications. Specializing in web design, 
            development, and security engineering to deliver exceptional digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
