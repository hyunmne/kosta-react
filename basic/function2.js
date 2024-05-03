function Person(name, age){
    this.name=name;
    this.age=age;

    // 함수 안에 함수를 넣을 순 없음
    // 변수에 함수를 값으로 넣은 것
    this.info = () => {
        return `이름 : ${this.name}, 나이 : ${this.age}`;
    }

}

let person = new Person('hong', 20)
console.log(person.info())