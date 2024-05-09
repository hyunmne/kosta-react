import {
    Col, Button, FormGroup, Table, Input,
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BoardList = () => {
    const formStyle = { width: "600px", textAlign: "center", margin: "0 auto" };
    const [pageBtn, setPageBtn] = useState([1, 2, 3, 4, 5]);
    const [boardList, setBoardList] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [word, setWord] = useState('');
    const [type, setType] = useState('');


    useEffect(() => {
        submit(1);
    }, [])

    const submit = (page) => {
        const url = `http://localhost:8090/boardList?page=${page}&type=${type}&word=${word}`;
        // console.log(url);
        axios.get(url)
            .then(res => {
                setBoardList([...res.data.boardList])
                setPageInfo({ ...res.data.pageInfo.curPage })
                let page = [];
                for (let i = res.data.pageInfo.startPage; i <= res.data.pageInfo.endPage; i++) {
                    page.push(i);
                }
                // setCurPage(res.data.pageInfo.curPage);
                setPageBtn([...page]);
            })
    }

    const deleteBoard = (num) => {
        const url = `http://localhost:8090/deleteBoard?num=${num}`;
        axios.get(url)
            .then(res=>{
                let modBoardList  = boardList.filter(board=>board.num!==num);
                setBoardList([...modBoardList]);
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <div>
            <h5 className="header-text">게시글 목록</h5><br />
            <FormGroup row style={formStyle}>
                <Col sm={3}>
                    <Input type="select" name="type" onChange={(e) => setType(e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="subject">제목</option>
                        <option value="writer">작성자</option>
                        <option value="content">내용</option>
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input type='text' name='keyword' onChange={(e) => setWord(e.target.value)} />
                </Col>
                <Col sm={3}>
                    <Button onClick={() => submit(1)}>검색</Button>
                </Col>
                <Col sm={3}>
                    <Button tag="a" href="/writeform" color='success'>글쓰기</Button>
                </Col>
            </FormGroup>
            <Table bordered style={{ margin: "0 auto", width: "900px", textAlign: 'center' }}>
                <thead>
                    <tr key="0">
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>날짜</td>
                        <td>조회수</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(board => (
                        <tr key={board.num}>
                            <td>{board.num}</td>
                            <td>{board.subject}</td>
                            <td>{board.writer}</td>
                            <td>{board.writeDate}</td>
                            <td>{board.viewCount}</td>
                            <td><Button onClick={()=>deleteBoard(board.num)}>삭제</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination style={{ margin: "10px auto", width: "900px", justifyContent: 'center' }}>
                <PaginationItem disabled={pageInfo.curPage === 1 ? true : false}>
                    <PaginationLink previous onClick={() => submit(pageInfo.curPage - 1)} />
                </PaginationItem>
                {pageBtn.map((page) => (<PaginationItem key={page} className={page === pageInfo.curPage ? 'active' : ''}>
                                            <PaginationLink onClick={() => submit(page)} >{page}</PaginationLink>
                                        </PaginationItem>))}
                <PaginationItem disabled={pageInfo.curPage === pageInfo.endPage ? true : false}>
                    <PaginationLink next onClick={() => submit(pageInfo.curPage + 1)} />
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default BoardList;