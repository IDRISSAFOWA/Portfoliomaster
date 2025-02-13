import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";


export default function Greeting(props) 
{
  const {t} = useTranslation();

  const theme = props.theme;

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {t('greeting.title')}
              </h1>
              {greeting.nickname && (
                <h2 
                // className="greeting-nickname"
                 style={{ color: theme.text }}>
                  {t('greeting.nickname')}
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                 {t('greeting.subTitle')}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text= {t('greeting.Start')}
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>

              {/*
              <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> 
            */}
            </div>
          </div>
          <div className="greeting-image-div">
           <img
							alt=""
							src={require("../../assests/images/photo_4.png")}
						></img> 
             {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
