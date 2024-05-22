import { useCallback, useState } from "react";
import Memo from "./components/Memo";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseReduce from "./components/UseReduce";
import UseReducerAdvanced from "./components/UseReducerAdvanced";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const handleIncrease = useCallback(() => {
    const handleIncrease = () => {};
    return handleIncrease;
  }, []);
  return (
    <>
      {/*
    Khi component App mỗi khi commponent re-render || render lần đâu thì các component con sẽ render
    */}
      <p>Giá trị của count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <UseEffect />
      <UseRef />
      <UseContext />
      <Memo handleIncrease={handleIncrease} count={count} />
      <UseCallback />
      <UseMemo />
      <UseReduce />
      <UseReducerAdvanced />
    </>
  );
}
