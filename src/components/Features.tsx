import React, { useState } from "react";

import { Trans, useTranslation } from "react-i18next";
import FeatureDetails from "./FeatureDetails";

import features from "../data/featureDetailsInfo";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Features() {
  const { t, i18n } = useTranslation();

  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div id="features" className="section-container light__accent">
      <div className="features section">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <h2 className="section-title" style={{ color: "white" }}>
            Our Features
          </h2>
        </AnimationOnScroll>
        <br></br>
        <div className="features__grid mt-4">
          {features.map((feature, index) => {
            if (showAllFeatures) {
              // Show all features in the features array
              return <FeatureDetails feature={feature} />;
            } else {
              if (index <= 5) {
                // Show only first 6
                return <FeatureDetails feature={feature} />;
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Features;
