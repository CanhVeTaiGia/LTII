import React, { useState } from "react";

interface User{
    name: string,
    email: string
}
export default function Function() {
    const [user, setUser] = useState<User>({
        name: 'Hoa',
        email: 'h@gmail.com'
    });
    const register = () =>{
        console.log(user);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user, [name]: value
        })
    }
    return (
        <>
            <input name='name' onChange={handleChange} placeholder="Họ tên" type="text" />
            <input name='email' onChange={handleChange} placeholder="Email" type="text" />
            <button onClick={register}>register</button>
        </>
    )
}
