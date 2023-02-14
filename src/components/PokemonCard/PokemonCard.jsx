import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { Link } from "react-router-dom"

export default function PokemonCard({name, image, types}) {
    
  function typeHandler(){
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }
    else{
      return types[0].type.name
    }
  }

  return (
    <Link to="/teste" style={{textDecoration: "none"}}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="200" image={image} title="pokémon"/>
        <CardContent >
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler()}   
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
