class User{
    constructor(name) { // 생성자 함수 
        this.name = name;
    }

    sayHello() { // 멤버 함수
        console.log(`Hello! ${this.name}`)
    }
}

let user = new User('hyun');
user.sayHello();