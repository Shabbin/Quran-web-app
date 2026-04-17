"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { ReaderSettings } from "@/types/quran";
import {
  DEFAULT_SETTINGS,
  getStoredSettings,
  saveSettings,
} from "@/lib/settings";

type SettingsContextType = {
  settings: ReaderSettings;
  isOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  updateSettings: (updates: Partial<ReaderSettings>) => void;
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ReaderSettings>(DEFAULT_SETTINGS);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSettings(getStoredSettings());
  }, []);

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const value = useMemo(
    () => ({
      settings,
      isOpen,
      openSettings: () => setIsOpen(true),
      closeSettings: () => setIsOpen(false),
      updateSettings: (updates: Partial<ReaderSettings>) =>
        setSettings((prev) => ({ ...prev, ...updates })),
    }),
    [settings, isOpen]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useReaderSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useReaderSettings must be used within SettingsProvider");
  }

  return context;
}