import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import {typeHandler} from "../../utils"

export default function PokemonCard({name, image, types}) {

  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="200" image={image} title="pokémon"/>
        <CardContent >
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler(types)}   
            </Typography>
          </Box>
        </CardContent>
      </Card>
  );
}
