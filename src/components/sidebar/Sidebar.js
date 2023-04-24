import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SummarizeIcon from "@mui/icons-material/Summarize";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
        </Link>
        <p className="title">CATEGORY</p>
        <Link to="/orders" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <ProductionQuantityLimitsSharpIcon />
            <span>Products</span>
          </li>
        </Link>
        <Link to="/customers" style={{ textDecoration: "none" }}>
          <li>
            <Person2OutlinedIcon />
            <span>Customers</span>
          </li>
        </Link>
        {/* <Link to="/delivery" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
        </Link> */}
        <Link to="/finance" style={{ textDecoration: "none" }}>
          <li>
            <AccountBalanceIcon />
            <span>Finance</span>
          </li>
        </Link>
        {/* <Link to="/sales" style={{ textDecoration: "none" }}>
          <li>
            <SummarizeIcon />
            <span>Sales Report</span>
          </li>
        </Link> */}
        <Link to="/store" style={{ textDecoration: "none" }}>
          <li>
            <StorefrontIcon />
            <span>Store</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;
