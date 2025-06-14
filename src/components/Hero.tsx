import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo3D } from './Logo3D';

export const Hero = () => {

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-xl font-bold tracking-[0.3em] text-white">
              FORGED FINANCE
            </div>
            <img 
              src="/forgedfinance_logo.jpg" 
              alt="Forged Finance Logo" 
              className="h-8 w-8 object-contain"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">PLATFORM</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">CAREERS</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">INSIGHTS</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm tracking-wide">ABOUT</a>
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
        <div className="max-w-7xl mx-auto px-8 h-screen flex flex-col justify-center relative z-10">
          {/* Live Platform Badge - Top Right with better positioning */}
          <div className="absolute top-24 right-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-white/80 text-sm tracking-wider font-medium">LIVE PLATFORM</span>
            </div>
          </div>

          {/* Main Content - Perfectly Centered */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* 3D Logo with better sizing */}
            <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center mb-8">
              <Logo3D />
            </div>
            
            {/* Title with improved spacing */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-white">THE FUTURE OF FINANCE CAREERS</span>
              </h1>
            </div>
            
            {/* Description with better typography and controlled spacing */}
            <div className="max-w-3xl mb-32">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                Connect with elite opportunities across Europe's top investment banks, 
                private equity firms, and asset management companies.
              </p>
            </div>
          </div>

          {/* Swipe Down Indicator with enhanced design and proper positioning */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50">
            <span className="text-xs tracking-[0.2em] mb-6 font-medium">SWIPE DOWN TO EXPLORE</span>
            <div className="flex flex-col items-center space-y-2">
              <ChevronDown className="w-5 h-5 animate-bounce" />
              <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content - Space for 3D Logo when scrolled */}
          <div className="relative h-96 lg:h-full order-2 lg:order-1">
            {/* This space is for the 3D logo when it moves here */}
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="text-white/80 text-sm tracking-wider">PLATFORM OVERVIEW</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">PRECISION</span>
                <span className="block text-white">MEETS</span>
                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  OPPORTUNITY
                </span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed">
                Our AI-powered platform analyzes thousands of finance positions daily, 
                matching your profile with the most relevant opportunities across Europe's 
                financial capitals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Smart Matching Algorithm</h3>
                  <p className="text-white/70">Advanced AI connects you with roles that match your skills, experience, and career aspirations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Real-time Opportunities</h3>
                  <p className="text-white/70">Get instant notifications for new positions at top-tier investment banks and PE firms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">Application Tracking</h3>
                  <p className="text-white/70">Monitor your application progress with detailed insights and interview preparation resources.</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium group"
            >
              EXPLORE PLATFORM
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};