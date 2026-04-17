import type { Metadata } from "next";
import "./globals.css";
import { SettingsProvider } from "@/components/settings-provider";
import SettingsSidebar from "@/components/settings-sidebar";

export const metadata: Metadata = {
  title: "Quran Web App",
  description: "A responsive Quran reader built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SettingsProvider>
          {children}
          <SettingsSidebar />
        </SettingsProvider>
      </body>
    </html>
  );
}