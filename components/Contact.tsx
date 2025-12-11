import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch(error => {
        console.error(error);
        setIsSubmitting(false);
        setError('Hubo un error al enviar. Por favor intenta por WhatsApp.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-dark to-brand-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Hablemos de tu próximo <span className="text-brand-cyan">proyecto</span>
            </h2>
            <p className="text-brand-gray text-lg mb-8">
              ¿Necesitás una web que venda y proteja? ¿Querés optimizar tu estrategia comercial? 
              Estoy disponible para nuevas oportunidades y colaboraciones.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-card rounded-full text-brand-purple hover:bg-brand-purple hover:text-white transition-colors cursor-pointer" onClick={() => window.open('https://wa.me/5493764674458', '_blank')}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-gray">Teléfono / WhatsApp</p>
                  <a href="https://wa.me/5493764674458" target="_blank" rel="noreferrer" className="text-brand-white font-medium hover:text-brand-cyan transition-colors">
                    +54 9 376 467-4458
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-card rounded-full text-brand-purple hover:bg-brand-purple hover:text-white transition-colors cursor-pointer" onClick={() => window.location.href = 'mailto:juanmanueltoledo0487@gmail.com'}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-gray">Email</p>
                  <a href="mailto:juanmanueltoledo0487@gmail.com" className="text-brand-white font-medium hover:text-brand-cyan transition-colors">
                    juanmanueltoledo0487@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-card rounded-full text-brand-purple">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-brand-gray">Ubicación</p>
                  <p className="text-brand-white font-medium">Posadas, Misiones, Argentina</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-brand-gray/10">
               <h4 className="text-brand-white font-semibold mb-4">Encuéntrame en:</h4>
               <div className="flex gap-4">
                 <a href="https://linkedin.com/in/juantoledo1" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors text-brand-gray">
                   <Linkedin size={24} />
                 </a>
                 <a href="https://github.com/juantoledo1" target="_blank" rel="noreferrer" className="p-3 bg-brand-card rounded-lg hover:bg-white hover:text-black transition-colors text-brand-gray">
                   <Github size={24} />
                 </a>
               </div>
            </div>
          </div>

          <div className="bg-brand-card p-8 rounded-2xl border border-brand-gray/10 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-brand-white mb-6">Envíame un mensaje</h3>
            
            {isSent ? (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg text-center animate-pulse">
                <p className="font-semibold">¡Mensaje enviado con éxito!</p>
                <p className="text-sm mt-1">Te responderé a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-gray/20 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none text-brand-white placeholder-brand-gray/50 transition-all"
                    placeholder="Tu nombre o empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-gray/20 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none text-brand-white placeholder-brand-gray/50 transition-all"
                    placeholder="hola@ejemplo.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 bg-brand-dark border border-brand-gray/20 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none text-brand-white placeholder-brand-gray/50 transition-all resize-none"
                    placeholder="¿En qué puedo ayudarte?"
                  ></textarea>
                </div>
                
                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitting ? 'bg-brand-purple/50 cursor-wait' : 'bg-brand-purple hover:bg-brand-purple/90 hover:shadow-[0_0_20px_rgba(127,90,240,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensaje <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;