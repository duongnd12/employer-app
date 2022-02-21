import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Profile from '../../../components/Profile'

export default {
    title: "LanceHub/Detail/Profile",
    component: Profile,
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = args => (
    <Profile {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
    id: '123456',
    name: 'Thu Trang',
    btnViewProfile: 'View Profile',
    btnHire: 'Hire me',
    address: 'Hà Nội',
    totalService: 1,
    inProgress: 0,
    rating: 20,
    memberSince: '12 Dec 2021',
    title: 'Profile',
    hideBtn: 'Hide',
    width: 343,
}