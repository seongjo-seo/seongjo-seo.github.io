import Lottie from 'react-lottie-player'
import React from 'react'

import MissionJson from "../../../public/about/AnimationMission.json"

const AnimationMission = () =>{
  return(
    <Lottie
      loop
      animationData={MissionJson}
      play
    />
  )
}

export default AnimationMission;