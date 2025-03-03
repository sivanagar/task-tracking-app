import React from 'react'

export default function TaskCard({task}) {
  return (
    <div className='bg-white rounded-lg shadow p-6 mb-6'>
        <h3 className='text-xl font-semibold mb-4'>{task.title}</h3>
        <p className='text-base text-stone-700'>{task.description}</p>
        <p>{task.status}</p>
    </div>
  )
}

 