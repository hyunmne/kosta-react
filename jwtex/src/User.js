import { Table, Input, Button, Label } from 'reactstrap';
import {useState, useEffect } from 'react';
import { tokenAtom } from './atoms';
import { useAtomValue } from 'jotai';
import axios from 'axios';

const User = () =>  {
    const divStyle = { margin: '0 auto', width: '400px', border: '1px solid lightgray', boarderRadius: '7px', padding: '20px' }
    const [member, setMember] = useState({id:'', password:'', email:'', address:''})
    const token = useAtomValue(tokenAtom);

    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value})
    }

    useEffect(() =>{
        axios.get(`http://localhost:8090/user`,
            {
                headers:{Authorization:token.access_token}
            }
        )
            .then(res=>{
                console.log(res);
                setMember({...res.data});
            })
            .catch(err=>{
                console.log(err);
            })
    },[]);

    return (
        <>
            <div className="header-text">회원정보</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" disabled value={member.id} /></td>
                        </tr>
                        <tr>
                            <td><Label for="name">이름</Label></td>
                            <td><Input type="text" name="name" id="name" disabled value={member.username} /></td>
                        </tr>
                        <tr>
                            <td><Label for="email">이메일</Label></td>
                            <td><Input type="text" name="email" id="email" disabled value={member.email} /></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    )
}

export default User;