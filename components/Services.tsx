import React from 'react';
import { Megaphone, TrendingUp, Code, Shield } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Ventas y Estrategia Comercial",
      icon: TrendingUp,
      color: "text-green-400",
      items: [
        "Ventas B2B/B2C y telefónicas",
        "Optimización de pipelines de ventas",
        "Implementación de CRM (HubSpot)",
        "Seguimiento y cierre de leads",
        "Atención y fidelización de clientes"
      ]
    },
    {
      title: "Marketing Digital & RRSS",
      icon: Megaphone,
      color: "text-pink-500",
      items: [
        "Community Management estratégico",
        "Creación de contenido (Canva, CapCut)",
        "Publicidad y visibilidad de marca",
        "Estrategias de engagement",
        "Uso de IA para generación de contenido"
      ]
    },
    {
      title: "Desarrollo Web Funcional",
      icon: Code,
      color: "text-brand-cyan",
      items: [
        "Sitios web corporativos y landing pages",
        "Plataformas de gestión (Turnos/Stock)",
        "WordPress optimizado para ventas",
        "Rediseño UX/UI para conversión",
        "Sistemas a medida (React + Node.js)"
      ]
    },
    {
      title: "Ciberseguridad Básica",
      icon: Shield,
      color: "text-brand-purple",
      items: [
        "Protección de activos digitales",
        "Recuperación de WordPress hackeados",
        "Auditorías de seguridad básicas",
        "Buenas prácticas y backups",
        "Prevención de amenazas comunes"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white mb-4">
            Mis <span className="text-brand-purple">Servicios</span>
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Soluciones enfocadas en hacer crecer tu negocio. Desde la captación del cliente hasta la plataforma tecnológica que lo soporta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-card rounded-xl p-6 border border-brand-gray/10 hover:border-brand-cyan/30 transition-all duration-300 card-hover group">
              <div className="mb-6 inline-block p-3 rounded-lg bg-brand-dark group-hover:bg-brand-dark/50 transition-colors">
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-white mb-4 font-display">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-brand-gray text-sm">
                    <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full ${service.color.replace('text', 'bg')}`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;