export const Partners = () => {
  const partners = [
    "London School of Economics",
    "Copenhagen Business School", 
    "Warwick Business School",
    "UCL",
    "HEC Paris",
    "ESCP Business School"
  ];

  return (
    <section className="py-32 px-8 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Elite Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Schools
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-black/30 border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 group backdrop-blur-sm"
            >
              <span className="text-lg font-medium text-white group-hover:text-white/90 transition-colors duration-300 tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};