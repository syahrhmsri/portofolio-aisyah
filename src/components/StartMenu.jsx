import React from 'react';
import fotoAisyah from '../assets/FotoAisyah.png';

const StartMenu = ({ isOpen, onClose, setActiveTab }) => {
  if (!isOpen) return null;

  const leftItems = [
    { id: 'about', icon: '👤', label: 'Tentang Saya', desc: 'Profil dan latar belakang' },
    { id: 'experience', icon: '💼', label: 'Pengalaman Kerja', desc: 'Perjalanan karir & kontribusi' },
    { id: 'projects', icon: '📁', label: 'Proyek Utama', desc: 'Koleksi karya pilihan' },
    { id: 'skills', icon: '⚙️', label: 'Keahlian', desc: 'Skill teknis & core tech' },
  ];

  const rightItems = [
    { icon: '🖼️', label: 'My Pictures' },
    { icon: '🎵', label: 'My Music' },
    { icon: '🖥️', label: 'My Computer' },
    { sep: true },
    { icon: '🔍', label: 'Search' },
    { icon: '❓', label: 'Help' },
  ];

  return (
    <div 
      className="fixed bottom-10 left-0 w-[380px] z-[10000] border-2 border-[#0052e2] bg-[#71a3e5] rounded-t-lg shadow-[3px_3px_15px_rgba(0,0,0,0.5)] flex flex-col font-sans select-none overflow-hidden"
      onMouseLeave={onClose}
    >
      
      {/* Header - Royal Blue XP Gradient */}
      <div className="p-3 bg-gradient-to-r from-[#1855c4] via-[#247df2] to-[#1855c4] flex items-center gap-3 border-b border-[#002e8c] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
        <div className="w-12 h-12 border-2 border-[#d5ecfc] rounded shadow-md overflow-hidden bg-white shrink-0 flex items-center justify-center">
          <img src={fotoAisyah} alt="Aisyah Rahmasari" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col select-none">
          <span className="text-white font-sans font-bold text-sm tracking-wide drop-shadow-[1px_1px_1px_rgba(0,0,0,0.85)]">
            Aisyah Rahmasari
          </span>
          <span className="text-emerald-300 text-[9px] font-sans font-bold uppercase tracking-wider mt-0.5">
            Online & Active
          </span>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex bg-[#ffffff] border-b border-[#002e8c]">
        
        {/* Left Column: Programs (White Background) */}
        <div className="flex-1 p-2.5 flex flex-col gap-1">
          <div className="text-[10px] font-bold text-[#3f88c5] font-sans uppercase tracking-wider px-2 pb-1.5 border-b border-slate-100">
            Programs
          </div>
          
          {leftItems.map((item) => (
            <div
              key={item.id}
              onClick={() => { setActiveTab(item.id); onClose(); }}
              className="flex items-center gap-3 p-1.5 rounded hover:bg-[#347ff6] group transition-colors cursor-pointer select-none"
            >
              <div className="w-9 h-9 rounded bg-[#f1f1f1] flex items-center justify-center text-xl shrink-0 border border-slate-200 shadow-inner group-hover:bg-white group-hover:scale-105 transition-all">
                {item.icon}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-slate-800 group-hover:text-white font-sans truncate">
                  {item.label}
                </span>
                <span className="text-[9px] text-slate-400 group-hover:text-slate-200 font-sans truncate">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Folders (Soft Blue Background) */}
        <div className="w-[145px] bg-[#d3e5fa] border-l border-[#9ebeeb] p-2 flex flex-col gap-0.5">
          {rightItems.map((item, idx) => (
            item.sep ? <div key={idx} className="h-[1px] bg-[#9ebeeb] my-1.5 mx-1" /> : (
              <div
                key={idx}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#1a4bb0] text-[#0a3275] hover:text-white transition-colors cursor-pointer group font-sans"
              >
                <span className="text-sm shrink-0">{item.icon}</span>
                <span className="text-[11px] font-bold font-sans tracking-tight">
                  {item.label}
                </span>
              </div>
            )
          ))}
        </div>

      </div>

      {/* Footer - Blue Gradient with Turn Off Button */}
      <div className="p-2 bg-gradient-to-r from-[#1855c4] via-[#247df2] to-[#1855c4] flex justify-end items-center gap-2 select-none">
        <button 
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-b from-[#e76969] to-[#d62020] hover:from-[#ff8585] hover:to-[#f03232] border border-[#9b1111] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.45)] text-white text-[10px] font-bold font-sans rounded-[3px] cursor-pointer"
        >
          <span>⏻</span>
          <span>Turn Off</span>
        </button>
      </div>

    </div>
  );
};

export default StartMenu;
