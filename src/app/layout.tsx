import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./foooter";
import About from "./about";
import Services from "./services";
import Teacher from "./teacher";
import Question from "./question";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papicoding",
  description: "Website kursus coding termurah di Indonesia",
  authors: [{ name: "Papicoding Team", url: "https://papicoding.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth focus:scroll-auto`}>    
      <body className="h-screen mb-auto">
        <Navbar />
        {children}
        <About />
        <Services />
        <Teacher />
        <Question />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
