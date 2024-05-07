import {useState} from 'react';

export default function Deposit() {

    const [acc, setAcc] = useState({id:'',money:''});
    const [message, setMessage] = useState('');
    const submit = (e) => {
        e.preventDefault();
        // backend를에 acc를 전송한 후 잔액을 받는다.
        setMessage(`입금 성공 (잔액 : ${100000+ +acc.money})`); // + + 를 해야 숫자로 인식해 더해줌,... .... 
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