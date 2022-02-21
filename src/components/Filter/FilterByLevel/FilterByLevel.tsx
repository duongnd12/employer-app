import React from "react";
import { LevelContainer, LevelButton } from "./FilterByLevel.styled";

interface ILevelProps {
  level1?: string;
  level2?: string;
  level3?: string;
  level4?: string;
  level5?: string;
  level6?: string;
  isLevel1?: boolean;
  isLevel2?: boolean;
  isLevel3?: boolean;
  isLevel4?: boolean;
  isLevel5?: boolean;
  isLevel6?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const FilterByLevel = ({
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    isLevel1,
    isLevel2,
    isLevel3,
    isLevel4,
    isLevel5,
    isLevel6,
    onClick,
}: ILevelProps) => {
  return (
    <LevelContainer>
      <LevelButton isLevel1={isLevel1} onClick={onClick}>{level1}</LevelButton>
      <LevelButton isLevel2={isLevel2} onClick={onClick}>{level2}</LevelButton>
      <LevelButton isLevel3={isLevel3} onClick={onClick}>{level3}</LevelButton>
      <LevelButton isLevel4={isLevel4} onClick={onClick}>{level4}</LevelButton>
      <LevelButton isLevel5={isLevel5} onClick={onClick}>{level5}</LevelButton>
      <LevelButton isLevel6={isLevel6} onClick={onClick}>{level6}</LevelButton>
    </LevelContainer>
  );
};

export default FilterByLevel;
