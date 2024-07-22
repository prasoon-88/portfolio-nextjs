import React, { ReactNode } from "react";

export interface ExperienceCardProps {
  title: string;
  logo: ReactNode;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperienceCard = ({
  title,
  description,
  endDate,
  startDate,
  logo,
}: ExperienceCardProps) => {
  return (
    <div id="experienceCard">
      <div className="header">
        <div className="d-flex align-items-center" style={{ gap: 30 }}>
          {logo}
          <h4 className="semi-bold primary-white m-0">{title}</h4>
        </div>
        <h6 className="semi-bold zinc-300 m-0">
          {startDate} - {endDate}
        </h6>
      </div>
      <p className="medium zinc-300 mt-28 mb-0">{description}</p>
    </div>
  );
};

export default ExperienceCard;
