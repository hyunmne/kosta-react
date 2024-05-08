import {useState} from 'react';
import './App.css';
import axios from 'axios';

export default function Deposit() {

    const [acc, setAcc] = useState({id:'',money:''});
    const [message, setMessage] = useState('');
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/deposit`, acc)
            .then(res=>{
                setMessage(`입금 성공 (잔액 : ${res.data})`); // + + 를 해야 숫자로 인식해 더해줌,... .... 
            })
            .catch(err=>{
                setMessage(`입금 실패 : ${err.response.data}`);
            })

    }


    return (
        <>
            <h3>입금</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <td><input type="text" name="id" onChange={(e)=>setAcc({...acc,id:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <th>입금액</th>
                        <td><input type="text" name="money" onChange={(e)=>setAcc({...acc,money:e.target.value})} /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><input type="submit" value="입금" onClick={submit} /></td>
                    </tr>
                </tbody>
            </table>
            <div>{message}</div>
        </>
    )
}