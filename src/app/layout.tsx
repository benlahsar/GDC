import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { PreloaderManager } from "@/components/PreloaderManager";

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body className={`${outfit.className} ${outfit.variable} antialiased`}>
        <PreloaderManager />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <BackToTop />
          <WhatsAppWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
