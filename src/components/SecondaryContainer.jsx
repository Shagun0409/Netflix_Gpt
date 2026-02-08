
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  return (
    <section className='w-full bg-gradient-to-b from-black/60 via-black to-black pb-10 md:pb-16'>
      <div className="relative z-20 mt-0 md:-mt-40 lg:-mt-52 pt-4 sm:pt-8 md:pt-0">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </section>
  )
}

export default SecondaryContainer