import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TabBar from "../../components/TabBar";

export default {
  title: "Home/TabBar",
  component: TabBar,
  argTypes: {
    onClick: { action: "onClick" },
  },
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Home = Template.bind({});

Home.args = {
  isActive: "home",
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 375,
  direction: "row",
};

export const Activity = Template.bind({});

Activity.args = {
  isActive: "activity",
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 375,
  direction: "row",
};

export const Inbox = Template.bind({});

Inbox.args = {
  isActive: "inbox",
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 375,
  direction: "row",
};

export const Profile = Template.bind({});

Profile.args = {
  isActive: "profile",
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 375,
  direction: "row",
};

export const Horizontal = Template.bind({});

Horizontal.args = {
  isActive: null,
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 375,
  height: 70,
  direction: "row",
};

export const Verical = Template.bind({});

Verical.args = {
  isActive: null,
  textIconHome: "Home",
  textIconActivity: "Activity",
  textIconInbox: "Inbox",
  textIconProfile: "Profile",
  width: 70,
  height: 375,
  direction: "column",
};
