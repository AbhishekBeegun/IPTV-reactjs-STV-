import React from 'react'

const SeeMore = ({ShowCountry,counter,setcounter}) => {
  return (
    <>
    {!ShowCountry ?
        <div className="flex gap-5 items-center">
  
         <button
        onClick={() => setcounter(counter+20)} 
        className="bg-black text-white px-4 py-2 rounded-lg">More Channels</button>
        <p className="text-lg font-semibold">{counter}</p>
        </div> : <></> }

        </>
  )
}

export default SeeMore