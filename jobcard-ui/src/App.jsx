import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ViewJobs from "./pages/ViewJobs.jsx";
import PostJob from "./pages/PostJobs.jsx";
import ScrollToTop from "./components/ScrollToTop";
import jobData from "./data/jobs.js";

const Home = () => <Hero />;

function App() {
  const location = useLocation();
  const [jobs, setJobs] = useState(jobData);

  const addJob = (newJob) => {
    setJobs((prev) => [...prev, { id: Date.now(), ...newJob }]);
  };

  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/view-jobs" element={<ViewJobs jobs={jobs} />} />
        <Route path="/post-job" element={<PostJob addJob={addJob} />} />
      </Routes>
      <ScrollToTop/>
    </AnimatePresence>
  );
}

export default App;
