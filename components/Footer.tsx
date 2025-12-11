import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-8 border-t border-brand-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-brand-gray text-sm">
          © {new Date().getFullYear()} Juan Manuel Toledo. Todos los derechos reservados.
        </p>
        <p className="text-brand-gray/50 text-xs">
          Diseñado con React, Tailwind & Pasión por la Tecnología.
        </p>
      </div>
    </footer>
  );
};

export default Footer;