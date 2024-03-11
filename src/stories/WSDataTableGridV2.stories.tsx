import type { Meta, StoryObj } from "@storybook/react";
import { WSDataTableGrid_V2 } from "../../lib/components/WSDataTableGrid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130, editable: true },
  { field: "price", headerName: "Price", type: "number", width: 110 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "stock", headerName: "Stock", type: "number", width: 110 },
  { field: "quantity", headerName: "Quantity", type: "number", width: 110, editable: true },
];

/* const rows = [
  {
    "id": 1,
    "name": "Coffee",
    "price": 2.50,
    "category": "Beverages",
    "stock": 100,
    "quantity": 1
  },
  {
    "id": 2,
    "name": "Croissant",
    "price": 1.75,
    "category": "Pastries",
    "stock": 50,
    "quantity": 1
  },
  {
    "id": 3,
    "name": "Sandwich",
    "price": 5.00,
    "category": "Food",
    "stock": 75,
    "quantity": 1
  },
  {
    "id": 4,
    "name": "Water Bottle",
    "price": 1.00,
    "category": "Beverages",
    "stock": 200,
    "quantity": 1
  },
  {
    "id": 5,
    "name": "Chocolate Bar",
    "price": 2.25,
    "category": "Snacks",
    "stock": 120,
    "quantity": 1
  },
  {
    "id": 6,
    "name": "Salad",
    "price": 6.50,
    "category": "Food",
    "stock": 30,
    "quantity": 1
  },
  {
    "id": 7,
    "name": "Tea",
    "price": 2.00,
    "category": "Beverages",
    "stock": 90,
    "quantity": 1
  },
  {
    "id": 8,
    "name": "Muffin",
    "price": 2.75,
    "category": "Pastries",
    "stock": 40,
    "quantity": 1
  },
  {
    "id": 9,
    "name": "Burger",
    "price": 7.50,
    "category": "Food",
    "stock": 60,
    "quantity": 1
  },
  {
    "id": 10,
    "name": "Orange Juice",
    "price": 3.25,
    "category": "Beverages",
    "stock": 80,
    "quantity": 1
  },
  {
    "id": 11,
    "name": "Cookies",
    "price": 2.50,
    "category": "Snacks",
    "stock": 100,
    "quantity": 1
  },
  {
    "id": 12,
    "name": "Chicken Wrap",
    "price": 5.75,
    "category": "Food",
    "stock": 45,
    "quantity": 1
  },
  {
    "id": 13,
    "name": "Latte",
    "price": 3.00,
    "category": "Beverages",
    "stock": 70,
    "quantity": 1
  },
  {
    "id": 14,
    "name": "Cinnamon Roll",
    "price": 3.50,
    "category": "Pastries",
    "stock": 35,
    "quantity": 1
  },
  {
    "id": 15,
    "name": "Pizza Slice",
    "price": 4.50,
    "category": "Food",
    "stock": 55,
    "quantity": 1
  },
  {
    "id": 16,
    "name": "Soda Can",
    "price": 1.50,
    "category": "Beverages",
    "stock": 150,
    "quantity": 1
  },
  {
    "id": 17,
    "name": "Bagel",
    "price": 2.00,
    "category": "Pastries",
    "stock": 25,
    "quantity": 1
  },
  {
    "id": 18,
    "name": "Fruit Salad",
    "price": 4.00,
    "category": "Food",
    "stock": 65,
    "quantity": 1
  },
  {
    "id": 19,
    "name": "Iced Tea",
    "price": 2.75,
    "category": "Beverages",
    "stock": 85,
    "quantity": 1
  },
  {
    "id": 20,
    "name": "Granola Bar",
    "price": 1.75,
    "category": "Snacks",
    "stock": 110,
    "quantity": 1
  }
]; */

const rows: any = [
  
]


const meta: any = {
  title: "WS Components/WSDataTableGrid",
  component: WSDataTableGrid_V2,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WSDataTableGrid_V2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WSDataTableGrid_Grid_v2: Story = {
  name: "WS Data Table (GridV2)",
  args: {
    rows,
    products: rows,
    columns,
  },
};

