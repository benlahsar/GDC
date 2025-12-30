import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

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
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
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
