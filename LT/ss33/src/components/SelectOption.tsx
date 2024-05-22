import { useState } from "react";

export default function SelectOption() {
  const [select, setSelect] = useState<string>("");
  return (
    <>
      <select
        onChange={(e) => {
          setSelect(e.target.value);
          console.log(select);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
}
