import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Trans, useTranslation } from "react-i18next";
import policies from "../data/policiesIcons";
import PolicyIcon from "./PolicyIcon";

interface PolicyProps {
  name: string;
  icon: string;
  link: string;
}

function Policies() {
  const { t, i18n } = useTranslation();

  return (
    <div id="policies" className="section-container">
      <div className="policies-container section">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className="section-header">
            <h2 className="section-title">
              <Trans i18nKey="policies.title" />
            </h2>
          </div>
        </AnimationOnScroll>

        <div className="icon-grid">
          {policies.map((policy: PolicyProps, index: number) => {
            return <PolicyIcon key={index} policy={policy} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Policies;
