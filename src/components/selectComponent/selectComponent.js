import React from "react";
import { StyledSelect } from "./selectComponent.styles";

const SelectComponent = ({ options, light, handleRegionFilter }) => {
  return (
    <StyledSelect
      options={options}
      classNamePrefix="select"
      isClearable={true}
      light={light}
      onChange={handleRegionFilter}
    />
  );
};

export default SelectComponent;
