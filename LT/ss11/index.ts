class User{
    userName: string;
    protected password: string | number;
    email: string;
    constructor(userName: string, password: string | number, email: string) {
        this.userName = userName;
        this.password = password;
        this.email = email;
    }
    sayHello():void{
        console.log("Hello");
    }
    get getPassword():string | number{
        return this.password
    }
}

class Admin extends User{
    permission: string;
    constructor(userName: string, password: string | number, email: string, permission: string){
        super(userName, password, email);
        // this.userName = userName;
        // this.password = password;
        // this.email = email;
        this.permission = permission;
    }
    // override ghi đè
    // overload ko ghi đè
    sayHello(): void {
        console.log(super.sayHello());
    }
}