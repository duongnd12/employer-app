import React, { useState } from "react";
import { Drawer, Slider } from "antd";

import { FilterOutlined } from "@ant-design/icons";

import "antd/dist/antd.min.css";

import {
  NewButton,
  FilterLevel,
  FilterTag,
  FilterPrice,
} from "./Filter.styled";
import ButtonFilter from "../../components/Filter/Button/Button";

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <NewButton onClick={showDrawer}>
        <FilterOutlined />
      </NewButton>
      <Drawer
        title="Bộ lọc tìm kiếm"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={300}
      >
        <FilterLevel>
          <h3>Filter By Level</h3>
          <ButtonFilter title="Level 1" />
          <ButtonFilter title="Level 2" />
          <ButtonFilter title="Level 3" />
          <ButtonFilter title="Level 4" />
          <ButtonFilter title="Level 5" />
          <ButtonFilter title="Level 6" />
        </FilterLevel>
        <FilterTag>
          <h3>Service Includes</h3>
          <ButtonFilter title="Design" />
          <ButtonFilter title="Digital Maketing" />
          <ButtonFilter title="Technology" />
          <ButtonFilter title="Business" />
          <ButtonFilter title="Other" />
        </FilterTag>
        <FilterPrice>
          <h3>Filter By Price</h3>
          <Slider range defaultValue={[80, 200]} />
        </FilterPrice>
      </Drawer>
    </>
  );
};

export default Filter;
