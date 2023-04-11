import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router"
import 'vidstack/styles/base.css';

import { MediaOutlet, MediaPlayer } from '@vidstack/react';
const Live = () => {


  const location = useLocation()

  const [Url, setUrl] = useState();

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('tv'));
  if (items) {
   setUrl(items);
  }
  alert("Attan 5-10 sec video la pu LOAD")
}, []);

  
  return (
    <div className="bg-black">   
      
      <MediaPlayer autoplay
      src={{
        src: `${Url}`,
        type: 'application/x-mpegurl',
      }}

  controls
>
  {/* ^ remove `controls` attribute if you're designing a custom UI */}
  <MediaOutlet />
</MediaPlayer>

    </div>
  )
}

export default Live