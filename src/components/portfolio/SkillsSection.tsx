import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import { Code2, Palette, Zap, Globe, Database, Layers } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'Frontend Development', desc: 'React, Html, Java Script, — building performant, scalable UIs.' },
  { icon: Palette, title: 'UI / UX Design', desc: 'Figma-to-code with pixel-perfect fidelity and refined interactions.' },
  { icon: Zap, title: 'Animation & Motion', desc: 'CSS animations, Framer Motion.' },
  { icon: Globe, title: 'Responsive Design', desc: 'Mobile-first, cross-browser, accessible interfaces at every breakpoint.' },
  { icon: Database, title: 'Backend Integration', desc: 'REST, SQL, databases — full-stack from concept to deployment.' },
  { icon: Layers, title: 'Design Systems', desc: 'Scalable tokens, component libraries, and consistent brand execution.' },
];

const SkillCard = ({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) => {
  const { ref, style, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <div
      ref={ref}
      style={{ ...style, transitionDelay: `${delay}s` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal group rounded-2xl glow-border bg-card p-6 will-change-transform hover:border-primary/40 transition-colors duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-['Syne'] font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-4">Expertise</p>
          <h2 className="reveal text-4xl sm:text-5xl font-['Syne'] font-bold text-foreground" style={{ transitionDelay: '0.1s' }}>
            What I <span className="text-gradient">bring</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
