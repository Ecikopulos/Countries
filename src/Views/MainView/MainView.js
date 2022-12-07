import React, { useEffect, useState } from "react";
import Axios from "axios";
import { ModeToggle, StyledHeader, Wrapper } from "./MainView.styles";
import { Route, Routes } from "react-router-dom";
import DetailedView from "../DetailedView/DetailedView";
import ListView from "../ListView/ListView";

const MainView = () => {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];
  const [countries, setCountries] = useState(null);
  const [light, setLight] = useState(false);
  const [searchTerms, setSearchTerms] = useState("");

  const toggleLight = () => {
    setLight((prevState) => !prevState);
  };

  const handleRegionFilter = (selectOptions) => {
    if (!selectOptions) {
      return Axios.get("https://restcountries.com/v3.1/all").then((res) =>
        setCountries(res.data)
      );
    }
    const region = selectOptions.value;
    Axios.get(`https://restcountries.com/v3.1/region/${region}`).then((res) =>
      setCountries(res.data)
    );
  };

  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/all").then((res) =>
      setCountries(res.data)
    );
  }, []);

  return (
    <Wrapper light={light}>
      <StyledHeader light={light}>
        <h1>where in the world?</h1>
        <ModeToggle onClick={toggleLight}>
          {light ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </ModeToggle>
      </StyledHeader>
      <Routes>
        <Route
          path="/"
          element={
            <ListView
              light={light}
              options={options}
              handleRegionFilter={handleRegionFilter}
              countries={countries}
              searchTerms={searchTerms}
              setSearchTerms={setSearchTerms}
            />
          }
        />
        <Route path="/:id" element={<DetailedView light={light} />} />
      </Routes>
    </Wrapper>
  );
};

export default MainView;
