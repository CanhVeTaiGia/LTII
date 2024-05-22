import { useState } from "react";

interface User{
  name: string,
  id: number,
}
export default function Input() {
  const [user, setUser] = useState<User>({
    name: '',
    id: Math.floor(Math.random() * 1000000),
  });
  return (
    <>
      <label htmlFor="">user name</label>
      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({
            id: Math.floor(Math.random() * 1000000),
            name: e.target.value
          });
          console.log(user);
        }}
      />
    </>
  );
}
