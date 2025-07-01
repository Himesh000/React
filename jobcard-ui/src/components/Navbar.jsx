import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">JobCard</h1>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-orange-500 font-medium">
            Home
          </Link>
          <Link to="/post-job" className="hover:text-orange-500 font-medium">
            Post Job
          </Link>
          <Link to="/view-jobs" className="hover:text-orange-500 font-medium">
            View Jobs
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
