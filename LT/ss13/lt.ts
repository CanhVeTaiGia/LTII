// Đa hình cho phép các đối tượng thuộc các lớp khác nhau được coi là đối tượng của một siêu lớp chung. Nó cho phép một giao diện duy nhất thể hiện các loại đối tượng khác nhau, mang lại sự linh hoạt và khả năng mở rộng cho cơ sở mã.
// Đa hình là một khái niệm quan trọng khác trong Lập trình hướng đối tượng (OOP), cho phép các đối tượng thuộc các lớp khác nhau được coi là đối tượng của một siêu lớp chung. Nó cho phép một giao diện (phương thức hoặc thuộc tính) duy nhất thể hiện các loại đối tượng khác nhau, mang lại sự linh hoạt và khả năng mở rộng cho cơ sở mã. Tính đa hình thường đạt được thông qua việc ghi đè phương thức và nạp chồng phương thức.

// Có hai loại đa hình:
// Đa hình thời gian biên dịch (Đa hình tĩnh): Loại đa hình này được giải quyết tại thời điểm biên dịch. Nó xảy ra khi sử dụng nạp chồng phương thức, tức là có nhiều phương thức có cùng tên nhưng danh sách tham số khác nhau. Trình biên dịch xác định phương thức thích hợp để gọi dựa trên chữ ký của phương thức và các đối số được truyền trong quá trình gọi hàm.
// Đa hình thời gian chạy (Đa hình động): Loại đa hình này được giải quyết trong thời gian chạy. Nó xảy ra khi sử dụng ghi đè phương thức, tức là có một phương thức trong lớp con có cùng tên và chữ ký với phương thức trong lớp cha. Phương thức được gọi được xác định trong thời gian chạy dựa trên loại đối tượng thực tế.
// Hãy minh họa cả hai loại đa hình bằng một ví dụ:

// Compile-time Polymorphism (Method Overloading)
class MathOperations {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

const math = new MathOperations();
console.log(math.add(5, 10)); // Output: 15 (number addition)
console.log(math.add("Hello, ", "World!")); // Output: "Hello, World!" (string concatenation)

// Run-time Polymorphism (Method Overriding)
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

function animalSound(animal: Animal) {
    animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();


animalSound(dog); // Output: "Woof!" (Dog's sound)
animalSound(cat); // Output: "Meow!" (Cat's sound)
// Trong ví dụ này, trước tiên chúng tôi chứng minh tính đa hình trong thời gian biên dịch thông qua việc nạp chồng phương thức trong MathOperationslớp. Chúng tôi xác định hai phiên bản của addphương thức: một phiên bản để cộng số và một phiên bản khác để nối chuỗi. Phương thức thích hợp được chọn tại thời điểm biên dịch dựa trên các loại đối số được sử dụng trong lệnh gọi hàm.

// Tiếp theo, chúng tôi chứng minh tính đa hình trong thời gian chạy thông qua ghi đè phương thức trong các lớp Animal, Dog, và Cat. Lớp này Animalcó một makeSoundphương thức cung cấp âm thanh chung. Cả hai lớp Dogvà Catđều ghi đè makeSoundphương thức này để cung cấp âm thanh cụ thể của chúng. Khi chúng ta gọi animalSoundhàm với các đối tượng khác nhau của Dogvà Cat, makeSoundphương thức thích hợp sẽ được xác định động trong thời gian chạy dựa trên loại đối tượng thực tế.

// Tính đa hình cho phép bạn viết mã linh hoạt và có khả năng mở rộng hơn bằng cách xử lý các đối tượng dựa trên giao diện chung thay vì các loại cụ thể của chúng. Nó đóng một vai trò quan trọng trong việc thiết kế các ứng dụng quy mô lớn và đơn giản hóa sự tương tác giữa các lớp và mô-đun khác nhau.