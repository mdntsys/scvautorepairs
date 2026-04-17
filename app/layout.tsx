import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "SCV Auto Repairs | Santa Clarita, CA",
    template: "%s | SCV Auto Repairs",
  },
  description:
    "ASE-certified auto repair in Santa Clarita, CA. Expert service on all makes & models. 3-year/36,000-mile warranty. Call 661-251-2515.",
  keywords: [
    "auto repair Santa Clarita",
    "car repair SCV",
    "ASE certified mechanic",
    "brake repair Santa Clarita",
    "oil change Santa Clarita",
  ],
  openGraph: {
    siteName: "SCV Auto Repairs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
