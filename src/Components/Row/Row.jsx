import React, { useEffect, useState } from 'react'
import Axios from "../../Helpers/Axios"
import "./Row.css"

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const[movies,setMovies]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";
    console.log(base_url)
    useEffect(()=>{
        const fetchData=async()=>{
            const request=await Axios.get(fetchUrl)
            setMovies(request.data.results);
            return request 
        }
        fetchData()
    },[fetchUrl])
    console.log(movies)
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-post'>
            
              {movies.map(
                (movie) =>
                  ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                    <img
                      key={movie.id}
                      className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt=""
                    />
                  )
              )}
            
        </div>
    
    </div>
  )
}

export default Row