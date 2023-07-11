import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface PolicyIconProps {
  policy: {
    name: string;
    icon: string;
    link: string;
  };
}

function PolicyIcon({ policy }: PolicyIconProps) {
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
      <div className="icon-grid__item">
        <i className={`${policy.icon} icon-grid__item-icon`} />
        <a
          href={policy.link}
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          <p>{policy.name}</p>
        </a>
      </div>
    </AnimationOnScroll>
  );
}

export default PolicyIcon;
