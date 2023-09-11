import Lottie from "react-lottie-player";
import React from "react";

import MissionJson from "../../../public/about/AnimationMission.json";

const AnimationMission = () => {
  return (
    <Lottie
      className="max-w-md sm:w-2/5 sm:h-2/5 md:w-3/5 md:h-3/5 lg:w-4/5 lg:h-4/5"
      loop
      animationData={MissionJson}
      play
    />
  );
};

export default AnimationMission;
