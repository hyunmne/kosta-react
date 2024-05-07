import { useState } from "react";


function StateFunc(props) {
    const [str, setStr] = useState(props.str);
    const [num, setNum] = useState(100);

    const numChange=()=> {
        setNum(200)
    }

    const strChange=()=>{
        setStr('React');
    }

    return (
        <>
            <div>
                {str}:{num}
            </div>
            <button onClick={()=>setNum(200)}>200</button>
            <button onClick={()=>setStr("React")}>React</button>
        </>
    )
}

export default StateFunc;