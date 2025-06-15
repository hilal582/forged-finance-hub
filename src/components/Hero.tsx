import { ArrowRight, Play, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showBottomContent, setShowBottomContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark');
    
    // Sequential animation sequence for first section
    const headerTimer = setTimeout(() => setShowHeader(true), 300);
    const bottomTimer = setTimeout(() => setShowBottomContent(true), 1200);
    const logoTimer = setTimeout(() => setShowLogo(true), 2000);

    // Intersection Observer for second section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowSecondSection(true);
          } else {
            setShowSecondSection(false);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    // Observe the second section
    const secondSection = document.getElementById('second-section');
    if (secondSection) {
      observer.observe(secondSection);
    }

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(bottomTimer);
      clearTimeout(logoTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-all duration-1000 ${
        showHeader ? 'animate-slide-from-top opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/forgedfinance_logo.jpg" 
              alt="Forged Finance Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="text-xl font-bold tracking-[0.3em] text-foreground">
              FORGED FINANCE
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">PLATFORM</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">PRICING</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">ABOUT</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">CONTACT</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="text-foreground hover:bg-accent p-2"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-accent text-sm tracking-wide">
              SIGN IN
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide px-6">
              GET ACCESS
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-background relative overflow-hidden">
        {/* Dynamic Spotlights */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-foreground/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-1/3 w-64 h-64 bg-blue-400/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-40 left-1/2 w-80 h-80 bg-foreground/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-[60px] animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          {/* Live Platform Badge - Top Right with animation */}
          <div className={`absolute top-24 right-8 transition-all duration-1000 ${
            showLogo ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-muted-foreground text-sm tracking-wider font-medium">LIVE PLATFORM</span>
            </div>
          </div>

          {/* Main Content - Perfectly Centered */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* 3D Logo with better sizing */}
            <div className={`w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center mb-8 transition-all duration-1000 ${
              showLogo ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}>
              <Logo3D />
            </div>
            
            {/* Title with improved spacing */}
            <div className={`space-y-6 mb-12 transition-all duration-1000 ${
              showBottomContent ? 'animate-slide-from-bottom opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-foreground">THE FUTURE OF FINANCE CAREERS</span>
              </h1>
            </div>
            
            {/* Description with better typography and controlled spacing */}
            <div className={`max-w-3xl mb-32 transition-all duration-1000 ${
              showBottomContent ? 'animate-slide-from-bottom opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Connect with elite opportunities across Europe's top investment banks, 
                private equity firms, and asset management companies.
              </p>
            </div>
          </div>

          {/* Swipe Down Indicator with enhanced design and proper positioning */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground transition-all duration-1000 ${
            showBottomContent ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            <span className="text-xs tracking-[0.2em] mb-6 font-medium">SWIPE DOWN TO EXPLORE</span>
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-5 h-5 animate-bounce" />
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Hub for Finance Careers */}
      <section id="second-section" className="min-h-screen bg-background relative overflow-hidden">
        {/* Dynamic Spotlights for Section 2 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-cyan-400/12 rounded-full blur-[90px] animate-pulse" />
          <div className="absolute bottom-32 left-1/5 w-56 h-56 bg-foreground/8 rounded-full blur-[70px] animate-float" />
          <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-pink-400/10 rounded-full blur-[50px]" />
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-300/12 rounded-full blur-[85px] animate-pulse" />
          <div className="absolute top-16 left-1/2 w-88 h-88 bg-indigo-400/8 rounded-full blur-[110px] animate-float" />
          <div className="absolute bottom-48 right-1/5 w-52 h-52 bg-emerald-400/10 rounded-full blur-[75px]" />
          <div className="absolute top-2/3 left-16 w-36 h-36 bg-orange-400/8 rounded-full blur-[55px] animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              showSecondSection ? 'animate-slide-in-left opacity-100 translate-x-0' : 'animate-slide-out-left opacity-0 -translate-x-full'
            }`}>
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">Your hub for</span>
                  <span className="block text-foreground">finance careers</span>
                  <span className="block text-foreground">across Europe</span>
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find and track top investment banking, private equity, and 
                  asset management roles with a streamlined application 
                  experience.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium hover:scale-105 transition-transform"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-border text-foreground hover:bg-accent px-8 py-6 text-base font-medium hover:scale-105 transition-transform"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              showSecondSection ? 'animate-slide-in-right opacity-100 translate-x-0' : 'animate-slide-out-right opacity-0 translate-x-full'
            }`}>
              <div className="bg-card border border-border rounded-2xl p-8 hover:bg-accent/50 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-8">The Professional Edge</h3>
                
                <div className="space-y-6">
                  <div className={`flex items-start space-x-4 transition-all duration-700 delay-500 ${
                    showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Comprehensive database of finance roles across Europe</p>
                  </div>
                  
                  <div className={`flex items-start space-x-4 transition-all duration-700 delay-600 ${
                    showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Filter by country, division, and job type</p>
                  </div>
                  
                  <div className={`flex items-start space-x-4 transition-all duration-700 delay-700 ${
                    showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Track application deadlines easily</p>
                  </div>
                  
                  <div className={`flex items-start space-x-4 transition-all duration-700 delay-800 ${
                    showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Direct links to application pages</p>
                  </div>
                  
                  <div className={`flex items-start space-x-4 transition-all duration-700 delay-900 ${
                    showSecondSection ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">Professional profile for hiring managers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${
            showSecondSection ? 'animate-slide-from-bottom opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}>
            <p className="text-muted-foreground text-lg mb-12">Trusted by top business schools across Europe</p>
            
            <div className="bg-card border border-border rounded-2xl p-8 hover:bg-accent/50 transition-colors duration-300">
              <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                <span className="text-lg hover:text-foreground transition-colors duration-200">London School of Economics</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">Copenhagen Business School</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">Warwick</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">UCL</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">HEC</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">ESCP</span>
                <span className="text-lg hover:text-foreground transition-colors duration-200">ESSEC</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1100 ${
            showSecondSection ? 'animate-slide-from-bottom opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Stay Ahead of the Market
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Get weekly insights on finance career trends, new opportunities, 
              and exclusive access to premium roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary backdrop-blur-sm"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-xl font-medium">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};