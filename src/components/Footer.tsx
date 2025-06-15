import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: ["Browse Opportunities", "Application Tracking", "Career Analytics", "Interview Prep"]
    },
    {
      title: "Resources", 
      links: ["Market Insights", "Salary Guide", "Career Advice", "Industry Reports"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Contact"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Data Protection"]
    }
  ];

  return (
    <footer className="bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.01)_49%,rgba(255,255,255,0.01)_51%,transparent_52%)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-20 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Stay Ahead of the Market
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get weekly insights on finance career trends, new opportunities, 
              and exclusive access to premium roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary backdrop-blur-sm"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-medium">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-[0.2em]">
                FORGED FINANCE
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The premier platform for finance professionals seeking elite career 
                opportunities across Europe's top financial institutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@forgedfinance.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+44 20 7946 0958</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-foreground mb-6 tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground tracking-wide mb-4 md:mb-0">
              &copy; 2024 Forged Finance. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};