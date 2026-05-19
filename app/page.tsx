"use client";

import { useState, useRef } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CodeWindow } from "@/components/CodeWindow";
import { useHighlight } from "@/hooks/useHighlight";
import { useExport } from "@/hooks/useExport";
import { BACKGROUNDS } from "@/constants/backgrounds";
import { DEFAULT_CODE } from "@/constants/defaults";
import type { WindowStyle } from "@/types";

export default function Home() {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [language, setLanguage] = useState("tsx");
  const [bgId, setBgId] = useState("midnight");
  const [padding, setPadding] = useState(48);
  const [fontSize, setFontSize] = useState(13);
  const [windowStyle, setWindowStyle] = useState<WindowStyle>("mac");
  const [filename, setFilename] = useState("layout.tsx");
  const [showFilename, setShowFilename] = useState(true);
  const [showLines, setShowLines] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [pixelRatio, setPixelRatio] = useState(5);

  const cardRef = useRef<HTMLDivElement>(null);
  const bg = BACKGROUNDS.find((b) => b.id === bgId) ?? BACKGROUNDS[0];
  const highlighted = useHighlight(code, language);
  const lines = code.split("\n");

  const handleExport = useExport({
    cardRef,
    filename,
    pixelRatio,
    exporting,
    setExporting,
  });

  return (
    <div className="tool-root">
      <Sidebar
        language={language}
        setLanguage={setLanguage}
        bgId={bgId}
        setBgId={setBgId}
        padding={padding}
        setPadding={setPadding}
        fontSize={fontSize}
        setFontSize={setFontSize}
        windowStyle={windowStyle}
        setWindowStyle={setWindowStyle}
        filename={filename}
        setFilename={setFilename}
        showFilename={showFilename}
        setShowFilename={setShowFilename}
        showLines={showLines}
        setShowLines={setShowLines}
        pixelRatio={pixelRatio}
        setPixelRatio={setPixelRatio}
        code={code}
        setCode={setCode}
        exporting={exporting}
        onExport={handleExport}
      />

      <main className="tool-main">
        <div className="preview-area">
          <div className="card-export-wrap">
            <div
              ref={cardRef}
              style={{
                background: bg.value,
                padding,
                display: "inline-block",
                borderRadius: 16,
              }}
            >
              <CodeWindow
                highlighted={highlighted}
                language={language}
                fontSize={fontSize}
                showLines={showLines}
                lines={lines}
                windowStyle={windowStyle}
                filename={filename}
                showFilename={showFilename}
              />
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
