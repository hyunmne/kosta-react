import {useState} from 'react';

export default function FPersionInfo() {
    // 변수 영역
    // 데이터를 변경할 때도 set~~ 함수를 통해서 바꿀 수 있음.
    const [name, setName] = useState("hong");
    const [age, setAge] = useState(20);
    const [height, setHeight] = useState(173.5);
    const [weight, setWeight] = useState(65);

    return (
        <>
            <table>
                <tr>
                    <td><label>이름</label></td>
                    <td><input type="text" name='name' onChange={(e) => setName(e.target.value)}/><br/></td>
                </tr>
                <tr>
                    <td><label>나이</label></td>
                    <td>
                    <input type="text" name='age' onChange={(e)=>setAge(e.target.value)} /> <br/>
                    </td>
                </tr>
                <tr>
                    <td><label>키</label></td>
                    <td><input type="text" name='height' onChange={(e)=>setHeight(e.target.value)}/> <br/></td>
                </tr>
                <tr>
                    <td><label>몸무게</label></td>
                    <td><input type="text" name='weight' onChange={(e)=>setWeight(e.target.value)}/> <br/></td>
                </tr>
            </table>

            <h1>{`이름:${name}, 나이:${age}, 키:${height}, 몸무게:${weight}`}</h1>
        </>
    )
}