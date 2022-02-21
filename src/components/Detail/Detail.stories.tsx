import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Detail from './Detail'

export default {
    title: 'LanceHub/Detail/Detail',
    component: Detail,
} as ComponentMeta<typeof Detail>

const Template: ComponentStory<typeof Detail> = (args) => (
    <Detail {...args} />
)

export const ShortDetail = Template.bind({})

ShortDetail.args = {
    title: 'Short Detail'
}