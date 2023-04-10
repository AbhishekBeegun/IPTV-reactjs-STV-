import { useState } from 'react'
import { useEffect } from "react"
import Navbar from "./component/Navbar"
import SingleChannel from "./component/SingleChannel"
import Country from "./component/Country"
import IPTVJSON from "./api/SAMTV.json"

function App() {

  // fakedata
  const [Iptv, setIptv] = useState(IPTVJSON)
  const [countryNameLogo, setcountryNameLogo] = useState()
  const [USchannels, setUSchannels] = useState()
  console.log(Iptv.regions)
  function countrynamelogo(){
    const country = Object.entries(Iptv.regions)    
     setcountryNameLogo(country.slice(6,11))
  }

  function USAchannels(){
    const uschannel = Object.entries(Iptv.regions.us.channels)    
    setUSchannels(uschannel.slice(0,5))
    console.log(uschannel)

  }
  
  
  useEffect(() => {
    countrynamelogo()
    USAchannels()

  }, [])
  









// realdata

  // const [IPTVdata, setIPTVdata] = useState()

  // useEffect(() => {
  //   fetch("https://i.mjh.nz/SamsungTVPlus/app.json")
  //   .then(response => response.json()) 
  //   .then(response => setIPTVdata(JSON.stringify(response)))
  //   console.log(IPTVdata)
  // },[IPTVdata])


  
  

  return (
    <div className="App px-4 flex flex-col items-center justify-center">
      <Navbar/>
      <h1>
        Helllo there    
      </h1>

      {/* countries */}
      <div className="flex flex-row flex-wrap gap-10 py-4 items-center justify-center">

      {countryNameLogo && countryNameLogo.map( o => (
        <div key={o[1].name}>
          <Country name={o[1].name}
          countryimg={o[1].logo}
           />
        </div>
      ))}       

       
  
      </div>

      {/* channels */}
      
      <div className="flex flex-row flex-wrap gap-5 items-center justify-center py-4">
        {USchannels && USchannels.map(o => (
          <div key={o[0]}>
          <SingleChannel id={o[0]}
          live={o[1].url}
      name={o[1].name} 
      IMG={o[1].logo}
      />           
          </div>
        ))}

      </div>
    </div>
  )
}

export default App
