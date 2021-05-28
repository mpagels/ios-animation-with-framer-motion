import styled from "styled-components/macro";
import Battery from "../assets/ios/Battery.png";
import Wifi from "../assets/ios/Wifi.png";
import Cellular from "../assets/ios/Cellular.png";
import { motion } from "framer-motion";

export default function TopBar() {
  function getTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return hours + ":" + minutes;
  }

  return (
    <TopBarWrapper
      animate={{ y: 0 }}
      initial={{ y: "-100vh" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Right>{getTime()}</Right>
      <Left>
        <img src={Cellular} alt="cellular" />
        <img src={Wifi} alt="wifi" />
        <img src={Battery} alt="battery" />
      </Left>
    </TopBarWrapper>
  );
}
const TopBarWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  padding: 20px;
  color: white;
`;

const Right = styled.div``;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px; ;
`;
