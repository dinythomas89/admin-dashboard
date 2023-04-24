import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="logo" src="/logo.png" alt="" />
      </Link>
      <div className="search">
        <input type="search" placeholder="Search.." />
        <SearchIcon />
      </div>
      <div className="items">
        <ul>
          <li>
            <DarkModeIcon />
          </li>
          <li>
            <NotificationsIcon />
          </li>
          <li>
            <SettingsIcon />
          </li>
          <li>
            <PersonIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
