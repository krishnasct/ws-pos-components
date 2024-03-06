import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './WSDataGrid.css'

interface WSDataGridProps {
    columns: GridColDef[];
    rows: any[];
}

export function WSDataGrid(props: WSDataGridProps) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}