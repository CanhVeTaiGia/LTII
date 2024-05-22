import React, { useState } from 'react'

export default function StateFunction() {
    const [number, setNumber] = useState<number>(0);
    const [fullName, setFullName] = useState<string>("Vỹ");
    // Hàm useState trả về 1 cái mảng bên trong mảng có 2 giá trị 1 là giá trị, 2 là 1 hàm xử lí
    let handleClick = ()  =>{
      setNumber(number + 1);
    }
    return (
    <>
    {/* 
        React ra đời năm 2013
        - trc 2018, trong function không quản lí state được mà chỉ quản lí được state đc trong class
        - 10/2018: Hook ra đời bổ sung cho function có thể quản lí state được useState;
     */}
      <p>Giá trị number ban đầu là: {number}</p>
      <button onClick={handleClick}>
        Tăng
      </button>
     <p>Xin chào {fullName}</p>
    </>
  )
}
