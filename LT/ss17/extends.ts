// function merge<T extends {
// }, U>(param1: T,param2: U): T & U{
//     return Object.assign(param1, param2)
// }
// console.log(merge({a: 2}, {b: 4}));

// function add(a: number, b?: number): number{
//     return b? a + b: a;
// }

// console.log(add(1));
// console.log(add(1, 6));
// type A = {
//     name: string;
// }

// type B = {
//     age: number;
// }

// let obj1: A = {
//     name: "a"
// }
// let obj2 =

// implements

// function test2(param:{fName:string, lName:string}): {}{
//     return {...param, fullName: param.fName + param.lName};
// }
// console.log(test2({fName: "Lê", lName: "Minh Thu"}));
// ? Sang generic
// function test3<T extends {fName: string, lName: string}>(param: T){
//     return ...param, fullName: param.fName + param.lName
// }

// function deQuy(a: number): number{
//     if(a === 1){
//         return 1
//     }
//     return a * deQuy(--a);
// }

// console.log(deQuy(5));

function flapMap<T>(param: T): T[]| T{
    if(Array.isArray(param)){
        return param.flatMap(item => item);
    }else{
        return param
    }
}

console.log(flapMap([[1, 2], 3, [5, 6], [7, [8, 9]]]));
