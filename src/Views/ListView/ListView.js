import React from "react";
import {
  LabelsWrapper,
  SearchInput,
  StyledLabel,
  StyledLI,
  StyledUl,
} from "./ListView.styles";
import SelectComponent from "../../components/selectComponent/selectComponent";
import { Link } from "react-router-dom";

const ListView = ({
  light,
  options,
  handleRegionFilter,
  countries,
  searchTerms,
  setSearchTerms,
}) => {
  return (
    <>
      <LabelsWrapper>
        <StyledLabel light={light} htmlFor="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <SearchInput
            type="search"
            id="search"
            placeholder="search for the country..."
            light={light}
            onChange={(e) => setSearchTerms(e.target.value)}
            value={searchTerms}
          />
        </StyledLabel>
        <SelectComponent
          options={options}
          light={light}
          handleRegionFilter={handleRegionFilter}
        />
      </LabelsWrapper>
      <StyledUl light={light}>
        {countries
          ?.filter((item) => {
            if (searchTerms === "") {
              return item;
            } else if (
              item.name.common.toLowerCase().includes(searchTerms.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <StyledLI key={item.name.official} light={light}>
              <Link to={`/${item.name.common}`} state={item}>
                <img src={item.flags.png} alt="flag" />
                <h2>{item.name.common}</h2>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </Link>
            </StyledLI>
          ))}
      </StyledUl>
    </>
  );
};

export default ListView;
