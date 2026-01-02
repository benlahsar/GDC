import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { PreloaderManager } from "@/components/PreloaderManager";

export const metadata: Metadata = {
  title: "GDC",
  description: "",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  fallback: ["serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.className} ${outfit.variable} antialiased`}>
        <PreloaderManager />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <WhatsAppWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
