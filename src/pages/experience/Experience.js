import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";


class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const t = this.props.trans;

    return (
      <div className="experience-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {t('experience.title')}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {t('experience.subtitle')}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {t('experience.description')}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={t("experience.sections", { returnObjects: true })} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
