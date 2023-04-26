import React, {useEffect} from 'react'

import Navbar from "../components/Navbar/Navbar"
import { Box, Container, Paper, Typography, Divider, Chip } from '@mui/material'
import PokemonTable from '../components/PokemonTable/PokemonTable'
import { useNavigate } from 'react-router-dom'

export default function Profile({pokemonData}) {
  const {name, sprites, id, moves } = pokemonData || {};
  console.log(pokemonData)
  
  const navigate = useNavigate();

  useEffect(() => {
    if(!pokemonData){
      navigate("/")
  }
  }, []);

  if (!pokemonData) {
    return null;
  }


  return (
    <>
      <Navbar hideSearch/>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" alignItems="center" flexDirection="column" p={4}>
            <Typography variant='h5'>#{id}</Typography>
            <Box display="flex" justifyContent="center" width="100%" p={2}>
              <Typography variant='h2'>{name}</Typography>
            </Box>
            <Box width="100%" p={1}>
              <Box component="img" src={sprites.front_default} width="25%"></Box>
              <Box component="img" src={sprites.back_default} width="25%"></Box>
              <Box component="img" src={sprites.front_shiny} width="25%"></Box>
              <Box component="img" src={sprites.back_shiny} width="25%"></Box>
            </Box>
            <Box width="75%" p={1}>
              <PokemonTable pokemonData={pokemonData}/>
            </Box>
            <Box>
              <Divider sx={{margin: "50px 0 25px 0", fontSize: "18px"}}><strong>Moves</strong></Divider>
                <Box textAlign="center">
                  {moves.map((moveData, key) => (
                    <Chip key={key} sx={{m:"5px"}} label={moveData.move.name}/>
                  ))}
                </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
