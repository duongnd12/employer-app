import React from "react";
import { useNavigate } from "react-router-dom";
import ImageLeft from "../../assets/images/group611.svg";
import AvatarImage from "../../assets/images/avatar.svg";

import {
  MicroCardContainer,
  Image,
  Heading,
  Name,
  Role,
  Price,
  Avatar,
  Date,
  DetailButton,
  StatusButton,
  GroupDetailMember,
  MemberPrice,
  FrameDetail,
  SubFrame,
} from "./MicroCard.styled";

interface IMicroCardProps {
  heading?: string;
  name?: string;
  role?: string;
  price?: number;
  date?: string;
  detailButton?: string;
  statusButton?: string;
  showDays?: boolean;
  isBuy?: boolean;
  isBid?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
}
const MicroCard = ({
  heading,
  name,
  role,
  price,
  date = '30 days',
  detailButton,
  statusButton,
  showDays = false,
  isBuy,
  isBid,
  handleClick,
  width,
}: IMicroCardProps) => { 
  let status: "order" | "buy" | "bid" = "order";
  if(isBuy) status = 'buy';
  if(isBid) status = 'bid';
  let navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/detail");
  }

  return (
    <MicroCardContainer width={width} onClick={handleClickCard}>
            <Image src={ImageLeft} alt="Image" />
        <FrameDetail>
            <Heading>{heading}</Heading>
            <MemberPrice>
              <GroupDetailMember>
                <Avatar src={AvatarImage} alt="AvatarImage" />
                <div>
                  <Name>{name}</Name>
                  <Role>{role}</Role>
                </div>
              </GroupDetailMember>
              <Price>${Number(price).toFixed(2)}</Price>
            </MemberPrice>
            <SubFrame>
              {showDays && <Date>{date}</Date>}
              {showDays && <DetailButton  status={status} >{detailButton}</DetailButton>}
            </SubFrame>
              <StatusButton onClick={handleClick}>{statusButton}</StatusButton>
        </FrameDetail>
    </MicroCardContainer>
  );
};

export default MicroCard;


