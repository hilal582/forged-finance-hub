import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showBottomContent, setShowBottomContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Sequential animation sequence
    const headerTimer = setTimeout(() => setShowHeader(true), 300);
    const bottomTimer = setTimeout(() => setShowBottomContent(true), 1200);
    const logoTimer = setTimeout(() => setShowLogo(true), 2000);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(bottomTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-1000 ${
        showHeader ? 'animate-slide-from-top opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
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
        {/* Dynamic Spotlights */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-1/3 w-64 h-64 bg-blue-400/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-40 left-1/2 w-80 h-80 bg-white/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-[60px] animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          {/* Live Platform Badge - Top Right with animation */}
          <div className={`absolute top-24 right-8 transition-all duration-1000 ${
            showLogo ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white/80 text-sm tracking-wider font-medium">LIVE PLATFORM</span>
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
                <span className="block text-white">THE FUTURE OF FINANCE CAREERS</span>
              </h1>
            </div>
            
            {/* Description with better typography and controlled spacing */}
            <div className={`max-w-3xl mb-32 transition-all duration-1000 ${
              showBottomContent ? 'animate-slide-from-bottom opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                Connect with elite opportunities across Europe's top investment banks, 
                private equity firms, and asset management companies.
              </p>
            </div>
          </div>

          {/* Swipe Down Indicator with enhanced design and proper positioning */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 transition-all duration-1000 ${
            showBottomContent ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}>
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
        {/* Dynamic Spotlights for Section 2 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-cyan-400/12 rounded-full blur-[90px] animate-pulse" />
          <div className="absolute bottom-32 left-1/5 w-56 h-56 bg-white/8 rounded-full blur-[70px] animate-float" />
          <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-pink-400/10 rounded-full blur-[50px]" />
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-blue-300/12 rounded-full blur-[85px] animate-pulse" />
          <div className="absolute top-16 left-1/2 w-88 h-88 bg-indigo-400/8 rounded-full blur-[110px] animate-float" />
          <div className="absolute bottom-48 right-1/5 w-52 h-52 bg-emerald-400/10 rounded-full blur-[75px]" />
          <div className="absolute top-2/3 left-16 w-36 h-36 bg-orange-400/8 rounded-full blur-[55px] animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
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
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">The Professional Edge</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <p className="text-white/80">Comprehensive database of finance roles across Europe</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <p className="text-white/80">Filter by country, division, and job type</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <p className="text-white/80">Track application deadlines easily</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <p className="text-white/80">Direct links to application pages</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <p className="text-white/80">Professional profile for hiring managers</p>
                  </div>
                </div>
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