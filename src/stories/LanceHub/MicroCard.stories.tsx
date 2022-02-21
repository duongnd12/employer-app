import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import MicroCard from "../../components/MicroCard";

export default {
  title: "LanceHub/MicroCard",
  component: MicroCard,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof MicroCard>;

const Template: ComponentStory<typeof MicroCard> = (args) => (
  <MicroCard {...args} />
);

export const Order = Template.bind({});

Order.args = {
  width: 343,
  heading: "Professional logo design",
  name: "Thu Trang",
  role: "Level 1",
  price: 80,
  statusButton: "Order now",
};

export const Buy = Template.bind({});

Buy.args = {
  width: 343,
  heading: "Professional logo design",
  name: "Thu Trang",
  role: "Level 1",
  price: 80,
  isBuy: true,
  isBid: false,
  detailButton: "Preview",
  showDays: true,
  statusButton: "Buy now",
};

export const Bid = Template.bind({});

Bid.args = {
  width: 343,
  heading: "Professional logo design",
  name: "Thu Trang",
  role: "Level 1",
  price: 80,
  isBuy: false,
  isBid: true,
  detailButton: "Total Bids",
  showDays: true,
  statusButton: "Bid now",
};
