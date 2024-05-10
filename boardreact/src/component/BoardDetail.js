import { Table, Input, Button, Label } from 'reactstrap';
import { useState } from 'react';
import { url } from '../config';

const BoardDetail = () => {
    const divStyle = { margin: '0 auto', width: '600px', border: '1px solid lightgray', boarderRadius: '7px', padding: '10px' }
    const [board, setBoard] = useState({ num: '', subject: '', content: '', writer: '' })
    const [imageList, setImageList] = useState([]);
    const [heart, setHeart] = useState(false);

    return (
        <>
            <div className="header-text">게시판 글 등록</div><br />
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
                            <td></td>
                            <td>
                                { imageList.length !== 0 &&
                                        imageList.map(num =>
                                            <img key={num} src={`${url}/image/${num}`} width = "100px" alt = '' style = {{ marginRight: '10px' }} />
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color='primary'>수정</Button>&nbsp;&nbsp;
                                <Button color='secondary' tag='a' href="/">목록</Button>&nbsp;&nbsp;
                                <img src={heart? '/redheart.png':'/blackheart.png'} alt='' width='30px' /> &nbsp;&nbsp;
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