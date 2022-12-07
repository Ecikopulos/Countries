import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 72px);
  width: 100%;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.white : theme.colors.darkGrey};
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
  padding-inline: 7%;
`;

export const StyledButton = styled.button`
  height: 32px;
  width: 104px;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.creme : theme.colors.lightGrey};
  color: ${({ theme, light }) =>
    light ? theme.colors.black : theme.colors.white};
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: ${({ light }) => (light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none")};

  a {
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 32px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 20px 0 16px 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-top: 22px;
    margin-bottom: 8px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-bottom: 6px;
  }

  span {
    margin-right: 3px;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;

    .paragraphs {
      display: flex;

      div {
        padding-right: 15px;
      }
    }

    h2 {
      margin-top: 0;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.s};
    }

    span {
      margin-right: 3px;
    }
  }
`;

export const StyledImage = styled.img`
  box-shadow: ${({ light }) => (light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none")};
  width: 100%;
  max-width: 200px;
  height: 100px;

  @media (min-width: 1100px) {
    max-width: 450px;
    height: 300px;
  }
`;

export const BorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const BorderElement = styled.div`
  margin-right: 10px;
  margin-bottom: 8px;
  border-radius: 2px;
  padding: 5px 10px;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.creme : theme.colors.lightGrey};
  box-shadow: ${({ light }) => (light ? "0 0 3px 0 rgba(0, 0, 0, 1)" : "none")};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
