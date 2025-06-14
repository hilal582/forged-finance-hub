import { Building2, GraduationCap, Users, Award } from 'lucide-react';

const partnerCategories = [
  {
    title: "Investment Banks",
    icon: Building2,
    partners: [
      "Goldman Sachs",
      "Morgan Stanley", 
      "J.P. Morgan",
      "Deutsche Bank",
      "Barclays",
      "Credit Suisse"
    ],
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    title: "Business Schools",
    icon: GraduationCap,
    partners: [
      "London Business School",
      "INSEAD",
      "HEC Paris",
      "IESE Business School",
      "Cambridge Judge",
      "Oxford Saïd"
    ],
    gradient: "from-purple-600 to-pink-700"
  },
  {
    title: "Private Equity",
    icon: Users,
    partners: [
      "KKR",
      "Blackstone",
      "Carlyle Group",
      "Apollo Global",
      "Bain Capital",
      "CVC Capital"
    ],
    gradient: "from-green-600 to-teal-700"
  },
  {
    title: "Asset Management",
    icon: Award,
    partners: [
      "BlackRock",
      "Vanguard",
      "State Street",
      "Fidelity",
      "Schroders",
      "Amundi"
    ],
    gradient: "from-orange-600 to-red-700"
  }
];

export const Partners = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_48%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.01)_51%,transparent_52%)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
            <span className="text-white/80 text-sm tracking-wider">TRUSTED NETWORK</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-white">ELITE</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              PARTNERSHIPS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We work directly with the world's most prestigious financial institutions 
            and business schools to bring you exclusive opportunities.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partnerCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
              
              {/* Header */}
              <div className="flex items-center mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} p-3 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                  {category.title}
                </h3>
              </div>
              
              {/* Partners List */}
              <div className="grid grid-cols-2 gap-4">
                {category.partners.map((partner, partnerIndex) => (
                  <div 
                    key={partnerIndex}
                    className="bg-white/5 rounded-xl p-4 text-center border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-white/80 font-medium text-sm">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/60 text-sm tracking-wider">PARTNER FIRMS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/60 text-sm tracking-wider">BUSINESS SCHOOLS</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25</div>
            <div className="text-white/60 text-sm tracking-wider">COUNTRIES</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/60 text-sm tracking-wider">SUCCESS RATE</div>
          </div>
        </div>
      </div>
    </section>
  );
};