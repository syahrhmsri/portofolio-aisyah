const folderData = {
  "Raw data": {
    documents: { size: "48.5 GB", percent: 75 },
    images: { size: "182.4 MB", percent: 40, alert: true },
    properties: {
      Size: "180.2 MB",
      Created: "12/03/2024",
      "Last modification": "06/12/2024",
    },
    tags: [
      { label: "Sales", color: "rgba(99,160,255,0.35)", dot: "#4A90D9" },
      { label: "Marketing", color: "rgba(255,255,255,0.2)", dot: "#aaa" },
      { label: "Analytics", color: "rgba(255,100,100,0.3)", dot: "#ff6b6b" },
    ],
  },
  "UX research": {
    documents: { size: "22.1 GB", percent: 45 },
    images: { size: "540 MB", percent: 60, alert: false },
    properties: {
      Size: "116.9 MB",
      Created: "08/01/2024",
      "Last modification": "05/10/2024",
    },
    tags: [
      { label: "Design", color: "rgba(160,99,255,0.35)", dot: "#9b59b6" },
      { label: "UX", color: "rgba(255,255,255,0.2)", dot: "#aaa" },
    ],
  },
};

const defaultData = {
  documents: { size: "10 GB", percent: 30 },
  images: { size: "50 MB", percent: 20, alert: false },
  properties: {
    Size: "N/A",
    Created: "—",
    "Last modification": "—",
  },
  tags: [{ label: "General", color: "rgba(255,255,255,0.2)", dot: "#aaa" }],
};

export default function InfoPanel({ selectedFolder }) {
  const data = folderData[selectedFolder] || defaultData;

  return (
    <div
      className="w-60 flex-shrink-0 flex flex-col py-5 px-4 overflow-y-auto"
      style={{
        background: "rgba(255,255,255,0.10)",
        borderLeft: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-base">Info</h2>
        <button className="text-white/50 hover:text-white text-sm transition-colors">»</button>
      </div>

      {/* Documents */}
      <div
        className="rounded-xl p-3 mb-3"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70 text-xs">Documents</span>
          <button className="text-white/40 text-xs hover:text-white">•••</button>
        </div>
        <div className="text-white font-bold text-lg mb-2">{data.documents.size}</div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${data.documents.percent}%`,
              background: "linear-gradient(90deg, #4A90D9, #87CEEB)",
            }}
          />
        </div>
      </div>

      {/* Images */}
      <div
        className="rounded-xl p-3 mb-4"
        style={{
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70 text-xs">Images</span>
          <button className="text-white/40 text-xs hover:text-white">•••</button>
        </div>
        <div className="text-white font-bold text-lg mb-2">{data.images.size}</div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${data.images.percent}%`,
              background: data.images.alert
                ? "linear-gradient(90deg, #ff6b6b, #ff9f9f)"
                : "linear-gradient(90deg, #50fa7b, #a8ff78)",
            }}
          />
        </div>
      </div>

      {/* Properties */}
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm mb-3">Properties</h3>
        <div className="space-y-2">
          {Object.entries(data.properties).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-white/60 text-xs">{key}</span>
              <span className="text-white/90 text-xs font-medium">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <h3 className="text-white font-semibold text-sm mb-3">Tags</h3>
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((tag) => (
            <span
              key={tag.label}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-white/90 font-medium"
              style={{
                background: tag.color,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: tag.dot }} />
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom actions */}
      <div
        className="mt-auto pt-4 space-y-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
      >
        <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors w-full">
          <span>📌</span>
          <span>Pinned items</span>
        </button>
        <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors w-full">
          <span>📬</span>
          <span>Activity</span>
        </button>
      </div>
    </div>
  );
}
