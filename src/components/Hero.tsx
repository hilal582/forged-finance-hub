import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 p-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          FORGED FINANCE
        </h1>
      </header>

      <Logo3D isScrolled={isScrolled} />
      
      <section className="min-h-screen relative flex flex-col overflow-hidden bg-gradient-to-br from-background via-finance-gray-900 to-background">
        {/* 3D Model Space */}
        <div className="flex-1 flex items-center justify-center pt-20">
          {/* Space for 3D model - handled by Logo3D component */}
        </div>
        
        {/* Content */}
        <div className={`transition-all duration-700 ${isScrolled ? 'fixed left-6 top-1/2 -translate-y-1/2 max-w-md z-30' : 'text-center pb-20 px-6'}`}>
          {isScrolled ? (
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Find and Track
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Top investment banking, private equity and asset management roles with a streamlined application experience.
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  FORGED FINANCE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Your hub for finance careers across Europe
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {!isScrolled && (
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground z-20">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </div>
        )}
      </section>
    </>
  );
};