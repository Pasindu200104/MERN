import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUi from '../components/RateLimitedUi';
import { CloudSnow } from 'lucide-react';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';
import DataNotFound from '../components/DataNotFound';

const HomePage = () => {

  const [isRateLimited,setisRateLimited] = useState(false);
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const res  = await api.get("/test");
        // const result = await res.json();
        console.log(res.data);
        setData(res.data);
        setisRateLimited(false);

      } catch (error) {
        console.log("Error Loading data");
        if(error.response?.status === 429){
          setisRateLimited(true);
        }else{
          toast.error("Error loading data");
        }
      } finally{
        setLoading(false);
      }
    }
      fetchData();
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUi />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading...</div>}

        {datas.length === 0 && !isRateLimited && <DataNotFound/>}

        {datas.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white'>
            {datas.map((data) => (
             <NoteCard key={data._id} data={data} setData={setData}/>
            ))}
          </div>

        )}
      </div>
    </div>
  )
}

export default HomePage     