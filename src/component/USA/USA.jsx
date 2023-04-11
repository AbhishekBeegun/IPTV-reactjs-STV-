import React from 'react'
import SingleChannel from "../SingleChannel"

const USA = ({USchannels}) => {

  return (
    <> 
    <div className="text-xl font-semibold flex gap-5 items-center py-4">
    <img className="w-20 rounded-lg object-contain"
    src="https://flagcdn.com/w1280/us.png" alt="USA" />
    <p>United States Channels</p>
    </div>
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center py-4">
        {USchannels && USchannels.map(o => (
          <div key={o[0]}>
          <SingleChannel id={o[0]}
          live={o[1].url}
      name={o[1].name} 
      IMG={o[1].logo}
      Now={o[1].programs[0]}
      />           
          </div>
        ))}

      </div>
      </>

  )
}

export default USA