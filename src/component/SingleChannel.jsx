import React from 'react'
import { useState } from "react";
import { useEffect } from "react";


const SingleChannel = ({id,IMG ,name,live}) => {

  const [tv, settv] = useState();

useEffect(() => {
  localStorage.setItem('tv', JSON.stringify(tv));
}, [tv]);

  function handleClick(live){
    settv(live)
  }

  return (
    <a href={`/${id}5`} type="button"
    onClick={() => handleClick(live)}
    className="flex flex-col rounded-t-lg w-[150px] shadow-lg hover:scale-110 ease-in-out transition-all">
    <div className="w-full h-[100px]">
        <img className="w-full h-full rounded-t-lg object-cover" 
        src={IMG} />
    </div>
    <div className="flex flex-col bg-gray-900 items-center text-white rounded-b-lg px-4 gap-2 py-2">
        <h1 className="text-xs font-semibold">{name}</h1>
    </div>
</a>
  )
}

export default SingleChannel