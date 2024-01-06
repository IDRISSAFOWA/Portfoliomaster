import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import { greeting } from "../../portfolio.js";
import "./Footer.css";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const [t]=useTranslation();
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
         {t("page.Footer.Made")}<span role="img">❤️</span> {t("page.Footer.By")} {greeting.title}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
