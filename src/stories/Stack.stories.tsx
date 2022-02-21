import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Stack from "../components/Stack";
 
export default {
  title: "Example/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({
  numberOfChildren,
  ...args
}) => (
  <Stack {...args}>
    {[...Array(numberOfChildren)].map((_: any, index) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          color: 'white',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={index}
      >
        {index + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({})

Horizontal.args = {
    direction: 'row',
    spacing: 4,
    wrap: false
}

export const Vertical = Template.bind({})

Vertical.args = {
    direction: 'column',
    spacing: 4,
    wrap: true
}

export const NoSpacing = Template.bind({})

NoSpacing.args = {
    direction: 'row',
    spacing: 0,
    wrap: false
}

export const WrapOverflow = Template.bind({})

WrapOverflow.args = {
    numberOfChildren: 40,
    direction: 'row',
    spacing: 4,
    wrap: true
}

export const Empty = Template.bind({})

Empty.args = {
    numberOfChildren: 0,
    direction: 'row',
    spacing: 4,
    wrap: true
}
