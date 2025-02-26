import React from "react";
import { useState } from "react";
import { Typography, Card, TextField, Button} from "@mui/material";


const Bored = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState([]);

  const changeName = (newName) => {
    setName(newName);
  };

  const fetchName = async () => {
    try {
      const response = await fetch(`https://api.agify.io?name=${name}`);
      const data = await response.json();
      setAge(data.age);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <TextField onChange={(e) => changeName(e.target.value)} />
      <Button onClick={fetchName} variant="contained">Enviar</Button>
      <Typography variant="h5">edad: {age}</Typography>
    </Card>
  );
};

export default Bored;
