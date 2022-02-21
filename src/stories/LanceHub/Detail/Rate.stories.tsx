import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Rate from '../../../components/Rate'

export default {
    title: 'LanceHub/Detail/Rate',
    component: Rate,
    argTypes: {
        onClickStar1: { action: 'clicked1Star' },
        onClickStar2: { action: 'clicked2Star' },
        onClickStar3: { action: 'clicked3Star' },
        onClickStar4: { action: 'clicked4Star' },
        onClickSaveIcon: { action: 'clickedSaveIcon' },
        onClickShareIcon: { action: 'clickedShareIcon' },
    }
} as ComponentMeta<typeof Rate>

const Template: ComponentStory<typeof Rate> = args => (
    <Rate {...args} />
)

export const Normal = Template.bind({})

Normal.args = {
    width: 343,
    is1Star: false,
    is2Star: false,
    is3Star: false,
    is4Star: false,
    oders: 34,
}