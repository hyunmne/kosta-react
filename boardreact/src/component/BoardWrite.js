import axios from 'axios';
import { Input, Button, Label, Col, Form, FormGroup } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {url} from '../config';

const BoardWrite = () => {
    const [board, setBoard] = useState({ subject: '', content: '', writer: '' });
    const [fileList, setFileList] = useState([]);
    const navigate = useNavigate();

    const fileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileList([...fileList, e.target.files[0]]);
        }
    };

    useEffect(()=> {
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        loginUser && setBoard({...board, writer:loginUser.id});
    }, [])

    const changeValue = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        const formData = new FormData();
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", board.writer);
        for (let file of fileList){
            formData.append("file", file);
        }
        axios.post(`${url}/boardWrite`, formData)
            .then(res=>{
                console.log(res.data);
                navigate("/");
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <>
            <div className="header-text">게시판 글 등록</div>
            <Form>
                <FormGroup row>
                    <Label sm={4}>글쓴이</Label>
                    <Col sm={8}>
                        <Input type="text" id="writer" name="writer" value={board.writer} disabled onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>제 목</Label>
                    <Col sm={8}>
                        <Input type="text" id="subject" name="subject" onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label sm={4}>내 용</Label>
                    <Col sm={8}>
                        <Input type="textarea" id="content" name="content" onChange={changeValue} style={{ height: '400px' }} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>이미지 파일 첨부</Label>
                    <Col sm={8}>
                        <img src='plus.png' style={{ height: '100px', justifyItems: 'left', display: 'flex' }} alt='' onClick={() => document.getElementById('file').click()}></img>
                        <Input type="file" id="file" accept="image/*" hidden onChange={fileChange} />
                        {
                            fileList.map((file, index) =>
                                <span key={index}>
                                    <img src={URL.createObjectURL(file)} width="100px" alt='' style={{ marginRight: '10px' }} />
                                    {(index + 1) % 3 == 0 ? <><br /><br /></> : ''}
                                </span>
                            )
                        }
                    </Col>
                </FormGroup>
                <div style={{ textAlign: 'center' }}>
                    <Button color='primary' onClick={submit} >등록</Button>&nbsp;&nbsp;
                    <Button>다시쓰기</Button>
                </div>
            </Form>
        </>
    )
}

export default BoardWrite;