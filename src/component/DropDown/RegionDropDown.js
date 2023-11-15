import { useEffect, useState } from "react";
import "./RegionDropDown.css";
import axios from "axios";

const RegionDropDown = ({ setSearchRegion }) => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=region")
      .then((res) => {
        setRegions(res.data);
      });
  }, [regions]);
  return (
    <div className="container">
      {" "}
      <select
        className="select"
        onChange={(e) => setSearchRegion(e.target.value)}
      >
        <option value="">Select a Region</option>
        {regions
          .map((reg) => reg.region)
          .filter((reg, id, regions) => regions.indexOf(reg) === id)
          .map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
      </select>
    </div>
  );
};
export default RegionDropDown;
