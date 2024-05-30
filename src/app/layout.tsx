import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navindu Sachintha",
  description: "Welcome to my Portfolio",
  openGraph:{
    title: "Navindu Sachintha",
    description: "Welcome to my personal Portfolio",
    siteName: "Navindu Sachintha",
    images:[
      {
        url: "https://i.ibb.co/RC88yHP/Navindu.png",
        width: 800,
        height: 600,
        alt: "Navindu Sachintha"
      },
      {
        url: "https://i.ibb.co/RC88yHP/Navindu.png",
        width: 900,
        height: 800,
        alt: "Navindu Sachintha"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
