// Các hàm nâng cao js
// 1. forEach()
// 2. map()
// 3. filter()
// 4. reduce()
// Sự khác nhau giữa arrow func vs func bth
// ==> Ngoài cú pháp ngắn gọn
// 1. arrow func phải gọi sau khi khai báo
// spread, rest
// ex:
// declaration function (func bth);
// function sum(a, b){
//     return a + b
// }
// console.log(sum(1, 5));
// const sum = (a, b) =>{
//     return a + b
// }
// console.log(sum(1, 6));
// 2. Không thể dùng this
// 3. Không dùng đc arguments
// 4. Không thể dùng hàm tạo constructor
// let obj = {}
// new Object
// class

// function Student(name, age){
//     this.name1 = name;
//     this.age1 = age;
// }

// let student1 = new Student("Hoa", 25)

// const Student = (name, age) =>{
//     this.names = name;
//     this.ages = ages;
// }
// let S
// console.log(Student1("Tran", 27));

// 5. Binding this.
// Đối vs function bth this đại diện cho đối tượng đấy
// => func bth: this => đối tượng ấy
// => arrow func: this => window


// let obj = {
//     name: 'Hồng',
//     address: 'Thanh Hóa',
//     getAddress: ()=>{
//         console.log(this.address);
//     }
// }

// console.log(obj.getAddress());

