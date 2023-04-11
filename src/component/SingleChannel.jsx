import React from 'react'
import { useState } from "react";
import { useEffect } from "react";


const SingleChannel = ({id,IMG ,name,live,Now}) => {

  const [tv, settv] = useState();

useEffect(() => {
  localStorage.setItem('tv', JSON.stringify(tv));
}, [tv]);

  function handleClick(live){
    settv(live)
  }

  return (
    <a href={`/AbhishekBeegun🙈`} type="button"
    onClick={() => handleClick(live)} 
    className="flex flex-col relative rounded-t-lg w-[150px] lg:w-[300px] shadow-lg hover:scale-110 ease-in-out transition-all">
    <div className="w-full h-[100px] lg:h-[200px]">
        <img className="w-full h-full rounded-t-lg object-cover" 
        src={IMG} />
    </div>
    <div className="flex flex-col bg-gray-900 items-center text-white rounded-b-lg px-4 gap-2 py-2">
        <h1 className="text-xs font-semibold ">{name}</h1>
    </div>
        <p className="flex items-center rounded-t-lg justify-center text-center text-white bg-black absolute font-semibold text-xs lg:text-lg
        opacity-0 w-[150px] h-[100px] lg:w-[300px] lg:h-[200px] hover:opacity-90">Now Playing : {Now[1]}</p>
</a>
  )
}

export default SingleChannel