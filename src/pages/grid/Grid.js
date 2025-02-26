import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress
} from "@mui/material";

const StudentsDialog = ({ onOpen, onClose, estudiante }) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [escuela, setEscuela] = useState('')

  const opciones = [
    {
      id: 1,
      nombre: 'UTC',
      disponible: true
    },
    {
      id: 2,
      nombre: 'TEC',
      disponible: true
    },
    {
      id: 3,
      nombre: 'VIZCAYA',
      disponible: false
    }
  ]

  useEffect(() => {
      setNombre(estudiante.nombre || '');
      setApellido(estudiante.apellido || '');
      setEscuela(estudiante.escuela || '');
  }, [estudiante]);

  return (
    <Dialog open={onOpen} onClose={onClose}>
      <DialogTitle>
        <Typography>Estudiante</Typography>
      </DialogTitle>
      <DialogContent>
      <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}>
        <TextField label='Nombre' value={nombre} onChange={e => setNombre(e.target.value)}/>
        <TextField label='Apellido' value={apellido} onChange={e => setApellido(e.target.value)}/>
        <TextField label='Escuela' value={escuela} onChange={e => setEscuela(e.target.value)}/>
        <FormControl>
        <InputLabel id='escuela-label'>Otra Escuela</InputLabel>
        <Select labelId='escuela-label' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <MenuItem value=''><em>Selecciona la escuela</em></MenuItem>
          <MenuItem>
            {opciones.filter(item => item.disponible !== false).map(item => (
              <MenuItem key={item.id}>{item.nombre}</MenuItem>
            ))}
          </MenuItem>
        </Select>
        </FormControl>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

const Grid = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [estudiante, setEstudiante] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenStudentDialog = (estudiante) => {
    setOpenDialog(true);
    setEstudiante(estudiante);
  };

  const handleReset = () => {
    setIsLoading(true);
    // Simula un proceso asíncrono
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleCloseStudentDialog = () => {
    setOpenDialog(false);
  };

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
      headerName: "Apellido",
      flex: 0.3,
      renderHeader: () => <Typography>Apellido</Typography>,
      renderCell: (params) => <Typography>{params.row.apellido}</Typography>,
    },
    {
      field: "escuela",
      headerName: "Escuela",
      flex: 0.3,
      renderHeader: () => <Typography>Escuela</Typography>,
      renderCell: (params) => <Typography>{params.row.escuela}</Typography>,
    },
    {
      field: "acciones",
      headerName: "Acciones",
      flex: 0.3,
      renderHeader: () => <Typography>Acciones</Typography>,
      renderCell: (params) => (
        <Button onClick={() => handleOpenStudentDialog(params.row)}>
          Data Personal
        </Button>
      ),
    },
  ];

  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
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
      <StudentsDialog onOpen={openDialog} onClose={handleCloseStudentDialog} estudiante={estudiante}/>
      <Button 
      onClick={handleReset} 
      variant="contained" 
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Resetear'}
    </Button>
    </div>
  );
};

export default Grid;
