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
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-background/95 backdrop-blur-md border-b border-border/20">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          FORGED FINANCE
        </h1>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
            Sign In
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
            Sign Up
          </Button>
        </div>
      </header>

      <Logo3D scrollY={scrollY} />
      
      {/* First Page */}
      <section className="min-h-screen bg-black flex flex-col relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 z-0"></div>
        
        {/* Content below 3D logo */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 relative z-10 mt-32">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                FORGED FINANCE
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Your hub for finance careers across Europe
            </p>
            
            <div className="flex flex-col items-center text-muted-foreground pt-8">
              <span className="text-sm mb-3 font-medium tracking-wide opacity-80">Scroll Down to Get Started</span>
              <ChevronDown className="w-5 h-5 animate-bounce opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Second Page Content - Split Layout with Trusted Schools */}
      <section className="min-h-screen bg-black flex flex-col relative">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                    Your hub for
                    <br />
                    <span className="text-primary">finance careers</span>
                    <br />
                    across Europe
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                    Find and track top investment banking, private equity, and asset management roles with a streamlined application experience.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium">
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Right Side - Large 3D Logo */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-80 lg:w-96 lg:h-96">
                  <Logo3D scrollY={0} isStatic={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Business Schools Section - Part of Second Section */}
        <div className="py-16 border-t border-white/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by Top Business Schools
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="border border-white/30 rounded-xl p-8 bg-card/10 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {[
                  "London School of Economics",
                  "Copenhagen Business School", 
                  "Warwick Business School",
                  "UCL",
                  "HEC Paris",
                  "ESCP Business School"
                ].map((school, index) => (
                  <div 
                    key={index}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm md:text-base font-medium"
                  >
                    {school}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Edge Section - Third Section */}
      <section className="py-24 bg-gradient-to-b from-black to-finance-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Professional Edge
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart in the competitive world of finance careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Database",
                description: "Access finance roles across Europe from top investment banks, private equity, and asset management firms.",
                icon: "🏦"
              },
              {
                title: "Smart Filtering",
                description: "Filter by country, division, job type, and more to find your perfect opportunity in high finance.",
                icon: "🔍"
              },
              {
                title: "Deadline Tracking",
                description: "Never miss an application deadline with our smart tracking and notification system.",
                icon: "📅"
              },
              {
                title: "Direct Applications",
                description: "Submit applications directly through our platform with your professional profile and CV.",
                icon: "📄"
              },
              {
                title: "Progress Monitoring",
                description: "Track your application status and receive real-time updates on interview progress.",
                icon: "📊"
              },
              {
                title: "Expert Guidance",
                description: "Get insights from industry professionals and career advisors to maximize your success.",
                icon: "🎯"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-8 hover:bg-card/70 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};