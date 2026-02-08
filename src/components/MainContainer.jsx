
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
   // Wait until movies are loaded
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const {original_title, overview,id} = mainMovie;

 return (
    <div className="relative w-full bg-black pt-[56%] sm:pt-[50%] md:pt-0">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}
export default MainContainer;