import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500); // Small delay before transitioning
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      {/* Background spotlights for ambiance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/6 rounded-full blur-[80px] animate-pulse" />
      </div>

      {/* Logo container with blinking animation */}
      <div className="relative z-10 w-48 h-48 lg:w-56 lg:h-56 flex items-center justify-center">
        <div className="w-full h-full animate-logo-pulse">
          <img 
            src="/forgedfinance_logo.jpg" 
            alt="Forged Finance Logo" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Loading text and progress */}
      <div className="relative z-10 mt-8 text-center">
        <div className="text-white/80 text-lg font-medium tracking-[0.2em] mb-4">
          FORGED FINANCE
        </div>
        <div className="text-white/60 text-sm tracking-wider mb-6">
          Loading Experience...
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white/40 text-xs mt-2 tracking-wide">
          {progress}%
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-20 flex space-x-2">
        <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};