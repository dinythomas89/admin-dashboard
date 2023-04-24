import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./sales.scss";
import { Link } from "react-router-dom";

const Sales = () => {
  const value = 70;
  const totalSalesAmount = "$42k";
  const targetAmount = "$60k";
  return (
    <div className="salesContainer">
      <h3 className="subTitle">Total Sales</h3>
      <div className="progressBar">
        <CircularProgressbar value={value} text={`${value}%`} strokeWidth={5} />
      </div>
      <div className="descriptionBlock">
        <p className="description">
          Total Sales Amount: <span>{totalSalesAmount}</span>
        </p>
        <p className="description">
          Targeted Amount: <span>{targetAmount}</span>
        </p>
      </div>
      <Link className="link" to="/sales">
        View details
      </Link>
    </div>
  );
};

export default Sales;
