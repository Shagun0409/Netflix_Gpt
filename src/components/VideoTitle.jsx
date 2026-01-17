import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return <div className='w-screen aspect-video pt-[10%] px-24 absolute  text-white bg-linear-to-r from-black'>
    <h1 className='text-4xl font-bold'>{title}</h1>
    <p className='py-6 text-sm w-1/4'>{overview}</p>
    <div className=''>
      <button className='bg-white text-black px-6 py-2 rounded-md mr-4 hover:bg-gray-400 transition-colors'>▶ Play</button>
      <button className='bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors'>ℹ More Info</button>
    </div>
  </div>
};
  export default VideoTitle;