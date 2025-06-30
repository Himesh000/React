import { createContext, useContext, useState } from "react";
import initialJobs from "../data/jobs";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobList, setJobList] = useState(initialJobs);

  const addJob = (job) => {
    const newJob = { ...job, id: Date.now() }; // Add unique ID
    setJobList([newJob, ...jobList]);
  };

  return (
    <JobContext.Provider value={{ jobs: jobList, addJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJob = () => useContext(JobContext);
