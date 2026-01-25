
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {

 
  return (
    <div className='p-6 bg-transparent' >
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide   ">
  <div className="flex">


           {movies && movies.map(movie=>movie?.poster_path && <MovieCard key={movie?.id} posterPath={movie?.poster_path} />)}


        </div>
      </div>
     
    </div>
  )
}

export default MovieList