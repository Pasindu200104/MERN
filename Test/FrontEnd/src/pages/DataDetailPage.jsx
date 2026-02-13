import React, { use, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import api from '../lib/axios.js';
import { ArrowLeftIcon, Link, LoaderIcon, TrashIcon } from 'lucide-react';

const DataDetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveing, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await api.get(`/test/${id}`);
          setData(res.data);
        } catch (error) {
          console.error("Error fetching data:", error);
          toast.error("Failed to load data.");
        }finally{
          setLoading(false);
        }
      }
      fetchData();
  },[id]);

  const handleDelete = async () => {}

  console.log({data});

  if(loading){
    return <div className='min-h-screen bg-base-200 flex items-center justify-center'>
      <LoaderIcon className='animate-spin size-8' />
    </div>
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-6'>
          <Link to={"/"} className='btn btn-ghost'>
          <ArrowLeftIcon className='size-4' />
            Back to Home
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <TrashIcon className='size-5' />
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataDetailPage