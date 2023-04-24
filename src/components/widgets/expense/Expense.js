import { Link } from "react-router-dom";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";
import "./expense.scss";

const data = [
  {
    name: "marketing",
    value: 3456,
  },
  {
    name: "employee benefits",
    value: 2500,
  },
  {
    name: "store",
    value: 1980,
  },
  {
    name: "travel",
    value: 900,
  },
  {
    name: "others",
    value: 2200,
  },
];

const Expense = () => {
  return (
    <div className="expenseContainer">
      <h3 className="subTitle">Expense</h3>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="value" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B37B95" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#B37B95" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#B37B95"
              fillOpacity={1}
              fill="url(#value)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <Link className="link" to="/sales">
        View details
      </Link>
    </div>
  );
};

export default Expense;
