import { Mail, Phone, MapPin } from 'lucide-react';

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
    <footer className="bg-[#0B1426] relative">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-[0.2em]">
                FORGED FINANCE
              </h3>
              <p className="text-[#64748B] mb-8 leading-relaxed text-[16px]">
                The premier platform for finance professionals seeking elite career 
                opportunities across Europe's top financial institutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-[#64748B]">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@forgedfinance.com</span>
                </div>
                <div className="flex items-center text-[#64748B]">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+44 20 7946 0958</span>
                </div>
                <div className="flex items-center text-[#64748B]">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>
            
            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-white mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-[#64748B] hover:text-white transition-colors duration-200 text-[16px]"
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
        <div className="border-t border-[#1E293B] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#64748B] mb-4 md:mb-0 text-[16px]">
              &copy; 2024 Forged Finance. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-[#64748B] hover:text-white transition-colors text-[16px]">
                Privacy
              </a>
              <a href="#" className="text-[#64748B] hover:text-white transition-colors text-[16px]">
                Terms
              </a>
              <a href="#" className="text-[#64748B] hover:text-white transition-colors text-[16px]">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};