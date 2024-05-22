import { useReducer } from "react";

interface Action {
  type: string;
  payload?: any;
}
export default function UseReduce() {
  // Khai báo giá trị khởi tạo
  const action = (type: string, payload: number) => {
    return {
      type,
      payload,
    };
  };
  const initial: number = 0;
  // Khởi tạo hàm reducer
  const reducer = (state = initial, action: Action) => {
    switch (action.type) {
      case "INCREASE":
        return state + action.payload;
      case "DECREASE":
        return state - action.payload;
      default:
        return state;
    }
  };
  /*
  Đối vs những action có dữ liệu phức tạo nên tạo ra funtion
  */
  // Dùng destructoring để hứng kết quả
  const [count, dispatch] = useReducer(reducer, initial);
  const increase = () => {
    dispatch(action("INCREASE", 1));
  };
  const decrease = () => {
    dispatch(action("DECREASE", 1));
  };
  return (
    <>
      {/*
  Là 1 hook
  * Sinh ra để làm gì?
  1. Sinh ra để quản lí những state phức tạp
  + Khi muốn quản lí state thì dùng useState (Đơn giản) - 
  + Về bản chất những gì useState làm được thì useReducer cx làm được
  nhưng nó sẽ đi quản lí những state phức tạp
  2. Tiền đề để sau học redux(Thư viện giúp tạo 1 kho chứa dữ liệu)
  * Cách dùng
  B1. import nó vào
  B2. useReducer(): 
  Nhận vào 2 tham số:
  1. hàm reducer
  2. giá trị khởi tạo
  */}
      <p>Giá trị count: {count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </>
  );
}
