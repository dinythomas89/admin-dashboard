import { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import { rows } from "../../../mock/latestTransaction";
import "./transactions.scss";

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="transactionsContainer">
      <h3 className="subTitle">Latest Transactions</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              {/* <TableCell className="tableCell">Payment Method</TableCell> */}
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableCell">{row.id}</TableCell>
                  <TableCell className="tableCell">
                    {/* <img className="image" src={row.img} alt="" /> */}
                    <div>{row.product}</div>
                  </TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">{row.date}</TableCell>
                  <TableCell className="tableCell">{row.amount}</TableCell>
                  {/* <TableCell className="tableCell">{row.method}</TableCell> */}
                  <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </div>
  );
};

export default Transactions;
