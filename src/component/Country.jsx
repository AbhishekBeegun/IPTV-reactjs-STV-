import React from 'react'

const Country = ({countryimg,name,onClick,setonClick,setShowCountry}) => {

  function handleClick(){
    setonClick(!onClick)
    setShowCountry(false)
  }
  return (
    <button onClick={() => handleClick()}
     className="w-[125px] lg:w-[200px] flex flex-col gap-2 justify-center items-center text-center">
    <div className="w-[125px] h-[125px] lg:w-[200px] lg:h-[200px] bg-sky-600 rounded-full hover:scale-110 transition-all ease-in-out">
    <img className="w-full h-full rounded-full object-cover"
    src={countryimg} alt="countryFlag" />
    </div>

    <p className="font-semibold uppercase text-xs py-2">{name}</p>
    </button>
  )
}

export default Country