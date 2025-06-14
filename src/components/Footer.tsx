export const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"]
    },
    {
      title: "Resources", 
      links: ["Blog", "Workshops", "Mentorship", "Internships"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy"]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-[0.2em]">
              FORGED FINANCE
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Equipping aspiring professionals with essential skills to excel in high finance careers since March 2024.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-white transition-colors duration-300 tracking-wide"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/60 tracking-wide">
            &copy; 2024 Forged Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};