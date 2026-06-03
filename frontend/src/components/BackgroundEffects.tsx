const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      
      {/* Subtle radial glow in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>

      {/* Vertical Lasers */}
      <div className="absolute left-[15%] top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-laser shadow-[0_0_15px_rgba(0,212,255,1)]"></div>
      
      <div className="absolute left-[50%] top-0 w-[2px] h-48 bg-gradient-to-b from-transparent via-primary to-transparent animate-laser-delayed shadow-[0_0_20px_rgba(0,212,255,1)]"></div>
      
      <div className="absolute left-[85%] top-0 w-[1px] h-24 bg-gradient-to-b from-transparent via-primary to-transparent animate-laser-fast shadow-[0_0_10px_rgba(0,212,255,1)]"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
    </div>
  );
};

export default BackgroundEffects;
