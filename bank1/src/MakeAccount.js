import {useState} from 'react';
import './App.css';
import axios from 'axios';

export const MakeAccount = () => {
    
    const [acc, setAcc] = useState({id:'',name:'',balance:'',type:'normal',grade:''})
    const changeValue = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/makeAccount`, acc)
            .then(res=>{
                alert(res.data)
            })
    }

    return (
        <div className="route">
            <h3>계좌 개설</h3>
            <table border="1" >
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <td><input type="text" name="id" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td><input type="text" name="name" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>입금액</th>
                        <td><input type="text" name="balance" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>종류</th>
                        <td>
                            <input type="radio" name="type" value="normal"  onChange={changeValue} checked={acc.type=='normal'} />일반
                            <input type="radio" name="type" value="special" onChange={changeValue} />특수
                        </td>
                    </tr>
                    <tr>
                        <th>등급</th>
                        <td>
                            <select name="grade" onChange={changeValue} disabled={acc.type=='normal'}>
                                <option value="">선택하세요</option>
                                <option value="VIP">VIP</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Normal">Normal</option>
                            </select>    
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="개설" onClick={submit} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}