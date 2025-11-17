import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Babylee Ent - Online Conferences: New Era Unfolds",
  description: "Join Babylee Ent for cutting-edge online conferences featuring world-class speakers, networking opportunities, and innovative insights. Building the future of events and conferences.",
  keywords: ["conference", "online events", "speakers", "networking", "Babylee Ent", "web development", "technology"],
  authors: [{ name: "Babylee Ent" }],
  creator: "Babylee Ent",
  publisher: "Babylee Ent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://babylee-ent.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://babylee-ent.com',
    title: 'Babylee Ent - Online Conferences: New Era Unfolds',
    description: 'Join Babylee Ent for cutting-edge online conferences featuring world-class speakers and networking opportunities.',
    siteName: 'Babylee Ent',
    images: [
      {
        url: '/og-image.jpg', // You should add an OG image
        width: 1200,
        height: 630,
        alt: 'Babylee Ent Conference',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Babylee Ent - Online Conferences: New Era Unfolds',
    description: 'Join Babylee Ent for cutting-edge online conferences featuring world-class speakers.',
    images: ['/twitter-image.jpg'], // You should add a Twitter image
    creator: '@babylee_ent', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}