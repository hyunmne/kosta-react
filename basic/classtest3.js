class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    info() {
        return `이름 : ${this.name}, 나이 : ${this.age}`;
    }
    
}

class Student extends Person {
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }

    info () {
        return  `이름 : ${this.name}, 나이 : ${this.age}, 학과 : ${this.subject}`;
    }
}

let person = new Person('hong', 20);
console.log(person.info());

let student = new Student('song', 30, 'sports');
console.log(student.info());