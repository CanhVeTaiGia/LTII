import React, { useState } from 'react'
import Modal from './Modal'

export default function Condition() {
    const [toggle, setToggle] = useState<boolean>(false)
    const handleClick = () =>{
        setToggle(!toggle)
    }
  return (
    <>
        {toggle? <Modal/> : ''}
        <button onClick={handleClick}>Click</button>
    </>
  )
}
