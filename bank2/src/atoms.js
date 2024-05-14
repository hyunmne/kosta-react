import {atomWithStorage, createJSONStorage} from 'jotai/utils';

export const initUser = {id:'', name:'', password:'', email:'', address:''};

// 공유할 데이터를 분리하여 선언
export const userAtom = atomWithStorage(
    'user', // 이름
    initUser, // 초기값
    createJSONStorage(()=>sessionStorage),
);

export const tokenAtom = atomWithStorage(
    'token',
    '',
    createJSONStorage(()=>sessionStorage),
);
