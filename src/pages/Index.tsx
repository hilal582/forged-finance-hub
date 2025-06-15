import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div className="flex flex-col">
          <Hero />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;