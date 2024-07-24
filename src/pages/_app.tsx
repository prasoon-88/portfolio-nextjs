import "@/styles/index.scss";
import Navbar from "@/components/navbar";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "@/components/footer";
import MouseTracker from "@/components/mouseMovementTracker";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const OGIMAGE =
    "https://dynamic-og-image-generator.vercel.app/api/generate?title=Prasoon+Asati%27s+Portfolio+SDE-Launcheazy&author=Prasoon+Asati&websiteUrl=https%3A%2F%2Fprasoonasati.me&avatar=data%3Aimage%2Fjpeg%3Bbase64%2C%2F9j%2F4AAQSkZJRgABAQAAAQABAAD%2F2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys%2FRD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N%2F%2FAABEIAL0AyAMBIgACEQEDEQH%2FxAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB%2F%2FEADgQAAEDAgQEAgkCBgMBAAAAAAEAAgMEEQUSITETQVFhInEGMkJScoGRobEUMzRTYpLR4STB8CP%2FxAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID%2F8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERMSECURL%2F2gAMAwEAAhEDEQA%2FAPKaLSkj8lMoqQf8aIdWhSoBStImbldo%2FkTzUSOnZWeIUgi99CN7pFLcTWadJORPtdlEQRfqN7pYoRa6LjXWwtuq0krnPLWWDRyUE0kjY9HG56BV3VR9kN8ybqJ4IaLnUqFzg11gAiJ%2F1MvX7KeGtIDmyNaC7dUWvc7ZOBJ9c3SDSEzCMwvl8lO2Rj%2FVJWdCGDM0kuB90pcsUZIu8O%2FqburPrErStbf8IsqMcrtQJbdBZW2zN2f9gtf1Ew9CGOZJ6psehQVZ6BCEKgQhCYCyPkhCuBkqESoXO9aitS%2Fw8XwhSqOmaf08XwD8KRZUIQhADRSEiVpz6SN1Lj7Q%2FwAqM6Ak7BU5Zw82aTkuNVdyoklqLtc1gsCoGSZiRoAdVE%2BQ5%2B3VMDgyTssiWe5cCDoBZV3i5vzVjMHAtO6icO48kDOIOSeySyjy9E0tLeaovxCJx8Is%2FtopHnYPGYd%2BSzmOI15LVgkbK0AjUIKsmVkngBBGtwOSlZM9%2FhaR5X0RPCMjshHhUcEdgC5wA%2B6gtDIPWDh5FTiridoN%2FNVHug5G6VnDc618rbb2V2o0LbE7JFFTG8QBN7FSrrPUCEIVAhCEDJeXdCJfZQuX11qcNp%2F4eL4B%2BFL8gmU%2F8PH2YPwnrozo%2BQR8ghCpplQ1rqeVzjlsNPNZMjQxgF9CNCtKunLICzhgh3t9FlPlJjDXC9ly%2ButGOBPW6j8WgO56p4LjyA%2BStUVPxZW5jdZBS0UswuAbHcrRZgUj9%2FstvDoGloaALDkteKJo3CDlB6PuGzSeqSX0feRe2q7qlgjG7b9ypzTscLaWVHl0mGSQuOYaBSQ07mG7RtuAu7rMLa8OFhZYz8OdC%2FLb5qDnJInGzhYP6qKXKx2rLafRdI%2FCuKeHlIc4XBHIqGlw%2FwDWwva9lqiE2cOoVGFGYzta%2FRP1O5T66jNLKcw25qAE7g3CguUzddNrbqVMopWg2dz0Hmnrr88ShCELSBCEIGS%2ByhEvLshcvrrUgp%2F4eP4B%2BE9Mg0hYP6R%2BE9dGQhCFQhAIs4Ajus%2FEYmMDXsFrk7LRVLE23jaeh2WfqTFjOH1Wjg7LyrOOi2cGZrmK5q36S7SANiteB21xusWOaOEtMrw1Sj0ggjOkRIGyEdNA0lXIWX9lc1TelFHexY8BdHhmIU1Y28X0KKm4HE5KpNQtePV%2By3GsaddgqNXWU9LcvcLDdBlS0RZa24UNDA04hUOy2zMD7287j8KWX0iw4uy5kkOKUD5SGOc0u6jRBjekmGsfC94AvbdcGQYnZQdOi9UxGNs9JIG2Oi8zq2WnJ6OUQrXWmy6aq8Vn0gLw2%2B4de6vh%2BbZb%2BKlKhCF0QIQhAyVCSU7d0q5fXW5wsX7TPhCckYLRtHQJV0xgIQhUCr17c0J67qwmTC4seaz9cIw93WXQUBEVPnOwCw8lpS08iuhoIuJTNaRvuubSbDqYSPM9TqTsDyWzFhtFKLSNaT30WRUzCkAADi7oAlfV18NK2oj4TA51gMuYhCNqT0eoGgOhcATyzbptEz9BUBjXEByrUUlXiMckj5GsbG0FrZm2LjzsQnl73viDo3NkafEHaortqeRz6cO1sQsLEmfqJyw7c1rUUpEDbHlssbFjK4mOFhL3HU7Ad0FaH0do5%2FXkIPTMAtGHBaaGPI0OPe91zU9VWYZVFhdePLo6OO%2FitpvbmthlXV01HS1NXwnCdtwYjq34h07oJ4oH0VU%2BDPnhkaS2%2FIhcBirMlfUN6PNl6Y0idrJLbLzrH2gYpU23z6IlVo4w1ue9sw0CXyT3ttDDdoDsp%2FJTFb4JWuzDTdOUANjcKZpDhput%2FN1MKhCFpEcvLshEuuyFyvW4kGzQhHTshdWAhCEAldBJJGXsFw1ItvCmNdQOabXL7fPT%2Faz9cIwJ6ICIy6CTotbB2aNBGwTcdgMFSA1vgLTmKmwxw8K5tNE0DZAC9mpStwxw0Y%2BzVs0NpGtDm3Wh%2BnjLNEViQ0ZYzNI9zi0aAnQKg0XqTbUk81vV4bHA4jTRZFoqRjZZZBcnXsg6GghfwwR05ps8Ae4hw8RFrdVPheIUhp75S4kaa6JWz01Y8%2Fp5m5h7NxdBlHDSCTFM5g5ttcK3BR6ZZLPPW1leZEHDXcbqZsQZv9UFAwBgcG6BcnV4Aa%2FFZHl%2BVocHOt0XcStGUloWZRSRsxV8b9HOYCO%2BpQcNjFHTxwcSifIWRv4bhKNb6m6yF2%2FpfTsiw%2BYsaAQ5hOnmFxB0Hfom6nAgGxuE9sT3C7Wm3U6BLwX%2FANP94%2FyrlAJR0KDIEv6eb3R%2FcEcCT3futep4iuhSGCT3ChZxdOaQ4abpVADY3CmaQ4abrfzdTCoQhaQK%2FhUzmvMXveJvmFQVnDaiKmxCGWb1Bv2WfrizrQ9IXSGnD8pyv5HkqOGy%2BFp0WzjdTSTURLZmudbYHVc7hrtm9DzXJa7HDagMAdmNwtiGcE5g6%2FZchTSloIvoFanxFtJTBxJAKqtLGZDUsexjrOC5%2BSlhqXNbiJDy3RuRx0ULK2oqHOLXBrT3VilpmmQF0xc699NEGxhOFfp75pS6DkCp4MJwyKqbPhQEUodrdxUkRgmpzEJnRhu%2Bgv8AlVY6MRz52z2tydz%2BaDo8%2FDLcx15q0yUEgWuCuUqcQmpMrZxdh2cCreGYkKmM2d4mHfsg2qiQBthusVrXSYw%2Fh2u1rST7ouVbnlucxOiTAIxPV1crm5gCGjS9v%2FEoOe9N6wCNkLdTO4SO7NBsPvdcnC0Xc53qN37%2FAPtF0np%2B2BuLQmGQGThAPaDoNdlzjNYJAN%2FCfotRKY97nnxG%2FbkmoKFNAi6EJq%2BAuPVKmu9UnoEKHhUoNjcJEKomaQR3SqEGxupBIFuVMOUcti6ycZAoibm5Ut2Eg53T6d%2BSccgmJk1wMzd2lYVtxygutzI3V2pphWU0Q5tOwWDTVLX2JvmC6HDJBIwi6EZc%2BEujlaRPJwxuwLosHw3B3xWmdMH5NbuPrKCTK9tnDVNik4Lw9hLcvLdFdlS4H6ONDXyTy5XNJIL36rOxbDsIhjJoqipzakZXn5bqhFjDXaPHjbsMisU8prHm8bx3OgQYhoK%2Bpz8WdpgHqty6q9gtE6mDyb2ItclbhYyNmW30VOQFkZGyCvVT3fp6o3XHVGKVsc8zaepkjY5xNmustvGasQwvAIzOFrLkybuLjuUEs7i8sLiSSLknW6Yx5YQRbS%2B%2FNOl9nswKNavlScSSMFg9lyw9dx2Uacx5YSRYg6EHYhOkYAA%2BO5Yeu47J0RoQhZU2Q2jcf6ShEv7T%2BzSkQPsbhO4b%2FdP0TyeD4WaPtq7oeiZxH%2B876q5E9GR%2Fun6I4b%2Fcd9EcR%2FvO%2BqXiye%2B76qzD0mR3un6FJlKdxpP5jvql48382T%2B4p4eo0jhcEdVN%2Bom%2Fmv8A7ik48381%2FwBVMh6o07zHLlcV0WFztBBuAudqGXdmG%2FZJT1b4nBp3CyR3rA15BvqeS0YKKOS2fKSuUo8UBYCTr0W7TYmxtr62HJVW7FhERsQQAVabStgbZqxDjfjFrBoVtuKMc2%2BZBcfZrt1m4lUMhjeXch91VrsYbFAXOcA7kuddVyV0Us00hEMetveKChiNUamZzrqogm9%2B6EEk3rNH9I%2FCjUk%2Frt%2BBv4CjV%2BupOBPjeWk7G%2BhadimIUgfIwNs5tyw8%2BnZMT435NNCDuCh7MtiNWO2P%2FS10QzftSfCfwkSzftSfCfwhZVNN%2B88HcO1TFM4cduZv7gFiPeUOmwVv6k4EIQooQhCAURmAqGw7k79lKq0Tb4kXHUZefNBYljIF7aLPnizG9reS6EwcSOwWbUQObsFEZkckzL6myvxYk%2BMaXuoHxdkNgJN7ILQxSVw3JcrEeKTnwta6%2FkoaLDjK64zWXQU1E2PTKD8kFGjpp8QlDqpxyD2Fcx5jYKKGFjcjcxuAtmkgZGLhoWN6U1LYpYI5W3Y4G%2F2VGElAJtbUna3NPDYjrxLdiEuZsYPDu53J9rW8lcNJORxCBrlAbcdlGg7dEJek4EIQooT43ZQc3ia7dvVMQkQVUZZE8t8TC0lp66ITZnltLO3cFhuD5IV0OBINwbEbKVw4gLxYSDcDn3CiQ0kEEbjW6aDXlsgKVzRJZ48Lvab%2FAITbAKXxTQCnCM805pQ43%2F0ghlOTbl1UUT7TAnkn1DQN3bbhViojoqd7Hsu06dQnPp%2BJ%2FpYUE74nZmGxWzh1cyoOV5yye71VEMtERtYprKI9FtPja9t7KNjLOykgKCthzZGPMZY0a7rahYRoVXZGGnMVPGS42Pqqqtg%2BDw%2FUrkvTB4NTTtuSLFdRI%2BwsFy%2FpMzixcQDVhv8A5RGTTPL7x6k8u6mIsdR4vJUoJHNljLTYtut%2FSaFshaHhw%2BiLrN0QrrqSN4%2F%2BTgw%2B6VXfTysOrbjqNUESEee6EAhCEEVTpTy%2FCUqSr%2Fh5fhKVBNkPQjzQAOafqdySonPvy%2B6CUm9uya4W15Jhdbkmkk7nToiJAbJHutsm2TEIXTooHsI2UycAiqrSOSeHhro3NOodunyMB20VN5s6yiO8piJWAjYhOkp7m9lB6PjPA0OPq6LcELXsvsqrLZE7uVYY0NZzVpsTQldGLW5IKBJe6ypYjT5o3gt0IIWzTxNJuVDiEYDD3Qecxi0uU8lp4dNlc8cgVRlaG1Um%2BhKno9ZCOpKjLYc1j3aEA9kkmdot%2BFUdpI0hSyyPitlcdepVUpayc%2BNlz7w3UM1HIwXZ4wmySPBBzG6bxpALh7h80EZBHIhIVqwsZMwtlbm8N7qjVRCJzcpJDhz5IqlWH%2FiyHq1Kkq9aaUdkIP%2FZ&theme=nightOwl";
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
        <meta property="og:image" content={OGIMAGE} />

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
        <meta name="twitter:image" content={OGIMAGE} />

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
