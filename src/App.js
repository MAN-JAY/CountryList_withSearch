import MultipleCountry from "./component/Multiple/MultipleCountry";
import SingleCountry from "./component/Single/SingleCountry";
import "../src/styles.css";
import { useState } from "react";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const [country, setCountry] = useState({});

  return (
    <div className="App">
      <h1 style={{ "justify-content": "center" }}>Where in the world</h1>
      <Header setSearchText={setSearchText} setSearchRegion={setSearchRegion} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MultipleCountry
                searchText={searchText}
                searchRegion={searchRegion}
                setCountry={setCountry}
              />
            }
          />
          <Route
            path="/:country?.ccn3"
            element={<SingleCountry country={country} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
