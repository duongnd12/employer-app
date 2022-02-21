import React, { useState } from "react";

import BarIcon from "../../assets/icons/ResumeIcon/navigation.svg";
import ProfileIcon from "../../assets/icons/ResumeIcon/NavigationIcon/profile.svg";
import SocialNetworkIcon from "../../assets/icons/ResumeIcon/NavigationIcon/socialNetwork.svg";
import ObjectiveIcon from "../../assets/icons/ResumeIcon/NavigationIcon/objective.svg";
import WorkExpIcon from "../../assets/icons/ResumeIcon/NavigationIcon/workExp.svg";
import EducationIcon from "../../assets/icons/ResumeIcon/NavigationIcon/education.svg";
import ProjectIcon from "../../assets/icons/ResumeIcon/NavigationIcon/project.svg";
import AwardsIcon from "../../assets/icons/ResumeIcon/NavigationIcon/awards.svg";
import CertificationsIcon from "../../assets/icons/ResumeIcon/NavigationIcon/certifications.svg";
import SkillsIcon from "../../assets/icons/ResumeIcon/NavigationIcon/skills.svg";
import HobbiesIcon from "../../assets/icons/ResumeIcon/NavigationIcon/hobbies.svg";
import LanguagesIcon from "../../assets/icons/ResumeIcon/NavigationIcon/languages.svg";
// import PrivateIcon from "/assets/icons/ResumeIcon/NavigationIcon/privateIcon.svg";

import { NavigationContainer, Icon, NavList } from "./ResumeNavigation.styled";

interface INavProps {
  width?: number;
}

const ResumeNavgigation = ({width} :INavProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <NavigationContainer>
          <Icon src={BarIcon} alt="icon-nav" onClick={handleClick} />
      {show && (
        <NavList>
          <Icon src={ProfileIcon} alt="icon-profile" />
          <Icon src={SocialNetworkIcon} alt="icon-SocialNetwork" />
          <Icon src={ObjectiveIcon} alt="icon-Objective" />
          <Icon src={WorkExpIcon} alt="icon-WorkExp" />
          <Icon src={EducationIcon} alt="icon-Education" />
          <Icon src={ProjectIcon} alt="icon-Project" />
          <Icon src={AwardsIcon} alt="icon-Awards" />
          <Icon src={CertificationsIcon} alt="icon-Certifications" />
          <Icon src={SkillsIcon} alt="icon-Skills" />
          <Icon src={HobbiesIcon} alt="icon-Hobbies" />
          <Icon src={LanguagesIcon} alt="icon-Languages" />
          <Icon src={LanguagesIcon} alt="icon-Private" />
        </NavList>
      )}
    </NavigationContainer>
  );
};

export default ResumeNavgigation;
