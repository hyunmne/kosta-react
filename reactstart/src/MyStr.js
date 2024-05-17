import { useState } from "react";

function MyStr({param, setParam}) {
    const [data, setData] = useState();
    const change = (e) => {
        setData(e.target.value)
    }

    return (
        <div>
        <h1>{param}</h1>
        <input type="text" onChange={change} />
        <button onClick={()=>setParam(data)} >변경</button>
        </div>
    )
}

export default MyStr;