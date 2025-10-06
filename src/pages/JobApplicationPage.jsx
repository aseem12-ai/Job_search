import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = "http://localhost:3001/companies";

const JobApplicationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const fetchCompany = async () => {
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();
      setCompany(data);
    };
    fetchCompany();
  }, [id]);

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => setApplied(false), 2000);
  };

  if (!company)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md text-center">
        <img
          src={company.image}
          alt={company.name}
          className="h-20 mx-auto mb-4 object-contain"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Apply for {company.name}
        </h2>
        <p className="text-gray-600 mb-1">{company.industry}</p>
        <p className="text-gray-600 mb-4">{company.location}</p>

        <button
          onClick={handleApply}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
        >
          Apply Now
        </button>

        <button
          onClick={() => navigate("/")}
          className="block mt-4 text-indigo-500 hover:underline text-sm"
        >
          ← Back to Companies
        </button>
      </div>

      {applied && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-lg font-semibold text-green-600">
              ✅ Application Submitted!
            </h3>
            <p className="text-gray-600 mt-2">You have successfully applied.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationPage;
