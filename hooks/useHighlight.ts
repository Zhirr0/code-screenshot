import { useMemo } from "react";
import hljs from "@/lib/hljs";
import { escapeHtml } from "@/lib/utils";

export function useHighlight(code: string, language: string): string {
  return useMemo(() => {
    try {
      return hljs.highlight(code, { language }).value;
    } catch {
      try {
        return hljs.highlightAuto(code).value;
      } catch {
        return escapeHtml(code);
      }
    }
  }, [code, language]);
}