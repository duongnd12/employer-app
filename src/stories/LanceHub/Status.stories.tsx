import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Status from "../../components/Status";

export default {
    title: 'LanceHub/Status',
    component: Status,
} as ComponentMeta<typeof Status>

const Template: ComponentStory<typeof Status> = (args) => (
    <Status {...args} />
)

export const Close = Template.bind({})

Close.args = {
    status: 'Close',
    isClose: true,
}

export const Pending = Template.bind({})

Pending.args = {
    status: 'Pending',
    isPending: true,
}

export const Running = Template.bind({})

Running.args = {
    status: 'Running',
    isRunning: true,
}

export const Progress = Template.bind({})

Progress.args = {
    status: 'Progress',
    isProgress: true,
}