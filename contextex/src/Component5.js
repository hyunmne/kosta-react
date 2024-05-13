import {useState} from 'react';

/* setter까지 같이 넘기면 원본 값의 데이터도 바꿀 수 있다. */
const Component5 = ({user, setUser}) => {
    // const [user2, setUser2] = useState(user);
    return(
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again`}</h2>
            <input type='text' onChange={(e)=>{setUser(e.target.value)}}  />
            
            {/* <input type='text' onChange={(e)=>{setUser2(e.target.value)}}  /> */}
        </>
    )
}

export default Component5;