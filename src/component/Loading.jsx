import React from 'react'
import Loadingani from "../assets/load.webp"

const Loading = () => {
  return (
    <div className="bg-black fixed top-0 h-screen w-screen z-50 flex flex-col justify-center items-center">
     <div
     className="font-semibold text-lg flex items-center justify-center gap-2">
    <p
     className="border-r-2 px-4">BEEGUN</p>
    <span className="bg-red-600 rounded-lg px-2">TV</span>
    </div>
    </div>
  )
}

export default Loading