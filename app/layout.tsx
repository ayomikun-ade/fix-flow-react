import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/navbar";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto_Slab({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FixFlow - Ticket Management System",
  description: "Your go-to ticketing system for seamless issue resolution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
