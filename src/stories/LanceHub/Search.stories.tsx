import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Search from "../../components/Search";

export default {
  title: "LanceHub/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

export const SearchBar = Template.bind({})

SearchBar.args = {
    placeholder: 'Search',
    width: 200,
}