import React from 'react'
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions, Typography, Box, Button } from "@mui/material";


const Modal = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const PeopleDialog = ({onOpen, onClose, people}) => {
        return (
            <Dialog open={onOpen} onClose={onClose}>
                <DialogTitle><Typography>Personas</Typography></DialogTitle>
                <DialogContent>
                    <Box>
                    <ul>
                        {people.map((person, index) => {
                            return (<li key={index}>{person}</li>)
                        })}
                    </ul>
                    </Box>
                </DialogContent>
                <DialogActions><Button onClick={onClose}>Cerrar</Button></DialogActions>
            </Dialog>
        )
    }

    const peopleData = [
        "Angel",
        "Alan",
        "Haziel",
    ]    


  return (
    <div>
      <Box><Button onClick={handleOpenDialog}><Typography>Haz Click</Typography></Button></Box>
      <PeopleDialog onOpen={openDialog} onClose={handleCloseDialog} people={peopleData} />
    </div>
  )
}

export default Modal
