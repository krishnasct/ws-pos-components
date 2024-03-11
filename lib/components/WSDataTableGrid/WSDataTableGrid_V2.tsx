import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRenderEditCellParams,
} from "@mui/x-data-grid";
import { Autocomplete, TextField } from "@mui/material";
import "./WSDataTableGrid.css";
import { useState } from "react";

interface WSDataTableGridProps {
  products: Product[];
  columns: {
    field: string;
    headerName: string;
    width: number;
    editable: boolean;
  }[];
  searchableColumn: string;
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
  products,
  columns,
  searchableColumn = "name",
}: WSDataTableGridProps) {
  console.log("GRIDV2");
  const initialRow: Product[] = [
    {
      id: 1,
      name: "",
      price: 0,
      category: "",
      stock: 0,
      quantity: 0,
    },
  ];

  // const [rows, setRows] = useState(initialRow);
  const [selectedProducts, setSelectedProducts] =
    useState<Product[]>(initialRow);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleNameChange = (id: number, newValue: any) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, [searchableColumn]: newValue }
          : product
      )
    );
  };

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

  return (
    <div>
      <DataGrid
        rows={selectedProducts}
        columns={definedColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
