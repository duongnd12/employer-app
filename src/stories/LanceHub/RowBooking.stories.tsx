import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import RowBooking from '../../components/RowBooking'

export default {
    title: 'LanceHub/RowBooking',
    component: RowBooking,
} as ComponentMeta<typeof RowBooking>

const Template: ComponentStory<typeof RowBooking> = (args) => (
    <RowBooking {...args} />
)

export const Title = Template.bind({})

Title.args = {
    width: 343,
    label: 'Title',
    valueLabel: 'Junior Dev',
    isTitle: true,
}

export const Status = Template.bind({})

Status.args = {
    width: 343,
    label: 'Status',
    statusDayAmount:'1m ago',
    status: 'Close',
    isStatus: true,
    isClose: true,
    isPending: false,
    isProgress: false,
    isRunning: false,
}

export const LastUpdate = Template.bind({})

LastUpdate.args = {
    width: 343,
    label: 'Last update',
    lastUpdateDates:'2021-12-28',
    lastUpdateTime: '06:50 AM',
    valueLastUpdateDayAmount: '1 weeks ago',
    isLastUpdate: true,
}

export const Action = Template.bind({})

Action.args = {
    width: 343,
    label: 'Action',
    isAction: true,
    isActionIcon1: true,
    isActionIcon2: true,
    isActionIcon3: true,
    isActionIcon4: true,
}