import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <section className="w-full bg-transparent px-3 sm:px-6 lg:px-10 py-6 sm:py-10">
      <div className="space-y-8 sm:space-y-10">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </section>
  );
};
export default GptMovieSuggestions;