import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../../components/Button'

export default {
    title: 'Home/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'onClick' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}/>
)

export const Primary = Template.bind({})

Primary.args = {
    text: "Button",
    size: 'default',
    showPlusIcon: false,
    showArrowIcon: false,
    isPrimary: true,
}

export const Secondary = Template.bind({})

Secondary.args = {
    text: "Button",
    size: 'default',
    showPlusIcon: false,
    showArrowIcon: false,
    isPrimary: false,
}

export const Small = Template.bind({})

Small.args = {
    text: "Button",
    size: 'small',
    showPlusIcon: false,
    showArrowIcon: false,
    isPrimary: true,
}