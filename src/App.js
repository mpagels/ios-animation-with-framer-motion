import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";

function App() {
  const [animateX, setAnimateX] = useState(100);
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
