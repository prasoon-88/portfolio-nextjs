import classNames from "classnames";
import React, { ReactNode } from "react";

interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  dark?: boolean;
}

const SkillCard = ({ icon, title, dark }: SkillCardProps) => {
  return (
    <div id="skillCard" className={classNames({ dark })}>
      {icon}
      <h5 className="bold">{title}</h5>
    </div>
  );
};

export default SkillCard;
