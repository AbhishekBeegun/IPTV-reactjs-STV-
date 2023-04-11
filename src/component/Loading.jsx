import React from 'react'
import Loadingani from "../assets/load.webp"

const Loading = () => {
  return (
    <div className="bg-black fixed top-0 h-screen w-screen z-50 flex flex-col justify-center items-center">
     <img className="animate-pulse" 
     src={Loadingani} alt="TV-BOX" />
    </div>
  )
}

export default Loading