interface Props{
    id: number,
    name: string,
    status: boolean
}
interface Iprops{
    jobs: Props,
    stt: number
}
export default function Job(props: Iprops) {
    const {jobs} = props;
    const {stt} = props;
    console.log(jobs);
    
  return (
    <>
        {jobs ?<tr>
            <td>{stt}</td>
            <td>{jobs.name}</td>
            <td>{jobs.status}</td>
        </tr> : ''}
    </>
  )
}
