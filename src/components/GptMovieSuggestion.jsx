import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <section className="w-full bg-gradient-to-b from-black/40 via-black to-black px-3 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="space-y-10 sm:space-y-12 md:space-y-16 max-w-7xl mx-auto">
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