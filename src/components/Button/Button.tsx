import React from "react";

import { ButtonContainer, Icon, Text } from "./Button.styled";

import PlusIcon from "../../assets/icons/ButtonIcon/plus.svg";
import PlusSecondIcon from "../../assets/icons/ButtonIcon/plussecond.svg";
import ArrowIcon from "../../assets/icons/ButtonIcon/arrow.svg";
import ArrowSecondIcon from "../../assets/icons/ButtonIcon/arrowsecond.svg";

interface IButtonProps {
  text?: string;
  size?: "default" | "small";
  width?: number;
  showPlusIcon?: boolean;
  showArrowIcon?: boolean;
  isPrimary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  size,
  width,
  showPlusIcon,
  showArrowIcon,
  isPrimary,
  onClick,
}: IButtonProps) => {
  let type: "primary" | "secondary" = "primary";
  if (isPrimary) type = "primary";
  if (!isPrimary) type = "secondary";
  return (
    <ButtonContainer typeButton={type} size={size} onClick={onClick} width={width}>
      {showPlusIcon &&
        (isPrimary ? (
          <Icon src={PlusIcon} alt="PlusIcon" />
        ) : (
          <Icon src={PlusSecondIcon} alt="PlusSecondIcon" />
        ))}
      {<Text>{text}</Text>}
      {showArrowIcon && (isPrimary ? (
          <Icon src={ArrowIcon} alt="ArrowIcon" />
        ) : (
          <Icon src={ArrowSecondIcon} alt="ArrowSecondIcon" />
        ))}
    </ButtonContainer>
  );
};

export default Button;