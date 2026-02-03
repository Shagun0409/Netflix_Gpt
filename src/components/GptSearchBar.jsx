import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang }  from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);

  // ✅ get logged-in user email
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
    const AI_ENABLED = userEmail === "shagun.sg2003@gmail.com";

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
    <div className='pt-20'>
      <form className=' bg-black w-1/2 mx-auto flex justify-center items-center grid-cols-12 rounded-2xl shadow-lg shadow-black/50'
      onSubmit={(e) => e.preventDefault()}
      
      >
        <input
          ref={searchText}
          className='p-4 m-4 w-3/4 rounded-lg text-black bg-white col-span-8' 
          type="text" placeholder={lang[langkey].placeholder} />
        <button className="bg-red-700 m-4 text-white px-4 py-2 rounded-lg col-span-4"
          onClick={handleGptSearchClick}
          type="submit">{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;