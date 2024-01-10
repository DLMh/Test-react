import  {Box,Grid,Card,Typography,CardContent}  from '@mui/material';

import BasicTable from './BasicTable';
export default function Table(){
  return (
    <Box  position='static' marginLeft={30} display={'flex'}>
          
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
              <Grid item xs={8}>
                  <Box  position='static' p={2}    >
                    <Card sx={{ Width: 'auto',height:'auto',bgcolor:'ghostwhite',borderRadius:'20px' }}> 
                        
                        <CardContent>
                            <Typography variant="h5" color='black'>
                            Listes des artisans
                            </Typography>
                            <Typography variant="body1">
                                Apercu des atelier avec localisations et participants
                            </Typography>
                            <Box marginTop={4} >
                                <BasicTable/>
                            </Box>
                        </CardContent>
                        </Card>
                  </Box>
              </Grid>
              <Grid item xs={4}>
                  <Box  p={2}>
                  <Card sx={{ Width: 'auto',height:'auto',bgcolor:'ghostwhite',borderRadius:'20px' }}> 
                    <CardContent>
                      <Typography variant="p" color='burlywood'>
                      Listes des artisans
                      </Typography>
                      <Typography variant="body1">
                          Apercu des atelier avec localisations et participants
                      </Typography>
                      
                    </CardContent>
                  </Card>
                  </Box>
                  <Box  p={2} >
                  <Card sx={{ Width: 'auto',height:'auto',bgcolor:'ghostwhite',borderRadius:'20px' }}> 
                    <CardContent>
                      <Typography variant="p" color='burlywood'>
                      Listes des artisans
                      </Typography>
                      <Typography variant="body1">
                          Apercu des atelier avec localisations et participants
                      </Typography>
                      
                    </CardContent>
                  </Card>
                  </Box>
              </Grid>
        </Grid>
    </Box>
  )
}
