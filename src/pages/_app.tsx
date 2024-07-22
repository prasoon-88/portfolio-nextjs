import "@/styles/index.scss";
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <MouseTracker /> */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
