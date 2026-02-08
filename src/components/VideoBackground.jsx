import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-gray-900">
      <iframe
        className="
          absolute inset-0
          w-full h-full
          scale-125 sm:scale-150 md:scale-150
          origin-center
        "
        src={
          trailerVideo?.key
            ? "https://www.youtube.com/embed/" +
              trailerVideo.key +
              "?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=" +
              trailerVideo.key
            : ""
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
      />

      {/* Click-blocking overlay with gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
    </div>
  );
};

export default VideoBackground;
