import {useState, createContext} from 'react';
import Context2 from './Context2';

export const UserContext = createContext();
const Context1 = () => {
    const [user, setUser] = useState("Jesse Hall");
    const context = { // 자식이랑 공유하고 싶은 함수들을 객체로 묶는다.
        user:user,  // key : value (생략 시, 둘이 같음)
        setUser:setUser.bind(this) // 함수 . . . 
    }
    return (
        // 공유하려는 데이터를 provider로 감싸면 데이터가 공유 된다 
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <Context2/>
        </UserContext.Provider>
    )
}

export default Context1;