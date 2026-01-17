import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant';

const VideoBackground = ({movieId}) => {

  const [trailerId, setTrailerId] = useState(null);
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/83533/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    // console.log("Movie Video:", json.results[91].site);  
    const filterData = json.results.filter(video => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("Trailer:", trailer);
    setTrailerId(trailer.key);

  };
  useEffect(() => {
    getMovieVideo();
 },[]);
  return (
    <div><iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${trailerId}?si=TP4EqPWKXCC6lmuT`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin">
    </iframe>
    </div>
  )
}

export default VideoBackground