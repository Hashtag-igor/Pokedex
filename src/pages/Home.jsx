import React, { useEffect, useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import PokemonCard from "../components/PokemonCard/PokemonCard"

import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import axios from "axios"


export default function Home(){
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
      getPokemons();
    }, []);
  

    function getPokemons(){
      var endpoints = [];
      for (var i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };
  
    //Para buscar os Pokemons ao digitar o nome deles no input do navbar
    function pokemonFilter(name){
      var filteredPokemons = [];
      if (name === "") {
        getPokemons();                                 //Chama a função acima, que pega as informações de 152 pokemons através da API..
      }
      for (var i in pokemons) {                        //Vai percorrer o array da state "pokemons"..
        if (pokemons[i].data.name.includes(name)) {    //Se um item do array state "pokemons" tiver alguma letra parecida com o que foi digitado no input..
            filteredPokemons.push(pokemons[i]);        //Será adicionado ao array "filteredPokemons" esse item do array do state "pokemons" que tem alguma letra parecida com a que foi digitada no input do navbar..
        }
      }
      setPokemons(filteredPokemons);                   //Será passado o item que fooi salvo anteriormente no array "filteredPokemons", para o meu array state "pokemons". Isso fará com que, quando eu digitar o nome no input, apareça apenas os cards dos pokemons que tenham alguma letra similar com a que eu digitei..
    };
  
    return (
      <div>
        <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">                                              {/*Container = component pré pronto do material ui */}
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? (<p style={{margin: "20px auto", fontWeight: "500", letterSpacing: "2px"}}>Loading...</p>) : (pokemons.map((pokemon, key) => 
                        <Grid item xs={2} key={key}>                                  {/*Grid = component pré pronto do material ui */}
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types="" />      {/*Passando props para o PokemonCard*/}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}