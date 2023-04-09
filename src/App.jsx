import { useState } from 'react'
import Navbar from "./component/Navbar"
import SingleChannel from "./component/SingleChannel"


function App() {

  return (
    <div className="App px-10">
      <Navbar/>
      <h1>
        Helllo there
      </h1>
      <div className="flex gap-5">     
      <SingleChannel id={"ATAJ35000024Y"}
      name={"Komödien - Rakuten TV"} 
      IMG={"https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/ATAJ35000024Y_20221109T010421SQUARE.png_20221109010422.png"}
      />
      <SingleChannel id={"CHBC800003LH"}
      name={"Trace Latina [FR]"} 
      IMG={"https://tvpnlogopeu.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/CHBC800003LH_20220412T145612SQUARE.png_20220412145613.png"}
      />
    </div>
    </div>
  )
}

export default App
