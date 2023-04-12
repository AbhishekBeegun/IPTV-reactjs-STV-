import React from 'react'
import SingleChannel from "../SingleChannel"


const UK = ({UKchannels,setUkCounter,UkDisable}) => {
  return (
    <> 
    <div className="text-xl font-semibold flex gap-5 items-center py-4">
    <img className="w-20 rounded-lg"
    src="https://flagcdn.com/w1280/gb.png" alt="UK" />
    <p>United Kingdoms Channels</p>
    </div>
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center py-4">
        {UKchannels && UKchannels.map(o => (
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
      <button disabled={UkDisable}
        onClick={() => setUkCounter((prev) => prev + 10)} 
        className="bg-yellow-500 text-black px-4 py-2 rounded-lg disabled:hidden">More Channels</button>
    </>
  )
}

export default UK