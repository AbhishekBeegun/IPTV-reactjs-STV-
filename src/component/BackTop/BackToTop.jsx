import React from 'react'

const BackToTop = () => {
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
  return (
    <button title="BackToTop" 
    className="p-2 text-lg bg-black z-40 rounded-lg fixed bottom-5 right-5 hover:invert" 
    onClick={() => topFunction()}>
🐝    </button>
  )
}

export default BackToTop