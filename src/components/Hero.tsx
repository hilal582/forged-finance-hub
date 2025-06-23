import React, { useEffect, useState } from 'react';
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
      {/* Navigation - Exact match */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426] border-b border-[#1E293B]/30">
        <div className="max-w-[1200px] mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-[#4F46E5] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <div className="text-xl font-semibold text-white">
              Forged Finance
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {user ? (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1E293B] text-sm px-4 py-2"
                onClick={signOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-[#1E293B] text-sm px-4 py-2"
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

      {/* Hero Section - Exact replica */}
      <section className="min-h-screen bg-[#0B1426] relative overflow-hidden pt-20">
        <div className="max-w-[1200px] mx-auto px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
            {/* Left Content - Exact typography and spacing */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-[64px] leading-[72px] font-bold text-white">
                  Your hub for{' '}
                  <span className="text-[#4F46E5]">finance careers</span>{' '}
                  across Europe
                </h1>
                
                <p className="text-[20px] leading-[30px] text-[#94A3B8] max-w-[520px]">
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

            {/* Right Content - Exact card design */}
            <div className="bg-[#1E293B]/40 border border-[#374151]/50 rounded-2xl p-8">
              <h3 className="text-[24px] font-bold text-white mb-8">The Professional Edge</h3>
              
              <div className="space-y-6">
                {[
                  'Comprehensive database of finance roles across Europe',
                  'Filter by country, division, and job type',
                  'Track application deadlines easily',
                  'Direct links to application pages',
                  'Professional profile for hiring managers'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#4F46E5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-[16px] leading-[24px] text-[#E2E8F0]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section - Exact match */}
      <section className="py-16 bg-[#0B1426] border-t border-[#1E293B]/30">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h3 className="text-[18px] text-[#64748B] font-medium">
              Trusted by top business schools across Europe
            </h3>
          </div>
          
          <div className="flex justify-center items-center gap-16 opacity-60">
            {[
              'London School of Economics',
              'Copenhagen Business School', 
              'Warwick',
              'UCL',
              'HEC',
              'ESCP',
              'ESSEC'
            ].map((school, index) => (
              <div key={index} className="text-[#64748B] font-medium text-[16px] whitespace-nowrap">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};