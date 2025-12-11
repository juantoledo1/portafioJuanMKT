import React from 'react';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: TrendingUp, value: "20%", label: "Aumento Ventas B2B", color: "text-green-400" },
    { icon: Users, value: "70%", label: "Retención de Clientes", color: "text-brand-cyan" },
    { icon: Briefcase, value: "+10", label: "Años de Experiencia", color: "text-brand-purple" },
  ];

  return (
    <section id="about" className="py-20 bg-brand-black/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Sobre <span className="text-brand-cyan">Mí</span>
            </h2>
            
            <div className="space-y-4 text-brand-gray text-lg leading-relaxed">
              <p>
                Soy <span className="text-brand-white font-semibold">Técnico Superior en Marketing y Publicidad</span> (INCADE) con más de una década de experiencia en el terreno comercial. Mi especialidad es conectar marcas con personas, ya sea a través de venta directa, gestión de cuentas B2B o estrategias digitales de fidelización.
              </p>
              <p>
                He trabajado como Community Manager, Asesor de Ventas y Administrativo, logrando resultados tangibles como un <span className="text-brand-cyan font-bold">70% de retención de clientes</span> y un incremento del <span className="text-brand-cyan font-bold">20% en ventas</span> mediante estrategias personalizadas.
              </p>
              <p>
                Lo que me diferencia es mi capacidad híbrida: entiendo el lenguaje de los negocios y domino las herramientas tecnológicas (Desarrollo Web y Ciberseguridad) para implementar soluciones modernas, seguras y eficientes.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
               <span className="px-3 py-1 bg-brand-card border border-brand-cyan/30 rounded-full text-brand-cyan text-sm">Gestión Comercial</span>
               <span className="px-3 py-1 bg-brand-card border border-brand-cyan/30 rounded-full text-brand-cyan text-sm">Marketing Digital</span>
               <span className="px-3 py-1 bg-brand-card border border-brand-cyan/30 rounded-full text-brand-cyan text-sm">Venta B2B/B2C</span>
               <span className="px-3 py-1 bg-brand-card border border-brand-purple/30 rounded-full text-brand-purple text-sm">CRM & HubSpot</span>
               <span className="px-3 py-1 bg-brand-card border border-brand-purple/30 rounded-full text-brand-purple text-sm">Desarrollo Web</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-6">
             {/* Stats Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className={`bg-brand-card p-6 rounded-xl border border-brand-gray/10 hover:border-brand-purple/50 transition-colors ${index === 2 ? 'sm:col-span-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-brand-dark ${stat.color}`}>
                        <stat.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-3xl font-display font-bold text-brand-white">{stat.value}</h4>
                        <p className="text-sm text-brand-gray">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
             
             {/* Image */}
             <div className="relative rounded-xl overflow-hidden h-64 border border-brand-gray/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Estrategia y Análisis" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent flex items-end p-6">
                   <div className="flex items-center gap-2">
                      <Award className="text-brand-cyan" />
                      <span className="text-brand-white font-mono text-sm">Estrategia + Tecnología</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;