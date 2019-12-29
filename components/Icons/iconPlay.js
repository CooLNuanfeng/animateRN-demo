import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const IconPlay = props => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M14 7.999a.999.999 0 00-.427-.819l-10-7A1 1 0 002 .999V15a.999.999 0 001.573.819l10-7A.995.995 0 0014 8.001v-.002c0 .001 0 .001 0 0z"
          fill="#546BFB"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconPlay;
