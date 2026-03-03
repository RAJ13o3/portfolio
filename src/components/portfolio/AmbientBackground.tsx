const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large ambient orbs — more and brighter */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)',
          top: '5%',
          left: '-15%',
          animation: 'orb-drift 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.09] blur-[140px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)',
          top: '35%',
          right: '-10%',
          animation: 'orb-drift 20s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.10] blur-[130px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--glow-violet)), transparent 70%)',
          bottom: '10%',
          left: '25%',
          animation: 'orb-drift 28s ease-in-out infinite 3s',
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)',
          top: '60%',
          left: '55%',
          animation: 'orb-drift 18s ease-in-out infinite 6s',
        }}
      />
      <div
        className="absolute w-[550px] h-[550px] rounded-full opacity-[0.07] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)',
          top: '-5%',
          right: '20%',
          animation: 'orb-drift 32s ease-in-out infinite 10s',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.09] blur-[110px]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--glow-violet)), transparent 70%)',
          bottom: '30%',
          right: '10%',
          animation: 'orb-drift 24s ease-in-out infinite 4s',
        }}
      />

      {/* Floating particles — more and bigger */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + (i % 4) * 1.5}px`,
            height: `${2 + (i % 4) * 1.5}px`,
            background: i % 3 === 0
              ? 'hsl(var(--primary) / 0.5)'
              : i % 3 === 1
              ? 'hsl(var(--accent) / 0.4)'
              : 'hsl(var(--glow-violet) / 0.4)',
            left: `${2 + (i * 2.5) % 96}%`,
            top: `${1 + (i * 5.3) % 98}%`,
            animation: `particle-float ${8 + (i % 6) * 3}s ease-in-out infinite ${i * 0.8}s`,
          }}
        />
      ))}

      {/* Thin gradient lines — more */}
      {[
        { w: '1px', h: '350px', left: '15%', top: '10%', delay: 0, color: 'primary' },
        { w: '1px', h: '280px', left: '75%', top: '40%', delay: 4, color: 'accent' },
        { w: '220px', h: '1px', left: '35%', top: '55%', delay: 7, color: 'primary' },
        { w: '1px', h: '200px', left: '50%', top: '20%', delay: 2, color: 'glow-violet' },
        { w: '180px', h: '1px', left: '60%', top: '75%', delay: 9, color: 'accent' },
        { w: '1px', h: '260px', left: '90%', top: '5%', delay: 5, color: 'primary' },
      ].map((line, i) => (
        <div
          key={`line-${i}`}
          className="absolute opacity-[0.08]"
          style={{
            width: line.w,
            height: line.h,
            background: line.w === '1px'
              ? `linear-gradient(to bottom, transparent, hsl(var(--${line.color}) / 0.5), transparent)`
              : `linear-gradient(to right, transparent, hsl(var(--${line.color}) / 0.5), transparent)`,
            left: line.left,
            top: line.top,
            animation: `line-float ${16 + i * 2}s ease-in-out infinite ${line.delay}s`,
          }}
        />
      ))}

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
