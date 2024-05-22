import { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [count, setCount] = useState<number>(0);
  const useRef1 = useRef(0);
  const focusInput = useRef<HTMLInputElement>(null);
  console.log(useRef1);
  let index = 0;
  const handleClick = () => {
    index++;
    setCount(count + 1);
    useRef1.current = useRef1.current + 1;
  };
  console.log(index, useRef1.current);
  const login = () => {};
  useEffect(() => {
    focusInput.current?.focus();
  });
  return (
    <>
      {/* 
  Nó là hook react cung cấp 
  Các dùng: import vào để dùng
  Kết quả trả về của useRef là 1 đối tượng và đối tượng có 1 thuộc tính mặc định là: current
  Nó có 2 cách dùng chính +
  1. Khi mỗi lần component re-render thì nó không tạo ra referebtype mà vẫn giữ nguyên giá trị ban đầu
  2. Giúp mặc định focus vào ô input mà mình muốn
  */}
      <label htmlFor="">Nhập tên</label>
      <input ref={focusInput} type="text" />
      <button onClick={login}>login</button>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>click</button>
    </>
  );
}
