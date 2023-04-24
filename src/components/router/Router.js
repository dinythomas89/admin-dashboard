import { Route, Routes } from "react-router-dom";
import "./router.scss";
import Home from "../../pages/home/Home";
import { Sales } from "../../pages/sales/Sales";
import Orders from "../../pages/orders/Orders";
import Products from "../../pages/products/Products";
import Customers from "../../pages/customers/Customers";
import Delivery from "../../pages/delivery/Delivery";
import Finance from "../../pages/finance/Finance";
import Store from "../../pages/store/Store";

const Router = () => {
  return (
    <div className="routerContainer">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          {/* <Route path="/delivery" element={<Delivery />} /> */}
          <Route path="/finance" element={<Finance />} />
          {/* <Route path="/sales" element={<Sales />} /> */}
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
