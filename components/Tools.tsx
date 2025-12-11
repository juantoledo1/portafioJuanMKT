import React from 'react';
import { ToolCategory } from '../types';

const Tools: React.FC = () => {
  const toolCategories: ToolCategory[] = [
    { category: "Ventas & CRM", skills: ["HubSpot", "Gestión de Leads", "Negociación", "Atención al Cliente"] },
    { category: "Marketing & Diseño", skills: ["Canva", "CapCut", "GIMP", "Shotcut", "Copywriting", "IA Generativa"] },
    { category: "Productividad", skills: ["Google Workspace", "Trello", "Slack", "Microsoft Office", "LibreOffice"] },
    { category: "Front-End", skills: ["React", "Astro", "HTML/CSS", "Tailwind", "Bootstrap", "JavaScript"] },
    { category: "Back-End & DB", skills: ["Node.js", "Express", "MySQL", "Workbench", "REST APIs"] },
    { category: "Ciberseguridad", skills: ["Linux", "Kali Linux", "Auditorías", "Hardening", "VirtualBox"] },
  ];

  return (
    <section className="py-12 border-y border-brand-gray/10 bg-brand-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-display text-2xl font-bold text-brand-white mb-10">
          Herramientas y <span className="text-brand-cyan">Habilidades</span>
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6">
          {toolCategories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-brand-white/5 transition-colors">
               <span className="text-xs uppercase tracking-wider text-brand-cyan mb-3 font-bold">{cat.category}</span>
               <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                 {cat.skills.map((skill, idx) => (
                   <span key={idx} className="px-3 py-1 bg-brand-dark border border-brand-gray/20 rounded text-sm text-brand-gray-300">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;