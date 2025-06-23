
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface HeroProps {
  onSignInClick: () => void;
  onGetAccessClick: () => void;
}

export const Hero = ({ onSignInClick, onGetAccessClick }: HeroProps) => {
  const { user, signOut } = useAuth();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1629] via-[#1A2847] to-[#2A3B5C] text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-semibold">Forged Finance</span>
        </div>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <Button 
              variant="ghost" 
              className="text-white hover:text-white hover:bg-white/10"
              onClick={signOut}
            >
              Sign Out
            </Button>
          ) : (
            <Button 
              variant="ghost" 
              className="text-white hover:text-white hover:bg-white/10"
              onClick={onSignInClick}
            >
              Sign In
            </Button>
          )}
          <Button 
            className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-2 rounded-lg font-medium"
            onClick={onGetAccessClick}
          >
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              Your hub for{' '}
              <span className="text-[#4F46E5]">finance careers</span>{' '}
              across Europe
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Find and track top investment banking, private equity, and 
              asset management roles with a streamlined application experience.
            </p>

            <div className="flex gap-4">
              <Button 
                className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-8 py-3 text-lg font-medium rounded-lg flex items-center gap-2"
                onClick={onGetAccessClick}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-500 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Features Card */}
          <div className="bg-[#1E293B]/40 border border-gray-600/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8">The Professional Edge</h3>
            
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
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-200">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="border-t border-gray-700/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-lg text-gray-400 font-medium">
              Trusted by top business schools across Europe
            </h3>
          </div>
          
          <div className="bg-[#1E293B]/30 border border-gray-600/20 rounded-xl p-8">
            <div className="flex justify-center items-center gap-16 flex-wrap text-gray-400">
              {[
                'hool of Economics)',
                'Copenhagen Business School', 
                'Warwick',
                'UCL',
                'HEC',
                'ESCP',
                'ESSEC'
              ].map((school, index) => (
                <div key={index} className="text-lg font-medium">
                  {school}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
