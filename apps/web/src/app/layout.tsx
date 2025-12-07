import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Suwijak Promsatid",
    template: "%s | Suwizx",
  },
  description:
    "Hi, I'm Suwijak Promsatid (suwizx). Welcome to my personal website where I share my work, projects, and thoughts.",
  keywords: [
    "Suwijak Promsatid",
    "suwizx",
    "portfolio",
    "developer",
    "personal website",
  ],
  authors: [{ name: "Suwijak Promsatid", url: "https://suwizx.dev" }],
  creator: "Suwijak Promsatid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suwizx.dev",
    title: "Suwijak Promsatid",
    description:
      "Hi, I'm Suwijak Promsatid (suwizx). Welcome to my personal website where I share my work, projects, and thoughts.",
    siteName: "Suwijak Promsatid",
    images: [
      {
        url: "https://suwizx.dev/open-graph.jpg",
        width: 800,
        height: 600,
        alt: "Suwijak Promsatid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwijak Promsatid",
    description:
      "Hi, I'm Suwijak Promsatid (suwizx). Welcome to my personal website where I share my work, projects, and thoughts.",
    images: ["https://suwizx.dev/open-graph.jpg"],
    creator: "@suwizx",
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
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="grid h-svh justify-center max-w-vw bg-background">
            {/* <Header /> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
