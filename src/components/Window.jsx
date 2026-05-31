import React from 'react';

const Window = ({ 
  children, 
  title = "My Portofolio"
}) => {
  return (
    <div
      className="w-[92vw] max-w-[1420px] h-[87vh] flex flex-col overflow-hidden rounded-t-[7px] border-[3px] border-[#0052e2] bg-[#f1efe2] shadow-[8px_8px_24px_rgba(0,0,0,0.6)] z-10"
    >
      {/* Windows XP classic Title Bar */}
      <div
        className="bg-gradient-to-r from-[#0058e6] via-[#247df2] to-[#0058e6] flex items-center justify-between px-2.5 py-[6px] cursor-default select-none border-b border-[#002e8c]"
      >
        <div className="flex items-center gap-2 select-none">
          <span className="text-[15px] shrink-0">🌐</span>
          <span className="text-[14px] font-black text-white font-sans drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] tracking-wide">
            {title}
          </span>
        </div>

        {/* Windows XP Aesthetic Control Buttons (Static/Classic style) */}
        <div className="flex items-center gap-[3px] select-none">
          
          {/* Minimize */}
          <div
            className="w-[21px] h-[21px] rounded-[3px] bg-gradient-to-b from-[#3c8bf6] to-[#0c59d4] border border-[#0d4cb5] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.45)] flex items-end justify-center pb-[4px]"
          >
            <span className="w-[8px] h-[3px] bg-white rounded-sm" />
          </div>
          
          {/* Maximize */}
          <div
            className="w-[21px] h-[21px] rounded-[3px] bg-gradient-to-b from-[#3c8bf6] to-[#0c59d4] border border-[#0d4cb5] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.45)] flex items-center justify-center"
          >
            <span className="w-[8px] h-[7px] border-[1.5px] border-white rounded-sm" />
          </div>
          
          {/* Close */}
          <div
            className="w-[21px] h-[21px] rounded-[3px] bg-gradient-to-b from-[#e76969] via-[#d62020] to-[#b81414] border border-[#9b1111] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.45)] flex items-center justify-center font-sans font-black text-white text-[10px] pb-[1px]"
          >
            ✕
          </div>
          
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 overflow-auto bg-[#080d1a]">
        {children}
      </div>
    </div>
  );
};

export default Window;
