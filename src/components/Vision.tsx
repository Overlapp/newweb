import React from "react";
import { Trans, useTranslation } from "react-i18next";
import VideoEmbed from "./VideoEmbed";

import { AnimationOnScroll } from "react-animation-on-scroll";

function Vision() {
  return (
    <>
      <div id="vision" className="section-container medium__accent">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <section className="vision section">
            <div className="section-header">
              <h2 className="section-title accent-title">
                <Trans i18nKey="vision.title" />
                <br></br>
                <br></br>
              </h2>
            </div>
            <br></br>
            <br></br>
            <h4>
              <strong>
                <Trans i18nKey="vision.paragraph1" />
              </strong>
              <br></br>
            </h4>
          </section>
        </AnimationOnScroll>
      </div>
    </>
  );
}

export default Vision;
