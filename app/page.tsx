import { Hero } from "@/components/Hero";
import { FloatingDock } from "@/components/FloatingDock";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Spotlight } from "@/components/Spotlight";

export default function Home() {
  return (
    <div className="relative bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden">
      <Spotlight />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} 
      />
      
      <FloatingDock />
      
      <main 
        className="relative z-10" 
        style={{ 
          paddingLeft: 'clamp(48px, 6vw, 160px)',
          paddingRight: 'clamp(48px, 6vw, 160px)'
        }}
      >
        <section id="home" className="border-b-2 border-zinc-800/30 border-l-2 border-l-zinc-800/30">
          <Hero />
        </section>
        
        <section id="experience" className="border-t-2 border-zinc-800/30 border-l-2 border-l-zinc-800/30">
          <Experience />
        </section>
        
        <section id="projects" className="border-t-2 border-zinc-800/30 border-l-2 border-l-zinc-800/30">
          <Projects />
        </section>
        
        <section id="skills" className="border-t-2 border-zinc-800/30 border-l-2 border-l-zinc-800/30">
          <Skills />
        </section>
        
        <footer className="py-12 text-center text-zinc-500 border-t-2 border-zinc-800/50">
          <p>© 2025 Kush Sharma. Building the future, one line at a time.</p>
        </footer>
      </main>
    </div>
  );
}
