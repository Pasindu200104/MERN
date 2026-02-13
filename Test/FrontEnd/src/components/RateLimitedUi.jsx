import React from 'react'
import { Zap } from 'lucide-react'

const RateLimitedUi = () => {
  return (
    <div className='flex items-center flex-col'>
        <div className='bg-green-950/50   px-12 py-4 rounded-lg flex flex-row gap-6 border border-green-700/50'>
            <div className='flex items-center justify-center'>
                <Zap className="size-12 bg-green-700 p-2 rounded-full" />
            </div>
            <div className='flex flex-col'>
                <span className='font-mono font-bold text-xl'>Rate Limit Reached</span>
                <span className='text-sm'>You have made too many requests recently. Please try again later.</span>
                <span className='font-light text-xs'>Try again in few minutes for best Experience.</span>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUi