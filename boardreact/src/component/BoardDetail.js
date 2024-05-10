import { Table, Input, Button, Label } from 'reactstrap';
import { useState, useEffect } from 'react';
import { url } from '../config';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const BoardDetail = () => {
    const divStyle = { margin: '0 auto', width: '600px', border: '1px solid lightgray', boarderRadius: '7px', padding: '10px' }
    const [board, setBoard] = useState({ num: '', subject: '', content: '', writer: '', likeCount:'' })
    const [imageList, setImageList] = useState([]);
    const [heart, setHeart] = useState(false);
    const {num} = useParams(); // 이름 같아야 함.. 
    let id = 'hong';

    useEffect(()=>{
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        axios.get(`${url}/boardDetail/${num}/${loginUser.id}`)
            .then(res=>{
                console.log(res);
                let resBoard = res.data.board;
                setBoard({...resBoard})
                setHeart(res.data.like)

                let fileNums = resBoard.fileNums.split(",");
                setImageList([...fileNums]);
                console.log(fileNums);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="header-text">게시판 글 상세조회</div><br />
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label>글쓴이</Label></td>
                            <td><Input type="text" disabled value={board.writer} /></td>
                        </tr>
                        <tr>
                            <td><Label>제 목</Label></td>
                            <td><Input type="text" disabled value={board.subject} /></td>
                        </tr>
                        <tr>
                            <td><Label>내 용</Label></td>
                            <td><Input type="textarea" disabled cols="40" rows="15" value={board.content} /></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                { imageList.length !== 0 &&
                                        imageList.map(num =>
                                            <img key={num} src={`${url}/image/${num}`} width="100px" alt='' style={{ marginRight: '10px' }} />
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color='primary'>수정</Button>&nbsp;&nbsp;
                                <Button color='secondary' tag='a' href="/">목록</Button>&nbsp;&nbsp;
                                <img src={heart===true? '/redheart.png':'/blackheart.png'} alt='' width='30px' /> &nbsp;&nbsp;
                                <span>{board.likeCount}</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default BoardDetail;