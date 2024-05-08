import {useState} from 'react';
import './App.css';
import axios from 'axios';

export default function Withdraw() {

    const [acc, setAcc] = useState({id:'',money:''});
    const [message, setMessage] = useState('');
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8090/withdraw", acc)
            .then(res=> {
                setMessage(`출금 성공 (잔액 : ${res.data})`);
            })
            .catch(err=>{
                setMessage(`출금 실패 : ${err.response.data}`);
            })
    }

    return (
        <div className="route">
            <h3>출금</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <td><input type="text" name="id" onChange={(e)=>setAcc({...acc,id:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <th>출금액</th>
                        <td><input type="text" name="money" onChange={(e)=>setAcc({...acc,money:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><input type="submit" value="출금" onClick={submit} /></td>
                    </tr>
                </tbody>
            </table>
            <div>{message}</div>
        </div>
    )
}