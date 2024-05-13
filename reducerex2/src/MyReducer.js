export const initState = {
    id : 'hong',
    nickname : 'gildong',
    subject : 'computer',
    grade:1
}

export const reducer = (state, action) => {
    let newState;
    switch(action.type){
        case 'ID': newState = {...state, id:action.payload}; break;
        case 'NICKNAME' : newState = {...state, nickname:action.payload}; break;
        case 'SUBJECT' : newState = {...state, subject:action.payload}; break;
        case 'GRADE' : newState = {...state, grade:action.payload}; break;
        default : newState = {...state};
    }

    return newState;
}