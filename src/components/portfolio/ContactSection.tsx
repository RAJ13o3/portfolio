import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

const socials = [
  // { icon: Github, label: 'GitHub', href: '#' },
  // { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/9879481895' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

const ContactSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</p>
        <h2 className="reveal text-4xl sm:text-5xl font-['Syne'] font-bold text-foreground mb-6" style={{ transitionDelay: '0.1s' }}>
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="reveal text-muted-foreground mb-12 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exceptional.
        </p>

        <div className="reveal" style={{ transitionDelay: '0.3s' }}>
          <a
            href="mailto:rajajwaliya2005@gmail.com"
            className="magnetic-btn inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:shadow-[0_0_40px_-5px_hsl(263_70%_58%_/_0.5)] transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>
        </div>

        <div className="reveal flex items-center justify-center gap-6 mt-12" style={{ transitionDelay: '0.4s' }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_15px_-3px_hsl(263_70%_58%_/_0.3)] transition-all duration-300"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
