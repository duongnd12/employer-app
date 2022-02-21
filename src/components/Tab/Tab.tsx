import React from "react";
import { Tabs } from "antd";

import Filter from "../../pages/Filter";
import Search from "../Search";

import { SearchAndFilter, NewTabs, NewTabPane, Cards } from "./Tab.styled";
import MicroCard from "../MicroCard";
import LanceJob from "../../pages/LanceJob";
import LanceBooking from "../../pages/LanceBooking";
const { TabPane } = Tabs;
function callback(key: any) {
  console.log(key);
}

interface ITabProps {
  content?: string;
}

const Tab = ({ content }: ITabProps) => {
  return (
    <NewTabs defaultActiveKey="1" onChange={callback}>
      <NewTabPane tab="Home" key="1">
        <SearchAndFilter>
          <Search placeholder="Search" />
          <Filter />
          
        </SearchAndFilter>
        <Cards>
          <MicroCard heading = 'Professional Logo design' name="Thu Trang" role="Level 1" price={80} statusButton="Order Now" showDays={false}/>
          <MicroCard heading = 'Professional Logo design' name="Thu Trang" role="Fresher" price={800} detailButton="Preview" statusButton="Buy Now" showDays isBuy/>
          <MicroCard heading = 'Professional Logo design' name="Thu Trang" role="Fresher" price={800} detailButton="Total Bid" statusButton="Bid Now" showDays isBid/>
          <MicroCard heading = 'Professional Logo design' name="Thu Trang" role="Fresher" price={800} detailButton="Preview" statusButton="Buy Now" showDays isBuy/>
          <MicroCard heading = 'Professional Logo design' name="Thu Trang" role="Fresher" price={800} detailButton="Preview" statusButton="Buy Now" showDays isBuy/>
        </Cards>
      </NewTabPane>
      <TabPane tab="Job" key="2">
        <LanceJob/>
      </TabPane>
      <TabPane tab="Booking" key="3">
        <LanceBooking/>
      </TabPane>
    </NewTabs>
  );
};

export default Tab;