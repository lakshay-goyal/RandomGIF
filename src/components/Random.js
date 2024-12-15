import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const {gif, loading, fetchData} = useGif();

  return (
    <div className='backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 
    shadow-2xl p-8 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]'>
      <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
      from-pink-300 to-violet-300 mb-8 text-center'>
        Random GIF
      </h2>

      <div className='flex justify-center mb-8'>
        {loading ? (
          <Spinner/>
        ) : (
          <img 
            src={gif} 
            alt="random gif"
            className="rounded-lg max-w-full h-auto shadow-lg border-2 border-white/20"
            style={{maxHeight: '400px'}}
          />
        )}
      </div>

      <button 
        onClick={() => fetchData()}
        className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold 
        py-4 px-6 rounded-lg transition-all duration-300 hover:from-pink-600 hover:to-violet-600 
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 
        shadow-lg"
      >
        Generate New GIF
      </button>
    </div>
  );
}

export default Random
