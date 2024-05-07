import {useState} from 'react';

export default function FPersonInfo2(){
    const[person, setPerson] = useState({name:'hong',age:20,height:173.5,weight:65});
    const changeValue = (e) => {
        setPerson({...person, [e.target.name]:e.target.value})
    }

    // onChange={(e)=>setPerson({...person,name:e.target.value})}
    // ...person이 없으면 나머지 값들이 전부 undefinded로 변경됨
    // = 기존 person 객체를 가져오고, 새로 입력된 값들만 변경해줌
    return (
        <>
        <table>
            <tr>
                <td><label>이름</label></td>
                <td><input type="text" name='name' onChange={changeValue} /><br/></td>
            </tr>
            <tr>
                <td><label>나이</label></td>
                <td><input type="text" name='age' onChange={changeValue} /> <br/></td>
            </tr>
            <tr>
                <td><label>키</label></td>
                <td><input type="text" name='height' onChange={changeValue} /> <br/></td>
            </tr>
            <tr>
                <td><label>몸무게</label></td>
                <td><input type="text" name='weight' onChange={changeValue} /> <br/></td>
            </tr>
        </table>

        <h1>{`이름:${person.name}, 나이:${person.age}, 키:${person.height}, 몸무게:${person.weight}`}</h1>
    </>
    )
}