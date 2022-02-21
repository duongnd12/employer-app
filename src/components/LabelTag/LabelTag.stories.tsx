import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react'

import LabelTag from './LabelTag';

export default {
    title: 'LanceHub/Detail/Tag',
    component: LabelTag,
} as ComponentMeta<typeof LabelTag>

const Template: ComponentStory<typeof LabelTag> = (args) => (
    <LabelTag {...args} />
)

export const Tag = Template.bind({})

Tag.args = {
    text: 'Business',
}