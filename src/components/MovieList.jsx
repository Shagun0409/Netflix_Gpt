
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {

  return (
    <div className='px-2 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8'>
      <h2 className='text-base sm:text-xl md:text-2xl lg:text-3xl py-3 text-white font-bold mb-4 tracking-wide uppercase text-opacity-90 hover:text-opacity-100 transition-opacity'>{title}</h2>
      <div className="overflow-x-auto scrollbar-hide -mx-2 px-2">
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {movies && movies.map(movie => movie?.poster_path && (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList