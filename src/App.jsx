import { useState, useEffect } from "react";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";

// Apps
import Dashboard from "./components/apps/Dashboard";

const bg = "https://fiorenza.site/background.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-[#000000] select-none flex items-center justify-center">
      {/* XP Bliss Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 brightness-50 contrast-125 saturate-110 pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* Central static portfolio window (Perfect centering matching Fio's pb-12) */}
      <div className="z-10 w-full h-full flex items-center justify-center pb-12 px-4 md:px-6 select-text">
        <Window title="Aisyah Rahmasari — Portfolio">
          <Dashboard activeTab={activeTab} setActiveTab={handleTabChange} />
        </Window>
      </div>

      {/* Start Menu */}
      <StartMenu 
        isOpen={isStartMenuOpen} 
        onClose={() => setIsStartMenuOpen(false)} 
        setActiveTab={handleTabChange}
      />

      {/* Taskbar */}
      <Taskbar 
        windows={[{ id: 'dashboard', title: 'Aisyah Rahmasari — Portfolio', icon: '🌐' }]} 
        activeWindowId="dashboard"
        onAppClick={() => {}}
        onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
      />
    </div>
  );
}

function DesktopIcon({ icon, label, onDoubleClick }) {
  return (
    <div 
      className="flex flex-col items-center gap-1 cursor-pointer group w-20 p-1.5 border border-transparent hover:bg-white/10 hover:border-white/20 hover:backdrop-blur-sm rounded-[4px] transition-all select-none"
      onDoubleClick={onDoubleClick}
      onClick={onDoubleClick}
    >
      <div className="text-3.5xl drop-shadow-md select-none transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-white text-[11px] font-bold text-center leading-tight tracking-wide font-sans drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] select-none">
        {label}
      </span>
    </div>
  );
}