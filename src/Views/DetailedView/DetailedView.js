import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  StyledButton,
  Wrapper,
  ContentWrapper,
  BorderWrapper,
  BorderElement,
  StyledImage,
} from "./DetailedView.styles";

const DetailedView = ({ light }) => {
  const location = useLocation();
  const country = location.state;

  const displayCurrencies = () => {
    let keys = Object.keys(country.currencies);
    let currencies = [];
    for (let i = 0; i < keys.length; i++) {
      currencies.push(country.currencies[keys[i]].name);
    }
    return currencies.map((item) => <span>{item}</span>);
  };

  const displayLanguages = () => {
    let keys = Object.keys(country.languages);
    let languages = [];
    for (let i = 0; i < keys.length; i++) {
      languages.push(country.languages[keys[i]]);
    }
    return languages.map((item) => <span>{item}</span>);
  };

  const displayBorders = () => {
    if (country.borders !== undefined) {
      return country.borders.map((item) => (
        <BorderElement light={light}>{item}</BorderElement>
      ));
    } else {
      return <p>Nothing</p>;
    }
  };

  return (
    <Wrapper light={light}>
      <StyledButton light={light}>
        <Link to="/">back</Link>
      </StyledButton>
      <ContentWrapper light={light}>
        <StyledImage light={light} src={country.flags.png} alt="flag" />
        <div className="all">
          <h1>{country.name.common}</h1>
          <div className="paragraphs">
            <div>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {country.tld}</p>
              <p>Currencies: {displayCurrencies()}</p>
              <p>Languages: {displayLanguages()} </p>
            </div>
          </div>
          <h2>Border Countries:</h2>
          <BorderWrapper>{displayBorders()}</BorderWrapper>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default DetailedView;
