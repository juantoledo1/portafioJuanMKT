import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 backdrop-blur-sm">
          <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">
            Estratega Comercial & Digital
          </span>
        </div>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-brand-white mb-6 leading-tight">
          Juan Manuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Toledo</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl text-brand-gray mb-8 font-light max-w-4xl">
          Ventas · Gestión Comercial · Marketing Digital
        </h2>
        
        <p className="text-lg text-brand-gray max-w-2xl mb-10 leading-relaxed">
          Ayudo a empresas a vender más y mejor. Integro estrategias comerciales probadas con tecnología moderna para potenciar resultados, fidelizar clientes y proteger tu negocio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(127,90,240,0.3)] hover:shadow-[0_0_30px_rgba(127,90,240,0.5)] cursor-pointer"
          >
            Ver Proyectos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="/Juan_Manuel_Toledo_CV.pdf" 
            download="Juan_Manuel_Toledo_CV.pdf"
            className="px-8 py-4 bg-transparent border-2 border-brand-gray/30 hover:border-brand-cyan text-brand-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-brand-cyan/5 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Descargar CV
          </a>

          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="px-8 py-4 bg-brand-card hover:bg-brand-card/80 text-brand-cyan rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;