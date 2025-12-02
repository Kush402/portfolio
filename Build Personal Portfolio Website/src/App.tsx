import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { FloatingDock } from './components/FloatingDock';
import { Spotlight } from './components/Spotlight';

export default function App() {
  return (
    <div className="relative bg-zinc-950 text-zinc-100 min-h-screen overflow-hidden">
      <Spotlight />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} 
      />
      
      <FloatingDock />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <footer className="py-12 text-center text-zinc-500 border-t border-zinc-800/50">
          <p>© 2025 Kush Sharma. Building the future, one line at a time.</p>
        </footer>
      </main>
    </div>
  );
}
