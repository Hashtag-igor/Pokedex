import React, { useEffect, useState } from "react"

import Navbar from "../components/Navbar/Navbar"
import PokemonCard from "../components/PokemonCard/PokemonCard"
import Loading from "../components/Loading/Loading"

import { Container } from "@mui/system"
import { Box, Grid } from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Home({setPokemonData}){
    const [pokemons, setPokemons] = useState([]);
  
    const navigate = useNavigate()

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
  
    function pokemonPickHandler(pokemonData){
      setPokemonData(pokemonData)
      navigate("/profile")
      //(pokemonData) do parametro está substituindo o "pokemon.data" que foi passado do map para a função "pokemonPickHandler";
      //Esse valor do pokemonData foi passado para setPokemonData de volta para o "route", que vai ser passado o valor para o "Profile.jsx" e usado lá para fazer o card expecifico do pokemon clicado;
      //Após clicar no pokemon escolhido, automaticamente abrirá a /profile com as informações do pokemon que foi clicado selecionadas;
    }

    return (
      <div>
        <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">                                              {/*Container = component pré pronto do material ui */}
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Loading /> : (pokemons.map((pokemon, key) => 
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={key}>                                  {/*Grid = component pré pronto do material ui */} {/*xs = extremamente pequeno | sm = pequeno | md = medio | lg = largo || São usados para tamanhos de responsividade da tela */}
                          <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />      {/*Passando props para o PokemonCard*/}
                          </Box>  
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}