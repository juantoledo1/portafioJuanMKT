import React from 'react';
import { Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { CertificationCategory } from '../types';

const Certifications: React.FC = () => {
  const certifications: CertificationCategory[] = [
    {
      category: "Formación Académica & Marketing",
      items: [
        { title: "Introducción al CRM con HubSpot", issuer: "Coursera", year: "2025" },
        { title: "Google: IA Práctica para Marketing", issuer: "Santander Open Academy", year: "2025" },
        { title: "Colaboración y Comunicación Estratégica", issuer: "Santander Open Academy", year: "2025" },
        { title: "Inglés en el Mundo IT", issuer: "Polo TIC Misiones", year: "2023" },
        { title: "Técnico Superior en Marketing y Publicidad", issuer: "Instituto INCADE", year: "2016" },
      ]
    },
    {
      category: "Ciberseguridad",
      items: [
        { title: "CyberOps Associate", issuer: "Cisco Networking Academy", year: "2025" },
        { title: "Fundamentos de Ciberseguridad", issuer: "Cisco", year: "2025" },
        { title: "Técnico en Ciberseguridad", issuer: "Academia de Ciberseguridad", year: "2025" },
        { title: "Kali Linux 101 Online", issuer: "Academia de Ciberseguridad", year: "2025" },
        { title: "Amenazas y Buenas Prácticas", issuer: "Silicon Misiones", year: "2024" },
      ]
    },
    {
      category: "Desarrollo Web & IT",
      items: [
        { title: "Creación de Apps con Bun y React 19", issuer: "DonWeb", year: "2025" },
        { title: "Networking Essentials", issuer: "Cisco", year: "2025" },
        { title: "Fundamentos de Soporte Técnico", issuer: "Google", year: "2024" },
        { title: "Desarrollo Web Full-Stack", issuer: "Silicon Misiones", year: "2023" },
        { title: "Base de Datos desde Cero", issuer: "Polo TIC Misiones", year: "2022" },
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-brand-dark scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white mb-4">
            Formación <span className="text-brand-purple">Académica</span>
          </h2>
          <p className="text-brand-gray">Base sólida en negocios complementada con especialización técnica constante.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cat, index) => (
            <div key={index} className="bg-brand-card/50 rounded-xl p-6 border border-brand-gray/10 hover:border-brand-cyan/20 transition-colors">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-gray/10">
                {index === 0 ? <GraduationCap className="text-brand-cyan" size={24} /> : <Award className="text-brand-purple" size={24} />}
                <h3 className="font-display text-xl font-bold text-brand-white">{cat.category}</h3>
              </div>
              
              <ul className="space-y-4">
                {cat.items.map((cert, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className={`shrink-0 mt-1 ${index === 0 ? 'text-brand-cyan' : 'text-brand-purple'}`} size={16} />
                    <div>
                      <p className="text-brand-white font-medium text-sm">{cert.title}</p>
                      <p className="text-xs text-brand-gray mt-0.5">{cert.issuer} • {cert.year}</p>
                    </div>
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

export default Certifications;