import { Box, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const Category = () => {
  return (
    <>
    <Box sx={{display:"flex", justifyContent:"space-between", alignContent:"center"}}>
      <Typography sx={{fontSize:"5rem", fontWeight:600}}> All Category</Typography>
      <Box>
      <Button endIcon={<AddIcon/>} variant='outlined' >add cotegories</Button>
      </Box>
    </Box>
    </>
  )
}

export default Category