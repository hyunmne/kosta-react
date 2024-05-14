import { useState } from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {} from 'reactstrap';
import {useNavigate} from 'react-router';

export const MakeAccount = () => {
    const navigate = useNavigate();
    const [acc, setAcc] = useState({ id: '', name: '', balance: '', type: 'normal', grade: '' });
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [isBefore, setIsBefore] = useState(true);
    const [isIdCheck, setIsIdCheck] = useState(false);


    const changeValue = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        setTitle('계좌개설');
        setMessage('계좌를 개설하시겠습니까?');
        setIsBefore(true);
        setModal(true);
    }

    const modalOk = (e) => {
        axios.post('http://localhost:8090/makeAccount', acc)
            .then(res => {
                setIsIdCheck(false);
                setTitle('개설확인');
                setMessage(res.data);
                setIsBefore(false);
                setModal(true);
            })
        setModal(false);
    }

    const makeOk=(e)=>{
        if(!isIdCheck){
            navigate("/accountInfo");
        }
        setModal(!Modal);
    }

    const checkId = (e) => {
        e.preventDefault();
        setIsIdCheck(true);
        axios.get(`http://localhost:8090/checkAccId?id=${acc.id}`)
            .then(res => {
                setTitle("중복 확인")
                if(res.data==true) {
                    setMessage("계좌번호가 사용 중입니다.");
                } else {
                    setMessage("사용 가능한 계좌번호 입니다.");
                }
                setIsBefore(false);
                setModal(true);
            })
            .catch(err=>{
                setTitle("중복 확인")
                setMessage(err.response.data);
                setIsBefore(false);
                setModal(true);
            })
    }

    return (
        <>
            <div className='route'>
                <h3>계좌개설</h3>
                <Form>
                    <FormGroup row>
                        <Label for="id" sm={3}>계좌번호</Label>
                        <Col sm={6}>
                            <Input type="text" name="id" id="id" onChange={changeValue} />
                        </Col>
                        <Col sm={3}>
                            <Button color="success" onClick={checkId}>중복</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={3}>이름</Label>
                        <Col sm={9}>
                            <Input type="text" name="name" id="name" onChange={changeValue} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="balance" sm={3}>입금액</Label>
                        <Col sm={9}>
                            <Input type="text" name="balance" id="balance" onChange={changeValue} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label check for="type" sm={3}>종류</Label>
                        <Col sm={9}>
                            <Input type="radio" name="type" id="type" value="normal" onChange={changeValue} checked={acc.type == 'normal'} />
                            일반&nbsp;&nbsp;&nbsp;
                            <Input type="radio" name="type" id="type" value="special" onChange={changeValue} />
                            특수
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="grade" sm={3}>등급</Label>
                        <Col sm={9}>
                            <Input type="select" name="grade" onChange={changeValue} disabled={acc.type=='normal'}>
                                <option value="">선택하세요</option>
                                <option value="vip">VIP</option>
                                <option value="gold">Gold</option>
                                <option value="silver">Silver</option>
                                <option value="normal">Normal</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <Button onClick={submit}>계좌개설</Button>
                </Form>

                <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalHeader toggle={() => setModal(!modal)}>{title}</ModalHeader>
                    <ModalBody>
                        {message}
                    </ModalBody>
                    {isBefore && <ModalFooter>
                        {/* button1이 비어있지 않을 때만 보여주도록 */}
                        <Button color="primary" onClick={modalOk}>확인</Button> 
                        <Button color="secondary" onClick={() => setModal(!modal)}>취소</Button>
                    </ModalFooter>}

                    {!isBefore && <ModalFooter>
                        <Button color="primary" onClick={makeOk}>확인</Button> 
                    </ModalFooter>}
                </Modal>
            </div>
        </>
    )
}