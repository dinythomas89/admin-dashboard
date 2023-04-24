import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "sales":
      data = {
        title: "Sales",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: "$456.56",
        desc: "1.15 higher than last week",
      };
      break;
    case "expense":
      data = {
        title: "Expense",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: "$246.56",
        desc: "0.15 higher than last week",
      };
      break;
    case "earnings":
      data = {
        title: "Sales",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: "$456.56",
        desc: "0.89 lower than last week",
      };
      break;
    case "totalOrders":
      data = {
        title: "Total Orders",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: 566785,
        desc: "This week's sale",
      };
      break;
    case "delivered":
      data = {
        title: "Delivered",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: 466789,
        desc: "Total items that are been delivered",
      };
      break;
    case "shippingInfo":
      data = {
        title: "Shipping Info",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
        amount: 3356,
        desc: "Currently shipping",
      };
      break;

    default:
      break;
  }
console.log(data.title)
  return (
    <div className="widgetContainer">
      <div className="top">
        <span className="subTitle">{data.title}</span>
        <span>{data.icon}</span>
      </div>
      <p>{data.amount}</p>
      <p>
        <span>icon</span>
        {data.desc}
      </p>
    </div>
  );
};

export default Widget;
