let user = {id:10, name:'John', age:30}
let props = {...user}; // user가 바뀌어도 props는 그대로.. ? 

user.name='Song';
console.log(props.name);

// 오른쪽의 객체를 특정 변수에 담아 관리하고 싶을 때 사용 (변수 이름 똑같아야 함)
// let {id} = user; // let id = user.id; 
let {id,name,age} = user;

let {template} = {template:''};

let [a,b,c] = [10,20,30];
let arr1 = [1,2,3];
let arr2 = arr1;
let arr3 = [...arr1];

arr1[0]=100;
console.log(arr2[0])
console.log(arr3[0]); // 변하지 않음. . . 