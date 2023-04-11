import { useState } from 'react'
import { useEffect } from "react"
import IPTVJSON from "./api/SAMTV.json"
import USA from "./component/USA/USA"
import FRANCE from "./component/France/FRANCE"
import UK from "./component/UK/UK"
import AllCountries from "./component/Country/AllCountries"
import BackToTop from "./component/BackTop/BackToTop"
import Loading from "./component/Loading"

function App() {

  // fakedata
  const [Iptv, setIptv] = useState(IPTVJSON)
    // useEffect(() => {
  //   fetch("https://i.mjh.nz/SamsungTVPlus/app.json")
  //   .then(response => response.json()) 
  //   .then(response => setIptv(JSON.stringify(response)))
  //   console.log(Iptv)
  // },[Iptv])

  // channelsdata
  const [USchannels, setUSchannels] = useState()
  const [UKMchannels, setUKMchannels] = useState()
  const [Frchannels, setFrchannels] = useState()


  // render or not
  const [LoadingScreen, setLoadingScreen] = useState(true)
  const [ShowUs, setShowUs] = useState(false)
  const [ShowFr, setShowFr] = useState(false)
  const [ShowUk, setShowUk] = useState(false)

  const [ShowCountry, setShowCountry] = useState(true)

  const [counter, setcounter] = useState(10)


  function USAchannels(){
    const uschannel = Object.entries(Iptv.regions.us.channels)    
    setUSchannels(uschannel.slice(0,counter))
  }

  function UKchannels(){
    const ukchannel = Object.entries(Iptv.regions.gb.channels)    
    setUKMchannels(ukchannel.slice(0,counter))
  }

  function FRchannels(){
    const frchannel = Object.entries(Iptv.regions.fr.channels)    
    setFrchannels(frchannel.slice(0,counter))
  }
  
  useEffect(() => {
    setTimeout( () => setLoadingScreen(false) ,5000)
  })
  
  useEffect(() => {
    USAchannels()
    FRchannels()
    UKchannels()
  }, [counter])
  
  function handleCountries(){
    setShowCountry(true)
    setShowFr(false)
    setShowUk(false)
    setShowUs(false)
    setcounter(10)
  }

// realdata

  // useEffect(() => {
  //   fetch("https://i.mjh.nz/SamsungTVPlus/app.json")
  //   .then(response => response.json()) 
  //   .then(response => setIPTVdata(JSON.stringify(response)))
  //   console.log(IPTVdata)
  // },[IPTVdata])


  return (
    <div className="App px-4 py-20 flex flex-col items-center justify-center">
      {LoadingScreen ? 
      <Loading/> : <></>}
      <BackToTop/>
      <nav className="flex items-center z-40 bg-black justify-between w-full px-4 py-4 lg:px-64 fixed top-0">
        <button onClick={() => handleCountries()}
         className="font-semibold text-lg flex items-center justify-center gap-2">
        <p
         className="border-r-2 px-4">I P T V</p>
        <span className="bg-red-600 rounded-lg px-2">LiveTV</span>
        </button>
        {!ShowCountry ? <div>
      <button className="bg-red-500 py-2 px-4 rounded-lg font-semibold" 
      onClick={() => handleCountries()}>Switch Country</button>
      </div> : <></>}
        
      </nav>
      {/* countries */}
      {ShowCountry ? 
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-20 items-center justify-center pt-8 lg:pt-48">

      <AllCountries 
      setShowCountry={setShowCountry}
      ShowFr={ShowFr} setShowFr={setShowFr}
      ShowUs={ShowUs} setShowUs={setShowUs}
      ShowUk={ShowUk} setShowUk={setShowUk}/> 
      </div> :
      <></>
      }

      {/* channels */}
      {ShowFr ? <FRANCE FRchannels={Frchannels}/> : <></>}

      {ShowUs ? <USA USchannels={USchannels}/> : <></> }

      {ShowUk ? <UK UKchannels={UKMchannels}/> : <></> }

      {!ShowCountry ?
      <div className="flex gap-5 items-center">

       <button
      onClick={() => setcounter(counter+20)} 
      className="bg-red-500 px-4 py-2 rounded-lg">More Channels</button>
      <p className="text-lg font-semibold">{counter}</p>
      </div> : <></> }
      
    </div>
  )
}

export default App
