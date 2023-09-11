import Lottie from "react-lottie-player";
import React from "react";

import VisionJson from "../../../public/about/AnimationVision.json";

const AnimationVision = () => {
  return (
    <Lottie
      className="max-w-md sm:w-3/5 sm:h-3/5 md:w-2/5 md:h-2/5"
      loop
      animationData={VisionJson}
      play
    />
  );
};

export default AnimationVision;
