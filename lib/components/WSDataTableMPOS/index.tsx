// Import necessary dependencies
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { FormControl, InputLabel } from "@mui/material";
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
    productName: "DISH WASHER - Medium",
    productInr: "₹50.00",
    productId: " #PRD454",
    action: "DLDH0007",
  },
  {
    id: 3,
    productName: "TERMERIC POWDER - 100g",
    productInr: "₹75.00",
    productId: " #PRD455",
    action: "DLDH0008",
  },
];

interface WSDataTableMPOSProps {
  rows: any;
  columns: any;
  className: string;
  search: boolean;
}

// Create the main component
export const WSDataTableMPOS = ({
  className,
  rows,
  columns,
  search,
}: WSDataTableMPOSProps) => {
  const [tableDataRow, setTableDataRow] = useState(rows || rowDatas);
  const [searchDatas, setSearchDatas] = useState({
    values: "",
    icon: true,
  });

  const requestSearch = (searchVal: string) => {
    setSearchDatas({ ...searchDatas, icon: false, values: searchVal });
    const filteredRows = rowDatas.filter((row) => {
      return row.productName.toLowerCase().includes(searchVal.toLowerCase());
    });
    setTableDataRow(filteredRows);
  };

  const cancelSearch = () => {
    setSearchDatas({ ...searchDatas, icon: true, values: "" });
    setTableDataRow(rows || rowDatas);
  };

  return (
    <div
      style={{ height: 500, width: "100%" }}
      className={`mpos-interface ${className || ""}`}
    >
      {search && (
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="search"
            type="text"
            value={searchDatas.values}
            endAdornment={
              <InputAdornment position="end">
                {searchDatas.icon ? (
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={cancelSearch} edge="end">
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            }
            label="Search"
            onChange={(e) => {
              requestSearch(e.target.value);
            }}
          />
        </FormControl>
      )}
      <DataGrid
        rows={tableDataRow}
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
  );
};
