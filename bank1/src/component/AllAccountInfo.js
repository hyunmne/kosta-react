import {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';
import { Table } from 'reactstrap';

export default function AllAccountInfo() {
    
    const [accs, setAccs] = useState([]);
    
    // 실행하자마자 실행 .. ? 
    useEffect(()=>{
        axios.get('http://localhost:8090/allAccountInfo')
            .then(res=>{
                setAccs([...res.data])
            })
    //    let raccs = [{id:'1001',name:'홍길동',balance:100000,type:'normal',grade:''},
    //                 {id:'1002',name:'김길동',balance:200000,type:'special',grade:'VIP'},
    //                 {id:'1003',name:'고길동',balance:300000,type:'special',grade:'Sliver'},
    //                 {id:'1004',name:'하길동',balance:400000,type:'special',grade:'Gold'},
    //                 {id:'1005',name:'장길동',balance:500000,type:'normal',grade:''}
    //    ]
    }, [])

    return (
        <div className='route'>
            <h4>전체계좌조회</h4>
            <Table border="1" hover style={{width:'800px', margin: '0 auto'}}>
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </tr>
                    {accs.map(acc=>(
                        <tr key={acc.id}>
                            <td>{acc.id}</td>
                            <td>{acc.name}</td>
                            <td>{acc.balance}</td>
                            <td>{acc.type}</td>
                            <td>{acc.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

    // for 문? 반복문? > map으로... 
}