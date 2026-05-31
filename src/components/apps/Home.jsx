import React from 'react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="p-8 text-center max-w-3xl mx-auto flex flex-col items-center justify-center h-full text-slate-800 animate-in fade-in duration-700">
      <div className="w-28 h-28 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl flex items-center justify-center text-6xl mb-10 animate-bounce transition-transform hover:scale-110">
        👩‍💻
      </div>
      <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
        Selamat Datang di Workspace <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Aisyah</span>
      </h1>
      <p className="text-lg text-slate-500 font-bold mb-12 max-w-xl">
        IT Student at ITS Surabaya | Data Analyst & AI Enthusiast. Membangun solusi digital berbasis data dan teknologi cloud.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 w-full">
        {[
          { id: 'about', label: 'About Me', icon: '👤', color: 'hover:border-blue-300' },
          { id: 'projects', label: 'Experience', icon: '💼', color: 'hover:border-emerald-300' },
          { id: 'skills', label: 'Tech Stack', icon: '⚙️', color: 'hover:border-amber-300' },
          { id: 'contact', label: 'Connect', icon: '✉️', color: 'hover:border-rose-300' },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveTab(btn.id)}
            className={`flex flex-col items-center gap-4 p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group ${btn.color}`}
          >
            <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{btn.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900">{btn.label}</span>
          </button>
        ))}
      </div>

      <div className="p-8 rounded-[3rem] bg-slate-900 text-white text-left w-full shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
        <h4 className="font-black text-emerald-400 text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-emerald-400" /> Status Update
        </h4>
        <p className="text-white/80 text-sm font-bold leading-relaxed italic">
          "Saat ini sedang aktif sebagai Asisten Dosen Cloud Computing & AI Intern. Mari berkolaborasi untuk menciptakan inovasi teknologi yang berdampak!"
        </p>
      </div>
    </div>
  );
};

export default Home;
