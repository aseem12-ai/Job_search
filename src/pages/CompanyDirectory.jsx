import React,{useEffect,useState} from 'react'
import Filters from '../components/Filters'
import CompanyTable from '../components/CompanyTable'
import Pagination from '../components/Pagination'


const API = import.meta.env.VITE_API_URL || "/api/companies";




const CompanyDirectory = () => {

  const [companies,setCompanies]=useState([])
  const [filtered,setFiltered]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState("")
  const [search,setSearch]=useState("")
  const [industry,setIndustry]=useState("")
  const [location,setLocation]=useState("")
  const [page,setPage]=useState(1)
  const perPage=9;


  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const res = await fetch(API); // will hit /api/companies
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCompanies(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);




  useEffect(()=>{
    let data=companies
    if(search){
      data=data.filter((c)=>
      c.name.toLowerCase().includes(search.toLocaleLowerCase())

    );
    }
    if(industry){
      data=data.filter((c)=>
        c.industry==industry
      );
    }
    if(location){
      data=data.filter((c)=>c.location==location);


    }
    setFiltered(data)
    setPage(1)

  },[search,industry,location]);


  const totalPages=Math.ceil(filtered.length / perPage)
  const paginated=filtered.slice((page-1)*perPage,page*perPage);
  


  if(loading) return <p className='text-center'>Loading Companies...</p>
  if(error) return <p className='text-center text-red-500'>{error}</p>





  return (
    <div className='space-y-6'>
      <Filters
      search={search}
      setSearch={setSearch}
      industry={industry}
      setIndustry={setIndustry}
      location={location}
      setLocation={setLocation}
      companies={companies}
      />
      <CompanyTable companies={paginated}/>
      <Pagination page={page} 
      setPage={setPage}
      totalPages={totalPages}
      />
    </div>
  )
}

export default CompanyDirectory