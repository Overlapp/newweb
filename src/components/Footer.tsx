import React from "react";
import { Trans, useTranslation } from "react-i18next";
import app_store from "../assets/app_store.png";
import google_play from "../assets/google_play.png";

function Footer() {
  return (
    <footer id="contact">
      <div className="section">
        {/* <h2 className="word-animation-wrapper footer-animation">
          <p>
            <Trans i18nKey="footer.lets" />
          </p>
          <h2 className="word-animation__words">
            <span className="word-animation__word">
              <Trans i18nKey="footer.words-animation.word1" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="footer.words-animation.word1" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="footer.words-animation.word2" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="footer.words-animation.word3" />
            </span>
            <span className="word-animation__word">
              <Trans i18nKey="footer.words-animation.word4" />
            </span>
          </h2>
        </h2>
        <br></br> */}
        {/* <h2 className="footer__cta">
          <Trans i18nKey="footer.cta.part1" />
          <a href="mailto:hello@letsoverlapp.com?subject=Hello! I would like to talk about Overlapp">
            <Trans i18nKey="footer.cta.part2" />
          </a>
        </h2> */}
        <h3>Feel free to check out our current version!</h3>
        <br></br>
        <a
          href="https://apps.apple.com/us/app/lets-overlapp/id1569056038"
          target="_blank"
          rel="noreferrer"
        >
          <img src={app_store} alt="example" width="255" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.overlapp.stagingapp&pli=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={google_play} alt="example" width="200" />
        </a>
        <br></br>
        <br></br>
        <div>
          <div className="footer__socials">
            <a
              className="social-link"
              href="https://www.instagram.com/letsoverlapp/"
              role="button"
            >
              <i className="fab fa-instagram social-icon" />
              Instagram
            </a>
            <a
              className="social-link"
              href="https://twitter.com/letsoverlapp"
              role="button"
            >
              <i className="fab fa-twitter social-icon" />
              Twitter
            </a>
            <a
              className="social-link"
              href="https://www.tiktok.com/@letsoverlapp"
              role="button"
            >
              <i className="fab fa-tiktok social-icon" />
              TikTok
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/company/letsoverlapp"
              role="button"
            >
              <i className="fab fa-linkedin-in social-icon" />
              LinkedIn
            </a>
            <a
              className="social-link"
              href="https://www.snapchat.com/add/letsoverlapp"
              role="button"
            >
              <i className="fab fa-snapchat social-icon" />
              Snapchat
            </a>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div id="copyright">&copy; {new Date().getFullYear()} Overlapp</div>
      </div>
    </footer>
  );
}

export default Footer;
