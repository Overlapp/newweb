import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Trans, useTranslation } from "react-i18next";

interface FeatureDetailsLanguages {
  en: {
    title: string;
    description: string;
  };
  fin: {
    title: string;
    description: string;
  };
}

interface FeatureDetailsProps {
  feature: {
    image: string;
    // url: string;
    text: FeatureDetailsLanguages;
  };
}

function FeatureDetails({ feature }: FeatureDetailsProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const featureText =
    currentLanguage === "en" ? feature.text.en : feature.text.fin;

  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
      <div
        style={{ backgroundImage: `url(${feature.image})` }}
        className="features__item"
      >
        <div className="features__item-overlay">
          <div className="overlay__text ">
            <h2>{featureText.title}</h2>
            <br></br>
            <h6>{featureText.description}</h6>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default FeatureDetails;
