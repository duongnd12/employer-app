import React from "react";
import { Tabs } from "antd";
import { NewTabs } from "./SubTab.styled";

const { TabPane } = Tabs;

const callback = (key: any) => {
  console.log(key);
};

interface ISubTabProps {
  width?: number;
}

const SubTab = ({width}: ISubTabProps) => {
  return (
    <NewTabs onChange={callback} type="card">
      <TabPane tab="Description" key="1">
        In this gig, I am offering services related to Website, Webapp,
        Dashboard, Saas or Desktop Software UI Design Process: (We'll discuss
        and get your revisions through the process)
        <br />
        Analyse your requirements
        including wireframe/rough sketch
        <br />
        If you haven't wireframe, don't worry I
        can help you to make it.
      </TabPane>
      <TabPane tab="Reviews (0)" key="2">
        Somthing update soon... 🤗🤗
      </TabPane>
      <TabPane tab="Buyer Comments" key="3">
      Somthing update soon........ 🤗🤗😎😎
      </TabPane>
    </NewTabs>
  );
};

export default SubTab;
