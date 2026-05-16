import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import "./globals.css";

// Load variable font
const Sat = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-sat", // CSS variable
  weight: "400 700", // Range for variable font
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegreatchase.com"),
  title: "The Great Chase | Refined 100% Halal British Dining in London",
  description:
    "The Great Chase brings refined 100% halal British cuisine to London with responsibly sourced ingredients, elegant hospitality, and memorable dining experiences.",
  keywords: [
    "Halal restaurant London",
    "British cuisine",
    "fine dining",
    "halal dining",
    "London restaurant",
    "The Great Chase",
    "responsibly sourced food",
    "modern British restaurant",
  ],
  authors: [{ name: "The Great Chase" }],
  openGraph: {
    title: "The Great Chase | Refined 100% Halal British Dining in London",
    description:
      "Experience modern British cuisine in London with 100% halal ingredients, responsibly sourced dishes, and unforgettable dining at The Great Chase.",
    type: "website",
    siteName: "The Great Chase",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Great Chase restaurant dining experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Chase | Refined 100% Halal British Dining in London",
    description:
      "Experience modern British cuisine in London with 100% halal ingredients and elevated hospitality at The Great Chase.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Sat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Loader minDurationMs={2000}>{children}</Loader>
        </SmoothScroll>
      </body>
    </html>
  );
}
