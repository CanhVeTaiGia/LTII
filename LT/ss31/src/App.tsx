
import { useState } from 'react'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [input, setInput] = useState<string>('');
  const [job, setJobs] = useState<any>();
  const handleClick = () =>{
    const newJob = {
      id: Math.floor(Math.random() * 1000000),
      name: input,
      status: false
    };
  }
  return (
    <>
      <h2>Danh sách công việc</h2>
      <input onChange={(e) => setInput(e.target.value)} placeholder='Nhập tên công việc' type="text" />
      <button onClick={handleClick}></button>
      <Jobs newJob={job}></Jobs>
    </>
  )
}

export default App
