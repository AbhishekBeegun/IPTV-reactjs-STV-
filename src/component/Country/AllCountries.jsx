import React from 'react'
import Country from "../Country"

const AllCountries = (
    {ShowFr,setShowFr,
    ShowUs,setShowUs,
    ShowUk,setShowUk,
    ShowCountry,setShowCountry}
    ) => {

  return (
    <>
    {ShowCountry ?
    <div className="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 items-center justify-center pt-8 lg:pt-48">
      <Country onClick={ShowFr} setonClick={setShowFr} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/fr.png"} name={"France"} />


      <Country onClick={ShowUs} setonClick={setShowUs} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/us.png"} name={"USA"} />

      
     <Country onClick={ShowUk} setonClick={setShowUk} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/gb.png"} name={"UK"} />
    </div> : <></>}
    </>
  )
}

export default AllCountries