import { useCallback } from "react";
import { toPng } from "html-to-image";

interface UseExportOptions {
  cardRef: React.RefObject<HTMLDivElement | null>;
  filename: string;
  pixelRatio: number;
  exporting: boolean;
  setExporting: (v: boolean) => void;
}

export function useExport({
  cardRef,
  filename,
  pixelRatio,
  exporting,
  setExporting,
}: UseExportOptions) {
  return useCallback(async () => {
    if (!cardRef.current || exporting) return;
    setExporting(true);
    try {
      await document.fonts.ready;
      const dataUrl = await toPng(cardRef.current, {
        pixelRatio,
        cacheBust: true,
        style: { borderRadius: "16px" },
      });
      const link = document.createElement("a");
      link.download = filename
        ? `${filename.replace(/\./g, "-")}.png`
        : "codesnap.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  }, [cardRef, exporting, filename, pixelRatio, setExporting]);
}