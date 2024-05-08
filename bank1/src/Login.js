import {useState} from 'react'; 
import './App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [mem, setMem] = useState({id:'', password:''})
    const changeValue = (e) => {
        setMem({...mem, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/login`, mem)
            .then(res=>{
                navigate("/makeAccount");
            })
            .catch(err=>{
                alert(err.repsonse.data);
            })
    }

    return(
        <div className="route">
            <h3>로그인</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="id" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="password" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="로그인" onClick={submit} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 