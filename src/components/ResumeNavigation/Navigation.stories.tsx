import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ResumeNavigation from './ResumeNavigation'

export default {
    title: 'LanceHub/Resume/Navigation',
    component: ResumeNavigation,
} as ComponentMeta<typeof ResumeNavigation>

const Template: ComponentStory<typeof ResumeNavigation> = (args) => (
    <ResumeNavigation {...args} />
)

export const Nav = Template.bind({})

Nav.args = {
}