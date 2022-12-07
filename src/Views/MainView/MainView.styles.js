import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
  background-color: ${({ theme, light }) =>
    light ? theme.colors.creme : theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.header`
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white : theme.colors.darkGrey};
  position: relative;
  padding: 20px 40px 20px 20px;
  box-shadow: 0 10px 8px -14px rgba(0, 0, 0, 1);
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ModeToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;
