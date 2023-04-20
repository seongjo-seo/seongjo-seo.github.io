import Lottie from 'react-lottie-player'
import React from 'react'

import VisionJson from "../../../public/about/AnimationVision.json"

const AnimationVision = () =>{
  return(
    <Lottie
      className="max-w-md"
      loop
      animationData={VisionJson}
      play
    />
  )
}

export default AnimationVision;