import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './App.css';
import axios from 'axios';

export default function Join() {

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');
    const [mem, setMem] = useState({ id: '', name: '', password: '', address: '', email: '' });
    const changeValue = (e) => {
        setMem({ ...mem, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/join`, mem)
            .then(res => {
                navigate("/login");
            })
        // .catch(err=>{
        //     alert(err.response.data);
        // })
    }

    const checkMemId = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8090/checkMemId?id=${mem.id}`)
            .then(res => {
                if (res.data == true) {
                    setMessage("중복되는 아이디입니다.")
                } else {
                    setMessage("사용가능한 아이디입니다.")
                }
                setModal(true);
            })
            .catch(err => {
                setMessage(err.response.data);
                setModal(true);
            })
    }

    return (
        <div className="route">
            <h3>회원가입</h3>
            <Form>
                <FormGroup row>
                    <Label sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" id="id" onChange={changeValue}></Input>
                    </Col>
                    <Col sm={3}>
                        <Button onClick={checkMemId} >중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>이름</Label>
                    <Col>
                        <Input type="text" name="name" id="name" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>비밀번호</Label>
                    <Col>
                        <Input type="text" name="password" id="password" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>이메일</Label>
                    <Col>
                        <Input type="text" name="email" id="email" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={3}>주소</Label>
                    <Col>
                        <Input type="text" name="address" id="address" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <Button onClick={submit}>회원가입</Button>
            </Form>
        </div>
    )
}