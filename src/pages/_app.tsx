import "@/styles/index.scss";
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "@/components/footer";
import MouseTracker from "@/components/mouseMovementTracker";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const handleReveal = () => {
    const reveal = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveal.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      if (cardPosition < windowHeight - revealPoint) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    handleReveal();
    if (typeof window !== "undefined" && typeof document !== `undefined`) {
      window.addEventListener("scroll", handleReveal);

      return () => {
        window.removeEventListener("scroll", handleReveal);
      };
    }
  }, []);
  return (
    <>
    <Head>
        <title>Prasoon Asati</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />
        <meta
          name="keywords"
          content="Prasoon Asati, Full Stack Developer, React, Next.js, TypeScript, SASS, Tailwind, Python, Django, Launcheazy"
        />
        <meta name="author" content="Prasoon Asati" />
        <meta
          property="og:title"
          content="Prasoon Asati - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.prasoonasati.me/" />
        <meta
          property="og:image"
          content="https://www.prasoonasati.me/metaImage.png"
        />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@prasoonasati" />
        <meta name="twitter:creator" content="@prasoonasati" /> */}
        <meta
          name="twitter:title"
          content="Prasoon Asati - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.prasoonasati.me/metaImage.png"
        />
        <link rel="canonical" href="https://www.prasoonasati.me/" />
        <link rel="icon" href="/pLogo.png" />
      </Head>
      <MouseTracker />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
