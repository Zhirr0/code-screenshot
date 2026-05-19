import { LANGUAGES } from "@/constants/languages";
import { BACKGROUNDS } from "@/constants/backgrounds";
import type { SidebarProps, WindowStyle } from "@/types";

export function Sidebar({
  language, setLanguage,
  bgId, setBgId,
  padding, setPadding,
  fontSize, setFontSize,
  windowStyle, setWindowStyle,
  filename, setFilename,
  showFilename, setShowFilename,
  showLines, setShowLines,
  pixelRatio, setPixelRatio,
  code, setCode,
  exporting, onExport,
}: SidebarProps) {
  return (
    <aside className="tool-sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" rx="6" fill="#4c1d95" />
            <path
              d="M7 8L4 11l3 3M15 8l3 3-3 3M13 5.5l-4 11"
              stroke="#c4b5fd"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>codesnap</span>
        </div>
      </div>

      <div className="sidebar-body">
        <div className="ctrl-group">
          <span className="ctrl-label">Language</span>
          <select
            className="ctrl-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {LANGUAGES.map((l) => (
              <option key={l.id} value={l.id}>{l.label}</option>
            ))}
          </select>
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">
            Image Quality <span className="ctrl-label-val">{pixelRatio}×</span>
          </span>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type="range"
              className="ctrl-range"
              min={1}
              max={50}
              step={1}
              value={pixelRatio}
              onChange={(e) => setPixelRatio(Number(e.target.value))}
              style={{ flex: 1 }}
            />
            <input
              type="number"
              className="ctrl-input"
              min={1}
              max={50}
              value={pixelRatio}
              onChange={(e) => setPixelRatio(Math.min(50, Math.max(1, Number(e.target.value))))}
              style={{ width: 56, textAlign: "center", flexShrink: 0 }}
            />
          </div>
          <span style={{ fontSize: 11, color: "#777885", lineHeight: 1.5 }}>
            Higher values produce sharper images but increase rendering time and memory usage.
          </span>
          {pixelRatio > 20 && (
            <span style={{
              fontSize: 11,
              color: "#f8a06a",
              lineHeight: 1.5,
              background: "rgba(248, 160, 106, 0.08)",
              border: "1px solid rgba(248, 160, 106, 0.20)",
              borderRadius: 6,
              padding: "6px 8px",
              display: "block",
            }}>
              ⚠ Values above 20× may significantly increase processing time and memory usage.
            </span>
          )}
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">Background</span>
          <div className="bg-swatches">
            {BACKGROUNDS.map((b) => (
              <button
                key={b.id}
                className={`bg-swatch${bgId === b.id ? " active" : ""}`}
                style={{ background: b.value }}
                onClick={() => setBgId(b.id)}
                title={b.label}
              />
            ))}
          </div>
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">
            Padding <span className="ctrl-label-val">{padding}px</span>
          </span>
          <input
            type="range"
            className="ctrl-range"
            min={16}
            max={96}
            step={8}
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">
            Font size <span className="ctrl-label-val">{fontSize}px</span>
          </span>
          <input
            type="range"
            className="ctrl-range"
            min={11}
            max={18}
            step={1}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">Window</span>
          <div className="tab-group">
            {(["mac", "windows", "none"] as WindowStyle[]).map((s) => (
              <button
                key={s}
                className={`tab-btn${windowStyle === s ? " active" : ""}`}
                onClick={() => setWindowStyle(s)}
              >
                {s === "mac" ? "macOS" : s === "windows" ? "Win" : "None"}
              </button>
            ))}
          </div>
        </div>

        <div className="ctrl-group">
          <span className="ctrl-label">Filename</span>
          <input
            type="text"
            className="ctrl-input"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            placeholder="layout.tsx"
          />
        </div>

        <div className="ctrl-group" style={{ gap: 10 }}>
          <label className="toggle-row">
            <span>Show filename</span>
            <button
              className={`toggle-pill${showFilename ? " on" : ""}`}
              onClick={() => setShowFilename((v) => !v)}
            />
          </label>
          <label className="toggle-row">
            <span>Line numbers</span>
            <button
              className={`toggle-pill${showLines ? " on" : ""}`}
              onClick={() => setShowLines((v) => !v)}
            />
          </label>
        </div>

        <div className="ctrl-group" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <span className="ctrl-label">Code</span>
          <textarea
            className="code-textarea"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            placeholder="Paste your code here…"
            style={{ flex: 1, minHeight: 140 }}
          />
        </div>
      </div>

      <div className="sidebar-footer">
        <button className="export-btn" onClick={onExport} disabled={exporting}>
          {exporting ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                style={{ animation: "spin 1s linear infinite" }}
              >
                <circle
                  cx="7" cy="7" r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="20"
                  strokeDashoffset="10"
                />
              </svg>
              Exporting…
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 1v8M4 6l3 3 3-3M2 10v2a1 1 0 001 1h8a1 1 0 001-1v-2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Export PNG
            </>
          )}
        </button>
      </div>
    </aside>
  );
}