/*
    Các cách khởi tạo đối tượng
    1. let,const,var = {}
    2. new Object()
    3. tạo hàm tạo contructor
    ex: function Student(name){
        this.name = name;
    }
    let std1 = new Student(""); Đây mới là đi tạo đối tượng
    4. class Person{
        contructor(name, age, address){
            this.name = name;
            this.age = age;
            this.address = address;
        }
    }
    let person1 = new Person("", 20, {}); Đây ms là tạo đối tượng thôi qua từ khóa new
    - Đối tượng gồm:
        + Thuộc tính;
        + Hành vi;
    OOP: gồm 4 tính chất
        1. Tính đóng gói (Encapsulation);
            + Che giấu thông tin của đối tượng
            ==> Bảo mật hơn cho các truy cập
        2. Tính kế thừa (Inheritance);

        3. Tính đa hình (Polymorphism);
        4. tính trừu tượng (Abstraction);
    */ 
// class Person{
//     name:string;
//     age:number;
//     firstName: string;
//     lastName: string
//     constructor(age:number, firstName: string, lastName:string){
//         this.age = age;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.name = `${firstName} ${lastName}`;
//     }
//     showInfo():void{
//         console.log(`Xin chào ${this.name}`);
//     }
//     showName():void{
//         console.log(`Xin chào ${this.name}`);
//         this.name = `${this.firstName} ${this.lastName}`;
//     }
// }
// let std1 = new Person( 20, "Vũ", "Minh Thu");
// std1 đc gọi là 1 instance của class Person
// std1.showInfo();
// Tính đóng gói: encapsulation
// access modifier: Pham vi truy cập
/**
   public: 
   private: 
   proceted: Kế thừa,
   khi class con kế thừa class cha thì class con sẽ có phương thức của class cha => class con ko truy cập đc thuộc tính của class cha
 **/ 

// std1.firstName = "Lương";
// std1.lastName = "Vũ";
// std1.showName();