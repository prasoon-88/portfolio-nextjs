import Image from "next/image";
import React from "react";
import Button, { ButtonProps } from "../button";
import DownloadSVG from "../../assets/svgs/download";

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
      text: "About ME",
      link: "#aboutMe",
    },
    {
      text: "Skills",
      link: "#skill",
    },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "Contact Me",
      link: "#contactme",
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

  return (
    <div className="container mt-24 mb-24">
      <div className="row">
        <div className="col-md-12">
          <nav id="navbar">
            <section className="logoContainer">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
