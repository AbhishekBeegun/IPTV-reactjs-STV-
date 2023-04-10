import { useState } from 'react'
import { useEffect } from "react"
import Navbar from "./component/Navbar"
import IPTVJSON from "./api/SAMTV.json"
import USA from "./component/USA/USA"
import FRANCE from "./component/France/FRANCE"
import UK from "./component/UK/UK"
import AllCountries from "./component/Country/AllCountries"

function App() {

  // fakedata
  const [Iptv, setIptv] = useState(IPTVJSON)
  const [countryNameLogo, setcountryNameLogo] = useState()
  

  // channelsdata
  const [USchannels, setUSchannels] = useState()
  const [UKMchannels, setUKMchannels] = useState()
  const [Frchannels, setFrchannels] = useState()


  // render or not
  const [ShowUs, setShowUs] = useState(false)
  const [ShowFr, setShowFr] = useState(false)
  const [ShowUk, setShowUk] = useState(false)

  const [ShowCountry, setShowCountry] = useState(true)

  function countrynamelogo(){
    const country = Object.entries(Iptv.regions)    
     setcountryNameLogo(country.slice(5))
  }

  function USAchannels(){
    const uschannel = Object.entries(Iptv.regions.us.channels)    
    setUSchannels(uschannel.slice(0,5))
  }

  function UKchannels(){
    const ukchannel = Object.entries(Iptv.regions.gb.channels)    
    setUKMchannels(ukchannel.slice(0,5))
  }

  function FRchannels(){
    const frchannel = Object.entries(Iptv.regions.fr.channels)    
    setFrchannels(frchannel.slice(0,5))
  }
  
  
  useEffect(() => {
    USAchannels()
    FRchannels()
    UKchannels()

  

  }, [])
  
  function handleCountries(){
    setShowCountry(true)
    setShowFr(false)
    setShowUk(false)
    setShowUs(false)
  }
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
      {ShowCountry ? 
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">

      <AllCountries 
      setShowCountry={setShowCountry}
      ShowFr={ShowFr} setShowFr={setShowFr}
      ShowUs={ShowUs} setShowUs={setShowUs}
      ShowUk={ShowUk} setShowUk={setShowUk}/> 
      </div> :
      <div className="py-8">
      <button className="bg-red-500 py-2 px-6 rounded-lg font-semibold" 
      onClick={() => handleCountries()}>Show Countries</button>
      </div>
      }

      {/* channels */}
      {ShowFr ? <FRANCE FRchannels={Frchannels}/> : <></>}

      {ShowUs ? <USA USchannels={USchannels}/> : <></> }

      {ShowUk ? <UK UKchannels={UKMchannels}/> : <></> }
      
    </div>
  )
}

export default App
