/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare, Monitor, Cpu, ShieldCheck, Zap, ArrowRight, Globe } from "lucide-react";
import { SERVICES, CONTACTS, LOGO_URL } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-100">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-10">
              <img 
                src={LOGO_URL} 
                alt="NextGen IT Services Logo" 
                className="h-32 md:h-40 w-auto rounded-[2.5rem] p-6 bg-white border border-slate-200 shadow-xl shadow-blue-500/5 drop-shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-6 uppercase tracking-wider">
              <Zap size={14} />
              Next Generation IT Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              NextGen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">IT Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering your digital journey with expert technical support, 
              custom web solutions, and comprehensive business IT management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                Get Support Now <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all border border-slate-200 shadow-sm"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Tech Graphic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl" />
        </div>
      </header>

      {/* Stats/Features Bar */}
      <section className="border-y border-slate-200 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Monitor, label: "Hardware Repair" },
            { icon: Cpu, label: "System Upgrades" },
            { icon: ShieldCheck, label: "Virus Removal" },
            { icon: Globe, label: "Web Design" }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <feature.icon className="text-blue-600" size={20} />
              <span className="text-sm font-semibold text-slate-600">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <main id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600">Comprehensive IT solutions tailored for individuals and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl border ${service.borderClass} bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${service.accentClass} opacity-[0.05] rounded-bl-full group-hover:opacity-[0.08] transition-opacity`} />
                
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`p-3 rounded-xl ${service.accentClass} bg-opacity-10 ${service.textClass}`}>
                      <service.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-bold mt-1 ${service.textClass}`}>
                        {service.price}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 flex-1">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-between gap-3 text-slate-600 text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.accentClass}`} />
                          <span>{item.name}</span>
                        </div>
                        <span className="font-bold text-slate-900 whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-50">
                    <a 
                      href="#contact" 
                      className={`text-sm font-bold flex items-center gap-2 ${service.textClass} hover:gap-3 transition-all`}
                    >
                      Enquire Now <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-100/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl shadow-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 italic">Ready to get started?</h2>
            <p className="text-slate-600 mb-12">Contact us today for professional and reliable IT services.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONTACTS.map((contact) => (
                <div key={contact.name} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-left hover:border-blue-200 transition-colors">
                  <h4 className="text-blue-600 font-bold text-lg mb-1">{contact.name}</h4>
                  <p className="text-2xl font-mono text-slate-900 mb-4 tracking-tight">{contact.phone}</p>
                  <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest font-semibold">{contact.note}</p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold rounded-xl transition-colors border border-slate-200 shadow-sm"
                    >
                      <Phone size={16} /> Call
                    </a>
                    <a 
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-emerald-600/20"
                    >
                      <MessageSquare size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 text-center relative z-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <img 
              src={LOGO_URL} 
              alt="NextGen IT Services Logo" 
              className="h-16 w-auto rounded-2xl p-3 bg-slate-50 border border-slate-100 opacity-80 hover:opacity-100 transition-all"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold text-slate-900 italic tracking-tight">NextGen IT Services</span>
          </div>
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} NextGen IT Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
