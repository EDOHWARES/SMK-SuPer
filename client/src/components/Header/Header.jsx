import { useState} from 'react';
import { Menu, X, ChevronDown, ChevronRight,} from 'lucide-react';
import logo from "../../assets/images/logo.png";

// Header Component
export const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-blue-900 text-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src={logo} alt="smk logo" className='w-[60px] md:w-[80px]' />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.key} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a 
                  href={item.path} 
                  className="font-medium hover:text-yellow-400 transition-colors flex items-center"
                >
                  {item.key}
                  {item.subNavs && item.subNavs.length > 0 && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.subNavs && item.subNavs.length > 0 && hoveredItem === item.key && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.subNavs.map((subNav) => (
                      <a 
                        key={subNav.key} 
                        href={subNav.path}
                        className="block px-4 py-2 text-sm text-blue-900 hover:bg-yellow-100 hover:text-blue-800"
                      >
                        {subNav.key}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.key}>
                <a 
                  href={item.path}
                  className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-700 rounded-md"
                >
                  <div className="flex justify-between items-center">
                    <span>{item.key}</span>
                    {item.subNavs && item.subNavs.length > 0 && (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </a>
                {item.subNavs && item.subNavs.length > 0 && (
                  <div className="pl-4">
                    {item.subNavs.map((subNav) => (
                      <a 
                        key={subNav.key}
                        href={subNav.path}
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-blue-700 rounded-md"
                      >
                        {subNav.key}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};