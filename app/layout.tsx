import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Animate from "@/components/Animate";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ermiyas Dagnachew",
  description: "A full-stack developer based in Addis Ababa, Ethiopia.",
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Navigation />
        <main>
          <Animate>{children}</Animate>
        </main>
      </body>
    </html>
  );
}
