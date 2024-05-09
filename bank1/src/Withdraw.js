import {useState}  from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Withdraw() {
    
    const [acc, setAcc] = useState({id:'', money:''});
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        //backend를 acc를 전송한 후 잔액 받기
        axios.post("http://localhost:8090/withdraw", acc)
            .then(res=> {
                setMessage(`출금 성공 (잔액:${res.data})`);
                setModal(true);
            })
            .catch(err=> {
                setMessage(`출금 실패 :${err.response.data}`);
                setModal(true);
            })
    }

    return(
        <>
            <div className='route'>
                <h4>출금</h4>
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={3}>계좌번호</Label>
                        <Col sm={9}>
                            <Input type="text" name="id" onChange={(e)=>setAcc({...acc, id:e.target.value})}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={3}>출금액</Label>
                        <Col sm={9}>
                        <Input type="text" name="money" onChange={(e)=>setAcc({...acc, money:e.target.value})}/>
                        </Col>
                    </FormGroup>
                    <Button onClick={submit}>출금</Button>
                </Form>
                
                <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalHeader toggle={() => setModal(!modal)}>출금확인</ModalHeader>
                    <ModalBody>
                        {message}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => setModal(!modal)}>확인</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}