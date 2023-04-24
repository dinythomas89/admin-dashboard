import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./progress.scss";

const data = [
  {
    name: "February",
    mobile: 4000,
    desktop: 2400,
    amt: 2400,
  },
  {
    name: "March",
    mobile: 4000,
    desktop: 2400,
    amt: 2400,
  },
  {
    name: "April",
    mobile: 4000,
    desktop: 2400,
    amt: 2400,
  },
];
export const Progress = () => {
  return (
    <div className="progressContainer">
      <h4 className="subTitle">Daily visit insights</h4>
      <ResponsiveContainer width={200} height={250}>
        <BarChart width="100%" height="100%" data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top"/>
          <Bar dataKey="mobile" fill="#8884d8" />
          <Bar dataKey="desktop" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
