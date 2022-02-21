import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'

import FilterByPrice from "./FilterByPrice";

export default {
    title: 'LanceHub/Filter/InputRange',
    component: FilterByPrice,
} as ComponentMeta<typeof FilterByPrice>

const Template: ComponentStory<typeof FilterByPrice> = (args) => <FilterByPrice {...args} />

export const FilterInput = Template.bind({})

FilterInput.args = {
    title: 'Slider'

}