import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextField from "../../components/TextField";

export default {
  title: "LanceHub/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Normal = Template.bind({});

Normal.args = {
  title: "Heading",
  placeholder: "Text",
  isShowTitle: true,
  isTick: false,
  isSuccess: false,
  isError: false,
  isDisabled: false,
  width: 200,
};

export const Icon = Template.bind({});

Icon.args = {
  title: "Heading",
  placeholder: "Text",
  isShowTitle: true,
  isSuccess: false,
  isError: false,
  isDisabled: false,
  isTick: true,
  width: 200,
};

export const Valid = Template.bind({});

Valid.args = {
  title: "Heading",
  placeholder: "Text",
  isShowTitle: true,
  isSuccess: true,
  isError: false,
  isDisabled: false,
  isTick: false,
  width: 200,
};

export const Error = Template.bind({});

Error.args = {
  title: "Heading",
  placeholder: "Text",
  isShowTitle: true,
  isSuccess: false,
  isError: true,
  isDisabled: false,
  isTick: false,
  width: 200,
};

export const Disabled = Template.bind({});

Disabled.args = {
  title: "Heading",
  placeholder: "Text",
  isShowTitle: true,
  isSuccess: false,
  isError: false,
  isDisabled: true,
  isTick: false,
  width: 200,
};
