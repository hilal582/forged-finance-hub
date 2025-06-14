import { Database, Filter, Calendar, Search, Upload, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access finance roles across Europe from top investment banks, private equity, and asset management firms."
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Filter by country, division, job type, and more to find your perfect opportunity in high finance."
  },
  {
    icon: Calendar,
    title: "Deadline Tracking",
    description: "Never miss an application deadline with our smart tracking and notification system."
  },
  {
    icon: Search,
    title: "Discover",
    description: "Explore thousands of curated roles from top finance firms across Europe with detailed requirements."
  },
  {
    icon: Upload,
    title: "Apply",
    description: "Submit applications directly through our platform with your professional profile and CV."
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your application status and receive real-time updates on interview progress."
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-8 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
            <span className="text-white/60 text-sm tracking-widest uppercase">
              Platform Features
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Professional
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Edge
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-black/50 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 group backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};