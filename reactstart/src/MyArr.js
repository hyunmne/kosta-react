import { useState } from "react";

const MyArr = ({ param, setParam }) => {
    const [data, setData] = useState();
    const addData = () => {
        setParam([...param, data])
    }
    const delData = (n) => {
        let tarr = [...param];
        let idx = tarr.indexOf(n);
        tarr.splice(idx, 1);
        setParam([...tarr]);
    }
    const changeArr = (e, n) => {
        let value = e.target.parentElement.children[0].value; //<td> : parent 중에 0번째(1번째) 요소의 값 = <input/>
        let tarr = [...param];
        let idx = tarr.indexOf(n);
        tarr.splice(idx, 1, value);
        setParam([...tarr])
    }
    return (
        <div>
            <table border="1">
                <tbody>
                    {
                        param.map((item, index) =>
                            <tr key={index}>
                                <td>{item}</td>
                                <td><button onClick={() => delData(item)}>삭제</button></td>
                                <td>
                                    <input type="text"/>
                                    <button onClick={(e)=>changeArr(e,item)}>변경</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <input type="text" onChange={(e) => setData(e.target.value)} />
            <button onClick={addData}>추가</button>
        </div>
    )
}

export default MyArr;