
import React, { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
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
    <>
      {/* Navigation - Exact match with logo */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C] border-b border-[#1A2332]">
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b8a8639e-5559-4a59-b902-4dd8354cac28.png" 
              alt="Forged Finance Logo" 
              className="w-8 h-8"
            />
            <div className="text-xl font-semibold text-white">
              Forged Finance
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1A2332] text-sm px-4 py-2"
                onClick={signOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1A2332] text-sm px-4 py-2"
                onClick={onSignInClick}
              >
                Sign In
              </Button>
            )}
            <Button 
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA] text-sm px-4 py-2 rounded-md font-medium"
              onClick={onGetAccessClick}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Exact replica with tight spacing */}
      <section className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#0F1629] to-[#1A2847] relative overflow-hidden pt-20">
        <div className="max-w-[1200px] mx-auto px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content - Exact typography and spacing */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-[64px] leading-[72px] font-bold text-white">
                  Your hub for{' '}
                  <span className="text-[#4F46E5]">finance careers</span>{' '}
                  across Europe
                </h1>
                
                <p className="text-[18px] leading-[28px] text-[#9CA3AF] max-w-[520px]">
                  Find and track top investment banking, private equity, and 
                  asset management roles with a streamlined application experience.
                </p>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="bg-[#4F46E5] text-white hover:bg-[#4338CA] px-6 py-3 text-base font-medium rounded-md flex items-center gap-2 h-12"
                  onClick={onGetAccessClick}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border border-[#374151] text-white hover:bg-[#374151] px-6 py-3 text-base font-medium rounded-md bg-transparent h-12"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Content - Exact card design with tight spacing */}
            <div className="bg-[#1A2332]/60 border border-[#374151]/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-[24px] font-bold text-white mb-6">The Professional Edge</h3>
              
              <div className="space-y-4">
                {[
                  'Comprehensive database of finance roles across Europe',
                  'Filter by country, division, and job type',
                  'Track application deadlines easily',
                  'Direct links to application pages',
                  'Professional profile for hiring managers'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-[16px] leading-[24px] text-[#E5E7EB]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section - Exact match with minimal spacing */}
      <section className="py-12 bg-[#0A0F1C] border-t border-[#1A2332]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-8">
            <h3 className="text-[16px] text-[#6B7280] font-medium">
              Trusted by top business schools across Europe
            </h3>
          </div>
          
          <div className="flex justify-center items-center gap-12 opacity-70">
            {[
              'London School of Economics',
              'Copenhagen Business School', 
              'Warwick',
              'UCL',
              'HEC',
              'ESCP',
              'ESSEC'
            ].map((school, index) => (
              <div key={index} className="text-[#6B7280] font-medium text-[14px] whitespace-nowrap">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
