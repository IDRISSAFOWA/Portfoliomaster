import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    const theme = this.props.theme;
    const t=this.props.trans;
    return (
      <div className="error-main">
        {/* <Header theme={this.props.theme} /> */}
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>{t("page.404.title1")}</h1>
            <h1 className="error-404">404</h1>
            <p>{t("page.404.title2")}</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              {t("page.404.title3")}
            
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
