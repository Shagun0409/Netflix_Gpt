const VideoTitle = ({ title, overview }) => {
  return (
    <div className="
      absolute inset-0
      w-full aspect-video
      pt-[12%] sm:pt-[16%] md:pt-[20%]
      px-4 sm:px-8 md:px-16 lg:px-24
      text-white
      bg-gradient-to-b from-black/20 via-black/50 to-black
      z-20
      pointer-events-none
      flex flex-col justify-start
    ">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full sm:max-w-4xl drop-shadow-lg">
        {title}
      </h1>

      <p className="hidden md:block py-4 md:py-6 text-sm md:text-lg lg:text-xl w-full md:w-3/4 lg:w-1/2 text-gray-200 drop-shadow-md line-clamp-2 md:line-clamp-3">
        {overview}
      </p>

      <div className="mt-4 md:mt-6 flex gap-2 sm:gap-3 md:gap-4 pointer-events-auto flex-wrap">
        <button className="
          bg-white hover:bg-gray-100 text-black
          font-bold
          py-2 sm:py-2.5 md:py-3
          px-4 sm:px-6 md:px-10 lg:px-12
          text-sm sm:text-base md:text-lg
          rounded-md
          shadow-2xl
          active:scale-95
          transition-all duration-200
          cursor-pointer
          flex items-center gap-2
        ">
          <span>▶</span>
          <span>Play</span>
        </button>

        <button className="
          hidden sm:inline-flex
          items-center gap-2
          bg-gray-600/80 hover:bg-gray-700/80 text-white
          font-semibold
          py-2 md:py-3 lg:py-3
          px-4 sm:px-6 md:px-8 lg:px-12
          text-sm md:text-base lg:text-lg
          rounded-md
          backdrop-blur-sm
          shadow-lg
          active:scale-95
          transition-all duration-200
          cursor-pointer
        ">
          <span>ⓘ</span>
          <span className="hidden md:inline">More Info</span>
          <span className="md:hidden">Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
