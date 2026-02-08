
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
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  
  return (
    <div className="min-h-screen bg-black w-full">
      <Header />
      {showGptSearch ? <GptSearch /> : 
        <main className="pt-14 sm:pt-16 md:pt-20">
          <MainContainer />
          <SecondaryContainer />
        </main>
      }
    </div>
  )


}
export default Browse