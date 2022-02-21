import React, { useState } from "react";

import {
  ProfileContainer,
  BackgroundImage,
  Avatar,
  ID,
  DetailProfile,
  SubDetailProfile,
  MainDetail,
  Name,
  MainDetailAndBtn,
  NameAndID,
  Button,
  Hr,
  Label,
  Detail,
  HireButton,
  ContentHireBtn,
  MainProfile,
  ProfileHeader,
  Title,
  HideBtn,
} from "./Profile.styled";

import BgImage from "../../assets/images/bgProfile.svg";
import Avt from "../../assets/images/AvtProfile.svg";

interface IProfileProps {
  id: number | string;
  name: string;
  address: string;
  btnViewProfile: string;
  btnHire: string;
  title: string,
  hideBtn: string,
  totalService: number;
  inProgress: number;
  rating: number;
  memberSince: Date | string;
  width?: number;
}

const Profile = ({
  id,
  name,
  address,
  totalService,
  inProgress,
  rating,
  memberSince,
  btnViewProfile,
  btnHire,
  title,
  hideBtn,
  width,
}: IProfileProps) => {
  const [show, setShow] = useState<boolean>(true)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <ProfileContainer width={width}>
      <ProfileHeader>
          <Title>{title}</Title>
          <HideBtn onClick={handleClick}>{show ? hideBtn : 'Show'}</HideBtn>
      </ProfileHeader>
      {show && 
      <MainProfile>
        <BackgroundImage src={BgImage} alt="BgImage" />
        <MainDetailAndBtn>
          <MainDetail>
            <Avatar src={Avt} alt="Avatar" />
            <NameAndID>
              <Name>{name}</Name>
              <ID>ID: {id}</ID>
            </NameAndID>
          </MainDetail>
          <Button>{btnViewProfile}</Button>
        </MainDetailAndBtn>
        <DetailProfile>
          <SubDetailProfile>
            <Label>Address</Label>
            <Detail>{address}</Detail>
          </SubDetailProfile>
          <Hr />
          <SubDetailProfile>
            <Label>Total Service</Label>
            <Detail>{totalService}</Detail>
          </SubDetailProfile>
          <Hr />
          <SubDetailProfile>
            <Label>In Progress</Label>
            <Detail>{inProgress}</Detail>
          </SubDetailProfile>
          <Hr />
          <SubDetailProfile>
            <Label>Rating</Label>
            <Detail>{rating}</Detail>
          </SubDetailProfile>
          <Hr />
          <SubDetailProfile>
            <Label>Member Since</Label>
            <Detail>{memberSince}</Detail>
          </SubDetailProfile>
        </DetailProfile>
        <HireButton>
          <ContentHireBtn>{btnHire}</ContentHireBtn>
        </HireButton>
      </MainProfile>}
    </ProfileContainer>
  );
};

export default Profile;
