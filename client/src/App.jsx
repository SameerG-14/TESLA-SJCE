import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TeamsSection from "./components/TeamsSection";
import ElectroSection from "./components/ElectroSection";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Footer from "./components/Footer";

function App() {
  const [, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api");
    setArray(response.data.message);
    console.log(response.data.message);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/electro" element={<ElectroSection />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
