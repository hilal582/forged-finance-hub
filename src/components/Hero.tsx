
import { ArrowRight, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

interface HeroProps {
  onSignInClick: () => void;
  onGetAccessClick: () => void;
}

export const Hero = ({ onSignInClick, onGetAccessClick }: HeroProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, signOut } = useAuth();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/forgedfinance_logo.jpg" 
              alt="Forged Finance Logo" 
              className="h-8 w-8 object-contain"
            />
            <div className="text-lg font-bold tracking-[0.25em] text-foreground">
              FORGED FINANCE
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Platform</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</a>
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
            {user ? (
              <Button 
                variant="ghost" 
                className="text-foreground hover:bg-accent text-sm"
                onClick={signOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="text-foreground hover:bg-accent text-sm"
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            )}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-6"
              onClick={onGetAccessClick}
            >
              Get Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-background relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-1/3 w-64 h-64 bg-blue-400/15 rounded-full blur-[80px] animate-float" />
          <div className="absolute bottom-40 left-1/2 w-80 h-80 bg-primary/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-[60px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-foreground">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                Finance Careers
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Connect with elite opportunities across Europe's top investment banks, 
              private equity firms, and asset management companies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={onGetAccessClick}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-primary/20 text-foreground hover:bg-primary/5 px-8 py-6 text-lg font-medium rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-1/4 w-72 h-72 bg-cyan-400/12 rounded-full blur-[90px] animate-pulse" />
          <div className="absolute bottom-32 left-1/5 w-56 h-56 bg-primary/8 rounded-full blur-[70px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Your hub for finance careers across Europe
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Find and track top investment banking, private equity, and 
                  asset management roles with a streamlined application experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium hover:scale-105 transition-transform"
                  onClick={onGetAccessClick}
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

            {/* Right Content - Features */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:bg-accent/50 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-8">The Professional Edge</h3>
              
              <div className="space-y-6">
                {[
                  'Comprehensive database of finance roles across Europe',
                  'Filter by country, division, and job type',
                  'Track application deadlines easily',
                  'Direct links to application pages',
                  'Professional profile for hiring managers'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-24 text-center">
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
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-medium">
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
