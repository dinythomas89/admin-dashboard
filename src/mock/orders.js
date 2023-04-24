export const orderColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.product}
    //     </div>
    //   );
    // },
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 130,
  },
  {
    field: "date",
    headerName: "Date",
    width: 80,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 80,
  },
  {
    field: "method",
    headerName: "Method",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const orderRows = [
  {
    id: 1112,
    product: "Canon Lens",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WKwkd1VaOAEpPjE4W8-vS5Pd75chBmcLKg&usqp=CAU",
    customer: "John Smith",
    date: "1 March",
    amount: 935,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 1222,
    product: "Logitech Headset",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9hy7iizV-WbD4USWKkJvb2dsGei6hdeKVA&usqp=CAU",
    customer: "Michel Doe",
    date: "1 March",
    amount: 1235,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2112,
    product: "Apple Airpods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV6Quf1e7Eu2ChUNe6ArLHxF46JeZB0TRJA&usqp=CAU",
    customer: "John Smith",
    date: "1 March",
    amount: 935,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2222,
    product: "Drone",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoedTBMta9g6ICxBnlitSSAQZgCNyVKKe6KA&usqp=CAU",
    customer: "Michel Doe",
    date: "1 March",
    amount: 1235,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2112,
    product: "Apple Airpods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV6Quf1e7Eu2ChUNe6ArLHxF46JeZB0TRJA&usqp=CAU",
    customer: "John Smith",
    date: "1 March",
    amount: 935,
    method: "Cash on Delivery",
    status: "Approved",
  },
];
