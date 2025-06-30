import { useJob } from "../context/JobContext.jsx";
import { useState } from "react";
import JobCard from "../components/JobCard.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";

const ViewJobs = () => {
  const { jobs } = useJob();

  const [locationFilter, setLocationFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesLocation = locationFilter
      ? job.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;

    const matchesTag = tagFilter
      ? job.tags.some((tag) =>
          tag.toLowerCase().includes(tagFilter.toLowerCase())
        )
      : true;

    const matchesSalary = salaryFilter
      ? parseInt(job.salary.replace(/[^0-9]/g, "")) >= parseInt(salaryFilter)
      : true;

    return matchesLocation && matchesTag && matchesSalary;
  });

  return (
    <AnimatedPage>
      <div className="px-3 py-12">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Filter by Location"
            className="border p-2 rounded"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Tag"
            className="border p-2 rounded"
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min Salary (e.g., 10 for ₹10LPA)"
            className="border p-2 rounded"
            value={salaryFilter}
            onChange={(e) => setSalaryFilter(e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredJobs.map((job, idx) => (
            <JobCard key={job.id || idx} job={job} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ViewJobs;
