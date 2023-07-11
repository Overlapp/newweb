import React from "react";

function Socials() {
  return (
    <div className="socials__fixed-container">
      <a
        className="socials__fixed-link"
        href="https://www.instagram.com/letsoverlapp/"
        role="button"
      >
        <i className="fab fa-instagram socials__fixed-icon" />
      </a>
      <a
        className="socials__fixed-link"
        href="https://twitter.com/letsoverlapp"
        role="button"
      >
        <i className="fab fa-twitter socials__fixed-icon" />
      </a>
      <a
        className="socials__fixed-link"
        href="https://www.tiktok.com/@letsoverlapp"
        role="button"
      >
        <i className="fab fa-tiktok socials__fixed-icon" />
      </a>
      <a
        className="socials__fixed-link"
        href="https://www.linkedin.com/company/letsoverlapp"
        role="button"
      >
        <i className="fab fa-linkedin-in socials__fixed-icon" />
      </a>

      <a
        className="socials__fixed-link"
        href="https://www.snapchat.com/add/letsoverlapp"
        role="button"
      >
        <i className="fab fa-snapchat socials__fixed-icon" />
      </a>
    </div>
  );
}

export default Socials;
