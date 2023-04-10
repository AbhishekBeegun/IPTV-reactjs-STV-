import React from 'react'
import Country from "../Country"

const AllCountries = (
    {ShowFr,setShowFr,
    ShowUs,setShowUs,
    ShowUk,setShowUk,
    setShowCountry}
    ) => {

  return (
    <>
      <Country onClick={ShowFr} setonClick={setShowFr} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/fr.png"} name={"France"} />


      <Country onClick={ShowUs} setonClick={setShowUs} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/us.png"} name={"USA"} />

      
     <Country onClick={ShowUk} setonClick={setShowUk} setShowCountry={setShowCountry}
      countryimg={"https://flagcdn.com/w1280/gb.png"} name={"UK"} />
    </>
  )
}

export default AllCountries