import {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

export default function Join(){
    
    const navigate = useNavigate();
    const[mem, setMem] = useState({id:'', name:'', password:'', address:'', email:''});
    const changeValue = (e) => {
        setMem({...mem, [e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/join`, mem)
            .then(res=>{
                navigate("/login");
            })
            // .catch(err=>{
            //     alert(err.response.data);
            // })
    }

    return (
        <div className="route">
            <h3>회원가입</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" name="id" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td><input type="text" name="name" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input type="text" name="password" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td><input type="text" name="email" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td><input type="text" name="address" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="가입" onClick={submit} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}