import React from 'react'

const Navbar = ({ShowCountry,handleCountries}) => {
  return (
    <nav className="flex items-center z-40 bg-black justify-between w-full px-4 py-4 lg:px-64 fixed top-0">
    <button onClick={() => handleCountries()}
     className="font-semibold text-lg text-black flex items-center justify-center gap-3">
    <p
     className="border-r-2 px-4 text-2xl">🐝</p>
    <span className="bg-yellow-500 rounded-lg px-4">TV</span>
    </button>
    {!ShowCountry ? <div>
  <button className="bg-yellow-500 text-black py-2 px-2 rounded-lg font-semibold" 
  onClick={() => handleCountries()}>Switch Country</button>
  </div> : <></>}
    
  </nav>
  )
}

export default Navbar