import type { WindowStyle } from "@/types";

interface WindowChromeProps {
  windowStyle: WindowStyle;
  filename: string;
  showFilename: boolean;
}

export function WindowChrome({
  windowStyle,
  filename,
  showFilename,
}: WindowChromeProps) {
  if (windowStyle === "none") return null;

  return (
    <div className="window-chrome" style={{ position: "relative" }}>
      {windowStyle === "mac" ? (
        <>
          <div className="mac-dots">
            <span className="w-dot w-dot-r" />
            <span className="w-dot w-dot-y" />
            <span className="w-dot w-dot-g" />
          </div>
          <div className="chrome-center">
            {showFilename && (
              <span className="chrome-filename">{filename || "untitled"}</span>
            )}
          </div>
          <div style={{ width: 52, flexShrink: 0 }} />
        </>
      ) : (
        <>
          {showFilename && (
            <span
              className="chrome-filename"
              style={{
                position: "static",
                transform: "none",
                marginRight: "auto",
                paddingLeft: 4,
              }}
            >
              {filename || "untitled"}
            </span>
          )}
          <div
            className="win-dots"
            style={{ marginLeft: showFilename ? 0 : "auto" }}
          >
            <span>—</span>
            <span>□</span>
            <span style={{ color: "#888" }}>✕</span>
          </div>
        </>
      )}
    </div>
  );
}