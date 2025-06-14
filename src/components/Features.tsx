import { 
  Brain, 
  Zap, 
  Shield, 
  Target, 
  TrendingUp, 
  Globe 
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced algorithms analyze your profile and match you with the most relevant opportunities in real-time.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get immediate alerts when new positions open at your target firms across Europe's financial hubs.",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Verified Opportunities",
    description: "Every role is verified and sourced directly from top-tier investment banks and private equity firms.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Filter by location, division, experience level, and compensation to find your perfect role.",
    gradient: "from-red-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Career Analytics",
    description: "Track your application success rate and get insights to improve your finance career trajectory.",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    icon: Globe,
    title: "European Network",
    description: "Access opportunities across 25+ countries with local insights and market intelligence.",
    gradient: "from-purple-500 to-indigo-600"
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-white/80 text-sm tracking-wider">PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">ENGINEERED FOR</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              EXCELLENCE
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge technology with deep finance industry expertise 
            to deliver unparalleled career opportunities.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};