import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Awas Telat! - Jadwal Sholat & Telat",
  icons: {
    icon: '/brand.ico'
  },
  description: "Awas Telat! adalah portal yang menghadirkan jadwal sholat dan Telat dengan akurat dan mudah diakses",
  applicationName: 'Awas Telat!',
  referrer: 'origin-when-cross-origin',
  keywords: ['puasa', 'Telat', 'sholat', 'ramadhan', 'jadwal Telat', 'jadwal sholat', 'quran', 'baca quran', 'puasa ramadhan', 'bulan ramadhan'],
  authors: [{ name: 'Accesso' }, { name: 'Abdul Hafizh Kustiwan', url: 'https://github.com/abdulhafizk' }],
  creator: 'Accesso',
  publisher: 'Masyamrif Code Editor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Awas Telat! - Jadwal Sholat & Telat',
    description: 'Awas Telat! adalah portal yang menghadirkan jadwal sholat dan Telat dengan akurat dan mudah diakses',
    url: 'https://awas-telat-zm2s.vercel.app/',
    siteName: 'Awas Telat!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brand.ico" sizes="any" />
      </head>
      <body className="bodi">{children}</body>
    </html>
  );
}
