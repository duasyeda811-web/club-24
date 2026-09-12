import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  title: "CLUB 24 | Karachi's 24/7 Gaming Lounge & Sports Arena",
  description:
    "Karachi's ultimate 24/7 indoor sports and gaming lounge on Shaheed-e-Millat Road. Pro Snooker, Racing Simulators, 4K PS5 VIP Rooms, American Pool, Table Tennis, Foosball, and Hot Meals Café.",
  keywords: [
    "Club 24",
    "Gaming Lounge Karachi",
    "Snooker Karachi",
    "PS5 VIP Rooms",
    "Racing Simulator Karachi",
    "Shaheed e Millat Gaming",
    "24/7 Snooker Club",
    "Hot Meals Karachi",
  ],
  authors: [{ name: "Club 24 Karachi" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050505] text-[#ededed] antialiased selection:bg-[#FF1E27] selection:text-white">
        {children}
      </body>
    </html>
  );
}
