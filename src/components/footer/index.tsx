import RedHeart from "@/assets/svgs/redHeart";
import Image from "next/image";
import React, { FormEvent } from "react";
import Input from "../input";
import TextArea from "../textarea";
import Button from "../button";
import Linkedin from "@/assets/svgs/Linkedin";
import GithubSVG from "@/assets/svgs/github";
import EmailSvg from "@/assets/svgs/email";
import Phone from "@/assets/svgs/Phone";
import Link from "next/link";

const Footer = () => {
  const companyName = "Prasoon Asati";
  const logoConfig = {
    src: "/pLogo.png",
    alt: "p",
    width: 40,
    height: 40,
  };
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
  const CURRYEAR = new Date().getFullYear();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div id="footer" className="">
      <div className="container">
        <div className="row">
          <div className="col-12 hide-on-dekstop mt-80 reveal">
            <div className="contentContainer p-0 h-100 d-flex algin-items-center justify-content-center flex-column">
              <div className="introduction fs-48 lh-56 extra-bold primary-black justify-content-center">
                <div className="primary-black extra-bold">Let’s</div>
                <div className="outlined extra-bold">talk</div>{" "}
                <div className="primary-black extra-bold">for</div>
              </div>
              <div className="primary-black extra-bold fs-48 lh-56 primary-black text-center">
                Something special
              </div>
              <p className="medium zinc-500 mt-24 text-center">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
              <h3 className="semi-bold mt-24 text-center">
                <Link
                  href={"mailto:prasouna@gmail.com"}
                  style={{ textDecoration: "none" }}
                  className="primary-black"
                >
                  prasouna@gmail.com
                </Link>
              </h3>
              <h3 className="semi-bold text-center">
                <Link
                  href={"call:+919424415952"}
                  style={{ textDecoration: "none" }}
                  className="primary-black"
                >
                  +91 9424415952
                </Link>
              </h3>
            </div>
          </div>
          <div className="col-md-5 col-12 reveal">
            <form className="footerForm" onSubmit={handleSubmit}>
              <Input placeholder="Your Name*" />
              <Input placeholder="Email*" type="email" />
              <Input placeholder="Your website(if exists)" />
              <TextArea placeholder="How can i help?*" />
              <div className="btn-container">
                <Button text={"Get In Touch"} size="small" type="submit" />
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
            </form>
          </div>
          <div className="col-md-7 col-12 hide-on-mobile reveal">
            <div className="contentContainer h-100 d-flex algin-items-center justify-content-center flex-column">
              <div className="introduction fs-48 lh-56 extra-bold primary-black">
                <div className="primary-black extra-bold">Let’s</div>
                <div className="outlined extra-bold">talk</div>{" "}
                <div className="primary-black extra-bold">for</div>
              </div>
              <div className="primary-black extra-bold fs-48 lh-56 primary-black">
                Something special
              </div>
              <p className="medium zinc-500 mt-24">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </p>
              <h3 className="semi-bold mt-24">
                <Link
                  href={"mailto:prasouna@gmail.com"}
                  style={{ textDecoration: "none" }}
                  className="primary-black"
                >
                  prasouna@gmail.com
                </Link>
              </h3>
              <h3 className="semi-bold">
                <Link
                  href={"call:+919424415952"}
                  style={{ textDecoration: "none" }}
                  className="primary-black"
                >
                  +91 9424415952
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomBar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <main>
                <section className="logoContainer">
                  <Image
                    src={logoConfig.src}
                    alt={logoConfig.alt}
                    width={logoConfig.width}
                    height={logoConfig.height}
                  />
                  <h5 className="bold primary-black m-0">{companyName}</h5>
                </section>
                <section className="copyrightContainer">
                  <h6>@ 2024 - {CURRYEAR} Personal</h6>
                  <h6>
                    Made with <RedHeart />
                  </h6>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
