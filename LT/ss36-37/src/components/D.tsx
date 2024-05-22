import { SetUseContext } from "./UseContext";
import { useContext } from "react";

export default function D() {
  const getData = useContext(SetUseContext);
  return <>D{getData}</>;
}
