import { useEffect, useState } from 'react';
import { useMouseFollow } from '@/hooks/useMouseFollow';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref, pos, handleMouseMove } = useMouseFollow();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, hsl(263 70% 58%), transparent 70%)',
          left: `calc(20% + ${(pos.xPercent - 0.5) * 30}px)`,
          top: `calc(30% + ${(pos.yPercent - 0.5) * 30}px)`,
          animation: 'orb-drift 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, hsl(187 72% 55%), transparent 70%)',
          right: '15%',
          bottom: '20%',
          animation: 'orb-drift 25s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, hsl(280 80% 60%), transparent 70%)',
          left: '60%',
          top: '15%',
          animation: 'orb-drift 18s ease-in-out infinite 3s',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p
          className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Creative Developer & Designer
        </p>
        <h1
          className={`text-5xl sm:text-7xl lg:text-8xl font-['Syne'] font-800 leading-[0.95] mb-8 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-gradient">Building</span>
          <br />
          <span className="text-foreground">Digital Experiences</span>
        </h1>
        <p
          className={`text-lg text-muted-foreground max-w-xl mx-auto mb-12 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Crafting premium interfaces with meticulous attention to detail, motion, and interaction design.
        </p>
        <div
          className={`transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#about"
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 bg-primary/10 text-foreground font-medium tracking-wide hover:bg-primary/20 hover:border-primary/50 hover:glow-primary transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(263_70%_58%_/_0.4)]"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-[pulse-glow_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
