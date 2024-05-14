import { useState } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function AccountInfo() {

    const [accId, setAccId] = useState('');
    const [acc, setAcc] = useState({ id: '', name: '', balance: '', type: '', grade: '' });
    const [isInfo, setIsInfo] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        //서버로부터 accId로 조회해 온 결과를 화면에 출력한다.
        axios.get(`http://localhost:8090/accountInfo?id=${accId}`)
            .then(res => {
                console.log(res)
                setAcc({ ...res.data })
            })
        setIsInfo(true);
    }

    return (
        <div className='route'>
            <h4>계좌조회</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" onChange={(e) => setAccId(e.target.value)} />
                    </Col>
                </FormGroup>
                <Button onClick={submit}>계좌조회</Button>
            </Form>
            <br/>
            { isInfo && 
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={3}>계좌번호</Label>
                        <Col sm={9}>
                            <Input type="text" value={acc.id} disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={3}>이름</Label>
                        <Col sm={9}>
                            <Input type="text" value={acc.name} disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="balance" sm={3}>잔액</Label>
                        <Col sm={9}>
                            <Input type="text" value={acc.balance} disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="type" sm={3}>종류</Label>
                        <Col sm={9}>
                            <Input type="text" value={acc.type} disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="grade" sm={3}>등급</Label>
                        <Col sm={9}>
                            <Input type="text" value={acc.grade} disabled/>
                        </Col>
                    </FormGroup>
                </Form>
            }
        </div>
    )
}