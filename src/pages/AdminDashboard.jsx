import React, { useState } from "react";

const AdminDashboard = () => {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  const handleAddJob = (e) => {
    e.preventDefault();
    const newJob = { id: Date.now(), title, industry, location, applicants: [] };
    const updated = [...jobs, newJob];
    setJobs(updated);
    localStorage.setItem("jobs", JSON.stringify(updated));
    setTitle("");
    setIndustry("");
    setLocation("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Admin Dashboard
      </h1>

      <form
        onSubmit={handleAddJob}
        className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto space-y-3"
      >
        <input
          type="text"
          placeholder="Job Title"
          className="w-full border p-2 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Industry"
          className="w-full border p-2 rounded-md"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add Job
        </button>
      </form>

      <div className="mt-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">All Jobs</h2>
        {jobs.length === 0 ? (
          <p>No jobs added yet.</p>
        ) : (
          <ul className="space-y-2">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="bg-white p-4 rounded-md shadow flex justify-between"
              >
                <div>
                  <p className="font-bold">{job.title}</p>
                  <p className="text-gray-600 text-sm">
                    {job.industry} — {job.location}
                  </p>
                </div>
                <span className="text-sm text-indigo-600">
                  {job.applicants.length} Applicants
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
