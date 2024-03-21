import * as React from "react";
import { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { WSSearchableInput } from "@ramsct005/ws-pos-granular-components"; // This component is from granular component library
import "./WSDataTableGrid.css";

interface WSDataTableGridProps {
  products: Product[];
  className: string;
  columns: {
    field: string;
    headerName: string;
    width: number;
    editable: boolean;
  }[];
  searchableColumn: string;
  search: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  quantity: number;
}

export function WSDataTableGrid_V2({
  className,
  products,
  columns,
  searchableColumn = "name",
  search,
}: WSDataTableGridProps) {
  console.log("GRIDV2");
  const [searchDatas, setSearchDatas] = useState({
    values: "",
    icon: true,
  });
  const initialRow: Product[] = products;

  // const [rows, setRows] = useState(initialRow);
  const [tableDataRow, setTableDataRow] = useState<Product[]>(initialRow);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // const handleNameChange = (id: number, newValue: any) => {
  //   setSelectedProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === id
  //         ? { ...product, [searchableColumn]: newValue }
  //         : product
  //     )
  //   );
  // };

  const filterProducts = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Reset filter if searchTerm is empty
      return;
    }
    const filtered = products.filter((product: any) =>
      product[searchableColumn].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const getNameAutocompleteOptions = (params: any) => {
    const { value = "" } = params;
    filterProducts(value);
    return filteredProducts.map((product: any) => product[searchableColumn]);
  };

  // const createEditCellProps = (col: string) => {
  //   return (params) =>
  //     col === searchableColumn ? (
  //       <GridEditCellProps
  //         renderCellEditor: ({ value }) => (
  //           <Autocomplete
  //             value={value}
  //             onChange={(_event, newValue) => handleNameChange(params.id, newValue)}
  //             options={getNameAutocompleteOptions}
  //             renderInput={(params) => <TextField {...params} label={col} />}
  //           />
  //         )
  //       />
  //     ) : undefined;
  // };

  const CustomEditComponent = (props: GridRenderEditCellParams) => {
    console.log("props", props);

    return <input value={props.value} />;
  };

  const generateColumns = (columns: GridColDef[]) => {
    console.log("searchableColumn", searchableColumn);
    console.log("columns", columns);
    return columns.map(
      (col: GridColDef) =>
        ({
          field: col.field,
          headerName: col.headerName,
          width: col.width,
          editable: col.field === searchableColumn,
          renderEditCell: (params: GridRenderEditCellParams) => (
            <CustomEditComponent {...params} />
          ),
        } as GridColDef)
    );
  };

  const definedColumns = generateColumns(columns);

  const requestSearch = (searchVal: string) => {
    setSearchDatas({ ...searchDatas, icon: false, values: searchVal });
    const filteredRows = initialRow.filter((row: any) => {
      return row.name.toLowerCase().includes(searchVal.toLowerCase());
    });
    setTableDataRow(filteredRows);
  };

  const cancelSearch = () => {
    setSearchDatas({ ...searchDatas, icon: true, values: "" });
    setTableDataRow(initialRow);
  };

  return (
    <div
      style={{ height: 400, width: "100%" }}
      className={`grid-interface ${className || ""}`}
    >
      {search && (
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
          lable="Search"
          onChange={(e: any) => {
            requestSearch(e.target.value);
          }}
        />
      )}
      <DataGrid
        rows={tableDataRow}
        columns={definedColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
