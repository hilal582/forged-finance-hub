import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-black/80 backdrop-blur-sm">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          FORGED FINANCE
        </h1>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Sign In
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </header>

      <Logo3D scrollY={scrollY} />
      
      {/* First Section - Hero */}
      <section className="min-h-screen relative overflow-hidden bg-black flex flex-col items-center justify-center pt-20">
        <div className="text-center px-6 max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              FORGED FINANCE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Your hub for finance careers across Europe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground z-20">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>
      
      {/* Second Section - Content */}
      <section className="min-h-screen bg-black flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Your hub for
            <br />
            <span className="text-primary">finance careers</span>
            <br />
            across Europe
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Find and track top investment banking, private equity, and asset management roles with a streamlined application experience.
          </p>
        </div>
      </section>
    </>
  );
};