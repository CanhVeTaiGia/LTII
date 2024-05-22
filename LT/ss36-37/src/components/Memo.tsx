import { memo } from "react";

interface Props {
  count: number;
  handleIncrease: Function
}
function Memo({ count }: Props) {
  console.log("component Memo đc gọi");
  
  return (
    <>
      {/* 
    HOC: higher order compoents - Hàm bậc cao trong Javascript
    kiểm tra xem props nào có thay đổi hay ko? render : ko render 
    Chỉ cần 1 props thay đổi component sẽ được re-render
    Chỉ cần 1 props thay đổi component sẽ được re-render
  */}
    </>
  );
}
export default memo(Memo);
