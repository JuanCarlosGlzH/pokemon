import React, { useEffect, useState } from 'react'
import { getPokemons } from '../servicios'
import {useNavigate} from 'react-router-dom';

export const Bienvenido = () => {

    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const resultado = await getPokemons();
            setCount(resultado.data.count)
        }
        getData()
    }, [])

    return (
        <div className=' items-center justify-center'>

            <div className=" text-center  ">
                <h5 className="mb-2 bg-yellow-400 text-3xl font-bold  ">
                    Bienvenido a la página de pokemones
                </h5>    
            </div>
 </div>
    )
}