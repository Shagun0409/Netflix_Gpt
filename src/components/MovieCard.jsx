
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 pr-3'>
      <div className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-xl bg-gray-800">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  )
}

export default MovieCard