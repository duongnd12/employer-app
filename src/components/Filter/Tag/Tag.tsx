import { StringGradients } from "antd/lib/progress/progress";
import React from "react";

import { TagContainer, TagButton } from "./Tag.styled";

interface ITagProps {
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
  tag5?: string;
  isTag1?: boolean;
  isTag2?: boolean;
  isTag3?: boolean;
  isTag4?: boolean;
  isTag5?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tag = ({
    tag1,
    tag2,
    tag3,
    tag4,
    tag5,
    isTag1,
    isTag2,
    isTag3,
    isTag4,
    isTag5,
    onClick,
}: ITagProps) => {
  return (
    <TagContainer>
      <TagButton isTag1={isTag1} onClick={onClick}>{tag1}</TagButton>
      <TagButton isTag2={isTag2} onClick={onClick}>{tag2}</TagButton>
      <TagButton isTag3={isTag3} onClick={onClick}>{tag3}</TagButton>
      <TagButton isTag4={isTag4} onClick={onClick}>{tag4}</TagButton>
      <TagButton isTag5={isTag5} onClick={onClick}>{tag5}</TagButton>
    </TagContainer>
  );
};

export default Tag;
