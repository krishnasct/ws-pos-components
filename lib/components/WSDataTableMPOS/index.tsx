// Import necessary dependencies
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import "./WSDataTableMPOS.css";

const columnDatas = [
  { field: "productName", headerName: "Product", width: 250 },
  { field: "productInr", headerName: "INR", width: 60 },
  { field: "productId", headerName: "Quantity", width: 80 },
  { field: "action", headerName: "Action", width: 30 },
  // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rowDatas = [
  {
    id: 1,
    productName: "GREY POWER - Sneaker casual",
    productInr: "₹318.00",
    productId: " #PRD453",
    action: "DLDH0006",
  },
  {
    id: 2,
    productName: "GREY POWER - Sneaker casual",
    productInr: "₹318.00",
    productId: " #PRD453",
    action: "DLDH0006",
  },
  {
    id: 3,
    productName: "GREY POWER - Sneaker casual",
    productInr: "₹318.00",
    productId: " #PRD453",
    action: "DLDH0006",
  },
];

interface WSDataTableMPOSProps {
  rows: any;
  columns: any;
  search: boolean;
}

// Create the main component
export const WSDataTableMPOS = ({
  rows,
  columns,
  search,
}: WSDataTableMPOSProps) => {
  return (
    <>
      {/* Data Grid */}
      <div style={{ height: 500, width: "100%" }}>
        {search && (
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            fullWidth
            // onChange={(e) => console.log(e)}
          />
        )}
        <DataGrid
          rows={rows || rowDatas}
          columns={columns || columnDatas}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          // rowHeight={38}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
};
