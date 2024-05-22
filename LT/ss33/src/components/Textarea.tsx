import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState<string>("");
  return (
    <>
      <textarea
        onChange={(e) => {
          setText(e.target.value);
          console.log(text);
        }}
      ></textarea>
    </>
  );
}
