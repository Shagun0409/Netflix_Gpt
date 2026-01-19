const VideoTitle = ({ title, overview }) => {
  return (
    <div className="
      absolute inset-0
      w-full aspect-video
      pt-[18%]
      px-6 md:px-24
      text-white
      bg-gradient-to-r from-black via-black/70 to-transparent
      z-20
      pointer-events-none
    ">
      <h1 className="text-2xl md:text-6xl font-bold">
        {title}
      </h1>

      <p className="hidden md:inline-block py-6 text-lg w-1/2">
        {overview}
      </p>

      <div className="my-4 md:m-0 flex gap-4 pointer-events-auto">
        <button className="
          bg-white text-black
          font-semibold
          py-2.5 md:py-3
          px-6 md:px-12
          text-lg md:text-xl
          rounded-md
          shadow-lg
          hover:bg-gray-200
          active:scale-95
          transition-all duration-200
          cursor-pointer
        ">
          ▶ Play
        </button>

        <button className="
          hidden md:inline-flex
          items-center
          bg-gray-800/70 text-white
          font-medium
          py-3
          px-12
          text-xl
          rounded-md
          backdrop-blur-sm
          hover:bg-gray-700/80
          active:scale-95
          transition-all duration-200
          cursor-pointer
        ">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
