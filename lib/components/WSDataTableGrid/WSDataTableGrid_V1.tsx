import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./WSDataTableGrid.css";

interface WSDataTableGridProps {
  columns: GridColDef[];
  rows: any[];
  className: string;
}

export function WSDataTableGrid_V1(props: WSDataTableGridProps) {
  return (
    <div
      style={{ height: 400, width: "100%" }}
      className={`grid-interface ${props.className || ""}`}
    >
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
