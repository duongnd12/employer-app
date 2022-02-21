import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Job from '../../components/Job';

export default {
    title: 'Home/Job',
    component: Job,
} as ComponentMeta<typeof Job>

const Template: ComponentStory<typeof Job> = (args) => (
    <Job {...args} />
)

export const Facebook = Template.bind({})

Facebook.args = {
    name: 'Facebook',
    position: 'UI/UX Designer',
    address: 'Hanoi, Vietnam',
    salaryMin: 1500,
    salaryMax: 2500,
}