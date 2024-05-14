import { useState } from 'react';
import { useAtom } from 'jotai/react';
import { userAtom } from '../atoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Table, Label, Input } from 'reactstrap';

export default function Login() {
    const divStyle = { margin: '0 auto', width: '400px', border: '1px solid lightgray', boarderRadius: '7px', padding: '20px' }
    const navigate = useNavigate();
    const [user, setUser] = useAtom(userAtom); // 조회 데이터, 변경 데이터
    const [mem, setMem] = useState({ id: '', password: '' })

    const changeValue = (e) => {
        setMem({ ...mem, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/login`, mem)
            .then(res => {
                setUser(res.data);
                navigate("/makeAccount");
            })
            .catch(err => {
                alert(err.repsonse.data);
            })
    }

    return (
        <>
            <div className="header-text"><h3>로그인</h3></div>
            <div style={divStyle}>

                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="password" name="password" id="password" onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button style={{ width: '100%' }} color="primary" onClick={submit}>로그인</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>


    )
} 