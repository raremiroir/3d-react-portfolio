import React from 'react'
import { Html, useProgress } from '@react-three/drei';


const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p className='text-gray-50 text-[14px] font-extrabold mt-10'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader