import "./SingleCountry";
import { useNavigate } from "react-router-dom";
const SingleCountry = ({ country }) => {
  const navigate = useNavigate();
  navigate("/");
  return (
    <div className="CCmain">
      <img src={country.flags.svg} alt="imag" />
      {/* <p>{country.flags.svg}</p> */}
      <p>{country.name.official}</p>
      <p>Populations : {country.population} </p>
      <p>Region : {country.region} </p>
      <p>Capital : {country.capital} </p>
    </div>
  );
};

export default SingleCountry;
