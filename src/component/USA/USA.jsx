import React from 'react'
import SingleChannel from "../SingleChannel"

const USA = ({USchannels}) => {

  return (
    <> 
    <h2 className="text-xl font-semibold">USA CHANNELS</h2> 
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
      </>

  )
}

export default USA