import React from 'react'

const Navbar = ({ShowCountry,handleCountries}) => {
  return (
    <nav className="flex items-center z-40 bg-black justify-between w-full px-4 py-4 lg:px-64 fixed top-0">
    <button onClick={() => handleCountries()}
     className="font-semibold text-lg flex items-center justify-center gap-2">
    <p
     className="border-r-2 px-4">BEEGUN</p>
    <span className="bg-red-600 rounded-lg px-2">TV</span>
    </button>
    {!ShowCountry ? <div>
  <button className="bg-red-500 py-2 px-4 rounded-lg font-semibold" 
  onClick={() => handleCountries()}>Switch Country</button>
  </div> : <></>}
    
  </nav>
  )
}

export default Navbar