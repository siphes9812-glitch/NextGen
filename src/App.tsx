/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare, Monitor, Cpu, ShieldCheck, Zap, ArrowRight, Globe } from "lucide-react";
import { SERVICES, CONTACTS } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 uppercase tracking-wider">
              <Zap size={14} />
              Next Generation IT Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              NextGen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IT Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Empowering your digital journey with expert technical support, 
              custom web solutions, and comprehensive business IT management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
              >
                Get Support Now <ArrowRight size={18} />
              </a>
              <a 
                href="#services" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all border border-slate-700"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Tech Graphic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent blur-3xl" />
        </div>
      </header>

      {/* Stats/Features Bar */}
      <section className="border-y border-slate-800 bg-slate-900/30 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Monitor, label: "Hardware Repair" },
            { icon: Cpu, label: "System Upgrades" },
            { icon: ShieldCheck, label: "Virus Removal" },
            { icon: Globe, label: "Web Design" }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
              <feature.icon className="text-blue-400" size={20} />
              <span className="text-sm font-medium text-slate-300">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <main id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400">Comprehensive IT solutions tailored for individuals and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative p-8 rounded-2xl border ${service.borderClass} bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${service.accentClass} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.07] transition-opacity`} />
                
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl ${service.accentClass} bg-opacity-10 ${service.textClass}`}>
                    <service.icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.accentClass}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900/20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4 italic">Ready to get started?</h2>
            <p className="text-slate-400 mb-12">Contact us today for professional and reliable IT services.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONTACTS.map((contact) => (
                <div key={contact.name} className="bg-slate-950/50 border border-slate-800 p-6 rounded-2xl text-left hover:border-blue-500/50 transition-colors">
                  <h4 className="text-blue-400 font-bold text-lg mb-1">{contact.name}</h4>
                  <p className="text-2xl font-mono text-white mb-4 tracking-tight">{contact.phone}</p>
                  <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest">{contact.note}</p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors border border-slate-700"
                    >
                      <Phone size={16} /> Call
                    </a>
                    <a 
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-600/20"
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
      <footer className="py-12 px-6 border-t border-slate-900 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic">N</div>
            <span className="text-xl font-bold text-white italic tracking-tight">NextGen IT Services</span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NextGen IT Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
