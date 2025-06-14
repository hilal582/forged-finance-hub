import { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-bold tracking-[0.2em] text-white">
          FORGED FINANCE
        </div>
        <div className="flex gap-6">
          <Button 
            variant="ghost" 
            className="text-white hover:text-black hover:bg-white transition-all duration-300 font-medium tracking-wide"
          >
            SIGN IN
          </Button>
          <Button 
            className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium tracking-wide px-8"
          >
            SIGN UP
          </Button>
        </div>
      </header>

      <Logo3D scrollY={scrollY} />
      
      {/* First Section - Hero */}
      <section className="min-h-screen bg-black flex flex-col justify-center items-center relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]" />
        
        {/* Content */}
        <div className="text-center px-8 max-w-6xl mx-auto mt-32 md:mt-40 relative z-10">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
              <span className="text-white/80 text-sm tracking-wider uppercase">
                Next Generation Finance Platform
              </span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              FORGED
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              FINANCE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            The future of finance careers across Europe. 
            <br />
            Discover opportunities that define tomorrow.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center text-white/60 animate-pulse">
          <span className="text-sm mb-4 font-medium tracking-wider uppercase">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Second Section - Main Content */}
      <section className="min-h-screen bg-black flex items-center relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        
        <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="max-w-3xl">
            <div className="mb-8">
              <div className="inline-block px-4 py-1 border border-white/20 rounded-full mb-6">
                <span className="text-white/60 text-xs tracking-widest uppercase">
                  Platform Overview
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your Gateway to
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Elite Finance
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Careers
              </span>
            </h2>
            
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl">
              Connect with top-tier investment banking, private equity, and asset management 
              opportunities across Europe through our advanced platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-12 py-6 text-lg font-medium tracking-wide group"
              >
                GET STARTED
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 px-12 py-6 text-lg font-medium tracking-wide"
              >
                LEARN MORE
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-white/60 text-sm tracking-wider uppercase">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};