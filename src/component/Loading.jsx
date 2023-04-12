import React from 'react'

const Loading = () => {
  return (
    <div className="bg-black fixed top-0 h-screen w-screen z-50 flex flex-col justify-center items-center">
     <div
     className="font-semibold text-2xl flex items-center justify-center gap-3 animate-pulse">
    <p
     className="border-r-2 px-4 text-3xl">🐝</p>
    <span className="bg-yellow-500 rounded-lg px-2 text-black">TV</span>
    </div>
    </div>
  )
}

export default Loading