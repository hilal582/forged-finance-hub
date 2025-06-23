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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/95 backdrop-blur-sm border-b border-[#1E293B]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-[#4F46E5] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="text-lg font-semibold text-white">
              Forged Finance
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1E293B] text-sm"
                onClick={signOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1E293B] text-sm px-6"
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            )}
            <Button 
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] text-sm px-6 rounded-md"
              onClick={onGetAccessClick}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-[#0B1426] relative overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1426] via-[#1E293B] to-[#0B1426]" />
        
        <div className="max-w-7xl mx-auto px-6 h-screen flex items-center relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Your hub for{' '}
                  <span className="text-[#4F46E5]">finance careers</span>{' '}
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
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-8 py-4 text-lg font-medium rounded-md flex items-center gap-2"
                  onClick={onGetAccessClick}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-2 border-[#374151] text-white hover:bg-[#374151] px-8 py-4 text-lg font-medium rounded-md bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Features Card */}
            <div className="bg-[#1E293B]/50 border border-[#374151] rounded-2xl p-8 backdrop-blur-sm">
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
                    <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
      <section className="py-16 bg-[#0B1426] border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6">
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