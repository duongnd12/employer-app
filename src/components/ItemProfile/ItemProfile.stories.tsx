import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import ItemProfile from './ItemProfile'

export default {
    title: 'LanceHub/Resume/Profile/Item',
    component: ItemProfile,
} as ComponentMeta<typeof ItemProfile>

const Template: ComponentStory<typeof ItemProfile> = (args) => (
    <ItemProfile {...args} />
)

export const SocialNetwork = Template.bind({})

SocialNetwork.args = {
    title: 'Social Network',
}