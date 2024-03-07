import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { WSDataTableMPOS } from "../../lib/components/WSDataTableMPOS";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const columnData: GridColDef[] = [
  { field: "productName", headerName: "Product", width: 250 },
  { field: "productInr", headerName: "INR", width: 60 },
  { field: "productId", headerName: "Quantity", width: 80 },
];

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
  // args: {
  //   rows,
  //   columns,
  //   search: true,
  // },
  render: function Render() {
    //State Declaration
    const [tableData, setTableData] = useState({
      rows: rowData,
      columns: columnData,
    });

    // Handle Delete Record
    const deleteRecord = (id: string) => {
      console.log(
        "Check row data from storybook ---> delete record: rows:",
        rowData
      );
      const filteredData = rowData.filter((row: any) => {
        return row.id !== id;
      });
      console.log(
        "Check filtered record from mPOS table story book -->",
        filteredData
      );
      setTableData({ ...tableData, rows: filteredData });
    };

    // Push actions to the table column data
    columnData.push({
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params: any) => {
        return (
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => deleteRecord(params?.id)}
          />
        );
      },
      width: 80,
    });

    return (
      <WSDataTableMPOS
        rows={tableData.rows}
        columns={tableData.columns}
        search
      />
    );
  },
};
