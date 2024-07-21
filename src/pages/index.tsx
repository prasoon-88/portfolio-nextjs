/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import { Sora } from "next/font/google";
import EmailSvg from "@/assets/svgs/email";
import GithubSVG from "@/assets/svgs/github";
import Button from "@/components/button";

const sora = Sora({ subsets: ["latin"] });

const HeroSection = () => {
  const SocialLinks = [
    {
      icon: <GithubSVG />,
      link: "https://www.linkedin.com/in/prasoon-asati-01a843196/",
    },
    {
      icon: <GithubSVG />,
      link: "https://github.com/prasoon-88",
    },
    {
      icon: <GithubSVG />,
      link: "mailto:prasouna@gmail.com",
    },
  ];
  return (
    <div className="container">
      <div className="heroSection">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="introContianer">
              <div className="introduction">
                <div className="primary-black">Hello I’am</div>
                <div className="primary-black extra-bold">Prasoon Asati</div>
                <div className="primary-black extra-bold">Fullstack</div>
                <div className="outlined extra-bold">Developer</div>{" "}
                <div className="primary-black">Based in</div>
                <div className="primary-black extra-bold">India</div>
              </div>
              <p className="medium zinc-500">
                I am Prasoon Asati, a Full Stack Developer with over 1.5 years
                of experience working at Launcheazy, a dynamic startup.
                Proficient in modern web technologies, I excel in using Next.js,
                React.js, TypeScript, SASS, Tailwind CSS, Django, Python, SQL,
                PostgreSQL, MongoDB, WebSockets, HTML, CSS, and JavaScript. My
                comprehensive expertise allows me to build robust and scalable
                web applications, making me a valuable asset in any development
                team.
              </p>
              <div className="social-links">
                {SocialLinks.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="primary" text={link.icon} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-12">
            <div className="heroImageContainer">
              <img src={"/manWithDevice.png"} alt="HeroImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Prasoon Asati</title>
        <meta name="description" content="Prasoon Asati's Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="home" className={sora.className}>
        <HeroSection />
      </main>
    </>
  );
}
