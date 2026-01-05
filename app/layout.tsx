import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase : new URL('https://rishixyz.com'),
  title: "Hrishikesh Rana | Full-Stack Developer",
  description: "Computer Science undergraduate specializing in AI/ML. Building reliable, scalable applications with focus on clean backend systems, real-time features, and secure APIs.",
  icons: "/profile-linkedin.png",
  openGraph: {
    title: "Hrishikesh Rana | Full-Stack Developer",
    description: "Computer Science undergraduate specializing in AI/ML. Building reliable, scalable applications with focus on clean backend systems.",
    url: "https://rishixyz.com",
    siteName: "Hrishikesh Rana",
    images: [
      {
        url: "/profile-linkedin.png",
        width: 1200,
        height: 630,
        alt: "Hrishikesh Rana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hrishikesh Rana | Full-Stack Developer",
    description: "Computer Science undergraduate specializing in AI/ML. Building reliable, scalable applications.",
    images: ["/profile-linkedin.png"],
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
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
