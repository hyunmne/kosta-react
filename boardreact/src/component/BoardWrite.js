import axios from 'axios';
import {
    Col, Button, FormGroup, Form, Label, Table, Input,
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { useState } from 'react';

const BoardWrite = () => {
    // const formStyle = { width: "600px", textAlign: "center", margin: "0 auto" };
    const [board, setBoard] = useState({writer: '', subject: '', content: '', file: '' });

    const submit = (e) => {
        e.preventDefault();
        //서버로부터 accId로 조회해 온 결과를 화면에 출력한다.
        axios.post(`http://localhost:8090/boardWrite?`)
            .then(res => {
                console.log(res)
                // setAcc({ ...res.data })
                setBoard({...res.data})
            })
    }

    return (
        <div>
            <h5 className="header-text">게시판 글 등록</h5>
            <Form>
                <FormGroup row>
                    <Label sm={4}>글쓴이</Label>
                    <Col sm={8}>
                        <Input type="text" id="writer" name="writer" />                        
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>제 목</Label>
                    <Col sm={8}>
                        <Input type="text" id="subject" name="subject" />                        
                    </Col>
                </FormGroup>
                <FormGroup row >
                    <Label sm={4}>내 용</Label>
                    <Col sm={8}>
                        <Input type="textarea" id="content" name="content" style={{height:'400px'}} />                        
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={4}>이미지 파일 첨부</Label>
                    <Col sm={8}>
                        <img src='plus.png' style={{height:'100px', justifyItems:'left', display:'flex'}}></img>                        
                    </Col>
                </FormGroup>
                <Button color='primary' onClick={submit} >등록</Button>
                <Button>다시쓰기</Button>
            </Form>
        </div>
    )
}

export default BoardWrite;