import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang }  from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);

  // get logged-in user email
  const userEmail = useSelector((store) => store?.user?.email);

  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;

    console.log("Search clicked:", query);

    // ✅ AI enabled only for you
    const AI_ENABLED = userEmail === "shagun.sg20034@gmail.com";

    // ==========================
    // 🤖 AI FLOW (UNCHANGED LOGIC)
    // ==========================
    if (AI_ENABLED) {
      console.log("Using GPT (AI enabled)");

      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        query +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies =
        gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie) =>
        searchMovieTMDB(movie)
      );

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );
    }

    // ==========================
    // 🎬 FALLBACK FLOW (TMDB ONLY)
    // ==========================
    else {
      console.log("Using TMDB fallback (AI disabled)");

      const tmdbResults = await searchMovieTMDB(query);

      dispatch(
        addGptMovieResult({
          movieNames: [query],
          movieResults: [tmdbResults],
        })
      );
    }
  };

  return (
    <div className='w-full pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 pb-8'>
      <form
        className='max-w-3xl mx-auto bg-black/60 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-red-600/50 transition-colors duration-300'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'>
          <input
            ref={searchText}
            className='flex-1 w-full px-4 py-3 sm:py-4 rounded-lg text-gray-900 bg-white placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 font-medium'
            type="text"
            placeholder={lang[langkey].placeholder}
            maxLength="100"
          />
          <button
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            onClick={handleGptSearchClick}
            type="submit"
          >
            {lang[langkey].search}
          </button>
        </div>
      </form>
    </div>
  )
}

export default GptSearchBar;