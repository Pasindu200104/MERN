import { Link } from 'react-router'
import React from 'react'

const DataNotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold text-primary'>No Data Found</h1>
            <p className='text-base-content/70 mt-2'>There is no data to display.</p>
            <Link to={"/create"} className='btn btn-primary mt-4'>
                Create Your First Note
            </Link>
        </div>
        
    </div>
  )
}

export default DataNotFound