export const initState = {
    token: '',
    user: { id: '', name: '', nickName: '', email: '', address: '', password: '' }
}

const reducer = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'token': newState.token = action.payload; break;
        case 'user': newState.user = action.payload; break;
        default:
    }

    return newState;
}

export default reducer;