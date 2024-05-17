import { useState } from "react";

const MyObj = ({param,setParam}) => {

    const [datas,setDatas] = useState({num:'', data:''});
    const changeData = (e) => {
        setDatas({...datas, [e.target.name]:e.target.value});
    }

    return (
        <>
            <h1>{param.num}&nbsp;<input type='text' name='num' onChange={changeData}/>
                <button onClick={(e)=>setParam({...param,num:datas.num})}>변경</button>
            </h1>
            <h1>{param.data}&nbsp;<input type='text' name='data' onChange={changeData} />
                <button onClick={(e)=>setParam({...param,data:datas.data})}>변경</button></h1>
        </>
    )
}

export default MyObj;