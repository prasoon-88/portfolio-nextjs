/* eslint-disable @next/next/no-img-element */
import { Sora } from "next/font/google";
import EmailSvg from "@/assets/svgs/email";
import GithubSVG from "@/assets/svgs/github";
import Button from "@/components/button";
import SkillCard from "@/components/skillCard";
import ReactSVG from "@/assets/svgs/react";
import ExperienceCard, {
  ExperienceCardProps,
} from "@/components/experienceCard";
import Image from "next/image";
import NextJs from "@/assets/svgs/NextJs";
import Typescript from "@/assets/svgs/Typescript";
import Sass from "@/assets/svgs/Sass";
import Django from "@/assets/svgs/django";
import Python from "@/assets/svgs/Python";
import PostgresSQL from "@/assets/svgs/PostgresSQL";
import MongoDB from "@/assets/svgs/MongoDB";
import SocketIo from "@/assets/svgs/SocketIo";
import Javascript from "@/assets/svgs/Javascript";
import Express from "@/assets/svgs/Express";
import Linkedin from "@/assets/svgs/Linkedin";
import Phone from "@/assets/svgs/Phone";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

const HeroSection = () => {
  const SocialLinks = [
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/prasoon-asati-01a843196/",
    },
    {
      icon: <GithubSVG />,
      link: "https://github.com/prasoon-88",
    },
    {
      icon: <EmailSvg />,
      link: "mailto:prasouna@gmail.com",
    },
    {
      icon: <Phone />,
      link: "call:+919442415952",
    },
  ];
  return (
    <div className="container">
      <div className="heroSection">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="introContianer">
              <div className="introduction">
                <div className="primary-black">Hello I’am</div>
                <h1 className="primary-black extra-bold">Prasoon Asati</h1>
                <h1 className="primary-black extra-bold">Fullstack</h1>
                <h1 className="outlined extra-bold">Developer</h1>{" "}
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
                      <Button
                        className="primary"
                        text={link.icon}
                        size="small"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="heroImageContainer">
              <img src={"/manWithDevice.png"} alt="HeroImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MySkills = () => {
  const SKILLS = [
    { title: "Next.js", icon: <NextJs /> },
    { title: "React.js", icon: <ReactSVG /> },
    { title: "Python", icon: <Python /> },
    { title: "TypeScript", icon: <Typescript /> },
    { title: "Git", icon: <GithubSVG width={62} height={62} /> },
    { title: "PostgreSQL", icon: <PostgresSQL /> },
    { title: "SASS", icon: <Sass /> },
    { title: "Express", icon: <Express /> },
    { title: "Django", icon: <Django /> },
    { title: "MongoDB", icon: <MongoDB /> },
    { title: "WebSockets", icon: <SocketIo /> },
    { title: "JavaScript", icon: <Javascript /> },
  ];

  return (
    <div id="skill" className="container">
      <div className="row">
        <div className="col-12">
          <div className="mySkillsScetion">
            <div className="fs-48 lh-56 primary-black reveal">
              <span>My</span>
              <span className="extra-bold"> Skills</span>
            </div>
            <div className="skillsContainer">
              {SKILLS.map((skill, index) => (
                <div key={index} className="reveal">
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperieceSection = () => {
  const EXPERIENCES: ExperienceCardProps[] = [
    {
      description:
        "As a key developer at Launcheazy, I have spearheaded the design and maintenance of our platform’s entire frontend. Launcheazy is an innovative digital marketing and AI-powered email outreach platform that leverages advanced AI technologies to automate and optimize email marketing campaigns. My responsibilities encompass the full spectrum of frontend development, ensuring a seamless, user-friendly interface that enhances user engagement and experience. From conceptualizing intuitive designs to implementing responsive web applications, I have played a crucial role in bringing our platform to life and continually improving its functionality.",
      title: "SDE-1 at Launcheazy",
      logo: (
        <Image
          src="https://yt3.googleusercontent.com/EtQj75H5MarhnBElxe09Y3X1VmHhC435JtsdD4nOaTQGKTe69BngoqNxvK08s_o-ywFHnKuPRA=s900-c-k-c0x00ffffff-no-rj"
          alt="Launcheazy"
          width={32}
          height={32}
        />
      ),
      startDate: "Aug 2023",
      endDate: "Present",
    },
    {
      description:
        "At Netro, I developed and maintained their platform using Sass, React, and TypeScript. Working closely with the team, I ensured the codebase is clean and scalable, creating responsive and user-friendly interfaces that enhance user experience and support Netro's growth.",
      title: "Frontend Developer Intern",
      logo: (
        <Image
          src="https://media.licdn.com/dms/image/D4D0BAQG0sxMyv55GEg/company-logo_100_100/0/1719245379311/codewebsolution_logo?e=1729728000&v=beta&t=Ye_Qlccygmzt2X61As43QTreKEEb1cRodbU9ayyuBAg"
          alt="Launcheazy"
          width={32}
          height={32}
        />
      ),
      startDate: "March 2023",
      endDate: "July 2023",
    },
  ];
  return (
    <div className="experinceSection mt-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="fs-48 lh-56 primary-white text-center reveal">
              <span>My</span>
              <span className="extra-bold"> Experiences</span>
            </div>
            <div className="experinceContainer reveal">
              {EXPERIENCES.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyWork = () => {
  return (
    <div id="myWork">
      <div className="pt-120 pb-120 container">
        <div className="row">
          <div className="col-12 text-center fs-48 lh-56 primary-white text-center reveal">
            <span>My</span>
            <span className="extra-bold"> Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container pt-120 pb-120 aboutMeContainer">
      <div className="row">
        <div className="col-md-5 col-12">
          <div className="aboutImageContainer">
            <img src="/manWithWindow.png" className="reveal" alt="HeroImage" />
          </div>
        </div>
        <div className="col-md-7 col-12">
          <div className="d-flex flex-column justify-content-center h-100 aboutme">
            <div className="fs-48 lh-56 primary-black reveal">
              <span>About</span>
              <span className="extra-bold"> Me</span>
            </div>
            <p className="medium zinc-500 mb-20 mt-40 reveal">
              {`I'm`} a passionate, self-proclaimed designer who specializes in
              full stack development. I am very enthusiastic about bringing the
              technical and visual aspects of digital products to life. User
              experience, pixel perfect design, and writing clear, readable,
              highly performant code matters to me.
            </p>
            <p className="medium zinc-500 mb-20 reveal">
              I began my journey as a web developer in 2023, and since then,
              {`I've`} continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 1.5 years after starting my web
              development journey, {`I'm`} building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="medium zinc-500 reveal">
              When {`I'm`} not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on{" "}
              <Link
                href={"https://github.com/prasoon-88"}
                className="primary-black"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <main id="home" className={sora.className}>
      <HeroSection />
      <ExperieceSection />
      <MySkills />
      <MyWork />
      <AboutMe />
    </main>
  );
}
