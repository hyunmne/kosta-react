import axios from 'axios';
import { useState, useEffect } from 'react';

const UserInfo = () => {

    const [user, setUser] = useState({name:'', tel:'', email:'', address:''})

    useEffect(()=>{
        axios.get("http://localhost:8090/userInfo")
            .then(res=>{
                setUser({...res.data});
            })
            .catch(err=>{
                console.log(err);
            })
    },[]) // 한번만 실행하려면 대괄호

    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>{user.tel}</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{user.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo;