import React from "react";
import BackgroundCircle from "./BackgroundCircle";
import Eyes from "./Eyes";
import FaceContainer from "./FaceContainer";
import Mouth from "./Mouth";

const SmileFace = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}) => {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle
        strokeWidth={strokeWidth}
        radius={centerY - strokeWidth / 2}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
};

export default SmileFace;
