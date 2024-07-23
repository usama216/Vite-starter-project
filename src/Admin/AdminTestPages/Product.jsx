import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const Product = () => {
  return (
    <>
    <Box sx={{display:"flex", justifyContent:"space-between", alignContent:"center"}}>
      <Typography sx={{fontSize:"5rem", fontWeight:600}}> All Products</Typography>
      <Box>
      <Button endIcon={<AddIcon/>} variant='outlined' >add Products</Button>
      </Box>
    </Box>
    </>
  )
}

export default Product