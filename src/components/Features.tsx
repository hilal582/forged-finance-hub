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
    <section className="py-20 px-6 bg-finance-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Professional Edge
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};