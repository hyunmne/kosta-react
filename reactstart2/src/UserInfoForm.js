import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const UserInfoForm = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({ name: '', tel: '', email: '', address: '' });
   // const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate();
    const submit = () => {
        // axios.get(`http://localhost:8090/getUser?name=${name}`)
        axios.get(`http://localhost:8090/getUser1/${name}`)
            .then(res => {
                console.log(res.data);
                setUser({ ...res.data })
                //setIsUser(true)
                navigate(`/userInfo/${JSON.stringify(res.data)}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type='text' onChange={(e) => setName(e.target.value)} />
                            <button onClick={submit} >조회</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            {user.name !== '' && 
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
            </table>}
        </div>
    )
}

export default UserInfoForm;