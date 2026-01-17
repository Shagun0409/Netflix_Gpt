import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { API_OPTIONS } from "../utils/constant";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  //fetch data from the movie db api and store it in redux store  
  
  return (
    <div> 
      <Header />
      <MainContainer />
      <SecondaryContainer />
{/* main content
      -Video background
      -Video title
      -Play button
      -More Info button
      -Movie rows

      Secondary content
      -Trending now row
      -Top rated row
    


*/}








    </div>
  )
}
export default Browse