import styled from "styled-components";

export const LabelsWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
`;

export const StyledLabel = styled.label`
  box-shadow: ${({ light }) => (light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none")};
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white : theme.colors.darkGrey};
  height: 48px;
  width: 80%;
  max-width: 343px;
  border-radius: 5px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white : theme.colors.darkGrey};
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
  padding: 6px;
  outline: none;
`;

export const StyledUl = styled.ul`
  background-color: ${({ theme, light }) =>
    light ? theme.colors.creme : theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  list-style: none;
  width: 100%;
  padding-top: 60px;
  min-height: calc(100vh - 216px);

  @media (min-width: 700px) {
    display: unset;
  }
`;

export const StyledLI = styled.li`
  box-shadow: ${({ light }) => (light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none")};
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white : theme.colors.darkGrey};
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  max-width: 264px;
  max-height: 249px;
  margin-bottom: 40px;
  cursor: pointer;

  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
  }

  img {
    height: 100px;
    width: 100%;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    padding: 12px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding-left: 12px;
    padding-bottom: 8px;
    font-weight: 300;

    &:last-child {
      padding-bottom: 22px;
    }
  }

  @media (min-width: 700px) {
    display: inline-block;
    margin: 6px;
  }
`;
