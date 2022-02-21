import React from "react";

import {
  RowBookingContainer,
  RowBooking,
  Label,
  Value,
  StatusTag,
  StatusTime,
  LastUpdateDateAndTime,
  LastUpdateDate,
  LastUpdateTime,
  LastUpdateDayAmount,
  ActionIcon,
  Icon,
  RowBox,
} from "./RowBooking.styled";

import ActionIcon1 from "../../assets/icons/ActionIcon/ActionIcon1.svg";
import ActionIcon2 from "../../assets/icons/ActionIcon/ActionIcon2.svg";
import ActionIcon3 from "../../assets/icons/ActionIcon/ActionIcon3.svg";
import ActionIcon4 from "../../assets/icons/ActionIcon/ActionIcon4.svg";

interface IRowBookingProps {
  isBg?: boolean,
  width?: number;
  label?: string;
  valueLabel?: string;
  statusTime?: string;
  statusCard?: any;
  statusDayAmount?: string;
  lastUpdateTime?: string;
  lastUpdateDates?: string;
  valueLastUpdateDayAmount?: string;

  isTitle?: boolean;
  isStatus?: boolean;
  isLastUpdate?: boolean;
  isAction?: boolean;

  status?: string;
  isClose?: boolean;
  isPending?: boolean;
  isRunning?: boolean;
  isProgress?: boolean;

  isActionIcon1?: boolean;
  isActionIcon2?: boolean;
  isActionIcon3?: boolean;
  isActionIcon4?: boolean;
}

const Row = ({
  isBg,
  width,
  label,
  valueLabel,
  lastUpdateTime,
  lastUpdateDates,
  valueLastUpdateDayAmount,
  statusDayAmount,

  isTitle,
  isStatus,
  isLastUpdate,
  isAction,

  status,
  isClose,
  isPending,
  isProgress,
  isRunning,

  isActionIcon1,
  isActionIcon2,
  isActionIcon3,
  isActionIcon4,
}: IRowBookingProps) => {
  let typeStatus: 'close' | 'pending' | 'running' | 'progress' = 'close';
    if(isClose) typeStatus = 'close';
    if(isPending) typeStatus = 'pending';
    if(isProgress) typeStatus = 'progress';
    if(isRunning) typeStatus = 'running';

  let bg: 'bg1' | 'bg2' = 'bg1';
  if(isBg) bg = 'bg1';
  if(!isBg) bg = 'bg2';
  return (
    <RowBookingContainer width={width}>
      <RowBooking>
        {isTitle ? (
          <RowBox bg = {bg}>
            <Label>{label}</Label>
            <Value>{valueLabel}</Value>
          </RowBox>
        ) : null}
        {isStatus ? (
          <RowBox bg = {bg}>
            <Label>{label}</Label>
            <Value>
              <StatusTag type={typeStatus}>{status}</StatusTag>
              <StatusTime>{statusDayAmount}</StatusTime>
            </Value>
          </RowBox>
        ) : null}
        {isLastUpdate ? (
          <RowBox bg = {bg}>
            <Label>{label}</Label>
            <Value>
              <LastUpdateDateAndTime>
                <LastUpdateDate>{lastUpdateDates}</LastUpdateDate>
                <LastUpdateTime>{lastUpdateTime}</LastUpdateTime>
              </LastUpdateDateAndTime>
              <LastUpdateDayAmount>
                {valueLastUpdateDayAmount}
              </LastUpdateDayAmount>
            </Value>
          </RowBox>
        ) : null}
        {isAction ? (
          <RowBox bg = {bg}>
            <Label>{label}</Label>
            <Value>
              <ActionIcon>
                {isActionIcon1 && <Icon src={ActionIcon1} alt="ActionIcon1" />}
                {isActionIcon2 && <Icon src={ActionIcon2} alt="ActionIcon2" />}
                {isActionIcon3 && <Icon src={ActionIcon3} alt="ActionIcon3" />}
                {isActionIcon4 && <Icon src={ActionIcon4} alt="ActionIcon4" />}
              </ActionIcon>
            </Value>
          </RowBox>
        ) : null}
      </RowBooking>
    </RowBookingContainer>
  );
};

export default Row;
