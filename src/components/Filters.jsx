import React from 'react'

function Filters(
  {
    search,setSearch,industry,setIndustry,location,setLocation,companies
  }
) {

  const industries=[...new Set(companies.map((c)=>c.industry))]
  const locations=[...new Set(companies.map((c)=>c.location))]
  return (



    <div className='flex flex-wrap gap-4 justify-center'>
      <input
      type='text'
      placeholder='search by name...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className='border p-2 rounded-md'
      />


      <select name="" value={industry} onChange={(e)=>setIndustry(e.target.value)}
      className='border p-2 rounded-md' id="">
        <option value="">All Industries</option>
        {industries.map((ind,idx)=>(
          <option key={idx} value={ind}>
            {ind}
          </option>
        ))}
      </select>


      <select value={location}
      onChange={(e)=>setLocation(e.target.value)}
      className='border p-2 rounded-md'>
        <option value="">All Locations</option>
        {locations.map((loc,idx)=>(
          <option key={idx} value={loc}>
            {loc}
          </option>
        ))}

      </select>
    </div>
  )
}

export default Filters