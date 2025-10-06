import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyCard = ({company}) => {

  const navigate=useNavigate()
  
  return (
    <div onClick={() => navigate(`/apply/${company.id}`)}
    className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg rounded-2xl p-5 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center flex flex-col items-center">
      {company.image && (
        <img
          src={company.image}
          alt={company.name}
          className="w-24 h-24 object-contain mb-3 bg-white rounded-full p-2 shadow-md"
        />
      )}
      <h2 className="text-2xl font-bold text-indigo-700 mb-1">
        {company.name}
      </h2>
      <p className="text-gray-700 font-medium mb-1">
        {company.industry}
      </p>
      <p className="text-gray-600 mb-1">{company.location}</p>
      <p className="text-sm text-gray-800 font-semibold">
        Size: <span className="text-indigo-600">{company.size}</span>
      </p>
    </div>
  )
}

export default CompanyCard