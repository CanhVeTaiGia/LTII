import Job from './Job'
import { MouseEventHandler, useState } from "react"

interface Props{
    id: number,
    name: string,
    status: boolean
}
interface J{
    newJob: Props
}

export default function Jobs(props: J) {
    const [jobs, setJobs] = useState<Props[]>([
    localStorage.getItem('jobs')? JSON.parse(localStorage.getItem('jobs') || '[]') : []
    ]);
    const {newJob} = props;
    return (
    
    <>
        <table border={1}>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((e, i) =>{
                    return(<Job key={i} jobs={e} stt={i + 1}></Job>)
                })}
            </tbody>
        </table>
    </>
  )
}
