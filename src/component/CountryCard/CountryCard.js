import "./CountryCard.css";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country, setCountry }) => {
  const navigate = useNavigate();
  const eventHandler = () => {
    setCountry(country);
    navigate(`/:${country.ccn3}`);
  };
  return (
    <div className="CCmain" id={country.ccn3} onClick={eventHandler}>
      <img src={country.flags.svg} alt="imag" />
      {/* <p>{country.flags.svg}</p> */}
      <p>{country.name.official}</p>
      <p>Populations : {country.population} </p>
      <p>Region : {country.region} </p>
      <p>Capital : {country.capital} </p>
    </div>
  );
};

export default CountryCard;
