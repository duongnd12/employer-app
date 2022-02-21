import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "../../../components/Filter/Button/Button";

export default {
  title: "LanceHub/Filter",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonLevel = Template.bind({});

ButtonLevel.args = {
  title: "Level 1",
};

export const ButtonTag = Template.bind({});

ButtonTag.args = {
  title: "Tag 1",
};