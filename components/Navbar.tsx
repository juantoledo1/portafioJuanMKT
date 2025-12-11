import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'Contacto', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-purple/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#hero" 
              className="flex items-center gap-2 group cursor-pointer" 
              onClick={(e) => handleScroll(e, '#hero')}
            >
              <Terminal className="h-8 w-8 text-brand-cyan group-hover:text-brand-purple transition-colors duration-300" />
              <span className="font-display font-bold text-xl tracking-wider text-brand-white">
                JM<span className="text-brand-purple">TOLEDO</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-brand-gray hover:text-brand-cyan hover:bg-brand-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-brand-white hover:bg-brand-card focus:outline-none transition-colors"
              aria-label="Menu principal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-brand-dark border-b border-brand-purple/20 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-brand-gray hover:text-brand-cyan hover:bg-brand-card block px-3 py-4 rounded-md text-base font-medium border-l-4 border-transparent hover:border-brand-purple transition-all cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;