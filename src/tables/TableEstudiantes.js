import React from 'react'
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const TableEstudiantes = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const data = [
        {
          id: 1, 
          nombre: "Angel",
          apellido: "Velazquez",
          escuela: "UTC",
        },
        {
          id: 2,
          nombre: "Alan",
          apellido: "Zarate",
          escuela: "UTC",
        },
        {
          id: 3,
          nombre: "Haziel",
          apellido: "Torres",
          escuela: "TEC",
        },
      ];
      setRows(data);
    }, []);
  
    const columns = [
      {
        field: "nombre",
        headerName: "Nombre del Alumno",
        flex: 0.3,
        renderHeader: () => <Typography>Nombre</Typography>,
        renderCell: (params) => <Typography>{params.row.nombre}</Typography>,
      },
      {
        field: "apellido",
        headerName: "Nombre del Alumno",
        flex: 0.3,
        renderHeader: () => <Typography>Apellido</Typography>,
        renderCell: (params) => <Typography>{params.row.apellido}</Typography>,
      },
      {
        field: "escuela",
        headerName: "Nombre del Alumno",
        flex: 0.3,
        renderHeader: () => <Typography>Escuela</Typography>,
        renderCell: (params) => <Typography>{params.row.escuela}</Typography>,
      },
    ];
  
    return (
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } }
        }}
        rowsPerPageOptions={[5, 10, 20]}
        slotProps={{
          pagination: {
            showFirstButton: true,
            showLastButton: true,
          },
        }}
        getRowHeight={() => "auto"}
      />
    );
  };

export default TableEstudiantes
