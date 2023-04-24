import { Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { useState } from "react";
import "./earnings.scss";

//todo: to get present date and set the select box accordingly
const Earnings = () => {
  const [month, setMonth] = useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
const amount=34500

  return (
    // <div>subtracting expenses, interest, and taxes from revenue.</div>
    <div className="earningsContainer">
      <div className="top">
        <h3 className="subTitle">Earnings</h3>
        <FormControl fullWidth>
          <InputLabel id="month">Month</InputLabel>
          <Select
            labelId="month"
            id="month"
            value={month}
            label="Month"
            onChange={handleChange}
          >
            <MenuItem value="January">January</MenuItem>
            <MenuItem value="February">February</MenuItem>
            <MenuItem value="March">March</MenuItem>
          </Select>
        </FormControl>
      </div>
      <hr />
      <div>
        <san>${amount}</san>
      </div>
    </div>
  );
};

export default Earnings;
