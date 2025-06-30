import React, { useState } from "react";
import { useJob } from "../context/JobContext";
import AnimatedPage from "../components/AnimatedPage";

const PostJob = () => {
  const { addJob } = useJob();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    tags: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };
    addJob(jobData);
    setPreview(jobData);
  };

  return (
    <AnimatedPage>
      <div className="pt-24 px-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">📝 Post a Job</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "title",
            "description",
            "company",
            "location",
            "salary",
            "tags",
          ].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={`Enter ${field}`}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          ))}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Preview Job
          </button>
        </form>

        {preview && (
          <div className="mt-10 p-5 border rounded bg-gray-100 dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-2">{preview.title}</h2>
            <p className="text-sm mb-1">{preview.description}</p>
            <p className="text-sm text-gray-600 mb-1">
              {preview.company} — {preview.location}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Salary: {preview.salary}
            </p>
            <div className="flex flex-wrap gap-2">
              {preview.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default PostJob;
