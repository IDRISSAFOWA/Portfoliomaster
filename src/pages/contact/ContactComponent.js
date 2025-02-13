import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting } from "../../portfolio.js";
import i18next from "i18next";
// import photo from '../../assests/images/photo_4.png'

class Contact extends Component { 
  render() {
    const theme = this.props.theme;
    const t = this.props.trans;
    return (
      <div className="contact-main">
        {/* <Header theme={theme} /> */}
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  loading="lazy"
                  // src={photo}
                  alt="Your Image"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {t('contactPageData.contactSection.title')}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {t('contactPageData.contactSection.description')}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text=
                    {t('page.Contact.Tresume')}
                    newTab={true}
                    href={i18next.language='fr'?greeting.resumeLink_Fr : i18next.language='en'?greeting.resumeLink_En:''}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {t('contactPageData.addressSection.title')}
                 
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {t('contactPageData.addressSection.subtitle')}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                   {t('contactPageData.phoneSection.title')}
                 
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                      {t('contactPageData.phoneSection.subtitle')}
               
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={t('contactPageData.addressSection.location_map_link')}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
