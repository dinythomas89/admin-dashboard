import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./metrics.scss";
import { data } from "../../../mock/graphData";

const Metrics = () => {
  return (
    <div className="metricsContainer">
      <div className="top">
        <h3 className="subTitle">Analytics Report</h3>
        <select name="select" id="select">
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month" selected="selected">
            Month
          </option>
          <option value="year">Year</option>
        </select>
      </div>
      <div>
      <ResponsiveContainer width={650} height={250}>
          <LineChart width="100%" height="100%" data={data}>
            <CartesianGrid strokeDasharray="1 1"  />
            <XAxis dataKey="name" fontSize={10} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Metrics;
