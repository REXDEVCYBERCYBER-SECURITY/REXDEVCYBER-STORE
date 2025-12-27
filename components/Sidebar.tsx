
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { type: ViewType.DASHBOARD, icon: 'fa-chart-line', label: 'Network Stats' },
    { type: ViewType.SECURITY_METHODOLOGY, icon: 'fa-shield-halved', label: 'Security Guide' },
    { type: ViewType.VULNERABILITIES, icon: 'fa-bug', label: 'Vulnerability DB' },
    { type: ViewType.AI_ANALYST, icon: 'fa-robot', label: 'AI Analyst' },
    { type: ViewType.STORE, icon: 'fa-shopping-cart', label: 'Cyber Store' },
  ];

  return (
    <div className="w-64 h-full glass border-r border-slate-800 flex flex-col p-4 space-y-8 sticky top-0">
      <div className="flex items-center space-x-3 px-2">
        <img src="https://i.postimg.cc/S2fJ0yjj/LOGO-REXDEV-512-X512.png" className="w-10 h-10 rounded-lg shadow-lg" alt="Logo" />
        <h1 className="text-xl font-extrabold tracking-tighter text-cyan-400">REXDEVCYBER</h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.type}
            onClick={() => setView(item.type)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              currentView === item.type 
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-5`}></i>
            <span className="font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
        <p className="text-xs text-slate-500 mb-2">Network Status</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-green-400">Operational</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
