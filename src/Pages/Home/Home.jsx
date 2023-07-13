import React from 'react'
import "./Home.css"
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'
import Row from '../../Components/Row/Row'
import Request from '../../Helpers/Request'
const Home = () => {
  return (
    <div><Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINALS"
     fetchUrl={Request.fetchNetflixOriginals}
     isLargeRow
    />
     <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  )
}

export default Home