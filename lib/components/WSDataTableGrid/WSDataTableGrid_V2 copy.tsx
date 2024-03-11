import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import "./WSDataTableGrid.css";

interface WSDataTableGridProps {
  products: Product[];
  columns: { field: string; headerName: string; width: number }[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  quantity: number;
}

interface NameCellEditorProps {
  value: string;
  field: string;
  id: number;
  params: any;
}



export function WSDataTableGrid_V2({ products, columns}: WSDataTableGridProps) {

  const [rows, setRows] = React.useState<Product[]>(products); // Initialize with provided products
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const filteredProducts = React.useMemo(() => {
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleCellChange = (params: any) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[params.id] = { ...newRows[params.id], ...params.value }; // Update row at specific index
      return newRows;
    });
  };

  const handleProductNameChange = (id: number, newValue: string) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[id] = { ...newRows[id], name: newValue }; // Update product name in specific row
      return newRows;
    });
    const selectedIndex = filteredProducts.findIndex((product) => product.id === id);
    if (selectedIndex > -1) {
      setSelectedProduct(filteredProducts[selectedIndex]); // Update selected product if matched in filtered list
    } else {
      setSelectedProduct(null); // Clear selected product if not found in filtered list
    }
  };

  const addEmptyRow = () => {
    setRows((prevRows) => [...prevRows, { id: prevRows.length + 1, name: '', price: 0, category: '', stock: 0, quantity: 1 }]);
  };
const NameCellEditor = React.memo(({ value, field, id, ...params }: NameCellEditorProps) => 
(
    field === 'name' ? ( 
      
      <TextField
        value={value}
        onChange={(event) => handleProductNameChange(id, event.target.value)}
        fullWidth
        autoFocus={id === 0} // Optional: Autofocus first row
      />
    ) : (
      <div>{value}</div> // Display default value for other columns
    )
  ));


  
  return (
    <div>
      <DataGrid
        rows={filteredProducts}
        columns={columns}
        processRowUpdate={handleCellChange}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // Use slots for cell customization
        slots={{
          cell: (params) => <NameCellEditor {...params}/>
        }}
        
      />
      <button onClick={addEmptyRow}>Add Product Row</button>
      {selectedProduct && (
        <div>
          <h2>Selected Product Details</h2>
          <p>Name: {selectedProduct.name}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Stock: {selectedProduct.stock}</p>
          {/* ... display other product details */}
        </div>
      )}
    </div>
  );
}
