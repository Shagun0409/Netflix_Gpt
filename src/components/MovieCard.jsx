
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 group'>
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 rounded-lg flex items-end">
          <div className="w-full p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs sm:text-sm transition-colors duration-200">
              ▶ Play
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard