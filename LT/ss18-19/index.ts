// class
// function decoratorProperty<T extends { new (...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     age = 18;
//     sayhello = () => {
//       console.log("hello");
//     };
//   };
// }
// @decoratorProperty
// class Student{
//   userName: string;
//   constructor(userName: string) {
//     this.userName = userName;
//   }
// }


// Khởi tạo đối tượng student
// let std1 = new Student("minh thu");
// console.log(std1);
// muốn thêm thuộc tính age => dùng decorator

// method
// Phải có 3 đối số
// function decorMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
//   console.log(target);
// }
// @decorMethod
// class Test {
//   @decorMethod
//   sum(a: number, b: number){
//     return a + b;
//   }
// }
// let test = new Test();
// console.log(test.sum(1,2));
