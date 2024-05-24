import { useState } from "react";
import axios from 'axios';
import {userAtom} from './atoms';
import {useAtom, useSetAtom} from 'jotai';
import {useNavigate} from 'react-router-dom';

const 
SearchUser = () => {
    // const [user, setUser] = useAtom(userAtom); // 초기 값과 변경 값을 같이 가져옴 
    // const user = useAtomValue(userAtom); 초기 값만 가져옴
    const setUser = useSetAtom(userAtom); // 변경되는 값만 가져옴
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const submit = () => {
        axios.get(`http://localhost:8090/getUser1/${name}`)
            .then(res=>{
                console.log(res);
                setUser(res.data);
                navigate("/userInfo");
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <div>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" onInput={(e)=>setName(e.target.value)} />
                            <button onClick={submit}>검색</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SearchUser;