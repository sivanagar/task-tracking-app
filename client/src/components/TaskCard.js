import React from 'react'

export default function TaskCard({task}) {
  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.status}</p>
    </div>
  )
}

 