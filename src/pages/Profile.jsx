import React from 'react'

import Navbar from "../components/Navbar/Navbar"
import { Box, Container, Paper, Typography } from '@mui/material'
import PokemonTable from '../components/PokemonTable/PokemonTable'

export default function Profile({pokemonData}) {
  const {name, sprites, id } = pokemonData
  console.log(pokemonData)
  return (
    <>
      <Navbar hideSearch/>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" alignItems="center" flexDirection="column" p={5}>
          <Typography variant='h5'>#{id}</Typography>
            <Box display="flex" justifyContent="center" width="100%">
              <Typography variant='h2'>{name}</Typography>
            </Box>
            <Box width="100%">
              <Box component="img" src={sprites.front_default} width="25%"></Box>
              <Box component="img" src={sprites.back_default} width="25%"></Box>
              <Box component="img" src={sprites.front_shiny} width="25%"></Box>
              <Box component="img" src={sprites.back_shiny} width="25%"></Box>
            </Box>
            <PokemonTable pokemonData={pokemonData}/>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
