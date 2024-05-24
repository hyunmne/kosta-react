import { Table, Input, Button, Label } from 'reactstrap';
import {useState, useEffect } from 'react';
import axios from 'axios';

const Join = () =>  {
    const divStyle = { margin: '0 auto', width: '400px', border: '1px solid lightgray', boarderRadius: '7px', padding: '20px' }
    const [member, setMember] = useState({id:'', password:'', email:'', address:''})
    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value})
    }

    useEffect(() =>{
        e.preventDefault();
        axios.get(`http://localhost:8090/user`)
            .then(res=>{
                setMember({...res, data});
            })
            .catch(err=>{
                console.log(err);
            })
    })

    return (
        <>
            <div className="header-text">회원가입</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" disabled onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td><Label for="name">이름</Label></td>
                            <td><Input type="text" name="name" id="name" disabled onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="password" name="password" disabled id="password" onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td><Label for="email">이메일</Label></td>
                            <td><Input type="text" name="email" id="email" disabled onChange={changeValue} /></td>
                        </tr>
                        <tr>
                            <td><Label for="address">주소</Label></td>
                            <td><Input type="text" name="address" id="address" disabled onChange={changeValue} /></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    )
}

export default Join;