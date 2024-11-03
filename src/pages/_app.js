import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.openweathermap.org"></link>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <main
        className={`mt-16 ${montserrat.variable} font-mont  bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <div className="fixed top-0 w-full z-[1] bg-light dark:bg-dark">
          <Navbar />
        </div>
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} className="mt-16" />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
