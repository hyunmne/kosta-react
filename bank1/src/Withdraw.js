import {useState} from 'react';

export default function Withdraw() {

    const [acc, setAcc] = useState({id:'',money:''});
    const [message, setMessage] = useState('');
    const submit = (e) => {
        e.preventDefault();
        // backend를에 acc를 전송한 후 잔액을 받는다.
        setMessage(`출금 성공 (잔액 : ${100000-acc.money})`); 
    }

    return (
        <>
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
        </>
    )
}