import { useMemo, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
let cart: Product[] = [
  { id: 1, name: "item 1", price: 100, quantity: 1 },
  { id: 2, name: "item 2", price: 200, quantity: 2 },
  { id: 3, name: "item 3", price: 300, quantity: 3 },
];
export default function UseMemo() {
  const [count, setCount] = useState<number>(0);
  /*
    ở đây có logic tính toán như sau
  */
  const [myCart, setMyCart] = useState<Product[]>(cart);
  let price = useMemo(() => {
    let payment = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return payment;
  }, [myCart]);
  return (
    <>
      {/*
        Memory: Ghi nhớ
        Đây là 1 hookjs
        sinh ra giúp ghi nhớ lại những tính toán phức tạp và chỉ tính toán lại khi cần thiết
      */}
      <p>{price}</p>
      <button
        onClick={() => {
          let newProduct = { id: 4, name: "item 4", price: 300, quantity: 4 };
          myCart.push(newProduct);
          setMyCart([...myCart]);
        }}
      >
        Tăng giá
      </button>
    </>
  );
}
