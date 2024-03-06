import type { Meta, StoryObj } from "@storybook/react";

import { WSDataTableMPOS } from "../../lib/components/WSDataTableMPOS";

const columns = [
  { field: "productName", headerName: "Product", width: 250 },
  { field: "productInr", headerName: "INR", width: 100 },
  { field: "productId", headerName: "Quantity", width: 100 },
  { field: "action", headerName: "Action", width: 100 },
  // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
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
    rows,
    columns,
    search: true,
  },
};
