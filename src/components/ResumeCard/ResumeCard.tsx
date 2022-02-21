import React from "react";

import MenuIcon from "../../assets/icons/ResumeIcon/menu.svg";

import {
  ResumeCardContainer,
  ResumeImage,
  ResumeIcon,
  IconContainer,
  Heading,
  LastUpdate,
} from "./ResumeCard.styled";

interface IResumeCardProps {
  title?: string;
  lastUpdate?: string;
  src?: string;
  width?: number;
}

const ResumeCard = ({
    title,
    lastUpdate,
    src,
    width,
}: IResumeCardProps) => {
  return (
    <ResumeCardContainer width={width}>
      <ResumeImage width={width} src={src} alt="resume-image" />
      <IconContainer>
        <ResumeIcon src={MenuIcon} alt="menu-icon"/>
      </IconContainer>
      <Heading>{title}</Heading>
      <LastUpdate>{lastUpdate}</LastUpdate>
    </ResumeCardContainer>
  );
};

export default ResumeCard;
