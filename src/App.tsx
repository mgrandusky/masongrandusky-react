import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Portfolio from './components/Sections/Portfolio';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
