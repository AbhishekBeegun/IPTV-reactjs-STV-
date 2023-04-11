import React from 'react'
import FRANCE from "../France/FRANCE"
import USA from "../USA/USA"
import UK from "../UK/UK"
const AllChanels = ({ ShowFr,ShowUk,ShowUs
,FRchannels,USchannels,UKchannels}) => {
  return (
    <>
    {ShowFr ? <FRANCE FRchannels={FRchannels}/> : <></>}

    {ShowUs ? <USA USchannels={USchannels}/> : <></> }

    {ShowUk ? <UK UKchannels={UKchannels}/> : <></> }
    </>
  )
}

export default AllChanels