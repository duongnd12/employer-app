import React from "react";
import { Slider } from "antd";

import { FilterByPriceContainer } from "./FilterByPrice.styled";

interface IFilterByProceProps {
    title?: string,
}

const FilterByPrice = ({title,}: IFilterByProceProps) => {
  return (
    <FilterByPriceContainer>
        {title}
      <Slider range defaultValue={[0, 200]} />
    </FilterByPriceContainer>
  );
};

export default FilterByPrice;
