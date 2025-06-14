import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate smooth transition progress based on scroll
  const getTransitionProgress = () => {
    const windowHeight = window.innerHeight;
    const startScroll = windowHeight * 0.6; // Start moving at 60% through section 1
    const endScroll = windowHeight * 1.3; // Finish moving by 30% into section 2
    const progress = Math.max(0, Math.min(1, (scrollY - startScroll) / (endScroll - startScroll)));
    
    // Apply smooth easing
    return progress * progress * (3 - 2 * progress);
  };

  const transitionProgress = getTransitionProgress();

  // Calculate logo position
  const getLogoStyle = () => {
    if (transitionProgress === 0) {
      // Logo stays in section 1 center
      return {
        position: 'static' as const,
        transform: 'none',
        opacity: 1
      };
    }
    
    // Calculate movement to section 2 right side
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    // Target: right side of section 2 (where professional edge was)
    const targetX = windowWidth * 0.25; // Move right
    const targetY = windowHeight + windowHeight * 0.15; // Into section 2
    
    const currentX = targetX * transitionProgress;
    const currentY = targetY * transitionProgress;
    const scale = 1 - (transitionProgress * 0.2); // Slightly smaller when landed
    
    return {
      position: 'fixed' as const,
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%) translate(${currentX}px, ${currentY}px) scale(${scale})`,
      zIndex: 40,
      pointerEvents: 'none' as const,
      transition: 'none',
      opacity: 1,
      width: '300px',
      height: '300px'
    };
  };

  const logoStyle = getLogoStyle();

  return (
    <>
      {/* Floating/Transitioning 3D Logo */}
      {transitionProgress > 0 && (
        <div style={logoStyle}>
          <div className="w-80 h-80 flex items-center justify-center">
            <Logo3D />
          </div>
        </div>
      )}
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/forgedfinance_logo.jpg" 
              alt="Forged Finance Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="text-xl font-bold tracking-[0.3em] text-white">
              FORGED FINANCE
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">PLATFORM</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">PRICING</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">ABOUT</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">CONTACT</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10 text-sm tracking-wide">
              SIGN IN
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-wide px-6">
              GET ACCESS
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          {/* Live Platform Badge - Top Right with better positioning */}
          <div className="absolute top-24 right-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white/80 text-sm tracking-wider font-medium">LIVE PLATFORM</span>
            </div>
          </div>

          {/* Main Content - Perfectly Centered */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* 3D Logo in section 1 - visible only when not transitioning */}
            <div 
              className={`w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center mb-8 transition-opacity duration-500 ${
                transitionProgress === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {transitionProgress === 0 && <Logo3D />}
            </div>
            
            {/* Title with improved spacing */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-white">THE FUTURE OF FINANCE CAREERS</span>
              </h1>
            </div>
            
            {/* Description with better typography and controlled spacing */}
            <div className="max-w-3xl mb-32">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                Connect with elite opportunities across Europe's top investment banks, 
                private equity firms, and asset management companies.
              </p>
            </div>
          </div>

          {/* Swipe Down Indicator with enhanced design and proper positioning */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50">
            <span className="text-xs tracking-[0.2em] mb-6 font-medium">SWIPE DOWN TO EXPLORE</span>
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-5 h-5 animate-bounce" />
              <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Hub for Finance Careers */}
      <section className="min-h-screen bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">Your hub for</span>
                  <span className="block text-white">finance careers</span>
                  <span className="block text-white">across Europe</span>
                </h2>
                
                <p className="text-lg text-white/70 leading-relaxed">
                  Find and track top investment banking, private equity, and 
                  asset management roles with a streamlined application 
                  experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - 3D Logo Landing Area */}
            <div className="space-y-8 flex items-center justify-center">
              {/* Logo Landing Area - The floating logo will land here */}
              <div className="w-80 h-80 flex items-center justify-center">
                {/* Logo is handled by the floating transition logic above */}
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-24 text-center">
            <p className="text-white/60 text-lg mb-12">Trusted by top business schools across Europe</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                <span className="text-lg">London School of Economics</span>
                <span className="text-lg">Copenhagen Business School</span>
                <span className="text-lg">Warwick</span>
                <span className="text-lg">UCL</span>
                <span className="text-lg">HEC</span>
                <span className="text-lg">ESCP</span>
                <span className="text-lg">ESSEC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};