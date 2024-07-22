import "@/styles/index.scss";
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "@/components/footer";
import MouseTracker from "@/components/mouseMovementTracker";

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
      <MouseTracker />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
