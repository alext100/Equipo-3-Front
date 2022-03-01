import React, { useState, useRef, useMemo } from "react";
import {
  ButtonCompany,
  TableContainer,
  ButtonContainer,
  AllCompaniesContainer,
  Title,
} from "./style";
import { AgGridReact } from "ag-grid-react";
import { Layout } from "../../components/Layout/Layout";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Link from "next/link";
import axios from 'axios'

const AllCompanies = () => {
  const gridRef = useRef(null);
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

  const checkboxSelection = (params) => {
    return params.node.group === true;
  };

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.Company} ${node.Website}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  /* 
   const [rowData, setRowData] = useState();
   useEffect(() => {
    axios.get("https://www.xxxxx")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []); */

  const gridStyle = useMemo(() => ({ height: "550px", width: "803px" }), []);
  const suppressRowHoverHighlight = true;
  const columnHoverHighlight = true;
  const pagination = true;
  const paginationPageSize = 10;

  const [columnDefs] = useState([
    {
      field: "Company",
      sortable: true,
      filter: true,
      resizable: true,
      checkboxSelection: true,
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
    <Layout>
      <AllCompaniesContainer>
        <Title>All Companies</Title>
        <TableContainer>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              rowSelection="multiple"
              pagination={pagination}
              paginationPageSize={paginationPageSize}
              suppressRowHoverHighlight={suppressRowHoverHighlight}
              columnHoverHighlight={columnHoverHighlight}
              groupSelectsChildren={true}
            ></AgGridReact>
          </div>
        </TableContainer>
        <ButtonContainer>
          <ButtonCompany variant="contained">
            <Link href="/company-form">
              <a>
                <li>Add Company</li>
              </a>
            </Link>
          </ButtonCompany>
          <ButtonCompany>
            <Link href="/flight-form">
              <a>
                <li>Add Flight</li>
              </a>
            </Link>
          </ButtonCompany>
          <ButtonCompany variant="contained">Fetch Companies</ButtonCompany>
          <ButtonCompany variant="contained" onClick={onButtonClick}>
            Delete Company
          </ButtonCompany>
        </ButtonContainer>
      </AllCompaniesContainer>
    </Layout>
  );
};

export default AllCompanies;
