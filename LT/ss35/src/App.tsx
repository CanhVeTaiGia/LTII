import UseState from "./components/UseState";


export default function App() {
  return (
    <>
      {/* Hook: móc
  + react hook bản chất là những cái hàm, phuong thức giúp cho function component
  có thể thực hiện các tính năng y hệt như class component
  + react hook đc ra đời ở phiên bản 16.8 (2018)
  + trước khi hook ra đời thì function component chỉ đơn giản là tạo ra các UI
  function Header () {
    return <>header</>
  }
  +hook ra đời giúp cho code ngắn gọn gàng, dễ dàng sử dụng hơn so với class component
  dự án bây giờ đa phần sử dụng react-hook
  + sau này đi làm có những dự án vẫn đang dùng class (maintain chỉnh sửa)
  + hook chỉ áp dụng với function component
  + khi làm việc với các hook phải để ý đến đầu vào, đầu ra của các phương thức
  + các hook học:
  1. useState
  2. useEffect
  3. useRef
  4. useReducer
  5. useMemo
  6. useCallback */}
      <UseState/>
    </>
  );
}
