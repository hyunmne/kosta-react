export const reducer = (state,action) => {
    if(state===undefined) {
        return {
            data1:'NONE',
            data2:0
        }
    }

    const newState = {...state};
    switch(action.type){
        case 'STRING' : newState.data1=action.data; break;
        case 'INT' : newState.data2=action.data; break;
        default:
    }

    return newState;
}