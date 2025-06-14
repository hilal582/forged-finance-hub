import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Partners } from '@/components/Partners';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Features />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;