import { useState, useEffect } from 'react';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY);
      setLastY(y);

      // Determine active section
      for (const id of [...navItems].reverse()) {
        const el = document.getElementById(id.toLowerCase());
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id.toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 frosted-glass transition-transform duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-gradient font-bold text-xl font-['Syne']">
          Portfolio
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                  active === item.toLowerCase()
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
                {active === item.toLowerCase() && (
                  <span className="block h-0.5 mt-1 rounded-full bg-primary animate-[scale-in_0.2s_ease-out]" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
