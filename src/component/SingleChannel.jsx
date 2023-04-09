import React from 'react'

const SingleChannel = ({id,IMG ,name}) => {

  return (
    <a href={`c/${id}`} 
    className="flex flex-col rounded-t-lg w-[200px] shadow-lg hover:scale-110 ease-in-out transition-all">
    <div className="w-full h-[150px]">
        <img className="w-full h-full rounded-t-lg object-cover" 
        src={IMG} />
    </div>
    <div className="flex flex-col bg-gray-900 items-center text-white rounded-b-lg px-4 gap-2 py-2">
        <h1 className="text-sm font-semibold">{name}</h1>
    </div>
</a>
  )
}

export default SingleChannel