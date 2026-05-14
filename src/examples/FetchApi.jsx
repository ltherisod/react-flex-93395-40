import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [characters, setCharacters]= useState([])

    useEffect(()=>{
        //1. pedir datos
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())//2. traduzco
        .then((data)=> setCharacters(data.results))//3. guardar la data
        .catch((error)=> console.log(error))//4. atrapamos el error
    },[])
    console.log(characters)
  return (
    <div>
        <h2>FetchApi</h2>
        {characters.map((pj)=> <p key={pj.id}>{pj.name}</p>)}
    </div>
  )
}

export default FetchApi