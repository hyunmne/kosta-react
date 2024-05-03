function Calculator(x,y) {
    this.x=x;
    this.y=y;

    /*
    // 중괄호가 있으면 return을 써줘야됨
    this.sum = () => {
        return x+y;
    } */

    // 중괄호 없으면 리턴 생략 ㄱㄴ 
    // 특정함수의 명령어가 여러 개일 경우는 중괄호를 써야한다
    this.sum = () => x+y;
    this.mul = () => x*y;
}

let calc = new Calculator(20,10);
console.log(calc.sum());
console.log(calc.mul());