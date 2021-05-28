import styled from "styled-components/macro";
import Photos from "../assets/png-64/photos-64x64-2365244.png";
import Camera from "../assets/png-64/camera-64x64-2365232.png";
import Clock from "../assets/png-64/clock-64x64-2365231.png";
import Settings from "../assets/png-64/settings-64x64-2365240.png";
import Contacts from "../assets/png-64/contacts-64x64-2365230.png";
import Message from "../assets/png-64/ios-message-64x64-1575946.png";
import Calendar from "../assets/png-64/calendar-64x64-2365233.png";
import Notes from "../assets/png-64/notes-64x64-2365245.png";
import Stocks from "../assets/png-64/stocks-64x64-2365239.png";
import SingleApp from "./SingleApp";
import { motion } from "framer-motion";

const apps = [
  { url: Photos, name: "Photos" },
  { url: Camera, name: "Camera" },
  { url: Clock, name: "Clock" },
  { url: Settings, name: "Settings" },
  { url: Contacts, name: "Contacts" },
  { url: Message, name: "Message" },
  { url: Calendar, name: "Calendar" },
  { url: Notes, name: "Notes" },
  { url: Stocks, name: "Stocks" },
];

export default function MainApps() {
  return (
    <AppWrapper
      animate={{ x: 0, opacity: 1, scale: 1 }}
      initial={{ scale: 5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {apps.map((app) => (
        <SingleApp src={app.url} name={app.name} key={app.name} />
      ))}
    </AppWrapper>
  );
}

const AppWrapper = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px 0;
  margin-top: 5%;
`;
