import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return <div className='pt-36 px-8 space-y-6'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className=''>
      <button className='bg-gray-700 text-black px-6 py-2 rounded-md mr-4'>▶️Play</button>
      <button className='bg-gray-700 text-white px-6 py-2 rounded-md'>More Info</button>
    </div>
  </div>
};
  export default VideoTitle;