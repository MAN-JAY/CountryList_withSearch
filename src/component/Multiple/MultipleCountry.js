import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";
import "./MultipleCountry.css";
import InfiniteScroll from "react-infinite-scroll-component";

const MultipleCountry = ({ searchText, searchRegion, setCountry }) => {
  const [CountryList, setCountryList] = useState([]);
  const [ICountryList, setICountryList] = useState([]);
  const i = useRef(1);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountryList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  useEffect(() => {
    setICountryList(CountryList?.slice(0, i.current * 20));
  }, [CountryList, i.current]);

  const fetchMoreData = () => {
    // Simulate loading delay, replace with your actual data loading logic
    setTimeout(() => {
      setICountryList((prevList) => [
        ...prevList,
        ...CountryList.slice(i.current * 20, i.current * 20 + 20),
      ]);
      i.current++;
    }, 300); // Simulated delay, replace with your actual delay
  };

  return (
        <InfiniteScroll
          dataLength={ICountryList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="MCmain">
          {ICountryList
            .filter((country) =>
              searchRegion ? country.region === searchRegion : country
            )
            .filter((country) =>
              country.name?.official
                .toLowerCase()
                .includes(searchText.toLowerCase())
            )
            .map((country, index) => (
              <CountryCard key={index} country={country} setCountry={setCountry} />
            ))}
            </div>
        </InfiniteScroll>
  );
};

export default MultipleCountry;
