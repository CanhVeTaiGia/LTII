import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [numbers, setNumber] = useState<number[]>([])
  const [active, setActive] = useState<boolean>(false)
  useEffect(() => {
    console.log("Đang gọi vào useEffect");
  }, [count]);
  const handleClick = () => {
    // let randomNumber = Math.floor(Math.random() * 10);
    // setNumber([...numbers, randomNumber]);
    setCount(count + 1);
  }
  // Đi viết logic xử lý 
  return (
    <>
      {/* 
      Tất cả các hook bản chất là những function khi dùng phải import để dùng
      useEffect nhận vào 2 đối số 
      1. callback (arrow function)
      2. [] || [deps]
      ==> useEffect sẽ có 3 cách dùng
      C1. Chỉ chứa callback là 1 cái arrow function
      Khi component đc mount vào DOM thì useEffect được gọi
      Mỗi lần component được re-render thì nó cx được gọi
      Khi mỗi lần component re-render thì useEffect sẽ không bị gọi lại
      C2. Chứa 1 callback và 1 []
      Cũng được gọi sau khi components mount vào DOM
      C3. Chứa callback và [dependency]
      - Cũng được gọi khi mount vào DOM khi dependency thay dổi thì useEffect được gọi
      - componentDidMount đc gọi sau khi component đc render lần đầu

      useEffect phương thức thg dùng để xử lí các tác vụ như call API để lấy dữ liệu
      - Thg dùng để xử lí các side Effect (tác dụng phụ)
    */}
    <p>Giá trị {count}</p>
    <button onClick={handleClick}>Click</button>
    </>
  );
}
