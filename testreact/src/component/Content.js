import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Content() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Item>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
            <CardContent className='card2'>
                
                <Typography variant="body2" color="text.secondary">
                    Date
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    10 NOV 2023
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent className='card2'>
                
                <Typography variant="body2" color="text.secondary">
                    Total de reservation
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    250
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item >
            <Card  sx={{ maxWidth: 345 }}>
            <CardActionArea>
            
                <CardContent className='card1'>
                
                <Typography variant="body2" color="text.secondary">
                    Chiffres d'affaires
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    55,50$
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Item>
        </Grid>
      </Grid>
    </Box>
  );
}