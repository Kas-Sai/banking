import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Inter, IBM_Plex_Serif} from "next/font/google";


const inter = Inter({subsets: ["latin"], variable: '--font-inter'});
const imbPlexSerif = IBM_Plex_Serif({subsets: ['latin'], weight: ['400','700'], variable:'--font-imb-plex-serif' });

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "Arcues",
  description: "Arcues is a mordern and user friendly banking system",
  icons: {
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${imbPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
