import { motion } from "framer-motion";

const JobCard = ({ job }) => {
  if (!job) return null;

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-5 w-full md:w-[300px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}>
      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      <p className="text-gray-500">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-700 font-medium mt-2">{job.salary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-sky-100 text-sky-600 px-2 py-1 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default JobCard;
