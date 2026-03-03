import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiences = [
  { year: '2026 — Present', role: 'Frontend Engineer', company: 'Kaims IT Solution', desc: 'Leading the frontend architecture for a premium SaaS platform, establishing design systems and performance standards.' },
  { year: '2024 — 2025', role: 'UI Developer', company: 'Self Employed', desc: 'Built interactive data dashboards and complex component libraries for enterprise clients with a focus on animation.' },
  { year: '2024 — 2025', role: 'Frontend Intern', company: 'Mastermind IT Solution', desc: 'Working on real-world projects, fixing UI bugs, and building responsive components using React and Tailwind, and web applications with end-to-end ownership.' },
  { year: '2023 — 2024', role: 'Junior Developer', company: 'Self Learning', desc: 'Started my career building responsive websites and learning the craft of clean, maintainable frontend code.' },
];

const ExperienceSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-4">Journey</p>
          <h2 className="reveal text-4xl sm:text-5xl font-['Syne'] font-bold text-foreground" style={{ transitionDelay: '0.1s' }}>
            My <span className="text-gradient">experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <div
              key={exp.year}
              className={`reveal relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary glow-primary -translate-x-[5px] md:-translate-x-[6px] z-10" />

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="text-xs uppercase tracking-widest text-primary mb-1 block">{exp.year}</span>
                <h3 className="font-['Syne'] font-bold text-foreground text-lg">{exp.role}</h3>
                <p className="text-sm text-accent mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>

              {/* Spacer for alternation */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
