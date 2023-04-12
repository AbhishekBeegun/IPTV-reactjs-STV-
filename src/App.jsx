import { useState } from 'react'
import { useEffect } from "react"
import axios from "axios"
import AllCountries from "./component/Country/AllCountries"
import BackToTop from "./component/BackTop/BackToTop"
import Loading from "./component/Loading"
import Navbar from "./component/Navbar/Navbar"
import AllChanels from "./component/Chanels/AllChanels"

// import IPTVJSON from "./api/SAMTV.json"
function App() {

  // realdata
  const [Iptv, setIptv] = useState()

  const [LoadingScreen, setLoadingScreen] = useState(true)

  // channelsdata
  const [USchannels, setUSchannels] = useState()
  const [UKMchannels, setUKMchannels] = useState()
  const [Frchannels, setFrchannels] = useState()
  const [FrCounter, setFrCounter] = useState(10)
  const [UsCounter, setUsCounter] = useState(10)
  const [UkCounter, setUkCounter] = useState(10)

  const [FrDisable, setFrDisable] = useState(false)
  const [UsDisable, setUsDisable] = useState(false)
  const [UkDisable, setUkDisable] = useState(false)



  const fetchData = async () =>  {
    const response = await axios("https://i.mjh.nz/SamsungTVPlus/app.json",
    )
    setIptv(response.data)
 
    setLoadingScreen(false)      
    // ...
  }

  const FR = async () => {
    // await fetchData()
    const frchannel = Object.entries(Iptv.regions.fr.channels)    
    setFrchannels(frchannel.slice(0,FrCounter))
    console.log(frchannel.length)

  }
  const US = async () => {
    // await fetchData()
    const Uschannel = Object.entries(Iptv.regions.us.channels)    
    setUSchannels(Uschannel.slice(0,UsCounter))
    console.log(Uschannel.length)
  }
  const UK = async () => {
    // await fetchData()
    const Ukchannel = Object.entries(Iptv.regions.gb.channels)    
    setUKMchannels(Ukchannel.slice(0,UkCounter))
    console.log(Ukchannel.length)

  }
  useEffect(() => {
    fetchData()
    FR()
    US()
    UK()
    console.log("first fired")
  }, [LoadingScreen])

  useEffect(() => {
  FR()
  US()
  UK()

  function DisableFr() {
    if(FrCounter >= 50){
      setFrDisable(true)
    }    
  }
  function DisableUs() {
    if(UsCounter >= 240){
      setUsDisable(true)
    }    
  }
  function DisableUk() {
    if(UkCounter >= 130){
      setUkDisable(true)
    }    
  }
  DisableFr()
  DisableUk()
  DisableUs()
  console.log("second fired")

}, [FrCounter,UsCounter,UkCounter]); 

// render or not

const [ShowUs, setShowUs] = useState(false)
const [ShowFr, setShowFr] = useState(false)
const [ShowUk, setShowUk] = useState(false)

const [ShowCountry, setShowCountry] = useState(true)

function handleCountries(){
  setShowCountry(true)
  setShowFr(false)
  setShowUk(false)
  setShowUs(false)
}

// function USAchannels(){
  //   const uschannel = Object.entries(Iptv.regions.us.channels)    
  //   setUSchannels(uschannel.slice(0,counter))
  // }

  // function UKchannels(){
  //   const ukchannel = Object.entries(Iptv.regions.gb.channels)    
  //   setUKMchannels(ukchannel.slice(0,counter))
  // }

  // function FRchannels(){
  //   const frchannel = Object.entries(Iptv.regions.fr.channels)    
  //   setFrchannels(frchannel.slice(0,counter))
  // }
    
  // useEffect(() => {
  //     // USAchannels()
  //     // FRchannels()
  //     // UKchannels()
  //     console.log("this run")
  // }, [counter])
  

// realdata

  // useEffect(() => {
  //   fetch("https://i.mjh.nz/SamsungTVPlus/app.json")
  //   .then(response => response.json()) 
  //   .then(response => setIPTVdata(JSON.stringify(response)))
  //   console.log(IPTVdata)
  // },[IPTVdata])


  return (
    <div className="App px-4 py-20 flex flex-col items-center justify-center">
      
      {!LoadingScreen ?
      <> 
  
      <BackToTop/>

      <Navbar ShowCountry={ShowCountry}
      handleCountries={handleCountries}/>
      
     
      <AllCountries 
      ShowCountry={ShowCountry}
      setShowCountry={setShowCountry}
      ShowFr={ShowFr} setShowFr={setShowFr}
      ShowUs={ShowUs} setShowUs={setShowUs}
      ShowUk={ShowUk} setShowUk={setShowUk}/> 

   
      <AllChanels
      FrDisable={FrDisable}
      UsDisable={UsDisable}
      UkDisable={UkDisable}
      ShowFr={ShowFr}
      ShowUs={ShowUs}
      ShowUk={ShowUk}
      FRchannels={Frchannels}
      USchannels={USchannels}
      UKchannels={UKMchannels}
      setFrCounter={setFrCounter}
      setUsCounter={setUsCounter}
      setUkCounter={setUkCounter}
      />  
       
      </> : <Loading/>   }

      </div>
  )
}

export default App
