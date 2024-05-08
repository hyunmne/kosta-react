import { useState } from 'react';
import './App.css';
import axios from 'axios';
import {
    Button, Form, FormGroup, Label, Input,
    Col, Select, Option
} from 'reactstrap';


export const MakeAccount = () => {

    const [acc, setAcc] = useState({ id: '', name: '', balance: '', type: 'normal', grade: '' })
    const changeValue = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value })
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8090/makeAccount`, acc)
            .then(res => {
                alert(res.data)
            })
    }

    return (
        <div className="route">
            <h3>계좌 개설</h3>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type="text" name="balance" id="balance" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type="radio" name="type" id="type" value="normal" onChange={changeValue} checked={acc.type == 'normal'} />일반
                        <Input type="radio" name="type" id="type" value="special" onChange={changeValue} />특수
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="id" sm={3}>등급</Label>
                    <Col sm={9}>
                    <Input type="select" name="select" id="grade">
                        <option value="vip">VIP</option>
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="noraml">Normal</option>
                    </Input>
                    </Col>
                </FormGroup>
                <Button onClick={submit}>개설</Button>
            </Form>

        </div>
    )
}