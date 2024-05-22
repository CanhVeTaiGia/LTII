import { createContext, useState } from "react";
import A from "./A";

export const SetUseContext = createContext("")
export default function UseContext() {
  const [name, setName] = useState<string>("Vũ");
  return (
    <>
      {/* 
    Đây là 1 hook

      */}
      <SetUseContext.Provider value={name}><A/></SetUseContext.Provider>
    </>
  );
}
