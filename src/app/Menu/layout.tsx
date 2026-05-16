import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Menu | The Great Chase — 100% Halal British Dining in London",
  description:
    "Explore the menu at The Great Chase: refined halal British starters, signature roasts, steaks, sides, and seasonal specials served in the heart of London.",
  keywords: [
    "The Great Chase menu",
    "halal menu London",
    "British restaurant menu",
    "fine dining menu",
    "halal steakhouse",
    "restaurant menu London",
  ],
  openGraph: {
    title: "Menu | The Great Chase — 100% Halal British Dining in London",
    description:
      "Discover The Great Chase menu — refined halal British cuisine featuring roasts, steaks, mains, and seasonal dishes crafted for memorable London dining.",
    type: "website",
    url: "https://www.thegreatchase.com/Menu",
    siteName: "The Great Chase",
    locale: "en_GB",
    images: [
      {
        url: "/og-image-menu.png",
        width: 1200,
        height: 630,
        alt: "The Great Chase menu highlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | The Great Chase — 100% Halal British Dining in London",
    description:
      "Browse the menu at The Great Chase for refined halal British dishes, premium steaks, signature roasts, and seasonal favourites in London.",
    images: ["/og-image-menu.png"],
  },
};

export default function MenuLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
