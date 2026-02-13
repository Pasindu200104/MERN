import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NoteCard = ({ data }) => {
  return <Link to={`/data/${data._id}`} className='bg-base-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow'>
        <div className='card-body'>
            <h2 className='card-title text-base-content'>{data.title}</h2>
            <p className='text-sm text-base-content/70 line-clamp-3'>{data.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-xs text-base-content/50'>{new Date(data.createdAt).toLocaleString()}</span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4' />
                    <button className='btn btn-ghost btn-xs text-error'>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
        </Link>
}

export default NoteCard 