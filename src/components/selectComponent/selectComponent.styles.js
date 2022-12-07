import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  height: 48px;
  width: 80%;
  max-width: 343px;
  border-radius: 5px;
  margin-top: 24px;

  .select__control {
    box-shadow: ${({ light }) =>
      light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none"};
    background: ${({ theme, light }) =>
      light ? theme.colors.white : theme.colors.darkGrey};
    border: none;
  }

  .select__menu {
    box-shadow: ${({ light }) =>
      light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none"};
    background: ${({ theme, light }) =>
      light ? theme.colors.white : theme.colors.darkGrey};
  }

  @media (min-width: 1200px) {
    width: 150px;
  }
`;
