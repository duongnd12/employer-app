import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import AddResumeCard from './AddCard';

export default {
    title:'LanceHub/Resume/AddCard',
    component: AddResumeCard,
    argTypes: {
        handleAddCard: {action: "addResumeCard"}
    }
} as ComponentMeta<typeof AddResumeCard>

const Template: ComponentStory<typeof AddResumeCard> = (args) => (
    <AddResumeCard {...args} />
)

export const AddCard = Template.bind({})

AddCard.args = {
    width: 200,
}