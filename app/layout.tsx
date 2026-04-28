import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WinnoVation Technology Solutions | Enterprise Security & Next-Gen Technology",
  description:
    "Empowering enterprise security and next-generation technology goals. From project envisioning to consulting, designing, implementing, and going live, we deliver state-of-the-art solutions.",
  keywords: [
    "enterprise security",
    "cybersecurity",
    "enterprise mobility",
    "IT operations",
    "managed detection and response",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
