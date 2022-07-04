import axios from "axios"
const url = "https://pokeapi.co/api/v2/pokemon"

export const getPokemons = async () => {
    const data = await axios.get(`${url}`)
    return data
}
export const get = async (id) => {
    const data = await axios.get(`${id}`)
    return data
}
export const getPokemon = async (id) => {
    const data = await axios.get(`${url}/${id}`)
    return data
}