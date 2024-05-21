"use strict";
// let student: string[] = ["Hoa", "Hồng"];
// let number: number[] = [5, 6, 6];
// let numbers : Array<number> = [3,6,7,2,4,6];
// let cats : {name: string, height: number, color: string} = {
//     name: "cat",
//     height: 50,
//     color: "orange"
// }
// cats.color = "black";
// enum Role{
//     ADMIN = 5,
//     USER,
// }
// let person: {name:string, age:number, role:Role.ADMIN} = {
//     name: "Minh",
//     age: 20,
//     role: 5,
// }
// function sayHello():void{
//     console.log("Xin chào PTIT");
// }
// console.log(sayHello());
// // sayHello();
// let a:unknown
// console.log(a);
/*
    unknown cx giống any nhưng chặt hơn
*/
// function typeAny(userName: any):void{
//     if(typeof userName === "string"){
//         console.log("type unknown", userName.toUpperCase());
//     }
// }
// typeAny("h")
/*
    never
    Thường dùng trong vòng lặp vô tận, không có điểm kết thúc
*/
// function typeNever():never{
//     let i:number = 0;
//     while(i < 1000){
//         console.log("Vòng lặp tuần hoàn");
//         i++;
//     }
// }
// typeNever()
