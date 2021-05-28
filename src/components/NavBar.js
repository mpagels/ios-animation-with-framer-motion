import styled from "styled-components/macro";
import AppStore from "../assets/png-64/app-store-64x64-2365235.png";
import Safari from "../assets/png-64/safari-64x64-2365241.png";
import Mail from "../assets/png-64/mail-64x64-2365225.png";
import Music from "../assets/png-64/apple-music-64x64-2365226.png";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <NavBarWrapper
      animate={{ y: 0 }}
      initial={{ y: "100vh" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img src={AppStore} alt="app-store-logo" />
      <img src={Safari} alt="safari-logo" />
      <img src={Mail} alt="mail-logo" />
      <img src={Music} alt="mail-logo" />
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled(motion.nav)`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 10px;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 33px;
`;
