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
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
