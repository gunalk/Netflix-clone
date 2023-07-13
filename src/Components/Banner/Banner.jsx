import React,{useState,useEffect} from 'react'
import Axios from "../../Helpers/Axios"
import Request from '../../Helpers/Request'
import "./Banner.css"
const Banner = () => {
    const [movie,setMovie]=useState([])
  function truncate(string,n){
    return string?.length > n ? string.substr(0,n-1)+"...":string
  }
    useEffect(()=>{
        const fetchData=async()=>{
            const request=await Axios.get(Request.fetchNetflixOriginals);
            console.log(request)
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            )
            return request;
        }
        fetchData()
    },[])
    console.log("movie",movie)

  return (
    <header className='Banner' 
    style={{
        // backgroundImage: `url('https://i.imgur.com/g0jXdZC.jpg')`,
        // backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}><div className='banner-contents'>
        <h1 className='banner-title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner-buttons'>
          <button className='banner-button'> Play</button>
          <button className='banner-button'> My List</button>
        </div>
        <h1 className='banner-des'>
{
     truncate(movie?.overview,150)
}
        </h1>


        </div>
        <div className='banner-fade'/>
            </header>
  )
}

export default Banner