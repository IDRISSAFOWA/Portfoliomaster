import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./Skills.css";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

export default function SkillSection(props) {
  const theme = props.theme;
  const { t } = useTranslation();
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const skillsData = await t("skills.data", { returnObjects: true });
      setSkillsData(skillsData);
    };
    fetchData();
  }, [t]);


  return (
    <div>
      {skillsData && skillsData.length > 0 ? skillsData.map((skill, i) => {
        return (
          <div key={i} className="skills-main-div">
            <Fade left duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade right duration={1500}>
                <SoftwareSkill logos={skills.data[i].softwareSkills} />
              </Fade>
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        key={i}
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      }) :
        <>

        </>
      }
    </div>
  );
}
