import {React, useState} from 'react'
import TaskCard from '../components/TaskCard'


export default function Dashboard() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Task 1', description:'general desc..', status: 'To-do'},
    {id: 2, title: 'Task 2', description:'general desc..', status: 'completed'},
    {id: 3, title: 'Task 3', description:'general desc..', status: 'pending'}
  ])


  return (
    <div>
      <h2>Dashboard</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
        
      ))}
      
      </div>
  )
}

 