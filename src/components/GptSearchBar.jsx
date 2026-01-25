import React, { use } from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'  
const GptSearchBar = () => {
const langkey=useSelector((store) => store.config.lang);


  return (
    <div className='pt-20'>
      <form className=' bg-black w-1/2 mx-auto flex justify-center items-center grid-cols-12 rounded-2xl shadow-lg shadow-black/50'>
        <input
          className='p-4 m-4 w-3/4 rounded-lg text-black bg-white col-span-8' 
          type="text" placeholder={lang[langkey].placeholder} />
        <button className="bg-red-700 m-4 text-white px-4 py-2 rounded-lg col-span-4" type="submit">{ lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;