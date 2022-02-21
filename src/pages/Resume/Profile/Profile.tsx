import React from "react";
import { DatePicker } from "antd";

import TextField from "../../../components/TextField";
import { Hr } from "../../DetailPage/DetailPage.styled";
import ItemProfile from "../../../components/ItemProfile";
import ResumeNavigation from "../../../components/ResumeNavigation";

import {
  ProfileContainer,
  Heading,
  Item,
  Title,
  Photograph,
  Name,
  CityAndZip,
  Date,
  TitleDate,
  Header,
} from "./Profile.styled";

const Profile = () => {
  return (
    <ProfileContainer>
      <Header>
      <Heading>TechHub Resume</Heading>
      <ResumeNavigation/>
      </Header>
      <Hr />
      <Item>
        <Title>Profile</Title>
        <TextField isShowTitle title="Heading" placeholder="Enter Heading" />
        <Photograph>
          <input type="file" />
          <TextField
            isShowTitle
            title="Photograph"
            placeholder="Enter Photograph URL"
          />
        </Photograph>
        <Name>
          <TextField
            isShowTitle
            title="First Name"
            placeholder="Enter First Name"
          />
          <TextField
            isShowTitle
            title="Last Name"
            placeholder="Enter Last Name"
          />
        </Name>
        <TextField isShowTitle title="Subtitle" placeholder="Enter Subtitle" />
        <Date>
            <TitleDate>Date of birth</TitleDate>
          <DatePicker style={{width: '100%'}}/>
          {/* ------------------------------------------- */}
        </Date>
        <TextField
          isShowTitle
          title="Address line 1"
          placeholder="Enter Address line 1"
        />
        <TextField
          isShowTitle
          title="Address line 2"
          placeholder="Enter Address line 2"
        />
        <CityAndZip>
          <TextField isShowTitle title="City" placeholder="Enter City" />
          <TextField
            isShowTitle
            title="Zip code"
            placeholder="Enter Zip code"
          />
        </CityAndZip>
        <TextField
          isShowTitle
          title="Phone number"
          placeholder="Enter Phone number"
        />
        <TextField isShowTitle title="Website" placeholder="Enter Website" />
        <TextField
          isShowTitle
          title="Email address"
          placeholder="Enter Email address"
        />
      </Item>
      <Hr />
      <ItemProfile title="Social Network" />
      <Hr />
      <Item>
        <Title>Objective</Title>
        <TextField title="Heading" placeholder="Objective" />
        <TextField title="Summary" placeholder="Summary" />
        <p>
          This text block supports{" "}
          <span style={{ color: "yellowgreen" }}>markdown</span>
        </p>
      </Item>
      <Hr />
      <ItemProfile title="Work Experience" />
      <Hr />
      <ItemProfile title="Education" />
      <Hr />
      <ItemProfile title="Project" />
      <Hr />
      <ItemProfile title="Awards" />
      <Hr />
      <ItemProfile title="Certifications" />
      <Hr />
      <ItemProfile title="Skills" />
      <Hr />
      <ItemProfile title="Hobbies" />
      <Hr />
      <ItemProfile title="Languages" />
      <Hr />
      <ItemProfile title="References" />
      <Hr />
      <Item>
        <Title>Private</Title>
        <TextField isShowTitle title="Heading" placeholder="Private" />
        <TextField isShowTitle title="Level" placeholder="Enter Level" />
        <TextField isShowTitle title="Salary" placeholder="Enter Salary" />
        <TextField
          isShowTitle
          title="Private email"
          placeholder="Enter Private email"
        />
        <TextField
          isShowTitle
          title="Private phone"
          placeholder="Enter Private phone"
        />
        <TextField
          isShowTitle
          title="Company"
          placeholder="Enter Company name"
        />
        <TextField isShowTitle title="Note" placeholder="Placeholder" />
        <p>
          This text block supports{" "}
          <span style={{ color: "yellowgreen" }}>markdown</span>
        </p>
      </Item>
    </ProfileContainer>
  );
};

export default Profile;
