import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from "./navbar";
import { Bienvenido } from "./pestañas/Bienvenido";
import { Estudiante } from "./pestañas/Estudiante";
import { Pokemons } from "./pestañas/Pokemons";
import { Pokemon } from "./pestañas/Pokemon";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  const [id, setId] = useState(800)
  const [pokemon, setPokemon] = useState({

  });

  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon/800")
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      })
      return data.data
    }
    get()
    }, []);


  const obtenerInformacion = async (id) => {
    console.log(id)
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      });      console.log(data.data)
    let a = id + 1;
    setId(a)
  }

  const pokemonReducir = async (id) => {
    if(id<0){
      return
    }
    else{
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,

      });      console.log(data.data)
      console.log(data.data.abilities)
    let a = id - 1;
    setId(a)
    }
  }
  
    return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bienvenido />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/191542" element={<Estudiante />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;