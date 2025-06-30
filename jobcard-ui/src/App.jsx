import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ViewJobs from "./pages/ViewJobs.jsx";
import PostJob from "./pages/PostJobs.jsx";
import ScrollToTop from "./components/ScrollToTop";

const Home = () => <Hero />;

function App() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  <button
    onClick={() => setIsDark(!isDark)}
    className="text-sm px-4 py-2 border rounded mt-2 lg:mt-0">
    {isDark ? "Light Mode" : "Dark Mode"}
  </button>;

  return (
    <AnimatePresence mode="wait">
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/view-jobs" element={<ViewJobs />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
