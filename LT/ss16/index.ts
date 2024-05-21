// function a(a: number|string|undefined|null):unknown{
//     return typeof(a);
// }
// console.log(a(5));
// console.log(a("H"));
// console.log(a(undefined));

function generics<T>(params: T): T[]{
    if(Array.isArray(params)){
        return [params[params.length - 1]];
    }else if(params === 0){
        return [params];
    }
    else if(!params){
        return []
    }
    else{
        return [params]
    }
}
console.log(generics([5]));
console.log(generics(5));
console.log(generics(["h"]));
console.log(generics([5, 6]));
console.log(generics(["h", "i"]));
console.log(generics(undefined));
console.log(generics(0));