const Footer = () => (
  <footer className="relative py-12 px-6 border-t border-border">
    {/* Ambient glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full blur-[80px] opacity-10 bg-primary pointer-events-none" />
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© 2026 Alex Morgan. All rights reserved.</p>
      <p className="text-gradient font-medium">Crafted with precision</p>
    </div>
  </footer>
);

export default Footer;
