import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button, { ButtonProps } from "../button";
import DownloadSVG from "@/assets/svgs/download";
import HamBurger from "@/assets/svgs/hamburger";
import classNames from "classnames";

const Navbar = () => {
  const companyName = "Prasoon Asati";
  const logoConfig = {
    src: "/pLogo.png",
    alt: "p",
    width: 40,
    height: 40,
  };
  const navItems = [
    {
      text: "About Me",
      link: "#aboutMe",
    },
    {
      text: "Skills",
      link: "#skill",
    },
    // {
    //   text: "Projects",
    //   link: "#projects",
    // },
    {
      text: "Contact Me",
      link: "#footer",
    },
  ];
  const actions: ButtonProps[] = [
    {
      className: "primary",
      size: "small",
      text: "Resume",
      trailingIcon: <DownloadSVG />,
    },
  ];
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);

  useEffect(() => {
    if (sliderOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }
  }, [sliderOpen]);

  return (
    <div id="navContainer">
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <nav id="navbar" className={classNames({ sliderOpen })}>
              <section
                className="logoContainer"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <Image
                  src={logoConfig.src}
                  alt={logoConfig.alt}
                  width={logoConfig.width}
                  height={logoConfig.height}
                />
                <h5 className="bold primary-black">{companyName}</h5>
              </section>
              <ul className="navlinks-container">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <section className="actionsContainer">
                {actions.map((action, index) => (
                  <Button key={index} {...action} />
                ))}
              </section>
              <div
                className="hamburgerContainer hide-on-dekstop"
                onClick={() => setSliderOpen(!sliderOpen)}
              >
                <HamBurger />
              </div>
            </nav>
            {sliderOpen && (
              <section id="navItemsSlider" className="hide-on-dekstop">
                <ul className="navlinks-container">
                  {navItems.map((item, index) => (
                    <li key={index} onClick={() => setSliderOpen(false)}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
                <section className="actionsContainer">
                  {actions.map((action, index) => (
                    <Button key={index} {...action} />
                  ))}
                </section>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
