export type WindowStyle = "mac" | "windows" | "none";

export interface Background {
  id: string;
  label: string;
  value: string;
  swatch: string;
}

export interface Language {
  id: string;
  label: string;
}

export interface SidebarProps {
  language: string;
  setLanguage: (v: string) => void;
  bgId: string;
  setBgId: (v: string) => void;
  padding: number;
  setPadding: (v: number) => void;
  fontSize: number;
  setFontSize: (v: number) => void;
  windowStyle: WindowStyle;
  setWindowStyle: (v: WindowStyle) => void;
  filename: string;
  setFilename: (v: string) => void;
  showFilename: boolean;
  setShowFilename: (v: (prev: boolean) => boolean) => void;
  showLines: boolean;
  setShowLines: (v: (prev: boolean) => boolean) => void;
  pixelRatio: number;
  setPixelRatio: (v: number) => void;
  code: string;
  setCode: (v: string) => void;
  exporting: boolean;
  onExport: () => void;
}
