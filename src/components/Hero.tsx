
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sun, Moon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface HeroProps {
  onSignInClick: () => void;
  onGetAccessClick: () => void;
}

export const Hero = ({ onSignInClick, onGetAccessClick }: HeroProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { user, signOut } = useAuth();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    // Set dark mode by default to match the design
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="text-lg font-semibold tracking-wide text-white">
              Forged Finance
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white hover:bg-slate-800 p-2"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            {user ? (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-slate-800 text-sm"
                onClick={signOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-slate-800 text-sm px-6"
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            )}
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-6 rounded-lg"
              onClick={onGetAccessClick}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden pt-20">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-8 h-screen flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Your hub for{' '}
                  <span className="text-blue-400">finance careers</span>{' '}
                  across Europe
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Find and track top investment banking, private equity, and 
                  asset management roles with a streamlined application experience.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg font-medium rounded-lg flex items-center gap-2"
                  onClick={onGetAccessClick}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg font-medium rounded-lg bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Features Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">The Professional Edge</h3>
              
              <div className="space-y-6">
                {[
                  'Comprehensive database of finance roles across Europe',
                  'Filter by country, division, and job type',
                  'Track application deadlines easily',
                  'Direct links to application pages',
                  'Professional profile for hiring managers'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl text-gray-400 font-medium">
              Trusted by top business schools across Europe
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            {[
              'London School of Economics',
              'Copenhagen Business School', 
              'Warwick',
              'UCL',
              'HEC',
              'ESCP',
              'ESSEC'
            ].map((school, index) => (
              <div key={index} className="text-gray-400 font-medium text-lg">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
