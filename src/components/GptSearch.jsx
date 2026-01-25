import React from 'react'
import GptSearchBar from './GptSearchBar' 
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-full h-full">
      <img src={BG_URL} alt="Background Image"  />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;