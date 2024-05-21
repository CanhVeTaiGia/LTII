// Phân biệt arr vs obj
/*
    Dùng typeof ko giải quyết được vấn đề vì typeof arr và obj đều là obj
    Array.isArray(arr) => true || false
*/
// let numbers: number[] = [5,6,7,2,4,8,9];
// console.log(typeof(numbers));
// console.log(Array.isArray(numbers));
// console.log(Object.prototype.toString().toLocaleLowerCase(numbers));

// union type kiểu kết hợp
// console.log(5|6);
// 101 && 110

// let text1:string|number = "hello";
// text1 = 5;
// console.log(text1);

// function sum(a:number|string, b:number):number|string{
//     if(typeof(a) === "number" && typeof(b) === "number"){
//         return a + b;
//     }
// };
// console.log(sum(5, 6));

// let arr:(number|string)[] = [
//     5,"hoa"
// ];
// arr.push(1);
// console.log(arr);

// let arr2:[number,string] = [
//     5, "hoa"
// ];
// console.log(arr2);

// type Test = string|number|null|undefined
// let test1: Test = "";

// console.log("helloWorld");

// type Car = {
//     years: number,
//     type: string,
//     model: string,
// }
// const car:Car = {
//     years: 2024,
//     type: "a",
//     model: "Toyota"
// }
// console.log(car);

// type A = {
//     name:string
// }
// type B = {
//     name: string,
//     address:string,
//     id: number
// }
// type C = A & B;
// let c: C = {
//     name: "minh thu",
//     address: "HN",
//     id: 2,
// }