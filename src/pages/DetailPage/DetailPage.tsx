import React from "react";

import {
  DetailContainer,
  Content,
  Heading,
  Tag,
  SubHr,
  Hr,
  OrtherService,
} from "./DetailPage.styled";

import Slider from "../../components/Slider";
import SubTab from "../../components/SubTab";
import LabelTag from "../../components/LabelTag";
import Rate from "../../components/Rate";
import Profile from "../../components/Profile";
import Detail from "../../components/Detail";
import DetailContent from "../../components/Detail/DetailContent";
import MicroCard from "../../components/MicroCard";

const DetailPage = () => {
  return (
    <DetailContainer>
      <Heading>Professional logo design</Heading>
      <Hr />
      <Content>
        <Tag>
          <h4>Tags</h4>
          <LabelTag text="Business" />
          <LabelTag text="Digital Marketing" />
          <LabelTag text="Technology" />
        </Tag>
        <Slider />
        <Rate is3Star oders={34} />
        <SubTab />
        <div
          style={{ width: "109%", height: "8px", backgroundColor: "#F6F6F9" }}
        ></div>

        <Detail title="Short Details">
          <DetailContent label="Delivery Time" value="12 days" />
          <SubHr />
          <DetailContent label="Service Price" value="60.000 USD" />
        </Detail>

        <Hr />

        <Detail title="Product Details">
          <DetailContent label="Software Price" value="60.000 USD" />
          <SubHr />
          <DetailContent label="Last Update" value="04 Jan 2022" />
          <SubHr />
          <DetailContent label="Documentation" value="Well Documented" />
          <SubHr />
          <DetailContent label="Files Included" value="IT, product, mockup" />
        </Detail>

        <Hr />

        <Profile
          id={1238465}
          name="Thu Trang"
          address=" Hà Nội"
          btnViewProfile="View Profile"
          btnHire="Hire me"
          title="Profile"
          hideBtn="Hide"
          totalService={1}
          inProgress={0}
          rating={20}
          memberSince="12 Dec 2021"
        />

        <Hr />

        <OrtherService>
          <h3>Orther service by Thu Trang</h3>
          <MicroCard
            heading="Professional logo design"
            name="Thu Trang"
            role="Level 1"
            price={80.0}
            statusButton="Order now"
          />
          <MicroCard
            heading="Professional logo design"
            name="Thu Trang"
            role="Level 1"
            price={80.0}
            isBuy
            detailButton="Preview"
            statusButton="Buy now"
            showDays
          />
          <MicroCard
            heading="Professional logo design"
            name="Thu Trang"
            role="Level 1"
            price={80.0}
            isBid
            detailButton="Total Bids"
            statusButton="Bid now"
            showDays
          />
        </OrtherService>
      </Content>
    </DetailContainer>
  );
};

export default DetailPage;
