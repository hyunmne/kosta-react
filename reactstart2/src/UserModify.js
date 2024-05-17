import axios from 'axios';
import { useState } from 'react';

const UserModify = () => {
    const [user,setUser] = useState({name:'', tel:'', email:'', address:''});
    const changeValue = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }
    const submit = (e) => {
        let formData = new FormData();
        formData.append("name", user.name);
        formData.append("tel", user.tel);
        formData.append("email", user.email);
        formData.append("address", user.address);

        axios.post("http://localhost:8090/userModify", formData)
            .then(res=>{
alert(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td><label for="name">이름</label></td>
                        <td><input type="text" id="name" name="name" onChange={changeValue}></input></td>
                    </tr>
                    <tr>
                        <td><label for="tel">전화번호</label></td>
                        <td><input type="text" id="tel" name="tel" onChange={changeValue}></input></td>
                    </tr>
                    <tr>
                        <td><label for="email">이메일</label></td>
                        <td><input type="text" id="email" name="email" onChange={changeValue}></input></td>
                    </tr>
                    <tr>
                        <td><label for="address">주소</label></td>
                        <td><input type="text" id="address" name="address" onChange={changeValue}></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <button onClick={submit}>변경</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserModify;