import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { createStructuredData } from "@/lib/seo";
import { Toaster } from "sonner";

import "../globals.css";

const InterVariable = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Tucupy',
    default: 'Tucupy - Custom Digital Solutions',
  },
  description: "We partner with ambitious companies to build software that grows with them. From MVPs that ship in weeks to platforms that serve millions.",
  keywords: 'software development, custom digital solutions, web development, mobile apps, startup technology',
  authors: [{ name: 'Tucupy' }],
  creator: 'Tucupy',
  publisher: 'Tucupy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://tucupy.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'pt': '/pt',
      'es': '/es',
      'fr': '/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Tucupy',
    title: 'Tucupy - Custom Digital Solutions',
    description: 'We partner with ambitious companies to build software that grows with them. From MVPs that ship in weeks to platforms that serve millions.',
    images: [
      {
        url: '/tucupy-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Tucupy - Custom Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tucupy - Custom Digital Solutions',
    description: 'We partner with ambitious companies to build software that grows with them. From MVPs that ship in weeks to platforms that serve millions.',
    images: ['/tucupy-banner.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }, { lang: 'es' }, { lang: 'fr' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const structuredData = createStructuredData();

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${InterVariable.variable} ${InterVariable.className} antialiased`}
      >
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
