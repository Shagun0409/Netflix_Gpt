
import { useRef } from 'react';
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'  
import client from '../utils/openai';
const GptSearchBar = () => {
const langkey=useSelector((store) => store.config.lang);

  
  const SeacrhText=useRef(null);
  
  const handleGptSerchClick =async () => {

    console.log("GPT Search Clicked:", SeacrhText.current.value);
    //logic to handle gpt search click can be added here



const response = await client.responses.create({
  model: 'gpt-5.2',
  instructions: 'You are a coding assistant that talks like a pirate',
  input: SeacrhText.current.value,
});
console.log(response.output_text);


  }

  return (
    <div className='pt-20'>
      <form className=' bg-black w-1/2 mx-auto flex justify-center items-center grid-cols-12 rounded-2xl shadow-lg shadow-black/50'
      onSubmit={(e) => e.preventDefault()}
      
      >
        <input
          ref={SeacrhText}
          className='p-4 m-4 w-3/4 rounded-lg text-black bg-white col-span-8' 
          type="text" placeholder={lang[langkey].placeholder} />
        <button className="bg-red-700 m-4 text-white px-4 py-2 rounded-lg col-span-4"
          onClick={handleGptSerchClick}
          type="submit">{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;