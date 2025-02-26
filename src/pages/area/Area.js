import React from "react";
import { useState } from "react";
import {
  Typography,
  Card,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";

const Area = () => {
  const [ladoA, setLadoA] = useState("");
  const [ladoB, setLadoB] = useState("");
  const [ladoC, setLadoC] = useState("");
  const [selectedFigura, setSelectedFigura] = useState("");
  const [selectedOpcion, setSelectedOpcion] = useState("");
  const [resultado, setResultado] = useState("");

  const changeLadoA = (newLadoA) => {
    setLadoA(newLadoA);
  };

  const changeLadoB = (newLadoB) => {
    setLadoB(newLadoB);
  };

  const changeLadoC = (newLadoC) => {
    setLadoC(newLadoC);
  };

  const changeFigura = (newFigura) => {
    setSelectedFigura(newFigura);
  };

  const changeOpcion = (newOpcion) => {
    setSelectedOpcion(newOpcion);
  };

  const figuras = ["Cuadrado", "Rectangulo", "Triangulo"];

  const opciones = ["Area", "Perimetro"];

  const calcularArea = () => {
    if (
      (selectedFigura === "Cuadrado" || selectedFigura === "Rectangulo") &&
      selectedOpcion === "Area"
    ) {
      setResultado(parseFloat(ladoA) * parseFloat(ladoB));
    }
    if (
      (selectedFigura === "Cuadrado" || selectedFigura === "Rectangulo") &&
      selectedOpcion === "Perimetro"
    ) {
      setResultado(parseFloat(ladoA) * 2 + parseFloat(ladoB) * 2);
    }
    if (selectedFigura === "Triangulo" && selectedOpcion === "Area") {
      setResultado((parseFloat(ladoA) * parseFloat(ladoB)) / 2);
    }
    if (selectedFigura === "Triangulo" && selectedOpcion === "Perimetro") {
      setResultado(parseFloat(ladoA) + parseFloat(ladoB) + parseFloat(ladoC));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: "50%", padding: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Calculadora</Typography>
          <FormControl sx={{ marginTop: 2, width: "100%" }}>
            <TextField
              labelId="ladoA-label"
              onChange={(e) => changeLadoA(e.target.value)}
              label="Lado A"
              fullWidth
              margin="normal"
            />
            <TextField
              labelId="ladoB-label"
              onChange={(e) => changeLadoB(e.target.value)}
              label="Lado B"
              fullWidth
              margin="normal"
            />
            {selectedOpcion === "Perimetro" && selectedFigura === "Triangulo" && (
              <TextField
                labelId="ladoC-label"
                onChange={(e) => changeLadoC(e.target.value)}
                label="Lado C"
                fullWidth
                margin="normal"
              />
            )}
            <Select
              value={selectedFigura}
              onChange={(e) => changeFigura(e.target.value)}
              displayEmpty
              fullWidth
              margin="normal"
              sx={{marginTop: 2}}
            >
              <MenuItem value="" disabled>
                <em>Selecciona una figura</em>
              </MenuItem>
              {figuras.map((figura, index) => (
                <MenuItem key={index} value={figura}>
                  {figura}
                </MenuItem>
              ))}
            </Select>
            <Select
              value={selectedOpcion}
              onChange={(e) => changeOpcion(e.target.value)}
              displayEmpty
              fullWidth
              margin="normal"
              sx={{marginTop: 2}}
            >
              <MenuItem value="" disabled>
                <em>Selecciona una opción</em>
              </MenuItem>
              {opciones.map((figura, index) => (
                <MenuItem key={index} value={figura}>
                  {figura}
                </MenuItem>
              ))}
            </Select>
            <Box sx={{ marginTop: 2 }}>
              <Button onClick={calcularArea} variant="contained">
                Calcular
              </Button>
            </Box>
            {resultado && (
              <Typography variant="h5" sx={{ marginTop: 3 }}>
                El resultado es: {resultado}
              </Typography>
            )}
          </FormControl>
        </Box>
      </Card>
    </Box>
  );
};

export default Area;
