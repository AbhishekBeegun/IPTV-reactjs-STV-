import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router"
import { Player ,Hls, DefaultUi,DefaultControls, PipControl  } from "@vime/react"
const Live = () => {


  const location = useLocation()

  const [Url, setUrl] = useState();

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('tv'));
  if (items) {
   setUrl(items);
  }
  alert("Attan min 5-10 sec video la pu zwe li")
}, []);

  
  return (
    <div className="bg-black">   
      
      <Player>

      <Hls version="latest">
        <source data-src={Url} type="application/x-mpegURL" />
      </Hls>

      <DefaultUi noControls>
        {/* We setup the default controls and pass in any options. */}
        <DefaultControls hideOnMouseLeave activeDuration={2000} />
        <PipControl/>
      </DefaultUi>

      </Player>
    </div>
  )
}

export default Live