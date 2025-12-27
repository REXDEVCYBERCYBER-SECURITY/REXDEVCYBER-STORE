
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { MOCK_TRAFFIC, RECENT_VULNERABILITIES } from '../constants.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-extrabold text-white">Network Intelligence Dashboard</h2>
        <p className="text-slate-400">Real-time statistics for the REXDEVCYBER fiber storage network.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Stored Accounts', val: '1.2M+', icon: 'fa-user-secret', color: 'text-cyan-400' },
          { label: 'Network Traffic', val: '4.2 TB/s', icon: 'fa-network-wired', color: 'text-purple-400' },
          { label: 'Threats Blocked', val: '42.5k', icon: 'fa-shield-virus', color: 'text-red-400' },
          { label: 'Global Nodes', val: '128', icon: 'fa-earth-americas', color: 'text-green-400' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl hover:border-cyan-500/50 transition-all cursor-default">
            <div className={`p-3 w-fit rounded-2xl bg-slate-800 mb-4 ${stat.color}`}>
              <i className={`fa-solid ${stat.icon} text-xl`}></i>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fa-solid fa-chart-area text-cyan-400"></i>
            Traffic & Threats Analysis
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_TRAFFIC}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="requests" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRequests)" />
                <Area type="monotone" dataKey="threats" stroke="#f43f5e" fillOpacity={1} fill="url(#colorThreats)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation text-yellow-500"></i>
            Active Vulnerability Feed
          </h3>
          <div className="space-y-4">
            {RECENT_VULNERABILITIES.map((vuln) => (
              <div key={vuln.id} className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="flex items-start gap-4">
                  <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                    vuln.severity === 'Critical' ? 'bg-red-500/20 text-red-500' : 
                    vuln.severity === 'High' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'
                  }`}>
                    {vuln.severity}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{vuln.type}</p>
                    <p className="text-xs text-slate-400 line-clamp-1">{vuln.description}</p>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-slate-500 uppercase">{vuln.id}</p>
              </div>
            ))}
            <button className="w-full py-3 text-cyan-400 text-sm font-bold border border-cyan-500/20 rounded-2xl hover:bg-cyan-500/10 transition-all">
              View All Vulnerabilities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
