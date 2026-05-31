const folders = [
  { name: "UX research", notes: 233, size: "116.9 MB", icon: "🔍" },
  { name: "Raw data", notes: 39, size: "180.2 MB", icon: "📊", featured: true },
  { name: "Processed data", notes: 21, size: "23.4 MB", icon: "🗄️" },
  { name: "Reports", notes: 17, size: "490 MB", icon: "📋" },
  { name: "Data visualization", notes: 96, size: "1.3 GB", icon: "📈" },
  { name: "Ideas and Insights", notes: 103, size: "126.3 MB", icon: "💡" },
];

export default function MainContent({ project, selectedFolder, setSelectedFolder }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
      >
        <div className="flex items-center gap-2">
          {/* Breadcrumb */}
          <button className="text-white/60 hover:text-white text-sm transition-colors">←</button>
          <span className="text-white/50 text-sm">Projects</span>
          <span className="text-white/40 text-sm">›</span>
          <span className="text-white/70 text-sm">{project}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-white/60 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/15 transition-all">
            ⚙ Manage
          </button>
          <button className="text-white/60 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/15 transition-all">
            ↗ Share
          </button>
          <button className="text-white/60 hover:text-white text-sm px-2 py-1.5 rounded-lg hover:bg-white/15 transition-all">
            •••
          </button>
        </div>
      </div>

      {/* Title + Search */}
      <div className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-white font-bold text-xl tracking-tight">{project}</h1>
        <button
          className="px-4 py-1.5 rounded-xl text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(0,0,0,0.7) 100%)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          + New draft
        </button>
      </div>

      {/* Search + Filter */}
      <div className="px-6 mb-4 flex items-center gap-3">
        <div
          className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <span className="text-white/60 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
          />
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/80 hover:text-white transition-all"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <span>⚡</span> Filter
        </button>
      </div>

      {/* Folder Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {folders.map((folder) => (
            <FolderCard
              key={folder.name}
              folder={folder}
              isSelected={selectedFolder === folder.name}
              onClick={() => setSelectedFolder(folder.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FolderCard({ folder, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-2xl p-4 transition-all hover:scale-[1.02] ${
        isSelected ? "ring-2 ring-white/50" : ""
      }`}
      style={{
        background: isSelected
          ? "linear-gradient(135deg, rgba(99,160,255,0.55) 0%, rgba(60,120,230,0.45) 100%)"
          : "rgba(255,255,255,0.15)",
        border: isSelected
          ? "1px solid rgba(150,200,255,0.5)"
          : "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Folder preview thumbnail */}
      <div
        className="w-full h-20 rounded-xl mb-3 flex items-center justify-center text-3xl"
        style={{
          background: isSelected
            ? "rgba(255,255,255,0.2)"
            : "rgba(255,255,255,0.12)",
        }}
      >
        <span className="opacity-60">{folder.icon}</span>
      </div>

      {isSelected && (
        <div
          className="absolute top-2 right-2 text-xs text-white/80 px-2 py-0.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          The team can add texts and other…
        </div>
      )}

      <div>
        <div
          className={`font-semibold text-sm mb-1 ${
            isSelected ? "text-white" : "text-white/90"
          }`}
        >
          {folder.name}
        </div>
        <div className="text-white/60 text-xs mb-2">{folder.notes} notes</div>
        <div className="text-white/50 text-xs">{folder.size}</div>
      </div>
    </button>
  );
}
