import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Outfit } from "next/font/google";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { PreloaderManager } from "@/components/PreloaderManager";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";
import { PerformanceProvider } from "@/context/PerformanceContext";
import { PerformanceModeModal } from "@/components/perf/PerformanceModeModal";

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

// Generate static params for all locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  // Get performance mode from cookies
  const cookieStore = await cookies();
  const perfModeCookie = cookieStore.get("NEXT_PERFORMANCE_MODE");
  const initialPerfMode = perfModeCookie?.value as "lite" | "elite" | null;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${outfit.className} ${outfit.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <PerformanceProvider initialMode={initialPerfMode}>
            <PreloaderManager />
            <PerformanceModeModal />
            <Header />
            {children}
            <Footer />
            <BackToTop />
            <WhatsAppWidget />
          </PerformanceProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
