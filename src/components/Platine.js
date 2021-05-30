import { useMotion } from "react-use";
import { motion } from "framer-motion";
import M1 from "../assets/misc/platine.png";

export default function Platine() {
  const state = useMotion();
  return (
    <div>
      <motion.img
        src={M1}
        alt=""
        animate={{
          x: state.acceleration.x * 5,
          y: state.acceleration.y * 5,
          z: state.acceleration.z * 5,
        }}
      />
    </div>
  );
}
