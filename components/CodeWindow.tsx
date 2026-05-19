import { WindowChrome } from "@/components/WindowChrome";
import type { WindowStyle } from "@/types";

interface CodeWindowProps {
  highlighted: string;
  language: string;
  fontSize: number;
  showLines: boolean;
  lines: string[];
  windowStyle: WindowStyle;
  filename: string;
  showFilename: boolean;
}

export function CodeWindow({
  highlighted,
  language,
  fontSize,
  showLines,
  lines,
  windowStyle,
  filename,
  showFilename,
}: CodeWindowProps) {
  return (
    <div className="code-window" style={{ minWidth: 360, maxWidth: 860 }}>
      <WindowChrome
        windowStyle={windowStyle}
        filename={filename}
        showFilename={showFilename}
      />
      <div className="code-body" style={{ fontSize, lineHeight: 1.65 }}>
        {showLines ? (
          <div className="code-with-lines">
            <div
              className="line-numbers"
              style={{ fontSize, lineHeight: 1.65 }}
            >
              {lines.map((_, i) => (
                <span key={i} className="line-num">
                  {i + 1}
                </span>
              ))}
            </div>
            <pre className="code-pre">
              <code
                className={`hljs language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlighted }}
              />
            </pre>
          </div>
        ) : (
          <pre className="code-pre">
            <code
              className={`hljs language-${language}`}
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        )}
      </div>
    </div>
  );
}