import { useState } from "react";

function MyNubmer({param,setParam}){
    const [data,setData] = useState();
    const change = (e) => {
        setData(e.target.value);
    }

    return(
        <>
            <h1>{param}</h1>
            <input type='text' onChange={change} />
            <button onClick={()=>setParam(data)}>변경</button>
        </>
    )
}

export default MyNubmer;