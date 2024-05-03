class Clock{ // clock 객체 생성
    constructor({template}){ // 생성자
        this.template = template; 
    }

    render() {
        let date = new Date();
        let hour = date.getHours();
        if(hour<10) hour='0'+hour;
        
        let mins = date.getMinutes();
        if(mins < 10) mins='0'+mins;
        
        let second = date.getSeconds();
        if(second < 10) second = '0'+second;

        let output = this.template.replace('h', hour).replace('m',mins).replace('s',second)
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(()=>this.render(),1000); // 1초마다 render 함수 실행
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock({template:'h-m-s'}); // 형?식? 설정?
clock.start();
setTimeout(()=>clock.stop(),10000);

/*
setTimeout(()=>clock.stop(),10000); : 10초 뒤에 clock.stop 함수를 실행시킴
    ()=>clock.stop() : 함수 자체를 파라미터로 넘김
    10000 : 발생 시간? (10초)



- 여러가지 js 함수 작성법 -
function func() {console.log('hello')}

let f1 = function() {
    console.log('hi')
}

let f2 = ()=>console.log('hi') // 화살표 함수 
*/