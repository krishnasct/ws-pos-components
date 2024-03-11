import React, { useEffect, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { WSDataTableMPOS } from "../../lib/components/WSDataTableMPOS";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// const columnData: GridColDef[] = [
//   { field: "productName", headerName: "Product", width: 250 },
//   { field: "productInr", headerName: "INR", width: 60 },
//   { field: "productId", headerName: "Quantity", width: 80 },
//   {
//     field: "action",
//     headerName: "Action",
//     sortable: false,
//     renderCell: (params: any) => {
//       return (
//         <Button
//           variant="outlined"
//           startIcon={<DeleteIcon />}
//           onClick={() => deleteRecord(params?.id)}
//         />
//       );
//     },
//     width: 80,
//   },
// ];

const rowData = [
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

const meta: any = {
  title: "WS Components/WSDataTableMPOS",
  component: WSDataTableMPOS,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WSDataTableMPOS>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WSDataTableMPOS_Grid: Story = {
  name: "WS Data Table (mPOS)",
  args: {
    rows: rowData,
    columns: [
      { field: "productName", headerName: "Product", width: 250 },
      { field: "productInr", headerName: "INR", width: 60 },
      { field: "productId", headerName: "Quantity", width: 80 },
    ],
    search: true,
  },
  render: function Render(args: any) {
    console.log("Check args from MPOS data table --->", args);
    //State Declaration
    const [tableData, setTableData] = useState({
      rows: "",
    });

    useEffect(() => setTableData({ ...tableData, rows: args.rows }), []);

    // Handle Delete Record
    const deleteRecord = (id: string) => {
      console.log(
        "Check state data from storybook ---> delete record: rows:",
        tableData.rows
      );
      let filteredData: any = rowData
        // .map((rows, index) => ({ ...rows, index }))    // // Push actions to the table column data
        .filter((row: any) => {
          return row.id !== id;
        });
      console.log(
        "Check filtered record from mPOS table story book -->",
        filteredData.index,
        "tableData.rows:",
        tableData.rows
      );
      setTableData({
        ...tableData,
        rows: filteredData,
      });
    };

    return (
      <WSDataTableMPOS
        rows={tableData.rows}
        columns={[
          { field: "productName", headerName: "Product", width: 250 },
          { field: "productInr", headerName: "INR", width: 60 },
          { field: "productId", headerName: "Quantity", width: 80 },
          {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params: any) => {
              return (
                <Button
                  className="action-btn"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteRecord(params?.id)}
                />
              );
            },
            width: 80,
          },
        ]}
        search
      />
    );
  },
};
