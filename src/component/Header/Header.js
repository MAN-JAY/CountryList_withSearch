import "./Header.css";
import Search from "../Search/Search";
import RegionDropDown from "../DropDown/RegionDropDown";
const Header = ({ setSearchText, setSearchRegion }) => {
  return (
    <div className="hdDiv">
      <Search setSearchText={setSearchText} />
      <RegionDropDown setSearchRegion={setSearchRegion} />
    </div>
  );
};
export default Header;
