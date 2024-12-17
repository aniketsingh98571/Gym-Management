import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GymCenter - Modern Gym Management System",
  description:
    "Streamline your gym operations with our comprehensive mobile app. Digital onboarding, membership management, diet plans, and workout tracking all in one place.",
  keywords: [
    "gym management",
    "fitness app",
    "gym software",
    "membership management",
    "workout tracking",
    "diet planning",
  ],
  authors: [{ name: "GymCenter" }],
  openGraph: {
    type: "website",
    siteName: "GymCenter",
    title: "GymCenter - Modern Gym Management System",
    description:
      "Transform your gym management with our all-in-one mobile solution",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
        width: 1200,
        height: 630,
        alt: "GymCenter App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GymCenter - Modern Gym Management System",
    description:
      "Transform your gym management with our all-in-one mobile solution",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
