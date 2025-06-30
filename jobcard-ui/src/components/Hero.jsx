import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center px-6">
      <div className="text-center text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Empowering Your Career Path
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl mb-8"
        >
          Discover exciting opportunities. Hire top talent.
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/post-job")}
            className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            Post a Job
          </button>
          <button
            onClick={() => navigate("/view-jobs")}
            className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition"
          >
            View Jobs
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
