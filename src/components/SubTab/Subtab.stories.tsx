import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react'

import SubTab from "./SubTab";

export default {
    title: 'LanceHub/Detail/SubTab',
    component: SubTab,
} as ComponentMeta<typeof SubTab>

const Template: ComponentStory<typeof SubTab> = (args) => (
    <SubTab {...args} />
)

export const Normarl = Template.bind({})

Normarl.args = {
    
}