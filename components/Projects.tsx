import React from 'react';
import { ExternalLink, Github, Instagram } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Betelgeuse – Gestión Comercial",
      category: "Salón de Juegos & Tech",
      description: "Sistema integral para la gestión de clientes y turnos del salón. Fusión de estética retrogaming con tecnología moderna de gestión.",
      tech: ["Gestión Clientes", "React", "Node.js", "MySQL"],
      stats: "70% Retención de Clientes",
      link: "https://betelgeusee.netlify.app",
      // Retro Gaming / Arcade machines image
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Paliachi Helados",
      category: "Rediseño Web & Marca",
      description: "Rediseño de experiencia de usuario (UX/UI) para mejorar la visibilidad online y la captación de clientes de la heladería.",
      tech: ["WordPress", "UX/UI", "SEO Local"],
      link: "https://paliachi.com",
      // Ice cream / Food business image
      image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Betelgeuse Hub",
      category: "Marketing Social",
      description: "Estrategia de contenidos en Instagram. Creación de identidad visual fuerte y engagement para comunidad gamer.",
      tech: ["Instagram", "Content Marketing", "Canva"],
      link: "https://instagram.com/betelgeuse_hub",
      // Smartphone displaying social media with neon/tech background
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Tekohatech",
      category: "Venta de Sistemas & Landing",
      description: "Soluciones de desarrollo web para venta de landing pages y sistemas a medida. Optimización para conversión y presencia digital.",
      tech: ["Astro", "Desarrollo Web", "Ventas B2B"],
      link: "https://tekohatech.netlify.app/",
      // Coding/Web Development setup image
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-brand-black/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white mb-2">
              Proyectos y <span className="text-brand-cyan">Casos de Éxito</span>
            </h2>
            <p className="text-brand-gray">Resultados reales aplicados a negocios reales.</p>
          </div>
          <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-brand-purple hover:text-brand-white transition-colors mt-4 md:mt-0">
            <Github size={20} />
            <span>Ver código en GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-brand-card rounded-xl overflow-hidden border border-brand-gray/10 hover:border-brand-purple/50 transition-all duration-300 flex flex-col h-full card-hover shadow-lg">
              <div className="h-64 bg-brand-dark/50 relative group overflow-hidden">
                <img 
                  src={project.image || `https://picsum.photos/seed/${index}/600/400`} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
                
                {project.category && (
                  <span className="absolute top-4 right-4 bg-brand-purple/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg border border-white/10">
                    {project.category}
                  </span>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-brand-white mb-2 font-display">{project.title}</h3>
                
                {project.stats && (
                  <div className="mb-4">
                    <span className="text-brand-cyan font-bold flex items-center gap-2 bg-brand-cyan/10 px-3 py-1 rounded-lg w-fit text-sm">
                      <ExternalLink size={16} /> {project.stats}
                    </span>
                  </div>
                )}
                
                <p className="text-brand-gray mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-brand-gray-300 bg-brand-dark px-3 py-1 rounded-full border border-brand-gray/20 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                   {project.link && project.link.length > 1 ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className={`w-full block text-center py-3 rounded-lg text-white transition-all font-semibold shadow-lg flex items-center justify-center gap-2 ${project.link.includes('instagram') ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90' : 'bg-brand-purple hover:bg-brand-purple/90 shadow-brand-purple/20'}`}
                      >
                        {project.link.includes('instagram') ? <Instagram size={18} /> : null}
                        {project.link.includes('instagram') ? 'Ver en Instagram' : 'Visitar Proyecto'}
                      </a>
                   ) : (
                     <div className="w-full text-center py-3 rounded-lg border border-brand-gray/20 bg-brand-dark/30 text-brand-gray/50 cursor-default text-sm font-medium select-none">
                       Sitio en Desarrollo / Consultar
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;