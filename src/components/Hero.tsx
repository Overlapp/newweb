import React from "react";
import { Trans, useTranslation } from "react-i18next";
import reactions from "../assets/reactions.gif";
import Form from "./Form";

function Hero() {
  // const { t, i18n } = useTranslation();

  return (
    <>
      <div className="section-container">
        <div className="hero section">
          <section className="hero__section">
            <br></br>
            <p className="hero__title">
              <Trans i18nKey="hero.title" />
              <br></br>
            </p>
            <br></br>
            <div className="hero__subtitle">
              <h4>
                <Trans i18nKey="hero.journal" />
              </h4>
              <br></br>
            </div>
            <br></br>
            <div className="form-container">
              <div className="content-wrapper">
                <div className="form-wrapper">
                  <h5>
                    Be the first to experience the next generation of Overlapp -
                    Sign up now!
                  </h5>
                  <br></br>
                  <img
                    alt="reactions"
                    width="320"
                    src={reactions}
                    className="image"
                  />
                  <Form />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
