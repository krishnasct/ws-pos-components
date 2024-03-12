// Import necessary dependencies
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { FormControl, InputLabel } from "@mui/material";
import { WSSearchableInput } from "@ramsct005/ws-pos-granular-components"; // This component is from granular component library
import "./WSDataTableMPOS.css";

interface WSDataTableMPOSProps {
  rows: any;
  columns: any;
  className?: string;
  // actions: any;
  search?: boolean;
  searchInputLable: string;
}

export const WSDataTableMPOS = ({
  className,
  rows,
  columns,
  // actions,
  search,
  searchInputLable,
}: WSDataTableMPOSProps) => {
  console.log("Check row datas from mPOS table component --->", rows);

  const [tableDataRow, setTableDataRow] = useState(rows);
  const [searchDatas, setSearchDatas] = useState({
    values: "",
    icon: true,
  });

  useEffect(() => setTableDataRow(rows), [rows]);

  const requestSearch = (searchVal: string) => {
    setSearchDatas({ ...searchDatas, icon: false, values: searchVal });
    const filteredRows = rows.filter((row: any) => {
      return row.productName.toLowerCase().includes(searchVal.toLowerCase());
    });
    setTableDataRow(filteredRows);
  };

  const cancelSearch = () => {
    setSearchDatas({ ...searchDatas, icon: true, values: "" });
    setTableDataRow(rows);
  };

  return (
    <div
      style={{ height: 500, width: "100%" }}
      className={`mpos-interface ${className || ""}`}
    >
      {search && (
        <>
          {/* <FormControl
            sx={{ m: 1, width: "100%" }}
            className="grid-search-comp"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Search
            </InputLabel>
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
          </FormControl> */}
          <WSSearchableInput
            id="product-search-granular"
            htmlFor="product-search-granular"
            className="grid-search-comp"
            sx={{ m: 1, width: "100%" }}
            variant="outlined"
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
            lable={searchInputLable}
            onChange={(e: any) => {
              requestSearch(e.target.value);
            }}
          />
        </>
      )}
      <DataGrid
        rows={tableDataRow}
        columns={columns}
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
