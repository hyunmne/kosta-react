import { useState } from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const SearchUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const submit = (e) => {
        axios.get(`http://localhost:8090/getUser1/${name}`)
            .then(res=>{
                console.log(res.data);
                dispatch({type:'USER', payload:res.data})
                navigate("/userInfo")
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(
        <div>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>
                            <input type="text" onInput={(e)=>setName(e.target.value)} />
                            <button onClick={submit}>검색</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SearchUser;