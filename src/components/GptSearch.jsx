import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Background image + dark overlay */}
      <div className="fixed inset-0 -z-10">
        <img className="w-full h-full object-cover" src={BG_URL} alt="background" />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};
export default GPTSearch;