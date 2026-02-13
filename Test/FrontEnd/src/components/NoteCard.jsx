import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utill.js'
import api from '../lib/axios.js'
import toast from 'react-hot-toast';

const NoteCard = ({ data,setData }) => {

    const handleDelete = async (e,id) => {
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/test/${data._id}`);
            setData(prev => prev.filter(item => item._id !== data._id));
            toast.success("Note deleted successfully!");
        } catch (error) {
            console.log("Error deleting",error);
            toast.error("Failed to delete note.");
        }
    }

  return (<Link to={`/data/${data._id}`} className='card bg-base-100 hover:shadow-lg 
  transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
        <div className='card-body'>
            <h2 className='card-title text-base-content'>{data.title}</h2>
            <p className='text-sm text-base-content/70 line-clamp-3'>{data.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-xs text-base-content/50'>{formatDate(data.createdAt)}</span>
                <div className='flex items-center gap-1'>
                    <PenSquareIcon className='size-4' />
                    <button className='btn btn-ghost btn-xs text-error' onClick={handleDelete}>
                        <Trash2Icon className='size-4' />
                    </button>
                </div>
            </div>
        </div>
        </Link>)
}

export default NoteCard 