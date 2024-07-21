import Image from "next/image";
import React from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  logo: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperienceCard = ({
  title,
  description,
  company,
  endDate,
  startDate,
  logo,
}: ExperienceCardProps) => {
  return (
    <div id="experienceCard">
      <div className="header">
        <div className="d-flex align-items-center" style={{ gap: 30 }}>
          {logo}
          <h4 className="semi-bold primary-white">{title}</h4>
        </div>
        <h6 className="semi-bold zinc-300">
          {startDate} - {endDate}
        </h6>
      </div>
      <p className="medium zinc-300">{description}</p>
    </div>
  );
};

export default ExperienceCard;
