import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import { ExternalLink, Github, Images } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Shilp Constriction',
    desc: 'Designed and developed a responsive construction company website featuring project showcases, service details, and a user-friendly contact experience.',
    tags: ['React', 'TypeScript', 'D3.js'],
    gradient: 'from-[hsl(263,70%,58%)] to-[hsl(280,80%,60%)]',
    images: [
      'Screenshot 2026-03-03 at 10.48.18.png',
      '2.png',
      '3.png',
      '4.png',
      '5.png',
      '6.png',
      
    ],
    
    liveUrl: 'https://www.shilpconstruction.in/',
    githubUrl: '#',
  },
  {
    title: 'Weather Pro',
    desc: 'An intelligent weather-driven platform that recommends local highlights, popular foods, and must-visit spots according to current weather conditions.',
    tags: ['Html', 'Css', 'Tailwind' ,'JS', 'API Call'],
    gradient: 'from-[hsl(187,72%,55%)] to-[hsl(200,80%,50%)]',
    images: [
      '11.png',
      '12.png',
      '13.png',
      '14.png',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Lumina Design System',
    desc: 'A comprehensive design system with 60+ components, dark mode, and full accessibility compliance.',
    tags: ['React', 'Storybook', 'CSS'],
    gradient: 'from-[hsl(263,70%,58%)] to-[hsl(187,72%,55%)]',
    images: [
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&h=400&fit=crop',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project, delay }: { project: typeof projects[0]; delay: number }) => {
  const { ref, style, handleMouseMove, handleMouseLeave } = useTilt(5);
  const [currentImg, setCurrentImg] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <div
        ref={ref}
        style={{ ...style, transitionDelay: `${delay}s` }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="reveal group rounded-2xl glow-border bg-card overflow-hidden will-change-transform"
      >
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`} />
          {project.images.length > 1 && (
            <button
              onClick={() => setShowGallery(true)}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs text-foreground hover:bg-background transition-colors"
            >
              <Images className="w-3 h-3" />
              {project.images.length} photos
            </button>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
          <a href={project.liveUrl} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <ExternalLink className="w-4 h-4" />
              
            </a>
            
            {/* <a href={project.githubUrl} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Github className="w-4 h-4" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {showGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
          onClick={() => setShowGallery(false)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGallery(false)}
              className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground text-sm"
            >
              Close ✕
            </button>
            <h3 className="font-['Syne'] text-xl font-bold text-foreground mb-4">{project.title}</h3>
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={project.images[currentImg]}
                alt={`${project.title} - ${currentImg + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentImg ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-75'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProjectsSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
          <h2 className="reveal text-4xl sm:text-5xl font-['Syne'] font-bold text-foreground" style={{ transitionDelay: '0.1s' }}>
            Featured <span className="text-gradient">work</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={0.15 * i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
