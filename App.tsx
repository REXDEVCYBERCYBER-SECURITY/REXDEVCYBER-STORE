
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SecurityGuide from './components/SecurityGuide';
import AIAnalyst from './components/AIAnalyst';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case ViewType.DASHBOARD:
        return <Dashboard />;
      case ViewType.SECURITY_METHODOLOGY:
        return <SecurityGuide />;
      case ViewType.AI_ANALYST:
        return <AIAnalyst />;
      case ViewType.VULNERABILITIES:
        return (
          <div className="p-12 text-center glass rounded-3xl">
            <i className="fa-solid fa-database text-6xl text-slate-700 mb-6"></i>
            <h2 className="text-2xl font-bold text-white">Vulnerability Database Access Restricted</h2>
            <p className="text-slate-400 max-w-md mx-auto mt-2">The full database is available only to verified REXDEVCYBER Premium nodes. Check back daily for public feed updates.</p>
          </div>
        );
      case ViewType.STORE:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
            {[
              { name: 'Core Storage Node', price: 'Free', desc: 'Basic fiber network access for traffic logs.' },
              { name: 'Premium Investigator', price: '$49/mo', desc: 'Advanced vulnerability database & AI priority.' },
              { name: 'Enterprise Sentinel', price: 'Custom', desc: 'Full system protection & custom security testing.' },
            ].map((product, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-t-4 border-cyan-500 hover:-translate-y-2 transition-transform">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-3xl font-extrabold text-cyan-400 mb-4">{product.price}</p>
                <p className="text-slate-400 text-sm mb-6">{product.desc}</p>
                <button className="w-full py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-cyan-500 transition-colors">Select Product</button>
              </div>
            ))}
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 cyber-grid">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-1 overflow-y-auto p-8 relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto h-full">
          {renderView()}
        </div>

        <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 pb-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="font-bold text-cyan-500/50">REXDEVCYBER</span>
            <span>&copy; 2024 Secure Network Infrastructure</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyan-400">Security Policy</a>
            <a href="#" className="hover:text-cyan-400">API Documentation</a>
            <a href="#" className="hover:text-cyan-400">Bug Bounty</a>
            <a href="#" className="hover:text-cyan-400">Terms of Service</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
