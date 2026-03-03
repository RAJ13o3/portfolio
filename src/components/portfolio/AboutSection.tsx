import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import { User, MapPin, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useScrollReveal();
  const { ref: cardRef, style: tiltStyle, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <section id="about" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-4">About Me</p>
          <h2 className="reveal text-4xl sm:text-5xl font-['Syne'] font-bold text-foreground mb-6" style={{ transitionDelay: '0.1s' }}>
            Passionate about<br />
            <span className="text-gradient">craft & detail</span>
          </h2>
          <p className="reveal text-muted-foreground leading-relaxed mb-6" style={{ transitionDelay: '0.2s' }}>
            I'm a full-stack developer and designer with over 2 years of experience creating premium digital products. I believe every pixel matters and every interaction should feel intentional.
          </p>
          <p className="reveal text-muted-foreground leading-relaxed" style={{ transitionDelay: '0.3s' }}>
            My approach combines technical excellence with refined aesthetics — building interfaces that are not just functional, but memorable. I specialize in React, TypeScript, and modern CSS.
          </p>
        </div>

        {/* Profile card */}
        <div className="reveal flex justify-center" style={{ transitionDelay: '0.2s' }}>
          <div
            ref={cardRef}
            style={tiltStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-sm rounded-2xl glow-border bg-card p-8 will-change-transform"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-1">Raj Ajwaliya</h3>
            <p className="text-muted-foreground text-sm mb-6">Full-Stack Developer & Designer</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Dholka, Ahmedabad
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4 text-primary" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
