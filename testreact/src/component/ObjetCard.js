import * as React from 'react';
import  {Box,Divider,Stack,Grid,Card,CardActionArea,Typography,CardContent, IconButton}  from '@mui/material';
import { DateRange,BarChart} from '@mui/icons-material';

export default function ObjetCard(){
    return (
        <Box   position='static' marginLeft={30} display={'flex'} >
            
            <Grid container my={4} rowSpacing={1} columnSpacing={1}>
               
                <Grid item xs>
                    <Box  p={2}>
                        <Card sx={{ maxWidth: 345,bgcolor:'ghostwhite',borderRadius:'20px' }}> 
                            <CardContent>
                            <Stack  direction='row' spacing={6}>
                            <Box width={'30px'}>
                                <IconButton><DateRange/></IconButton>
                            </Box>
                            <Box>    
                                <Typography variant="body2" color="text.secondary">
                                 
                                 Date
                                </Typography>
                            
                                <Typography gutterBottom variant="h5"  component="div">
                                10 NOV 2023
                                </Typography>
                            </Box>    
                            </Stack>  
                                
                            </CardContent>
                        </Card>
                    
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box  p={2}>
                    <Card sx={{ maxWidth: 345 ,bgcolor:'ghostwhite',borderRadius:'20px'}}>  
                        <CardContent>
                        <Stack  direction='row' spacing={6}>
                        <Box width={'30px'}>
                            <IconButton><BarChart/></IconButton>
                        </Box>
                        <Box>    
                            <Typography variant="body2" color="text.secondary">
                             
                            Total de reservation
                            </Typography>
                        
                            <Typography gutterBottom variant="h5"  component="div">
                            250
                            </Typography>
                        </Box>    
                        </Stack>  
                        </CardContent>
                    </Card>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box p={2}>
                        <Card sx={{ maxWidth: 345,bgcolor:'burlywood',borderRadius:'20px' }}>  
                        <CardContent>
                            
                            <Typography variant="body2"  color="text.secondary">
                                Chiffres d affaires
                            </Typography>
                           
                            <Typography gutterBottom variant="h5" component="div">
                                55.50$
                            </Typography>
                        </CardContent>
                        </Card>
                    </Box>
                </Grid>
              
            </Grid>
       </Box>
    )
}
