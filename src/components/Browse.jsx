
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { API_OPTIONS } from "../utils/constant";
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () => {

  const showGptSearch  = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  //fetch data from the movie db api and store it in redux store  
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div> 
      <Header />
      {showGptSearch ? <GptSearch /> :  <><MainContainer />
      <SecondaryContainer />
      </>}
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