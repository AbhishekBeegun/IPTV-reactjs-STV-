import React from 'react'
import SingleChannel from "../SingleChannel"


const UK = ({UKchannels}) => {
  return (
    <> 
    <h2 className="text-xl font-semibold">UK CHANNELS</h2> 
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center py-4">
        {UKchannels && UKchannels.map(o => (
          <div key={o[0]}>
          <SingleChannel id={o[0]}
          live={o[1].url}
      name={o[1].name} 
      IMG={o[1].logo}
      />           
          </div>
        ))}

      </div>
    </>
  )
}

export default UK