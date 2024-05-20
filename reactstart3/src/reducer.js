// state : 공유하고자 하는 데이터
// reducer : state 변수를 변경하는 함수 
// action : state 변수 가운데 특정 요소를 특정 값으로 변경 지정
// dispatch : reducer를 action으로 호출
// selector : state 변수 접근 

export const initState = {
    token:'', // 문자열
    user:{name:'',tel:'',email:'',address:''} // 객체
}

export const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'TOKEN': return {...state, token:action.payload};
        case 'USER': return {...state, user:{...action.payload}};
        default: return state;
    }
}

// 위 아래 둘이 같은 코드임 
// const reducer2 = (state=initState, action) => {
//     let newState = {...state};
//     switch(action.type) {
//         case 'TOKEN': newState.token=action.payload; break;
//         case 'USER': newState.user={...action.payload}; break;
//         default: break;
//     }
//     return newState;
// }