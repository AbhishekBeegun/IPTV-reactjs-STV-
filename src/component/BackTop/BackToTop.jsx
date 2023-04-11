import React from 'react'

const BackToTop = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
  return (
    <button title="BackToTop" 
    className="p-3 bg-white text-white z-40 rounded-lg fixed bottom-5 right-5 hover:invert" 
    onClick={() => topFunction()}>
        <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" fill="black"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
    </button>
  )
}

export default BackToTop