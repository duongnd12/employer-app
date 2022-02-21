import React from "react";
import { SearchContainer, SearchBox, Input } from "./Search.styled";

import SearchIcon from '../../assets/icons/searchicon.svg'
import { Icon } from "../TextField/TextField.styled";

interface ISerachProps {
  placeholder?: string;
  value?: string;
  width?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ placeholder, value, width, onChange, }: ISerachProps) => {
  return (
    <SearchContainer width={width}>
      <SearchBox>
        <Icon src={SearchIcon} alt="SearchIcon" />
        <Input placeholder={placeholder} value={value} onChange={onChange}/>
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;
