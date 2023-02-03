import React, { useEffect, useState } from "react"

import NavBar from "../components/Navbar/Navbar"
import PokemonCard from "../components/PokemonCard/PokemonCard"

import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import axios from "axios"


export default function Home(){
    const [pokemons, setPokemons] = useState([]);

    //Requisição da API
    useEffect(() =>{
        getPokemons()
    }, [])

    function getPokemons(){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
        .then((response) =>{
            setPokemons(response.data.results)
        })
        .catch((error) =>{
            console.log(error)
        })

    }
    
    return(
        <div>   
            <NavBar />
            <Container maxWidth="false">                                              {/*Container = component pré pronto do material ui */}
                <Grid container>
                    {pokemons.map((pokemon, key) => 
                        <Grid item xs={3} key={key}>                                  {/*Grid = component pré pronto do material ui */}
                            <PokemonCard name={pokemon.name} url={pokemon.url}/>      {/*Passando props para o PokemonCard*/}
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    )
}