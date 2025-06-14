import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';
import { useEffect, useState, useRef } from 'react';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const section2Ref = useRef<HTMLDivElement>(null);
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (section2Ref.current) {
      const rect = section2Ref.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      
      // Calculate target position - aligned with the text content
      const targetY = sectionTop + (rect.height * 0.3); // 30% from top of section
      const targetX = rect.left + (rect.width * 0.25);  // 25% from left of section
      
      setTargetPosition({
        x: targetX - windowSize.width / 2,
        y: targetY - windowSize.height / 2,
      });
    }
  }, [scrollY, windowSize]);

  // Calculate movement progress
  const section1Height = windowSize.height;
  const section2Start = section1Height;
  const animationEnd = section2Start + 500; // Animation completes after 500px into section 2

  let logoTransform = 'translate(-50%, -50%)';
  let logoOpacity = 1;

  if (scrollY > section2Start) {
    const progress = Math.min(
      (scrollY - section2Start) / (animationEnd - section2Start),
      1
    );
    
    logoTransform = `translate(-50%, -50%) translate(${
      targetPosition.x * progress
    }px, ${
      targetPosition.y * progress
    }px)`;
    
    // Fade out in the last 20% of animation
    if (progress > 0.8) {
      logoOpacity = 1 - ((progress - 0.8) / 0.2);
    }
  }

  return (
    <>
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

      {/* Floating 3D Logo */}
      <div 
        className="fixed top-1/2 left-1/2 z-40 w-80 h-80 lg:w-96 lg:h-96 pointer-events-none"
        style={{
          transform: logoTransform,
          opacity: logoOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
        }}
      >
        <Logo3D />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          {/* Live Platform Badge */}
          <div className="absolute top-24 right-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white/80 text-sm tracking-wider font-medium">LIVE PLATFORM</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Hidden placeholder for spacing */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center mb-8 opacity-0">
              {/* Hidden - using floating logo instead */}
            </div>
            
            {/* Title */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-white">THE FUTURE OF FINANCE CAREERS</span>
              </h1>
            </div>
            
            {/* Description */}
            <div className="max-w-3xl mb-32">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                Connect with elite opportunities across Europe's top investment banks, 
                private equity firms, and asset management companies.
              </p>
            </div>
          </div>

          {/* Swipe Down Indicator */}
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
      <section 
        ref={section2Ref} 
        className="min-h-screen bg-black relative overflow-hidden"
      >
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

            {/* Right Content */}
            <div className="space-y-8">
              {/* Empty space for future content */}
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