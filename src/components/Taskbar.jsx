import React, { useState, useEffect } from 'react';

const Taskbar = ({ windows, activeWindowId, onAppClick, onStartClick }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[54px] flex items-center justify-between z-[9999] bg-white/10 backdrop-blur-xl border-white/20 border-t shadow-2xl overflow-hidden select-none">
      
      {/* Linear-to-r overlay like Fio's for gradient styling */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none" />

      {/* Left Section: Start and active app items */}
      <div className="flex items-center space-x-4 h-full z-10">
        
        {/* Green Windows XP start button - Sleek Glassmorphic Edition */}
        <button 
          onClick={onStartClick}
          className="h-full relative group px-5 rounded-r-xl bg-gradient-to-b from-[#4CAF50] to-[#2E7D27] shadow-[0_2px_10px_rgba(61,158,52,0.5)] border border-green-400/30 hover:brightness-110 transition-all active:scale-95 flex items-center space-x-2.5 cursor-pointer select-none"
        >
          {/* Windows Flag built with rounded shapes for retro feel */}
          <div className="flex flex-wrap w-4.5 h-4.5 relative shrink-0 gap-[2.5px] group-hover:scale-105 transition-transform">
            <div className="w-2 h-2 bg-[#f44336] rounded-[1px] shadow-sm" style={{ borderBottomRightRadius: '50% 25%' }} />
            <div className="w-2 h-2 bg-[#4caf50] rounded-[1px] shadow-sm" style={{ borderBottomLeftRadius: '25% 50%' }} />
            <div className="w-2 h-2 bg-[#2196f3] rounded-[1px] shadow-sm" style={{ borderTopRightRadius: '25% 50%' }} />
            <div className="w-2 h-2 bg-[#ffeb3b] rounded-[1px] shadow-sm" style={{ borderTopLeftRadius: '50% 25%' }} />
          </div>
          
          <span 
            className="italic font-black text-white text-[22px] lowercase tracking-tight"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            start
          </span>
        </button>

        {/* Taskbar active app items */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
          {windows.map((win) => (
            <button
              key={win.id}
              onClick={() => onAppClick(win.id)}
              className={`h-[38px] px-4 rounded-lg border text-left flex items-center space-x-2.5 cursor-pointer transition-all shrink-0 w-[260px] text-white font-sans select-none ${
                activeWindowId === win.id
                  ? 'bg-white/10 border-white/10 shadow-inner'
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
              title={win.title}
            >
              {/* Pulse indicator for the active window */}
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shrink-0" />
              <span className="text-[16px] text-white font-black truncate max-w-[210px]">
                {win.title.split(' — ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section: System Tray & Clock */}
      <div className="bg-black/20 h-full rounded-l-2xl px-6 py-1.5 flex items-center space-x-4 border border-white/5 text-white z-10">
        <div className="flex items-center space-x-4">
          {/* Volume Vector Icon */}
          <svg className="w-[24px] h-[24px] text-slate-200 hover:text-white cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" title="Volume">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
          </svg>
          {/* Battery Vector Icon */}
          <svg className="w-[26px] h-[26px] text-slate-200 hover:text-white cursor-pointer transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" title="Battery Status">
            <rect x="2" y="6" width="16" height="12" rx="2.5" />
            <path d="M21 10v4" strokeLinecap="round" />
            <line x1="6" y1="12" x2="14" y2="12" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-[16px] text-white font-black hover:text-sky-300 transition-colors duration-200 select-none">
          {formatTime(time)}
        </span>
      </div>

    </div>
  );
};

export default Taskbar;
