import { Table, Input, Button, Label } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import {useSetAtom} from 'jotai';
import {tokenAtom} from './atoms';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const divStyle = { margin: '0 auto', width: '400px', border: '1px solid lightgray', boarderRadius: '7px', padding: '20px' }
    const [member, setMember] = useState({username: '', password: '' })
    const setToken = useSetAtom(tokenAtom)
    const navigate = useNavigate();
    const changeValue = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("username", member.username);
        formData.append("password", member.password);

        axios.post(`http://localhost:8090/login`, formData)
            .then(res => {
                console.log(res);
                console.log(res.headers.authorization);
                setToken(JSON.parse(res.headers.authorization))
                navigate("/user");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="header-text">로그인</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="username">아이디</Label></td>
                            <td><Input type="text" name="username" id="username" onChange={changeValue} /></td>
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

export default Login;