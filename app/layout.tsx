import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Animate from "@/components/Animate";
import Navigation from "@/components/Navigation";
import SuccessModal from "@/components/successModal";
import FailureModal from "@/components/failureModal";

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
      <body className={`${inter.className} relative`}>
        <NavBar />
        <Navigation />
        <SuccessModal />
        <FailureModal />
        <main className="md:mt-[6rem] my-[3rem]">
          <Animate>{children}</Animate>
        </main>
      </body>
    </html>
  );
}
