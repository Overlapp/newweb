import React, { useEffect } from "react";

const Form = (props) => {
  const { region, portalId, formId } = props;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "21261306",
          formId: "84c4c03a-f566-4a2d-b925-bd862cb2e053",
          target: "#hubspotForm",
        });
      }
    });
    let css = '.hs-form-field label { color: white; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default Form;
