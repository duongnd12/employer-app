import React from "react";
import {
  TextFieldContainer,
  Title,
  Input,
  Box,
  Icon,
} from "./TextField.styled";

import SuccessIcon from "../../assets/icons/success.svg";
import TickIcon from "../../assets/icons/tick.svg";
import ErrorIcon from "../../assets/icons/error.svg";
import DisabledIcon from "../../assets/icons/disabled.svg";

interface ITextFieldProps {
  isShowTitle?: boolean;
  isSuccess?: boolean;
  isTick?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  title?: string;
  require?: boolean;
  value?: string;
  placeholder?: string;
  width?: number;

  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  isShowTitle,
  isError,
  isSuccess,
  isTick,
  isDisabled,

  title,
  require,
  placeholder,
  value,
  width,
  onChange,
  onBlur,
}: ITextFieldProps) => {
  let status: "error" | "success" | "disabled" | "normal" = "normal";
  if (isDisabled) status = "disabled";
  if (isSuccess) status = "success";
  if (isError) status = "error";

  return (
    <TextFieldContainer width={width}>
      {isShowTitle && <Title>{title}{require && <span style={{color: 'red'}}>*</span>}</Title>}
      <Box status={status}>
        <Input placeholder={placeholder} value={value} onBlur={onBlur} onChange={onChange} />
        {isSuccess && <Icon src={SuccessIcon} alt="SuccessIcon" />}
        {isTick && <Icon src={TickIcon} alt="TickIcon" />}
        {isError && <Icon src={ErrorIcon} alt="ErrorIcon" />}
        {isDisabled && <Icon src={DisabledIcon} alt="DisabledIcon" />}
      </Box>
    </TextFieldContainer>
  );
};

export default TextField;
