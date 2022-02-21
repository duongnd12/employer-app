import React from "react";

import { DetailBox, DetailLabel, DetailValue } from "./DetailContent.styled";

interface IDetailContentProps {
    label?: string;
    value?: string;
}

const DetailContent = ({
    label,
    value,
}: IDetailContentProps) => {
  return (
    <DetailBox>
      <DetailLabel>{label}</DetailLabel>
      <DetailValue>{value}</DetailValue>
    </DetailBox>
  );
};

export default DetailContent;
