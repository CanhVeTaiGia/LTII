// import React from 'react'
import Class from './components/Class'
import Functional from './components/Functional'
import StateClass from './components/StateClass';
import StateFunction from './components/StateFunction';

export default function App() {
  const fullName: string = "Rikkei Academy";
  const students: string[] = ["Hoa", 'Hồng', 'Huế'];
  const test: number[] = [1, 4, 2, 5, 7 ,6, 5];
  return (
    <>
      <Functional name={fullName} students={students}></Functional>
      <Class test={test}></Class>
      <StateFunction></StateFunction>
      <StateClass></StateClass>
    </>
  )
}
