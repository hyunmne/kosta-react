import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const Join = () => {
    const navigate = useNavigate();

    const [mem, setMem] = useState({id:'', name:'', password:'', address:'', detailAddress:'', email:''});
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [modal, setModal] = useState(false);

    const changeValue = (e) => {
        setMem({...mem, [e.target.name]:e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8090/join', mem)
            .then(res => {
                navigate("/login");
            })
            .catch(err=> {
                alert(err.response.data);
            })
    }

    const makeOk = (e) => {
        setModal(!modal);
    }

    const checkId = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8090/checkMemId?id=${mem.id}`)
            .then(res=> {
                if(res.data == true) {
                    setMessage("사용중인 아이디입니다");
                } else {
                    setMessage("사용 가능한 아이디입니다");
                }
                setModal(true);
            })
            .catch(err=> {
                setTitle("중복 확인");
                setMessage(err.response.data);
                setModal(true);
            })
    }

    return(
        <div className='route'>
            <h4>회원가입</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" id="id" onChange={changeValue} />
                    </Col>
                    <Col sm={3}>
                        <Button color='success' onClick={checkId}>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" id="password" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="address" sm={3}>주소</Label>
                    <Col sm={9}>
                        <Input type="text" name="address" id="address" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="detailAddress" sm={3}>상세주소</Label>
                    <Col sm={9}>
                        <Input type="text" name="detailAddress" id="detailAddress" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={3}>이메일</Label>
                    <Col sm={9}>
                        <Input type="text" name="email" id="email" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <Button onClick={submit}>회원가입</Button>
            </Form>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalHeader toggle={() => setModal(!modal)}>{title}</ModalHeader>
                    <ModalBody>
                        {message}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={makeOk}>확인</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )
}