import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'

import CoinNumber from "../../components/CoinNumber";

export default {
    title: "Home/CoinNumber",
    component: CoinNumber,
} as ComponentMeta<typeof CoinNumber>;

const Template: ComponentStory<typeof CoinNumber> = args => (
    <CoinNumber {...args} />
);

export const Coin = Template.bind({})

Coin.args = {
    coin: 217.56,
    width: 84,
}