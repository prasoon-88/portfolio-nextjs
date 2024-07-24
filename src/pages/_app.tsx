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
        <title>Prasoon Asati - Full Stack Developer</title>
        <meta
          name="description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />

        <meta property="og:url" content="https://prasoonasati.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Prasoon Asati - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />
        <meta property="og:image" content="/metaImage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="prasoonasati.me" />
        <meta property="twitter:url" content="https://prasoonasati.me" />
        <meta
          name="twitter:title"
          content="Prasoon Asati - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Prasoon Asati's Portfolio - Full Stack Developer skilled in React, Next.js, TypeScript, SASS, Tailwind, Python, Django, and more."
        />
        <meta name="twitter:image" content="/metaImage.png" />

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
