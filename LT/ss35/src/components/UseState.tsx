import React ,{ useState } from "react";

export default function UseState() {
  let carts = [
    { name: "Iphone 5", price: 200000, quantity: 5 },
    { name: "Iphone 6", price: 250000, quantity: 6 },
  ];
  let payment = carts.reduce((currentValue, item) => {
    return currentValue + item.price * item.quantity;
  }, 0);
  // cú pháp destructuring
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount((pre: number) => pre + 1);
  };
  console.log("Đã re-render");
  
  const [price, setPrice] = React.useState<number>(payment);
  return (
    <>
      {/*
        useState = use + state (sử dụng trạng thái)
        trạng thái dữ liệu tức là khi dữ liệu thay đổi thì giao diện nó thay đổi theo
        các hook là các phương thức được react cung cấp cho nên khi sử dụng phải import để dùng
        minh thu, 0 được gọi là giá trị khởi tạo (initail value)
        khi setCount thì component re-render lại 
        - khi có nhiều useState giống nhau cùng chạy 1 lúc thì sẽ đưa hết các useState vào 1 queue vào (hàng đợi) để xử lí
        - đối với kĩ thuật batch update thì nó lấy giá trị trả về của useState trước làm giá trị tham số đầu vào và tham số đầu vào của useState sau
        - initial của useState
            + truyền trực tiếp giá trị
            + dùng arrow-function để trả về kết quả
        */}
      <p onClick={handleClick}>{count}</p>
      <p>Giá phải trả là: {price}</p>
    </>
  );
}
