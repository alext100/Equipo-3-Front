import React, { useState, useRef, useMemo } from "react";
import { TableContainer } from "./style";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const AllCompanies = () => {
  const [rowData] = useState([
    {
      Company: "EgyptAir",
      Website: "egyptair.com",
      "Total flights": 350,
      "Total seats": 100,
    },
    {
      Company: "Royal Air Maroc",
      Website: "royalairmaroc.com",
      "Total flights": 320,
      "Total seats": 180,
    },
    {
      Company: "Air Algérie",
      Website: "airalgerie.dz",
      "Total flights": 720,
      "Total seats": 130,
    },
    {
      Company: "Kenya Airways",
      Website: "kenya-airways.com",
      "Total flights": 740,
      "Total seats": 120,
    },
    {
      Company: "EgyptAir",
      Website: "egyptair.com",
      "Total flights": 350,
      "Total seats": 100,
    },
    {
      Company: "Royal Air Maroc",
      Website: "royalairmaroc.com",
      "Total flights": 320,
      "Total seats": 180,
    },
    {
      Company: "Air Algérie",
      Website: "airalgerie.dz",
      "Total flights": 720,
      "Total seats": 130,
    },
    {
      Company: "Kenya Airways",
      Website: "kenya-airways.com",
      "Total flights": 740,
      "Total seats": 120,
    },
    {
      Company: "EgyptAir",
      Website: "egyptair.com",
      "Total flights": 350,
      "Total seats": 100,
    },
    {
      Company: "Royal Air Maroc",
      Website: "royalairmaroc.com",
      "Total flights": 320,
      "Total seats": 180,
    },
    {
      Company: "Air Algérie",
      Website: "airalgerie.dz",
      "Total flights": 720,
      "Total seats": 130,
    },
    {
      Company: "Kenya Airways",
      Website: "kenya-airways.com",
      "Total flights": 740,
      "Total seats": 120,
    },
    {
      Company: "EgyptAir",
      Website: "egyptair.com",
      "Total flights": 350,
      "Total seats": 100,
    },
    {
      Company: "Royal Air Maroc",
      Website: "royalairmaroc.com",
      "Total flights": 320,
      "Total seats": 180,
    },
    {
      Company: "Air Algérie",
      Website: "airalgerie.dz",
      "Total flights": 720,
      "Total seats": 130,
    },
    {
      Company: "Kenya Airways",
      Website: "kenya-airways.com",
      "Total flights": 740,
      "Total seats": 120,
    },
  ]);
  const gridRef = useRef(null);
  const gridStyle = useMemo(() => ({ height: "550px", width: "830px" }), []);
  const pagination = true;
  const paginationPageSize = 10;

  const [columnDefs] = useState([
    {
      field: "Company",
      sortable: true,
      filter: true,
      resizable: true,
    },
    { field: "Website", sortable: true, filter: true, resizable: true },
    {
      field: "Total flights",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
    {
      field: "Total seats",
      sortable: true,
      filter: true,
      resizable: true,
      editable: true,
    },
  ]);

  return (
    <TableContainer>
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple"
          pagination={pagination}
          paginationPageSize={paginationPageSize}
        ></AgGridReact>
      </div>
    </TableContainer>
  );
};

export default AllCompanies;
