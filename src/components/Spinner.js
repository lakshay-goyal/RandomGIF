import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-violet-200/30 border-t-pink-400 
        rounded-full animate-spin drop-shadow-lg">
      </div>
    </div>
  )
}

export default Spinner
