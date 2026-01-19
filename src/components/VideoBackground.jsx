import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen overflow-hidden">
      <iframe
        className="
          w-full aspect-video
          scale-150
          origin-center
          -translate-y-12 md:-translate-y-20
        "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      {/* Click-blocking overlay */}
      <div className="absolute inset-0 bg-transparent z-10"></div>
    </div>
  );
};

export default VideoBackground;
