import { useMotion } from "react-use";
import { motion } from "framer-motion";
import BrokenGlas from "../assets/misc/brokenGlas.png";
import styled from "styled-components";

export default function Platine() {
  const state = useMotion();
  return (
    <>
      <Screen src={BrokenGlas} />
      <BackgroundImage
        animate={{
          x: Math.floor(state.accelerationIncludingGravity.x * 8),
          y: Math.floor(-state.accelerationIncludingGravity.y * 4),
        }}
      ></BackgroundImage>
    </>
  );
}

const Screen = styled.img`
  display: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
`;
const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  background-image: url("platine.png");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
