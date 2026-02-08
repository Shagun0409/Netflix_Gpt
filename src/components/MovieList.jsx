
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {

  return (
    <div className='px-2 sm:px-4 md:px-6 py-4 md:py-6'>
      <h2 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 text-white font-bold mb-2'>{title}</h2>
      <div className="overflow-x-auto scrollbar-hide -mx-2 px-2">
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {movies && movies.map(movie => movie?.poster_path && (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList