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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by Top Business Schools
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};