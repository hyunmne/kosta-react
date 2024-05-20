import {atomWithStorage, createJSONStorage} from 'jotai/utils';

export const token = atomWithStorage(
    'token',
    '',
    createJSONStorage(()=>sessionStorage)
)

export const userAtom = atomWithStorage(
    'user',
    {name:'', tel:'', email:'', address:''},
    createJSONStorage(()=>sessionStorage)
)