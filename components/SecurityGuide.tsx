
import React, { useState } from 'react';
import { METHODOLOGY_STEPS } from '../constants.tsx';

const SecurityGuide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="max-w-2xl">
        <h2 className="text-3xl font-extrabold text-white">Advanced Security Testing</h2>
        <p className="text-slate-400 mt-2">
          A comprehensive approach to identify vulnerabilities, assess connectivity risks, and implement effective protection measures.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-4">
          {METHODOLOGY_STEPS.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`w-full text-left p-5 rounded-2xl transition-all border ${
                activeStep === index 
                ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-sm font-mono flex items-center justify-center w-8 h-8 rounded-full ${activeStep === index ? 'bg-white/20' : 'bg-slate-800'}`}>
                  0{index + 1}
                </span>
                <span className="font-bold">{step.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex-1 glass p-10 rounded-[32px] border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <i className="fa-solid fa-shield-halved text-9xl"></i>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white mb-4">
              {METHODOLOGY_STEPS[activeStep].title}
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {METHODOLOGY_STEPS[activeStep].description}
            </p>

            <div className="grid gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Key Focus Areas</h4>
              <ul className="space-y-4">
                {METHODOLOGY_STEPS[activeStep].details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-400 bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
                    <i className="fa-solid fa-circle-check text-cyan-400"></i>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="glass p-10 rounded-[32px] bg-gradient-to-br from-slate-900 to-slate-950">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <i className="fa-solid fa-lock text-cyan-400"></i>
          Connection System Security Principles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Encryption', desc: 'Implement strong TLS protocols (Transport Layer Security) for data in transit.' },
            { title: 'Authentication', desc: 'Robust verification using MFA, digital certificates, or biometrics.' },
            { title: 'Authorization', desc: 'Strict access controls based on the principle of least privilege.' },
            { title: 'Integrity Checking', desc: 'Use cryptographic hashes or digital signatures to verify data state.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SecurityGuide;
