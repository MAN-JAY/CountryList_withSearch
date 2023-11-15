import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";
import "./MultipleCountry.css";
import { useNavigate } from "react-router-dom";

const MultipleCountry = ({ searchText, searchRegion, setCountry }) => {
  const [CountryList, setCountryList] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountryList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching house names:", error);
      });
  }, [searchRegion, CountryList]);
  const navigate = useNavigate();
  navigate("/");
  return (
    <>
      {/* <div className="All">MultipleCountry</div> */}
      <div className="MCmain">
        {CountryList.filter((country) =>
          searchRegion ? country.region === searchRegion : country
        )
          .filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(searchText.toLowerCase())
          )
          .map((country, i) => (
            <CountryCard country={country} setCountry={setCountry} />
            // <p id={i}>{country?.name?.common}</p>
          ))}
      </div>
    </>
  );
};
export default MultipleCountry;
