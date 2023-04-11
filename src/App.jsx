import { useState } from 'react'
import { useEffect } from "react"
import axios from "axios"
import IPTVJSON from "./api/SAMTV.json"
import AllCountries from "./component/Country/AllCountries"
import BackToTop from "./component/BackTop/BackToTop"
import Loading from "./component/Loading"
import Navbar from "./component/Navbar/Navbar"
import AllChanels from "./component/Chanels/AllChanels"
import SeeMore from "./component/Seemore/SeeMore"

function App() {

  // realdata
  const [Iptv, setIptv] = useState()

  const [LoadingScreen, setLoadingScreen] = useState(true)

  // channelsdata
  const [USchannels, setUSchannels] = useState()
  const [UKMchannels, setUKMchannels] = useState()
  const [Frchannels, setFrchannels] = useState()
  
  const [counter, setcounter] = useState(10)

  const fetchData = async () =>  {
    const response = await axios("https://i.mjh.nz/SamsungTVPlus/app.json",
    )
    setIptv(response.data)
    console.log(Iptv) 
    setTimeout(() => {
    setLoadingScreen(false)      
    }, 3000);
    // ...
  }

  const FR = async () => {
    // await fetchData()
    const frchannel = Object.entries(Iptv.regions.fr.channels)    
    setFrchannels(frchannel.slice(0,counter))
  }
  const US = async () => {
    // await fetchData()
    const Uschannel = Object.entries(Iptv.regions.us.channels)    
    setUSchannels(Uschannel.slice(0,counter))
  }
  const UK = async () => {
    // await fetchData()
    const Ukchannel = Object.entries(Iptv.regions.gb.channels)    
    setUKMchannels(Ukchannel.slice(0,counter))
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
  console.log("second fired")

}, [counter]); 

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
  setcounter(10)
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
      ShowFr={ShowFr}
      ShowUs={ShowUs}
      ShowUk={ShowUk}
      FRchannels={Frchannels}
      USchannels={USchannels}
      UKchannels={UKMchannels}
      />
      <SeeMore 
      ShowCountry={ShowCountry} counter={counter} setcounter={setcounter}/>    

       
       
      </> : <Loading/>   }

      </div>
  )
}

export default App
