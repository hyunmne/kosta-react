import { useContext } from "react"; // 받아온 데이터를 사용 할 때 필요한 함수
import {UserContext} from "./Context1";

const Context5 = () => {
    const context = useContext(UserContext);
    return (
        <>
            <h1>Context5</h1>
            <h2>{`hello ${context.user} again `}</h2>
            <input type="text" onChange={(e)=>context.setUser(e.target.value)} />
        </>
    )
}

export default Context5;