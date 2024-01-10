import * as React from 'react';
import { IconButton,AppBar,Toolbar,Drawer,Typography,Stack,Box, TextField, InputAdornment} from '@mui/material';
import {Menu, Search} from '@mui/icons-material' 
import { useState } from "react";



export default function Navbar() {
  const [isDrawerOpen,setIsDrawerOpen]=useState(false)
  return (
    <AppBar  color="transparent" position='static'>
    <Toolbar>
    <Box>
    <IconButton size="large" edge='start'  color="inherit" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
    <Menu/>
    </IconButton>
      <Drawer color='warning' anchor="left"open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
       <Box p={2} width='250px' textAlign={'center'} role='presentation'>
         <Typography variant="h6" component={'div'}>
             Safe Travels
         </Typography>
       </Box>
      </Drawer>
    </Box>
       
       <Typography variant='h5' color='burlywood' component='div' sx={{ flexGrow: 1,marginLeft:30}}>
       <Box>
       <Typography variant='body2' color='grey' component='div' sx={{ flexGrow: 1}}>
          Hi Safe Travels
       </Typography>
       </Box>
          Bienvenue sur votre dashboard
       </Typography>
       <Stack direction='row' spacing={2}>
           <form>
              <Box bgcolor='ghostwhite'>
              
               
                <TextField
                  placeholder="Search..."
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                      <Search/>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box> 
           </form>
           
       </Stack>
    </Toolbar>
    </AppBar>
  );
}