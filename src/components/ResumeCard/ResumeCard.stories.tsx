import { ComponentMeta, ComponentStory } from '@storybook/react'

import Image1 from '../../assets/images/ResumeImages/resumeImage1.svg'

import ResumeCard from './ResumeCard';

export default {
    title: 'LanceHub/Resume/Card',
    component: ResumeCard,

} as ComponentMeta<typeof ResumeCard>

const Template : ComponentStory<typeof ResumeCard> = (args) => (
    <ResumeCard {...args} />
)

export const Card = Template.bind({})

Card.args = {
    title: 'Business Analyst',
    lastUpdate: 'Last Update a few seconds ago',
    src: Image1,
    width: 200,
}
