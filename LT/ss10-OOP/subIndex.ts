class Person{
    public name: string;
    password: string| number;
    age: number;
    address: {
        city: string;
        country: string;
    };
    constructor(name: string, age: number, address: {city: string, country: string}, password: string|number){
        this.name = name;
        this.age = age;
        this.address = address;
        this.address.city = address.city;
        this.address.country = address.country;
        this.password = password
    };
}