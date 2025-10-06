import React from 'react'
import CompanyCard from './CompanyCard'


const CompanyTable = ({companies}) => {
  console.log(companies)

  if(!companies.length)
    return <p className="text-center">No Companies Found</p>
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {companies.map((company)=>(
        <CompanyCard key={company.id} company={company}/>
      ))}
      </div>
  )
}

export default CompanyTable