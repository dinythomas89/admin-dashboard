import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "../../mock/orders";
import { Link } from "react-router-dom";
import "./orders.scss";
import Widget from "../../components/widgets/general/Widget";

const Orders = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/orders/{:id}" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="editButton">Edit</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="orderContainer">
      {/* Order details
      Shipping info
      product details
      billing info */}
      <div className="top">
        <Widget type="totalOrders" />
        <Widget type="delivered" />
        <Widget type="shippingInfo" />
      </div>
      <div className="bottom">
        <div className="top">
        <h3>Order Details</h3>
        <select name="select" id="select">
          <option value="day" selected="selected">
            Day
          </option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        </div>
        <div className="dataTable">
          <DataGrid
            rows={orderRows}
            columns={orderColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
