import React from 'react'
import FRANCE from "../France/FRANCE"
import USA from "../USA/USA"
import UK from "../UK/UK"
const AllChanels = ({ ShowFr,ShowUk,ShowUs
,FRchannels,USchannels,UKchannels,
setFrCounter,
setUsCounter,
setUkCounter,
FrDisable,UsDisable,UkDisable}) => {
  return (
    <>
    {ShowFr ? <FRANCE
    FrDisable={FrDisable}
     FRchannels={FRchannels}
     setFrCounter={setFrCounter}/> : <></>}

    {ShowUs ? <USA 
    UsDisable={UsDisable}
    USchannels={USchannels}
    setUsCounter={setUsCounter}/> : <></> }

    {ShowUk ? <UK 
    UkDisable={UkDisable}
    UKchannels={UKchannels}
    setUkCounter={setUkCounter}/> : <></> }
    </>
  )
}

export default AllChanels