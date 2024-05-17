import {useState} from 'react'
import axios from 'axios';

const User = () => {

    // 객체로 입력받다 
    const [user,setUser] = useState({name:'', tel:'', email:'', address:''});
    const changeValue = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        console.log(user);
        axios.post("http://localhost:8090/regUser", user)
            .then(res=>{
                alert(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
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
                            <button onClick={submit}>전송</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;