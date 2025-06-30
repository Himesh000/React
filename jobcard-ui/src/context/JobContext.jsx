import { createContext, useContext, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      title: "Frontend Developer",
      description: "Build user interfaces",
      company: "TechCorp",
      location: "Remote",
      salary: "₹10 LPA",
      tags: ["React", "JavaScript"],
    },
    {
      title: "Backend Engineer",
      description: "Work on server-side logic",
      company: "DataX",
      location: "Bangalore",
      salary: "₹15 LPA",
      tags: ["Node.js", "MongoDB"],
    },
  ]);

  const addJob = (job) => {
    setJobs([job, ...jobs]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
