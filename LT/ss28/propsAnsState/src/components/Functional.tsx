import React from 'react'

interface Props{
    name: string,
    students: string[]
}
export default function Functional(a: Props) {
      const {name} = a
    const {students} = a
    // console.log(students);
    return (
    <>
        <p>Xin chào {name}</p>
        <ul>
            {students.map((item, index) =>{
                return <li key={index}>{item}</li>;
            })}
        </ul>
        
    </>
  )
}
