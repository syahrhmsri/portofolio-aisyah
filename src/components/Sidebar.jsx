const navItems = [
  { icon: "🏠", label: "Home" },
  { icon: "📁", label: "Projects", active: true },
  { icon: "📝", label: "Notes" },
  { icon: "📊", label: "Reports" },
  { icon: "📧", label: "Emails" },
  { icon: "⚙️", label: "Automation" },
];

const projects = ["Segment", "CodeAI", "Ikigai Labs"];

export default function Sidebar({ activeProject, setActiveProject }) {
  return (
    <div
      className="w-56 flex-shrink-0 flex flex-col py-4"
      style={{
        background: "rgba(255,255,255,0.12)",
        borderRight: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 mb-6">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 100%)",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          ✦
        </div>
        <span className="font-bold text-white text-base tracking-tight">
          Aisyah
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-0.5">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}

        {/* Projects sub-list */}
        <div className="pl-4 mt-1 space-y-0.5">
          {projects.map((p) => (
            <button
              key={p}
              onClick={() => setActiveProject(p)}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all ${
                activeProject === p
                  ? "bg-white/25 text-white font-semibold"
                  : "text-white/70 hover:bg-white/15 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom */}
      <div className="px-2 space-y-0.5 mt-4 border-t border-white/20 pt-4">
        <NavItem icon="⚙️" label="Settings" />
        <div className="flex items-center justify-between px-3 py-1.5">
          <NavItem icon="🔔" label="Notifications" noFull />
          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            10
          </span>
        </div>
      </div>

      {/* User */}
      <div
        className="mx-3 mt-3 px-3 py-2 rounded-xl flex items-center gap-2"
        style={{ background: "rgba(255,255,255,0.12)" }}
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center text-xs font-bold text-white">
          S
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-xs font-semibold truncate">
            Aisyah Rahmasari
          </div>
          <div className="text-white/60 text-[10px] truncate">
            aiisyahrahmasarii@gmail.com
          </div>
        </div>
        <button className="text-white/50 hover:text-white text-sm">↪</button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, noFull }) {
  return (
    <button
      className={`${noFull ? "" : "w-full"} flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
        active
          ? "bg-white/25 text-white font-semibold"
          : "text-white/75 hover:bg-white/15 hover:text-white"
      }`}
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </button>
  );
}
