function User(name) { // 생성자 함수, 대문자로 시작 / 반드시 연산자를 붙여 실행함
    this.name = name;
    this.isAdmin = false; // boolean

   //  return this;  //암묵적으로 this가 반환됨
}

let user = new User('hong');
console.log(user.name);
console.log(user.isAdmin);