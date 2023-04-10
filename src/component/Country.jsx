import React from 'react'

const Country = ({countryimg,name,onClick,setonClick,setShowCountry}) => {

  function handleClick(){
    setonClick(!onClick)
    setShowCountry(false)
  }
  return (
    <button onClick={() => handleClick()}
     className="w-16 flex flex-col gap-2 justify-center items-center text-center">
    <div className="w-16 h-16 bg-sky-600 rounded-full hover:scale-110 transition-all ease-in-out">
    <img className="w-full h-full rounded-full object-cover"
    src={countryimg} />
    </div>

    <p className="font-semibold uppercase text-xs py-2">{name}</p>
    </button>
  )
}

export default Country