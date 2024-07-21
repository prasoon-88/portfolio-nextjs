import Image from "next/image";
import React from "react";
import cx from "classnames";

interface TestimonialCardProps {
  image?: string;
  alt?: string;
  classNames?: string;
  dark?: boolean;
}

const TestimonialCard = ({
  image,
  alt,
  classNames,
  dark,
}: TestimonialCardProps) => {
  return (
    <div id="testimonialCard" className={cx(classNames, { dark })}>
      {image && (
        <div className="imageContainer">
          <Image src={image} alt={alt || ""} width={96} height={96} />
          <div className="frameImage">
            <span>{`,,`}</span>
          </div>
        </div>
      )}
      <p className="medium">
        I recently had to jump on 10+ different calls across eight different
        countries to find the right owner.
      </p>
      <div className="blackStrip"></div>
      <h4 className="bold">Prasoon Asati</h4>
      <h6>Designer</h6>
    </div>
  );
};

export default TestimonialCard;
